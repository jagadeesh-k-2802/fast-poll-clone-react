const User = require('../models/User');
const Poll = require('../models/Poll');
const catchAsync = require('../utils/catchAsync');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @route GET /api/profile/:username
 * @desc Returns a user profile
 * @secure false
 */
exports.fetchProfile = catchAsync(async (req, res, next) => {
  const { username } = req.params;

  const select = [
    '-createdAt',
    '-deleteAccountExpire',
    '-deleteAccountToken',
    '-email',
    '-resetPasswordToken',
    '-resetPasswordExpire'
  ];

  const profile = await User.findOne({ username })
    .populate('publicPollsCreated')
    .select(select);

  if (!profile) {
    return next(new ErrorResponse('Profile Not Found'), 404);
  }

  res.status(200).json({ success: true, profile });
});
