const mongoose = require('mongoose');

const Vote = new mongoose.Schema({
  choice: {
    type: String,
    required: [true, 'Choice is required']
  },
  choiceIndex: {
    type: Number,
    required: [true, 'Choice index is required']
  },
  poll: { type: String, ref: 'Poll' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', Vote);
