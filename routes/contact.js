const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/contact');

router.post('/', contactControllers.getFeedback);

module.exports = router;
