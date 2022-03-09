import { connect, Manager } from "socket.io-client";
export class SocketIoService {
    constructor() {
        const manager = new Manager("http://localhost:3000");
        this.socket = manager.socket("/");
    }
    connect() {
        this.socket.emit("hello");
        this.socket.on("noArg", () => {
        });
        this.socket.on("basicEmit", (a, b, c) => {
            // a is inferred as number, b as string and c as buffer
            console.log(a + b + c);
        });
    }
}
connect();
