// Declaração clássica de uma função
// function soma(x, y) {
//     return (x + y);
// }

// const result = soma('Mateus ', 5);
// console.log(result);

// Função anonima recebida por uma constante
// const raiz = function (n) {
//     return n ** 0.5;
// };

// Arrow Function
const raiz = (n) => {
  console.log(n ** 0.5);
};

raiz(9);
raiz(16);
raiz(25);

// Arrow Function de uma linha
const raizDois = (n) => n ** 0.5;

console.log(raizDois(9));
console.log(raizDois(16));
console.log(raizDois(25));
