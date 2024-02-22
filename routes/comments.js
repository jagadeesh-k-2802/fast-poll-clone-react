const express = require('express');
const router = express.Router();
const commentsControllers = require('../controllers/comments');
const { protect } = require('../middlewares/auth');

router.get('/poll/:id', commentsControllers.getCommentsFromPoll);
router.post('/', protect, commentsControllers.addComment);
router.post('/report', commentsControllers.reportComment);

module.exports = router;
