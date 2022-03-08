"use strict";
/// <reference path="./types/common/def.d.ts" />
exports.__esModule = true;
var readline = require("readline");
var node_process_1 = require("node:process");
function printhello(name) {
    var say_hello = "Hello, i am ";
    say_hello.concat(name);
    return say_hello;
}
// let name_hello:string = "Percy";
// console.log(printhello(name_hello));
// let message: string = 'Hello, World!';
// console.log(message);
var rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
rl.question('What\'s your name ', function (answer) {
    if (answer != "") {
        console.log(printhello(answer));
    }
    rl.close();
});
