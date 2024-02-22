const Poll = require('../models/Poll');
const Vote = require('../models/Vote');
const ErrorResponse = require('../utils/errorResponse');
const catchAsync = require('../utils/catchAsync');
const { isAuthenticated } = require('../middlewares/auth');
const advancedResults = require('../utils/advancedResults');
const verifyCaptcha = require('../utils/verifyCaptcha');
const socketManager = require('../lib/socket');

/**
 * @route GET /api/votes/
 * @desc Fetch all polls voted by the current user
 * @secure true
 */
exports.getVotedPollsByMe = catchAsync(async (req, res, next) => {
  const filter = { user: req.user };

  const result = await advancedResults({
    req,
    model: Vote,
    filter,
    select: '-choices -options -user -voting',
    populate: { path: 'poll', populate: { path: 'voteCount' } }
  });

  res.status(200).json({
    success: true,
    votes: result.results,
    pagination: result.pagination
  });
});

/**
 * @route GET /api/votes/poll/:id
 * @desc Fetch a poll with all votes info
 * @secure false
 */
exports.getPollWithVotes = catchAsync(async (req, res, next) => {
  const { id: _id } = req.params;
  await isAuthenticated(req); // Injects user
  const user = req.user;

  const selectUser = [
    'avatar',
    'firstName',
    'lastName',
    'username',
    'visibility',
    'voting',
    'socialProfiles'
  ];

  const poll = await Poll.findOne({ _id }).populate({
    path: 'user',
    select: selectUser
  });

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  const choiceIndex = user
    ? (await Vote.findOne({ user, poll }))?.choiceIndex
    : parseInt(req.cookies[`poll_vote_${poll._id}`], 10);

  const voteByCurrentUser = poll.choices[choiceIndex];

  let votes = await Vote.aggregate([
    { $match: { poll: poll._id } },
    { $group: { _id: '$choice', count: { $sum: 1 } } }
  ]);

  // Fills missing choices with 0
  votes = poll.choices.map(choice => ({
    _id: choice._id,
    name: choice.name,
    color: choice.color,
    voteCount: votes.find(vote => vote._id === choice.name)?.count ?? 0
  }));

  votes = votes.sort((a, b) => b.voteCount - a.voteCount);
  const voteCount = votes.reduce((acc, obj) => obj.voteCount + acc, 0);

  res
    .status(200)
    .json({ success: true, poll, votes, voteCount, voteByCurrentUser });
});

/**
 * @route POST /api/votes/
 * @desc Let the user a make a vote to a poll
 * @secure false
 */
exports.makeVote = catchAsync(async (req, res, next) => {
  await isAuthenticated(req); // Injects req.user
  const user = req.user;
  const { pollId, choiceIndex, captchaValue } = req.body;

  const poll = await Poll.findOne({ _id: pollId });

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  const choice = poll.choices[choiceIndex];

  if (!choice) {
    return next(new ErrorResponse('Choice is required', 404));
  }

  const previousVote = user
    ? await Vote.findOne({ user, poll })
    : req.cookies[`poll_vote_${poll._id}`];

  if (previousVote) {
    return next(new ErrorResponse('You already voted for this poll', 400));
  }

  // Check if login is required
  if (poll.options.loginToVote && req.user === undefined) {
    return next(
      new ErrorResponse(
        'You need to be signed in before voting for this poll',
        401
      )
    );
  }

  // Check captcha for captcha enabled poll
  if (poll.options.enableCaptcha) {
    const captchaRes = await verifyCaptcha(captchaValue);

    if (!captchaRes.success) {
      return next(new ErrorResponse('Invalid captcha', 400));
    }
  }

  const vote = await Vote.create({
    choice: choice.name, // Choice name can't be changed if poll has votes...
    choiceIndex,
    user,
    poll
  });

  // Emit via socket so clients can update in realtime
  socketManager.emitPollVote(poll._id, { choice });

  const options = {
    expires: new Date(
      Date.now() + process.env.VOTE_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  };

  res
    .cookie(`poll_vote_${poll._id}`, choice.id, options)
    .json({ success: true, vote });
});
