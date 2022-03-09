import { Manager, Socket} from "socket.io-client";
import {DefaultEventsMap} from "@socket.io/component-emitter";

export class SocketIoService {
    private socket: Socket<DefaultEventsMap, DefaultEventsMap>

    constructor() {
        const manager = new Manager("http://localhost:3000");
        this.socket = manager.socket("/");
    }

    public connect() {
        this.socket.emit("hello");
        this.socket.on("noArg", () => {
        });

        this.socket.on("basicEmit", (a, b, c) => {
            // a is inferred as number, b as string and c as buffer
            console.log(a + b + c);
        });
    }
}