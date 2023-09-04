/*Crie uma classe chamada Jogador e nela:
• Crie 3 atributos inteiros representando força, nível e pontos atuais;
• Crie um construtor no qual os 3 parâmetros são passados e inicialize os
respectivos atributos;
• Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
multiplicação de força pelo nível. Esse resultado é o dano de ataque do
jogador;
• Crie um método chamado atacar em que é passado um outro jogador
(atacado) como parâmetro. Nele e é feita a subtração do dano (método
calcularAtaque) dos pontos do atacado;
• Crie um método chamado estaVivo que retorna true caso o atributo pontos
do jogador seja maior que zero e falso caso contrário.
• Altere o método atacar para usar o método está vivo e desconsiderar a
operação, ou seja, não atacar, caso o jogador passado por parâmetro não
esteja vivo.
• Crie um método chamado toString() que retorna a representação textual do
produto concatenando todos os seus atributos.
• Avalie em com testes dois jogadores instanciados e inicializados através do
construtor. Utilize o método de ataque de cada jogador e ao final, verifique
qual jogador tem mais pontos.*/

class Jogador {
    força: number
    nivel: number
    pontos_atuais: number

    constructor(força: number, nivel: number, pontos_atuais: number) {
        this.força = força
        this.nivel = nivel
        this.pontos_atuais = pontos_atuais
    }

    calcular_ataque(): number {
        const dano_ataque = this.força * this.nivel
        return dano_ataque
    }

    atacar(atacado: Jogador): void {
        if (this.esta_vivo()) {
            const dano = this.calcular_ataque()
            atacado.receberDano(dano)
        }
    }

    esta_vivo(): boolean {
        return this.pontos_atuais > 0
    }

    receberDano(dano: number): void {
        if (this.esta_vivo()) {
            this.pontos_atuais -= dano
            if (this.pontos_atuais <= 0) {
                this.pontos_atuais = 0
            }
        }
    }

    status(): string {
        return `O jogador tem ${this.força} pontos de força, está no nível ${this.nivel}, com ${this.pontos_atuais} pontos de vida.`
    }
}

const jogador1 = new Jogador(10, 5, 100)
const jogador2 = new Jogador(8, 6, 120)

console.log(jogador1.status())
console.log(jogador2.status())

console.log(`Jogador 1 atacando jogador 2.`)
jogador1.atacar(jogador2)
console.log(jogador2.status())

console.log(`Jogador 2 atacando jogador 1.`)
jogador2.atacar(jogador1)
console.log(jogador1.status())

console.log(`Jogador 1 atacando jogador 2 novamente.`)
jogador1.atacar(jogador2)
console.log(jogador2.status())
