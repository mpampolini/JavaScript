// return
// retorna um valor
// termina a execução da função
// function soma(a, b) {
//   return a + b; // Retorna a soma de a e b
// }

// let s1 = soma(2, 5); // Chamada da função, s1 recebe o valor retornado

// console.log(s1); // Exibe o valor de s1, que é 7

// // Não retorna um valor (undefined)
// function soma2(a, b) {
//   console.log(a + b); // Exibe a soma de a e b
// }

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome }; // Retorna um objeto com nome e sobrenome
// }

// const p1 = criaPessoa("Mateus", "Pampolini"); // Chamada da função, p1 recebe o objeto retornado
// console.log(p1); // Exibe o objeto p1
// console.log(typeof p1); // Exibe o tipo de p1, que é 'object'

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return comeco + " " + resto; // Retorna a frase completa
//   }
//   return falaResto; // Retorna a função interna
// }

// const fala = falaFrase("Olá"); // Chamada da função falaFrase, olaMundo recebe a função interna falaResto
// const resto = fala("Mundo!"); // Chamada da função interna falaResto, resto recebe a frase completa
// console.log(resto); // Exibe a frase completa "Olá Mundo!"

// function duplica(n) {
//   return n * 2; // Retorna o dobro do número n
// }
// function triplica(n) {
//   return n * 3; // Retorna o triplo do número n
// }
// function quadruplica(n) {
//   return n * 4; // Retorna o quádruplo do número n
// }

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador; // Retorna o número n multiplicado pelo multiplicador
  };
}

const duplica = criaMultiplicador(2); // Cria uma função que duplica o número
const triplica = criaMultiplicador(3); // Cria uma função que triplica o número
const quadruplica = criaMultiplicador(4); // Cria uma função que quadruplica o número

console.log(duplica(2)); // Exibe o dobro de 2, que é 4
console.log(triplica(2)); // Exibe o triplo de 2, que é 6
console.log(quadruplica(2)); // Exibe o quádruplo de 2, que é 8
