/*Uma classe Equipamento com:
a. um atributo ligado (tipo boolean)
b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
o método desliga torna o atributo ligado false.

c. Crie um método chamado inverte(), que muda o status atual (se ligado,
desliga...se desligado, liga)
d. Crie um método que estaLigado() que retorna o valor do atributo ligado
e. Altere o comportamento dos métodos liga para caso o equipamento já
esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
f. Instancie uma classe Equipamento e teste todos os seus métodos.*/
class Equipamento{
    ligado : boolean

    constructor(ligado: boolean){
        this.ligado = ligado 
    }

    liga(): any{
        if(this.ligado === false){
            this.ligado = true
        }else{
            return console.log("O equipamento ja esta ligado")
        }
       
    }
    
    desliga(): any{
        if(this.ligado === true){
            this.ligado = false
        }else{
            return console.log("O equipamento ja esta desligado")
        }
       
    }

    inverte(): any{
        if(this.ligado === true){
            this.ligado = false
        }else{this.ligado = true
    }
}
esta_ligado(): string{
    if(this.ligado === true){
        return "O equipamento esta LIGADO"
    }else{
        return "O equipamento esta DESLIGADO"
    }
}
}
const furadeira = new Equipamento(false)
furadeira.liga()
console.log(furadeira.esta_ligado())
furadeira.desliga()
console.log(furadeira.esta_ligado())
furadeira.inverte()
console.log(furadeira.esta_ligado())
furadeira.liga()
