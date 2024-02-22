const express = require('express');
const router = express.Router();
const profileControllers = require('../controllers/profile');

router.get('/:username', profileControllers.fetchProfile);

module.exports = router;
