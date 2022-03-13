/// <reference path="./types/common/main.d.ts" />
import * as express from "express";
//npm install express @types/express
//npm i --save-dev @types/node
//npm i node
// npm install --save express
//npm install --save-dev webpack webpack-cli webpack-dev-server @types/webpack-dev-server
//npm install --save-dev babel-loader
//npm install --save-dev ts-node
//npm install --save-dev @types/webpack-dev-server
// @babel/preset-env
// @babel/preset-typescript
//  npm i -D lint
//  npm i -D rollup terser


import * as socketio from "socket.io";
import * as path from "path";

const app = express();
app.set("port", process.env.PORT || 3000);

let http = require("http").Server(app);

// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http,{
    cors: {
      origin: "http://localhost:8000",
      credentials: true}});

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./index.html"));
});

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function(socket: any) {
  console.log("a user connected");

    socket.on("message", function(message: any) {
      console.log(message);
      // echo the message back down the
      // websocket connection
      socket.emit("message", message);
      let i: number = 0;
      while (i < 10){
        let mess: string = "hello";
        let messf: string = mess.concat(i.toString());
        socket.emit(messf);
        i++;
}
    });
  });

const server = http.listen(3000, function() {
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