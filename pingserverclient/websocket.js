"use strict";
exports.__esModule = true;
/// <reference path="./types/common/main.d.ts" />
var express = require("express");
var path = require("path");
var app = express();
app.set("port", process.env.PORT || 3000);
var http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
var io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8000",
        credentials: true
    }
});
app.get("/", function (req, res) {
    res.sendFile(path.resolve("./index.html"));
});
// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("message", function (message) {
        console.log(message);
        // echo the message back down the
        // websocket connection
        socket.emit("message", message);
        var i = 0;
        while (i < 10) {
            var mess = "hello";
            var messf = mess.concat(i.toString());
            socket.emit(messf);
            i++;
        }
    });
});
var server = http.listen(3000, function () {
    console.log("listening on *:3000");
});
// // console.log("WE ARE HERE");
// const app = express();
// app.set("port", process.env.PORT || 3000);
// var http = require("http").Server(app);
// // simple '/' endpoint sending a Hello World
// // response
// app.get("/", (req: any, res: any) => {
//   res.send("hello world");
// });
// // start our simple server up on localhost:3000
// const server = http.listen(3000, function() {
//   console.log("listening on *:3000");
// });
