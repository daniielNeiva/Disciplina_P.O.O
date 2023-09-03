import * as readlineSync from "readline-sync";

function main() {
    let nome = readlineSync.question('Digite o nome: ');
    let pronome = readlineSync.question('Digite o pronome de tratamento (opcional): ');
    
    saudacao(nome, pronome);
}

function saudacao(nome: string, pronome: string = "Sr"): void {
    console.log(`Sra. ${nome}`);
}

main();
