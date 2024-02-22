const mongoose = require('mongoose');

const Comment = new mongoose.Schema(
  {
    parentId: { type: mongoose.Schema.ObjectId, ref: 'Comment' },
    message: { type: String, required: [true, 'Message is required'] },
    likes: { type: Number, default: 0 },
    poll: { type: String, ref: 'Poll' },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  },
  { toJSON: { virtuals: true } }
);

Comment.virtual('replies', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'parentId',
  justOne: false
});

module.exports = mongoose.model('Comment', Comment);
