const { Server } = require('socket.io');
const { createServer } = require('http');
const dotenv = require('dotenv');
const colors = require('colors');
const socketManager = require('./lib/socket');

// Config
dotenv.config({ path: './config/config.env' });

const app = require('./app');
const connectDB = require('./config/db')();

const PORT = process.env.PORT || 4000;
const httpServer = createServer(app);

// Socket Server
const io = new Server(httpServer, {
  cors: { origin: [process.env.FRONTEND_URL] },
  serveClient: false
});

io.on('connection', socketManager.setup(io));

// Express Server
const server = httpServer.listen(PORT, () => {
  console.log(`Express Server Running On Port -> ${PORT}`.yellow.underline);
});

// Promise rejection is taken seriously
process.on('unhandledRejection', reason => {
  console.log(`unhandledRejection ${reason}`.red);
  server.close(() => process.exit(1));
});
