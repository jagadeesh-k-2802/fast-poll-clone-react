const formidable = require('formidable');
const { promises: fs } = require('fs');
const path = require('path');
const crypto = require('crypto');
const User = require('../models/User');
const Email = require('../utils/email');
const catchAsync = require('../utils/catchAsync');
const ErrorResponse = require('../utils/errorResponse');
const { isAuthenticated } = require('../middlewares/auth');
const { bytesToMB } = require('../utils/functions');

/**
 * @route POST /api/auth/login
 * @desc let the user login
 * @secure false
 */
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  // User Not Found In DB
  if (!user) {
    return next(new ErrorResponse('Invalid Email Or Password', 401));
  }

  const isPasswordMatched = await user.matchPassword(password);

  // Wrong Password
  if (!isPasswordMatched) {
    return next(new ErrorResponse('Invalid Email Or Password', 401));
  }

  sendTokenResponse(user, 200, res);
});

/**
 * @route POST /api/auth/signup
 * @desc let the user signup
 * @secure false
 */
exports.signup = catchAsync(async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  const avatar = `default-avatar.jpg`;

  const user = await User.create({
    firstName,
    lastName,
    username,
    avatar,
    email,
    password
  });

  const url = `${process.env.FRONTEND_URL}/dashboard`;
  await new Email(user, url).sendWelcome();
  sendTokenResponse(user, 200, res);
});

/**
 * @route POST /api/auth/forgot-password
 * @desc Sends a mail with reset token to the given email address
 * @secure false
 */
exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return next(
      new ErrorResponse('No User found with that email address', 404)
    );
  }

  const token = user.getResetPasswordToken();
  const url = `${process.env.FRONTEND_URL}/password-reset/${token}`;

  try {
    await new Email(user, url).sendPasswordReset();
    res.status(200).json({ success: true, msg: 'Password reset request sent' });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next(new ErrorResponse('Could not send email', 500));
  }

  await user.save();
});

/**
 * @route POST /api/auth/reset-password/:token
 * @desc Resets a user's password when requested with right reset token
 * @secure false
 */
exports.resetPassword = catchAsync(async (req, res, next) => {
  const { token } = req.params;
  const { password } = req.body;

  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  // Find The Hashed version
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  // Token expired or invalid token
  if (!user) {
    return next(
      new ErrorResponse('Invalid token maybe your time expired', 404)
    );
  }

  // Update user with new password
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.status(200).json({ success: true });
});

/**
 * @route PATCH /api/auth/update-details
 * @desc Updates user's details
 * @secure true
 */
exports.updateDetails = catchAsync(async (req, res, next) => {
  const { firstName, lastName, username, bio, socialProfiles } = req.body;
  const { facebook, twitter, instagram, producthunt } = socialProfiles;
  const user = req.user;

  const fieldsToUpdate = {
    firstName,
    lastName,
    username,
    bio,
    socialProfiles: {
      facebook,
      twitter,
      instagram,
      producthunt
    }
  };

  await User.findByIdAndUpdate(user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true });
});

/**
 * @route PATCH /api/auth/update-password
 * @desc Updates user's password
 * @secure true
 */
exports.updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user.id).select('+password');

  // Check current password
  if (!(await user.matchPassword(currentPassword))) {
    return next(new ErrorResponse('Password is incorrect', 401));
  }

  user.password = newPassword;
  await user.save();
  sendTokenResponse(user, 200, res);
});

/**
 * @route PATCH /api/auth/update-avatar
 * @desc Updates user's avatar
 * @secure true
 */
exports.updateAvatar = catchAsync(async (req, res, next) => {
  const form = formidable();
  const user = req.user;
  const filename = `${user.username}.jpg`;

  // Move The File From Temp To Avatar Dir
  const moveFromTemp = async file => {
    try {
      const dest = path.join(__dirname, '../public/avatar', filename);
      await fs.rename(file.avatar.path, dest);
    } catch (err) {
      next(err);
    }
  };

  // Parse form
  form.parse(req, async (err, fields, file) => {
    const size = bytesToMB(file.avatar.size);

    if (size > 3) {
      return next(
        new ErrorResponse('File size cannot be greater than 3 MB', 401)
      );
    }

    if (err) {
      return next(err);
    }

    moveFromTemp(file);

    const fieldsToUpdate = { avatar: filename };

    // Update user in DB
    await User.findByIdAndUpdate(user.id, fieldsToUpdate, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true });
  });
});

/**
 * @route GET /api/auth/request-delete
 * @desc Sends a mail requesting to Delete a user's account
 * @secure true
 */
exports.requestDelete = catchAsync(async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  if (!user) {
    return next(
      new ErrorResponse('No User found with that email address', 404)
    );
  }

  const token = user.getDeleteAccountToken();
  const url = `${process.env.FRONTEND_URL}/delete-account/${token}`;

  try {
    await new Email(user, url).sendDeleteRequest();
    res.status(200).json({ success: true, msg: 'Email Sent' });
  } catch (err) {
    user.deletePasswordToken = undefined;
    user.deletePasswordExpire = undefined;
    await user.save();
    return next(new ErrorResponse('Could not send email', 500));
  }

  await user.save();
});

/**
 * @route DELETE /api/auth/delete-account/:token
 * @desc Deletes a user and their data permanently from database
 * @secure true
 */
exports.deleteAccount = catchAsync(async (req, res, next) => {
  const { token } = req.params;
  const loggedInUser = req.user;

  const deleteAccountToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  // Find The Hashed version
  const user = await User.findOne({
    deleteAccountToken,
    deleteAccountExpire: { $gt: Date.now() }
  });

  // Token expired or invalid token
  if (!user) {
    return next(
      new ErrorResponse('Invalid token maybe your time expired', 404)
    );
  }

  // Check if it is the right user
  if (loggedInUser.id !== user.id) {
    return next(new ErrorResponse('You are unauthorized', 401));
  }

  // Delete user
  await user.remove();

  const options = {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  };

  res.status(200).cookie('token', 'none', options).json({ success: true });
});

/**
 * @route GET /api/auth/logout
 * @desc Returns the current user
 * @secure false
 */
exports.getCurrentUser = catchAsync(async (req, res, next) => {
  await isAuthenticated(req); // Injects req.user
  res.status(200).json({ success: true, user: req.user });
});

/**
 * @route GET /api/auth/logout
 * @desc let the user logout by clearing cookie
 * @secure true
 */
exports.logout = catchAsync(async (req, res, next) => {
  const options = {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  };

  res.status(200).cookie('token', 'none', options).json({ success: true });
});

// Creates a JWT Token and returns it in a cookie
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  // Remove password before sending
  user.password = undefined;

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    user,
    token
  });
};
