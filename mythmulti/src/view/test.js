"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestView = exports.tata = void 0;
const mithril_1 = __importDefault(require("mithril"));
exports.tata = (0, mithril_1.default)("div", { id: "tata" }, "titi2");
exports.TestView = {
    view: function () {
        return exports.tata;
    }
};
