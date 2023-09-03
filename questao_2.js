"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function main() {
    var num = readlineSync.question('Digite um numero: ');
    if (num !== null && num !== '') {
        var primo = verificar_numero_primo(Number(num));
        console.log("O n\u00FAmero \u00E9 ".concat(primo, "."));
    }
    else {
        console.log('Nenhum valor digitado.');
    }
}
function verificar_numero_primo(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
main();
