var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var novo_array = [];
var eh_par = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (num % 2 === 0)
            novo_array.push(num);
    }
    ;
    return novo_array;
};
eh_par(array);
var dobrar = function (array) { var array_dobrado = []; for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
    var num = array_2[_i];
    array_dobrado.push(num * 2);
} ; return array_dobrado; };
var total = function (array) { var total = 0; for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
    var num = array_3[_i];
    total += num;
} ; return total; };
var dobrado = dobrar(array);
var somatorio = total(array);
console.log(novo_array);
console.log(dobrado);
console.log(somatorio);
