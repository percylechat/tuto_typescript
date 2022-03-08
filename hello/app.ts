/// <reference path="./types/common/def.d.ts" />

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';


function printhello(name: string):string
{
    let say_hello:string = "Hello ";
    return say_hello.concat(name);
}

// let name_hello:string = "Percy";
// console.log(printhello(name_hello));
// let message: string = 'Hello, World!';
// console.log(message);



let rl = readline.createInterface({ input, output });

rl.question('What\'s your name ', (answer: string) => {
    if (answer != ""){
        console.log(printhello(answer));
    }
    rl.close();
});