class saudacao {
    texto : string
    destinatario : string
     
    constructor ( texto : string, destinatario: string ){
        this.texto = texto
        this.destinatario = destinatario
    }

        obterSaudacao(): string {
            return `${this.texto}, ${this.destinatario}`;
          }
        
}
const saudacao1 = new saudacao("Bom dia", "Daniel")
const resultado = saudacao1.obterSaudacao()
console.log(resultado)

