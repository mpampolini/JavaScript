// Variável arguments que sustenta todos os argumentos enviados - não funciona para arrow function
// function funcao(a, b, c, d, e, f) {
//   console.log("Oi");
//   let total = 0;
//   for (argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total, a, b, c, d, e, f);
// }

// funcao(1, 2, 3); // Chamada da função

// function funcao(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }

// funcao(2, undefined, 20); // Chamada da função  para pular um parâmetro tem que passar undefined (único jeito de pular um parâmetro)

// Atribuição via desestruturação
// function funcaoObjeto({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }
// let pessoa = { nome: "Mateus", sobrenome: "Pampolini", idade: 43 };

// funcaoObjeto(pessoa); // Chamada da função com objeto

// function funcaoArray([primeiro, segundo, terceiro]) {
//   console.log(primeiro, segundo, terceiro);
// }
// let array = ["Mateus", "Pampolini", 43];
// funcaoArray(array); // Chamada da função com array

// function conta(operador, acumulador = 0, ...numeros) {
//   // Rest operator
//   for (let numero of numeros) {
//     if (operador === "+") acumulador += numero;
//     if (operador === "-") acumulador -= numero;
//     if (operador === "*") acumulador *= numero;
//     if (operador === "/") acumulador /= numero;
//   }
//   console.log(acumulador);
// }

// conta("+", 0, 20, 30, 40, 50); // Chamada da função
// conta("*", 1, 20, 30, 40, 50); // Chamada da função

// Function expression obrigatório ; no final
// Mesmo com rest operator, o arguments funciona
const conta = function (operador, acumulador = 0, ...numeros) {
  // Rest operator
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
  console.log(arguments); // Exibe todos os argumentos passados
};

conta("+", 1, 20, 30, 40, 50); // Chamada da função

// const contaArrow = (operador, acumulador = 0, ...numeros) => {
//   // Rest operator
//   for (let numero of numeros) {
//     if (operador === "+") acumulador += numero;
//     if (operador === "-") acumulador -= numero;
//     if (operador === "*") acumulador *= numero;
//     if (operador === "/") acumulador /= numero;
//   }
//   console.log(acumulador);
//   // console.log(arguments); // Não funciona com arrow function
// };

// contaArrow("+", 1, 20, 30, 40, 50); // Chamada da função
// // console.log(contaArrow.arguments); // Não funciona com arrow function

const contaArrow = (...args) => {
  console.log(args); // Exibe todos os argumentos passados
};

contaArrow("+", 1, 20, 30, 40, 50); // Chamada da função
