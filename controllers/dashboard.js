const Poll = require('../models/Poll');
const Vote = require('../models/Vote');
const Comment = require('../models/Comment');
const catchAsync = require('../utils/catchAsync');

/**
 * @route POST /api/dashboard
 * @desc Fetch dashboard data
 * @secure true
 */
exports.fetchDashboardData = catchAsync(async (req, res, next) => {
  const user = req.user;
  const pollCount = await Poll.find({ user }).countDocuments();
  const voteCount = await Vote.find({ user }).countDocuments();
  const commentCount = await Comment.find({ user }).countDocuments();
  res.status(200).json({ success: true, pollCount, voteCount, commentCount });
});
