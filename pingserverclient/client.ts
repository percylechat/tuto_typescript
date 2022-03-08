/// <reference path="./types/common/main.d.ts" />

import * as express from "express";
import * as socketio from "socket.io";

const socket = socketio("http://localhost:3000");
      // listen for new messages
      socket.on("message", function(data) {

        (<HTMLInputElement>document.getElementById("toto")).value = data;
        console.log(data);
      });
  // our sendMsg function...
      function sendMsg() {
        socket.emit("message", "HELLO WORLD");
    }
         sendMsg();