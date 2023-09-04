// Não estava sendo passado o parâmetro necessário para o constructor
/* Uma solução seria fornecer um valor padrão, para caso não seja fornecido um parâmetro, seja inicializado
valor padrão*/
var Radio = /** @class */ (function () {
    function Radio(volume) {
        if (volume === void 0) { volume = 0; }
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio();
r.volume = 10;
