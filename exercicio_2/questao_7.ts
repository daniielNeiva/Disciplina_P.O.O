class Triangulo{
    l1 : number
    l2 : number
    l3 : number

    constructor( l1 : number, l2 : number, l3 : number){
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
    }

    eh_triangulo(): boolean{
        if(this.l1 + this.l2 > this.l3 && this.l1 + this.l3 > this.l2 && this.l2 + this.l3 > this.l1){
            return true
        }else{
            return false
        }
    }
    verifica_classificacao(): string{
        if(!this.eh_triangulo()){
            return "false"
        }else if(this.l1 === this.l2 && this.l2 === this.l3 ){
            return "O triangulo e EQUILATERO"
        }else if(this.l1 !== this.l2 && this.l2 !== this.l3 && this.l3 !== this.l1){
            return "O triangulo e ESCALENO"
        }else{
            return  "O triangulo e ISOCELES"
        }
        }
    }
const triangulo_1 = new Triangulo( 35, 35, 35)  
const verifica = triangulo_1.eh_triangulo()  
const classificacao = triangulo_1.verifica_classificacao()
console.log(verifica)
console.log(classificacao)


