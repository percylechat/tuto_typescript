"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril = __importStar(require("mithril"));
const mithril_1 = __importDefault(require("mithril"));
var root = document.body;
(0, mithril_1.default)("div", { id: "toto" }, "titi");
mithril_1.default.request({
    method: "Get",
    url: "http://localhost:3000/profile/:user",
    responseType: "json",
    params: { user: "toto" },
    body: { name: "test" }
})
    .then(function (result) {
    console.log(result);
});
mithril_1.default.request({
    method: "Post",
    url: "http://localhost:3000/profile/",
    responseType: "json",
    body: { user: "toto", token: "456", new_name: "totot de la mort" },
})
    .then(function (result) {
    console.log('result2');
    console.log(result);
    mithril.render(root, "hello ! : " + result.username);
});
