const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth');
const { protect } = require('../middlewares/auth');

router.post('/login', authControllers.login);
router.post('/signup', authControllers.signup);
router.post('/forgot-password', authControllers.forgotPassword);
router.post('/reset-password/:token', authControllers.resetPassword);
router.patch('/update-details', protect, authControllers.updateDetails);
router.patch('/update-password', protect, authControllers.updatePassword);
router.patch('/update-avatar', protect, authControllers.updateAvatar);
router.get('/request-delete', protect, authControllers.requestDelete);
router.delete('/delete-account/:token', protect, authControllers.deleteAccount);
router.get('/me', authControllers.getCurrentUser);
router.get('/logout', protect, authControllers.logout);

module.exports = router;
