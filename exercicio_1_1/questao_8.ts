const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const novo_array: number[] = []
const eh_par = (array: number[]) => {for(let num of array){ if(num %2 === 0)
novo_array.push(num)}; return novo_array}
eh_par(array)
const dobrar = (array:number[]) => {let array_dobrado: number[] = []; for(let num of array){ array_dobrado.push(num * 2)}; return array_dobrado}
const total = (array:number[]) => {let total = 0; for(let num of array){total += num}; return total }

const dobrado = dobrar(array)
const somatorio = total(array)


console.log(novo_array)
console.log(dobrado)
console.log(somatorio)
