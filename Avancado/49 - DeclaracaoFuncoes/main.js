// Declaração de função (Function hoisting)
falaOi(); // Chamada da função
// A função pode ser chamada antes de sua declaração devido ao hoisting

function falaOi() {
  console.log("Oi");
}

falaOi(); // Chamada da função
// A função pode ser chamada antes de sua declaração devido ao hoisting

// First-class objects (objetos de primeira classe)
// Function expressions
const souUmDado = function () {
  console.log("Sou um dado.");
};

souUmDado(); // Chamada da função
// A função é tratada como um dado, podendo ser atribuída a uma variável

function executaFuncao(funcao) {
  console.log("Executando a função...");
  funcao(); // Chamada da função passada como argumento
}

executaFuncao(souUmDado); // Passando a função como argumento

// Arrow functions
const funcaoArrow = () => {
  console.log("Sou uma arrow function.");
};

funcaoArrow(); // Chamada da função
// A função é definida como uma expressão de função com sintaxe de arrow function

const obj = {
  falar() {
    console.log("Estou falando.");
  },
};

obj.falar(); // Chamada do método do objeto
// Funções como métodos de objetos

// IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log("Sou uma IIFE.");
// })(); // Chamada imediata da função
