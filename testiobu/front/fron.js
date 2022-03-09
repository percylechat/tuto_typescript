"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIoService = void 0;
const socket_io_client_1 = require("socket.io-client");
class SocketIoService {
    constructor() {
        const manager = new socket_io_client_1.Manager("http://localhost:3000");
        this.socket = manager.socket("/");
    }
    connect() {
        this.socket.emit("hello");
        this.socket.on("noArg", () => {
            // ...
        });
        this.socket.on("basicEmit", (a, b, c) => {
            // a is inferred as number, b as string and c as buffer
            console.log(a + b + c);
        });
    }
}
exports.SocketIoService = SocketIoService;
