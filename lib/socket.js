class SocketManager {
  constructor() {
    if (SocketManager._instance) {
      return SocketManager._instance;
    }

    SocketManager._instance = this;
  }

  setup(io) {
    this.io = io;
    return this._handler;
  }

  _handler(socket) {
    socket.on('joinPoll', data => {
      socket.join(`poll-${data.pollId}`);
    });

    socket.on('leavePoll', data => {
      socket.leave(`poll-${data.pollId}`);
    });
  }

  emitPollVote(pollId, data) {
    this.io.to(`poll-${pollId}`).emit('pollVote', data);
  }
}

module.exports = new SocketManager();
