function exibir(...tarefas: string[]) {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa}`);
    });
    console.log("--------------------");
  }
  
  // Inicialize uma lista vazia de tarefas
  const listaDeTarefas: string[] = [];
  
  // Adicione algumas tarefas à lista
  listaDeTarefas.push("Fazer compras");
  listaDeTarefas.push("Estudar TypeScript");
  listaDeTarefas.push("Lavar o carro");
  
  // Exiba a lista atual de tarefas
  exibir(...listaDeTarefas);
  
  // Adicione mais tarefas à lista
  listaDeTarefas.push("Assistir a um filme");
  listaDeTarefas.push("Preparar o jantar");
  
  // Exiba a lista atualizada de tarefas
  exibir(...listaDeTarefas);