// Não estava sendo passado o parâmetro necessário para o constructor
/* Uma solução seria fornecer um valor padrão, para caso não seja fornecido um parâmetro, seja inicializado
valor padrão*/
class Radio {
    volume : number
    constructor(volume : number = 0) {
    this.volume = volume;
    
    }
    }
    let r : Radio = new Radio()
    r.volume = 10
    