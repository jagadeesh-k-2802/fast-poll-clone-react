const crypto = require('crypto');

exports.getRandomID = length => {
  return crypto.randomBytes(length / 2).toString('hex');
};

exports.bytesToMB = bytes => {
  return bytes / 1e6;
};
