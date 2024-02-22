const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required'],
      maxlength: [16, 'firstName should not exceed 16 characters']
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required'],
      maxlength: [16, 'firstName should not exceed 16 characters']
    },
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: true
    },
    avatar: String,
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false
    },
    bio: {
      type: String,
      maxlength: 120,
      default: ''
    },
    socialProfiles: {
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' },
      facebook: { type: String, default: '' },
      producthunt: { type: String, default: '' }
    },
    deleteAccountToken: String,
    deleteAccountExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: { type: Date, default: Date.now }
  },
  { toJSON: { virtuals: true } }
);

// Hash password using bcrypt before saving
User.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign And Return JWT
User.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Match user entered password to hashed password in database
User.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
User.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expire for 10 mins
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Generate and hash delete token
User.methods.getDeleteAccountToken = function () {
  // Generate token
  const deleteToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to deleteAccountToken field
  this.deleteAccountToken = crypto
    .createHash('sha256')
    .update(deleteToken)
    .digest('hex');

  // Set expire for 10 mins
  this.deleteAccountExpire = Date.now() + 10 * 60 * 1000;

  return deleteToken;
};

// Delete user data if user account Is Deleted
User.pre('remove', async function (next) {
  await this.model('Poll').deleteMany({ user: this._id });
  await this.model('Comment').deleteMany({ user: this._id });
  next();
});

User.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

User.virtual('publicPollsCreated', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
  count: true,
  match: { visibility: 'public' }
});

module.exports = mongoose.model('User', User);
