"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(require("mithril"));
const test_1 = require("./view/test");
var root = document.body;
const toto2 = (0, mithril_1.default)("div", { id: "toto" }, "titi");
let views = [];
views.push(toto2);
views.push(test_1.tata);
const View = {
    view: function () {
        return views;
    }
};
mithril_1.default.mount(document.body, View);
