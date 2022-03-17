"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChatGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const mockserv_gateway_1 = require("./mockserv.gateway");
Object.defineProperty(exports, "ChatGateway", { enumerable: true, get: function () { return mockserv_gateway_1.ChatGateway; } });
let ChatGateway = ChatGateway_1 = class ChatGateway {
};
ChatGateway = ChatGateway_1 = __decorate([
    (0, common_1.Module)({
        providers: [ChatGateway_1],
    })
], ChatGateway);
exports.ChatGateway = ChatGateway;
