let sum = require("./modules/sum");
let sub = require("./modules/sub");
let mult = require("./modules/mult");
let div = require("./modules/div");
let readline = require("readline-sync");


let a, b;


let choice = readline.questionInt("Choice the option: 1 - sum | 2 - sub | 3 - mult | 4 - div: ");

a = readline.question("firt number: ");
b = readline.question("second number: ");

switch(choice){
    case 1:
        console.log(sum(a, b));
        break;
    case 2:
        console.log(sub(a, b));
        break;
    case 3:
        console.log(mult(a, b));
        break;
    case 4:
        console.log(div(a, b));
        break;
    default:
        console.log("Choice invalid");
}