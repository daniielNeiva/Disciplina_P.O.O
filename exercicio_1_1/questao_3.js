"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function main() {
    var nome = readlineSync.question('Digite o nome: ');
    var pronome = readlineSync.question('Digite o pronome de tratamento (opcional): ');
    saudacao(nome, pronome);
}
function saudacao(nome, pronome) {
    if (pronome === void 0) { pronome = "Sr"; }
    console.log("Sra. ".concat(nome));
}
main();
