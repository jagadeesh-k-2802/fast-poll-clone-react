const express = require('express');
const router = express.Router();
const dashboardControllers = require('../controllers/dashboard');
const { protect } = require('../middlewares/auth');

router.get('/', protect, dashboardControllers.fetchDashboardData);

module.exports = router;
