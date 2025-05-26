// Closures are functions that have access to their own scope, the outer function's scope, and the global scope.

function retornaFuncao(nome) {
  return function () {
    return nome; // Retorna o valor da variável nome, que é "Mateus"
  };
}

const funcao = retornaFuncao("Mateus"); // Chama a função retornaFuncao com o argumento "Mateus"
const funcao2 = retornaFuncao("Pampolini"); // Chama a função retornaFuncao com o argumento "Pampolini"

console.log(funcao); // Exibe a função interna, que tem acesso ao escopo de retornaFuncao
console.dir(funcao2); // Exibe a função interna com detalhes, mostrando que ela tem acesso ao escopo de retornaFuncao
console.log(funcao(), funcao2()); // Chama as funções internas, que retornam "Mateus" e "Pampolini", respectivamente
