const mongoose = require('mongoose');

const Poll = new mongoose.Schema(
  {
    _id: String,
    question: {
      type: String,
      required: [true, 'Please add a question'],
      trim: true,
      maxlength: [50, 'Question cannot be more than 50 characters']
    },
    category: {
      type: String,
      required: [true, 'Please choose a category'],
      maxlength: [20, 'Category cannot be more than 20 characters']
    },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'private'
    },
    voting: {
      type: String,
      enum: ['open', 'close'],
      default: 'open'
    },
    options: {
      loginToVote: { type: Boolean, default: false },
      addComments: { type: Boolean, default: false },
      enableCaptcha: { type: Boolean, default: false }
    },
    choices: [
      {
        id: Number,
        name: {
          type: String,
          required: [true, 'Poll choice name is required']
        },
        color: {
          type: String,
          required: [true, 'Poll choice color is required']
        }
      }
    ],
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  },
  { toJSON: { virtuals: true } }
);

Poll.virtual('voteCount', {
  ref: 'Vote',
  localField: '_id',
  foreignField: 'poll',
  justOne: false,
  count: true
});

// Delete poll data if poll Is Deleted
Poll.pre('remove', async function (next) {
  await this.model('Vote').deleteMany({ poll: this._id });
  await this.model('Comment').deleteMany({ poll: this._id });
  next();
});

module.exports = mongoose.model('Poll', Poll);
