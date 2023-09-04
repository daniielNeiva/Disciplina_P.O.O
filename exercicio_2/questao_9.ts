class Conta {
    numero: string
    saldo: number

    constructor(numero: string, saldo: number) {
        this.numero = numero
        this.saldo = saldo
    }

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return true
        } else {
            console.log("Saldo insuficiente para saque.")
            return false
        }
    }

    depositar(valor: number): void {
        this.saldo += valor
    }

    consultarSaldo(): number {
        return this.saldo
    }

    transferir(destino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            destino.depositar(valor)
            return true;
        } else {
            console.log("Transferência não realizada devido a saldo insuficiente.");
            return false
        }
    }
}

let c1 = new Conta("1", 1000);
c1.depositar(10000);

if (c1.sacar(2000)) {
    console.log(`Saque realizado com sucesso. Novo saldo: ${c1.consultarSaldo()}`);
} else {
    console.log(`Saque não realizado. Saldo atual: ${c1.consultarSaldo()}`);
}

let c2 = new Conta("2", 5000);

if (c1.transferir(c2, 3000)) {
    console.log(`Transferência realizada com sucesso.`);
    console.log(`Saldo da Conta 1: ${c1.consultarSaldo()}`);
    console.log(`Saldo da Conta 2: ${c2.consultarSaldo()}`);
} else {
    console.log(`Transferência não realizada.`);
}

let c3 = new Conta("3", 200);

if (c3.sacar(500)) {
    console.log(`Saque realizado com sucesso. Novo saldo: ${c3.consultarSaldo()}`);
} else {
    console.log(`Saque não realizado. Saldo atual: ${c3.consultarSaldo()}`);
}

let c4 = new Conta("4", 10000);

if (c4.transferir(c1, 15000)) {
    console.log(`Transferência realizada com sucesso.`);
    console.log(`Saldo da Conta 1: ${c1.consultarSaldo()}`);
    console.log(`Saldo da Conta 4: ${c4.consultarSaldo()}`);
} else {
    console.log(`Transferência não realizada.`);
}