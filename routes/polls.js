const express = require('express');
const router = express.Router();
const pollsControllers = require('../controllers/polls');
const { protect } = require('../middlewares/auth');

router.get('/', protect, pollsControllers.getPrivatePolls);
router.get('/public', pollsControllers.getPublicPolls);
router.get('/:id', protect, pollsControllers.getPrivatePoll);
router.get('/public/:id', pollsControllers.getPublicPoll);
router.get('/user/:username', pollsControllers.getPublicPollsFromUser);
router.post('/', pollsControllers.createPoll);
router.patch('/:id', protect, pollsControllers.patchPoll);
router.put('/:id', protect, pollsControllers.putPoll);
router.post('/report', pollsControllers.reportPoll);

module.exports = router;
