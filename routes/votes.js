const express = require('express');
const router = express.Router();
const votesControllers = require('../controllers/votes');
const { protect } = require('../middlewares/auth');

router.get('/', protect, votesControllers.getVotedPollsByMe);
router.get('/poll/:id', votesControllers.getPollWithVotes);
router.post('/', votesControllers.makeVote);

module.exports = router;
