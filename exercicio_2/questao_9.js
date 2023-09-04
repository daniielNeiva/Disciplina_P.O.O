var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        else {
            console.log("Saldo insuficiente para saque.");
            return false;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (destino, valor) {
        if (this.sacar(valor)) {
            destino.depositar(valor);
            return true;
        }
        else {
            console.log("Transferência não realizada devido a saldo insuficiente.");
            return false;
        }
    };
    return Conta;
}());
var c1 = new Conta("1", 1000);
c1.depositar(10000);
if (c1.sacar(2000)) {
    console.log("Saque realizado com sucesso. Novo saldo: ".concat(c1.consultarSaldo()));
}
else {
    console.log("Saque n\u00E3o realizado. Saldo atual: ".concat(c1.consultarSaldo()));
}
var c2 = new Conta("2", 5000);
if (c1.transferir(c2, 3000)) {
    console.log("Transfer\u00EAncia realizada com sucesso.");
    console.log("Saldo da Conta 1: ".concat(c1.consultarSaldo()));
    console.log("Saldo da Conta 2: ".concat(c2.consultarSaldo()));
}
else {
    console.log("Transfer\u00EAncia n\u00E3o realizada.");
}
var c3 = new Conta("3", 200);
if (c3.sacar(500)) {
    console.log("Saque realizado com sucesso. Novo saldo: ".concat(c3.consultarSaldo()));
}
else {
    console.log("Saque n\u00E3o realizado. Saldo atual: ".concat(c3.consultarSaldo()));
}
var c4 = new Conta("4", 10000);
if (c4.transferir(c1, 15000)) {
    console.log("Transfer\u00EAncia realizada com sucesso.");
    console.log("Saldo da Conta 1: ".concat(c1.consultarSaldo()));
    console.log("Saldo da Conta 4: ".concat(c4.consultarSaldo()));
}
else {
    console.log("Transfer\u00EAncia n\u00E3o realizada.");
}
