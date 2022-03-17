"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
let ChatGateway = class ChatGateway {
    constructor() {
        this.users = 0;
    }
    handleConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            // A client has connected
            this.users++;
            // Notify connected clients of current users
            this.server.emit('users', this.users);
        });
    }
    handleDisconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            // A client has disconnected
            this.users--;
            // Notify connected clients of current users
            this.server.emit('users', this.users);
        });
    }
    onChat(client, message) {
        return __awaiter(this, void 0, void 0, function* () {
            client.broadcast.emit('chat', message);
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)()
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('chat')
], ChatGateway.prototype, "onChat", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)()
], ChatGateway);
exports.ChatGateway = ChatGateway;
