import * as socketio from "socket.io";
import * as path from "path";
import express = require('express');
const app = express();
app.set("port", process.env.PORT || 3000);

let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("../front/dist/index.html"));
});

app.get("/fron.6d43893a.js", (req: any, res: any) => {
    res.sendFile(path.resolve("../front/dist/fron.6d43893a.js"));
  });

  app.get("/fron.b23b6ac5.js", (req: any, res: any) => {
    res.sendFile(path.resolve("../front/dist/fron.b23b6ac5.js"));
});
    
  
// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function(socket: any) {
  console.log("a user connected");
});

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});