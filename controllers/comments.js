const Poll = require('../models/Poll');
const Comment = require('../models/Comment');
const ErrorResponse = require('../utils/errorResponse');
const catchAsync = require('../utils/catchAsync');
const advancedResults = require('../utils/advancedResults');

/**
 * @route GET /api/comments/poll/:id
 * @desc Fetch all comments that belongs to a poll
 * @secure false
 */
exports.getCommentsFromPoll = catchAsync(async (req, res, next) => {
  const { id: pollId } = req.params;
  const filter = { parentId: undefined, poll: pollId };
  const total = await Comment.find({ poll: pollId }).countDocuments();

  const selectUser = ['avatar', 'firstName', 'lastName', 'username', 'user'];

  const result = await advancedResults({
    req,
    model: Comment,
    filter,
    populate: [
      {
        path: 'user',
        select: selectUser
      },
      {
        path: 'replies',
        options: { sort: { createdAt: -1 } },
        populate: { path: 'user', select: selectUser }
      }
    ]
  });

  res.status(200).json({
    success: true,
    comments: result.results,
    pagination: result.pagination,
    total: total ?? 0
  });
});

/**
 * @route POST /api/comments
 * @desc Let the user comment on a poll and reply to another comment
 * @secure true
 */
exports.addComment = catchAsync(async (req, res, next) => {
  const { pollId, message, parentId } = req.body;
  const user = req.user;

  if (parentId) {
    const parentComment = await Comment.findOne({ _id: parentId });

    if (!parentComment) {
      return next(
        new ErrorResponse('The comment you are replying to does not exist', 404)
      );
    }

    if (parentComment.parentId) {
      return next(
        new ErrorResponse('You cannot reply to a replied comment', 400)
      );
    }

    if (parentComment.poll !== pollId) {
      return next(
        new ErrorResponse('You cannot reply to a comment on another poll', 400)
      );
    }
  }

  const poll = await Poll.findOne({ _id: pollId });

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  if (!poll.options.addComments) {
    return next(new ErrorResponse('You cannot add comments to this poll', 400));
  }

  const comment = await Comment.create({
    parentId,
    message,
    poll,
    user
  });

  // Remove sensitive user info
  comment.user.email = undefined;
  comment.user.deleteAccountExpire = undefined;
  comment.user.deleteAccountToken = undefined;
  comment.user.resetPasswordToken = undefined;
  comment.user.resetPasswordExpire = undefined;

  res.status(200).json({ success: true, comment });
});

/**
 * @route POST /api/comments/report
 * @desc Reports a comment
 * @secure false
 */
exports.reportComment = catchAsync(async (req, res, next) => {
  const { commentId } = req.body;

  if (!commentId) {
    return next(new ErrorResponse('commentId is required', 400));
  }

  const comment = await Comment.findOne({ _id: commentId });

  if (!comment) {
    return next(new ErrorResponse('Comment not found', 404));
  }

  // Right now reports are not saved anywhere
  res.status(200).json({ success: true });
});
