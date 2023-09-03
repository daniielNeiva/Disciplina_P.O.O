import * as readlineSync from "readline-sync";

function main() {
    let num = readlineSync.question('Digite um numero: ')
    if (num !== null && num !== '') {
        const primo = verificar_numero_primo(Number(num))
        
        console.log(`O número é ${primo}.`)
    } else {
        console.log('Nenhum valor digitado.')
    }
}

function verificar_numero_primo(num: number): boolean {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function saudacao(nome: string, pronome: string = 'Sr'): void {
    console.log(`Sra. ${nome}`);
}

main();

const nome = readlineSync.question('Digite um nome: ');
const pronome = readlineSync.question('Digite um pronome de tratamento (opcional): ');

if (nome !== null && nome !== '') {
    saudacao(nome, pronome);
} else {
    console.log('Nenhum nome digitado.');
}
