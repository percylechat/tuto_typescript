/// <reference path="./types/common/def.d.ts" />

function printhello(name: string):void
{
    let say_hello:string = "Hello, i am ";
    say_hello.concat(name);
    // return say_hello;
}

let name_hello:string = "Percy";
console.log(printhello(name_hello));
// let message: string = 'Hello, World!';
// console.log(message);