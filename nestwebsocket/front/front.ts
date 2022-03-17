import { io, Socket } from "socket.io-client";



var socket = io('http://localhost:3000')
socket.emit('msgToServer', 'titi');
socket.on('msgToClient', (message) => {
 console.log(message);
});

