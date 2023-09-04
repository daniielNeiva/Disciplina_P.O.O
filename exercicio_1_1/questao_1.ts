import * as readlineSync from "readline-sync"

function main() {
    let num = readlineSync.question('Digite um numero: ')
    if (num !== null && num !== '') {
        const par_ou_impar = verificar_par_impar(Number(num))
        console.log(par_ou_impar);
    } else {
        console.log('Nenhum valor digitado.')
    }
}

function verificar_par_impar(num: number): boolean {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

main()
