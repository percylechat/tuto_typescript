"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const mithril_1 = __importDefault(require("mithril"));
const PIXI = __importStar(require("pixi.js"));
var root = document.body;
// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
// The application will create a canvas element for you that you
// can then insert into the DOM
//document.body.appendChild(app.view);
// load the texture we need
const app = new PIXI.Application({
    width: 640,
    height: 360,
    backgroundColor: 0x1099bb
});
const basicText = new PIXI.Text('Mithril.js rocks!');
basicText.x = 50;
basicText.y = 100;
app.stage.addChild(basicText);
mithril_1.default.mount(document.body, {
    view: () => (0, mithril_1.default)('.pixiContainer', {
        oncreate: ({ dom }) => dom.appendChild(app.view)
    })
});
