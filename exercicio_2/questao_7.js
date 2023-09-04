var Triangulo = /** @class */ (function () {
    function Triangulo(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    Triangulo.prototype.eh_triangulo = function () {
        if (this.l1 + this.l2 > this.l3 && this.l1 + this.l3 > this.l2 && this.l2 + this.l3 > this.l1) {
            return true;
        }
        else {
            return false;
        }
    };
    Triangulo.prototype.verifica_classificacao = function () {
        if (!this.eh_triangulo()) {
            return "false";
        }
        else if (this.l1 === this.l2 && this.l2 === this.l3) {
            return "O triangulo e EQUILATERO";
        }
        else if (this.l1 !== this.l2 && this.l2 !== this.l3 && this.l3 !== this.l1) {
            return "O triangulo e ESCALENO";
        }
        else {
            return "O triangulo e ISOCELES";
        }
    };
    return Triangulo;
}());
var triangulo_1 = new Triangulo(35, 35, 35);
var verifica = triangulo_1.eh_triangulo();
var classificacao = triangulo_1.verifica_classificacao();
console.log(verifica);
console.log(classificacao);
