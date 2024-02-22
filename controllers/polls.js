const Poll = require('../models/Poll');
const Vote = require('../models/Vote');
const catchAsync = require('../utils/catchAsync');
const { isAuthenticated } = require('../middlewares/auth');
const ErrorResponse = require('../utils/errorResponse');
const advancedResults = require('../utils/advancedResults');
const verifyCaptcha = require('../utils/verifyCaptcha');
const { getRandomID } = require('../utils/functions');
const User = require('../models/User');

/**
 * @route GET /api/polls/
 * @desc Fetch polls of currently logged in user
 * @secure true
 */
exports.getPrivatePolls = catchAsync(async (req, res, next) => {
  let filter = { user: req.user };

  if (req.query.sort === 'public') {
    filter['visibility'] = 'public';
  }

  if (req.query.sort === 'private') {
    filter['visibility'] = 'private';
  }

  const result = await advancedResults({
    req,
    model: Poll,
    filter,
    populate: 'voteCount'
  });

  res.status(200).json({
    success: true,
    polls: result.results,
    pagination: result.pagination
  });
});

/**
 * @route GET /api/polls/:id
 * @desc Fetch one poll should be used by the owner of the poll
 * @secure true
 */
exports.getPrivatePoll = catchAsync(async (req, res, next) => {
  const { id: _id } = req.params;
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

  const poll = await Poll.findOne({ _id, user }).populate({
    path: 'user',
    select: selectUser
  });

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  res.status(200).json({ success: true, poll });
});

/**
 * @route GET /api/polls/user/:username
 * @desc Fetch public polls of a user
 * @secure false
 */
exports.getPublicPollsFromUser = catchAsync(async (req, res, next) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  const filter = { visibility: 'public', user };

  const result = await advancedResults({
    req,
    model: Poll,
    filter,
    select: '-choices -options -user -voting',
    populate: 'voteCount'
  });

  res.status(200).json({
    success: true,
    polls: result.results,
    pagination: result.pagination
  });
});

/**
 * @route GET /api/polls/public
 * @desc Fetch current public polls
 * @secure false
 */
exports.getPublicPolls = catchAsync(async (req, res, next) => {
  let filter = { visibility: 'public' };

  if (req.query.sort === 'open-to-voting') {
    filter['voting'] = 'open';
  }

  const result = await advancedResults({
    req,
    model: Poll,
    filter,
    select: '-choices -options -user -voting',
    populate: 'voteCount'
  });

  res.status(200).json({
    success: true,
    polls: result.results,
    pagination: result.pagination
  });
});

/**
 * @route GET /api/polls/public/:id
 * @desc Fetch one poll should be used when others request
 * @secure true
 */
exports.getPublicPoll = catchAsync(async (req, res, next) => {
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
    path: 'user voteCount',
    select: selectUser
  });

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  // Check if already voted using sessions or cookies

  const choiceIndex = user
    ? (await Vote.findOne({ user, poll }))?.choiceIndex
    : parseInt(req.cookies[`poll_vote_${poll._id}`], 10);

  const voteByCurrentUser = poll.choices[choiceIndex];

  res.status(200).json({ success: true, poll, voteByCurrentUser });
});

/**
 * @route POST /api/polls
 * @desc Creates a new poll
 * @secure false
 */
exports.createPoll = catchAsync(async (req, res, next) => {
  await isAuthenticated(req); // Injects req.user
  const user = req.user;
  const _id = getRandomID(10);

  const { question, category, visibility, options, choices } = req.body;

  const availableOptions = choices.filter(i => i.name.length > 0);

  if (availableOptions.length < 2) {
    return next(new ErrorResponse('Atleast two options should be given'));
  }

  const captchaRes = await verifyCaptcha(req.body.captchaValue);

  if (!captchaRes.success) {
    return next(new ErrorResponse('Invalid captcha', 400));
  }

  const poll = await Poll.create({
    _id,
    question,
    category,
    visibility,
    options,
    choices,
    user
  });

  res.status(200).json({ success: true, poll });
});

/**
 * @route PATCH /api/polls/:id
 * @desc Patches a poll with some data
 * @secure true
 */
exports.patchPoll = catchAsync(async (req, res, next) => {
  const { id: _id } = req.params;
  const poll = await Poll.findOne({ _id });
  const user = req.user;
  const { visibility, voting, options } = req.body;

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  if (poll.user) {
    if (user.id !== poll?.user?._id.toString()) {
      return next(
        new ErrorResponse('You are not authorized to edit this poll', 401)
      );
    }
  } else {
    return next(new ErrorResponse('You cannot edit this poll', 401));
  }

  // Cannot be changed later
  options.multipleVotes = poll.options.multipleVotes;

  const fieldsToUpdate = { visibility, voting, options };

  const updatedPoll = await Poll.findByIdAndUpdate(_id, fieldsToUpdate, {
    new: true,
    runValidators: true,
    populate: 'voteCount'
  }).lean();

  res.status(200).json({ success: true, poll: updatedPoll });
});

/**
 * @route PUT /api/polls/:id
 * @desc updates a poll
 * @secure true
 */
exports.putPoll = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const poll = await Poll.findOne({ id }).populate('voteCount');
  const user = req.user;
  const { question, category, visibility, options, choices } = req.body;

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  if (poll.user) {
    if (user.id !== poll.user._id.toString()) {
      return next(
        new ErrorResponse('You are not authorized to edit this poll', 401)
      );
    }
  } else {
    return next(new ErrorResponse('You cannot edit this poll', 401));
  }

  if (poll.voteCount > 0) {
    return next(
      new ErrorResponse('This poll has votes and cannot be edited', 400)
    );
  }

  const fieldsToUpdate = { question, category, visibility, options, choices };

  const updatedPoll = await Poll.findByIdAndUpdate(id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, poll: updatedPoll });
});

/**
 * @route POST /api/polls/report
 * @desc Reports a poll
 * @secure false
 */
exports.reportPoll = catchAsync(async (req, res, next) => {
  const { pollId } = req.body;

  if (!pollId) {
    return next(new ErrorResponse('Poll Id is required', 400));
  }

  const poll = await Poll.findOne({ _id: pollId });

  if (!poll) {
    return next(new ErrorResponse('Poll not found', 404));
  }

  // Right now reports are not saved anywhere
  res.status(200).json({ success: true });
});
