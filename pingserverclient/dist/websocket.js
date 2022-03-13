import * as express from "express";
import * as path from "path";
const app = express();
app.set("port", process.env.PORT || 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8000",
        credentials: true
    }
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./index.html"));
});
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("message", function (message) {
        console.log(message);
        socket.emit("message", message);
        let i = 0;
        while (i < 10) {
            let mess = "hello";
            let messf = mess.concat(i.toString());
            socket.emit(messf);
            i++;
        }
    });
});
const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});
//# sourceMappingURL=websocket.js.map