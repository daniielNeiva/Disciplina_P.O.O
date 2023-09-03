function exibir() {
    var tarefas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tarefas[_i] = arguments[_i];
    }
    console.log("Lista de Tarefas:");
    tarefas.forEach(function (tarefa, index) {
        console.log("".concat(index + 1, ". ").concat(tarefa));
    });
    console.log("--------------------");
}
// Inicialize uma lista vazia de tarefas
var listaDeTarefas = [];
// Adicione algumas tarefas à lista
listaDeTarefas.push("Fazer compras");
listaDeTarefas.push("Estudar TypeScript");
listaDeTarefas.push("Lavar o carro");
// Exiba a lista atual de tarefas
exibir.apply(void 0, listaDeTarefas);
// Adicione mais tarefas à lista
listaDeTarefas.push("Assistir a um filme");
listaDeTarefas.push("Preparar o jantar");
// Exiba a lista atualizada de tarefas
exibir.apply(void 0, listaDeTarefas);
