const catchAsync = require('../utils/catchAsync');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @route POST /api/contact
 * @desc Recieves feedback form from the user
 * @secure false
 */
exports.getFeedback = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, topic, feedback } = req.body;

  if (!firstName || !lastName || !email || !topic || !feedback) {
    return next(new ErrorResponse('All fields are required', 400));
  }

  // Right now feedback is not saved anywhere
  res.status(200).json({ success: true });
});
