const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const pollsRoutes = require('./routes/polls');
const profileRoutes = require('./routes/profile');
const contactRoutes = require('./routes/contact');
const dashboardRoutes = require('./routes/dashboard');
const votesRoutes = require('./routes/votes');
const commentsRoutes = require('./routes/comments');
const errorHandler = require('./middlewares/error');

const app = express();

// Middlewares
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/polls', pollsRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/votes', votesRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/comments', commentsRoutes);

// Error Handler
app.use(errorHandler);

// Send React Client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;
