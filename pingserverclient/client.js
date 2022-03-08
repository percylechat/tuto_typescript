"use strict";
/// <reference path="./types/common/main.d.ts" />
exports.__esModule = true;
var socketio = require("socket.io");
var socket = socketio("http://localhost:3000");
// listen for new messages
socket.on("message", function (data) {
    document.getElementById("toto").value = data;
    console.log(data);
});
// our sendMsg function...
function sendMsg() {
    socket.emit("message", "HELLO WORLD");
}
sendMsg();
