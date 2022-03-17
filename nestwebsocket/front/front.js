"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
var socket = (0, socket_io_client_1.io)('http://localhost:3000');
socket.emit('msgToServer', 'titi');
socket.on('msgToClient', (message) => {
    console.log(message);
});
