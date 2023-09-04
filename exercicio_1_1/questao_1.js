"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function main() {
    var num = readlineSync.question('Digite um numero: ');
    if (num !== null && num !== '') {
        var par_ou_impar = verificar_par_impar(Number(num));
        console.log(par_ou_impar);
    }
    else {
        console.log('Nenhum valor digitado.');
    }
}
function verificar_par_impar(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
