var saudacao = /** @class */ (function () {
    function saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario);
    };
    return saudacao;
}());
var saudacao1 = new saudacao("Bom dia", "Daniel");
var resultado = saudacao1.obterSaudacao();
console.log(resultado);
