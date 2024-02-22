import io from 'socket.io-client';
import constants from '../constants';

const socket = io(constants.SERVER_URL).connect();
export default socket;
