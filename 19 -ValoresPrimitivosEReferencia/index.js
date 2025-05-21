//Dados primitivos

let a = "A";
let b = a; // Cópia
a[0] = "B"; // Essa linha não faz nada
// a não depende de b e b não depende de a
console.log(a, b);

a = "Outra Coisa";

console.log(a, b);

// Referência (mutável) - array
let x = [1, 2, 3];
let y = [...x]; //Spretch faz uma cópia independente de x em y
let z = y; // z aponta para o mesmo local na memória de y Passados por referência

console.log(x, y);

x.push(4);
console.log(`x: ${x}`);
console.log(`y: ${y}`);

y.pop();
console.log(`x: ${x}`);
console.log(`y: ${y}`);
console.log(`y: ${z}`);

// Objetos
const pessoa1 = {
  nome: "Mateus",
  sobrenome: "Pampolini",
};

const pessoa2 = { ...pessoa1 };

const pessoa3 = pessoa2;

pessoa1.nome = "Lucas";

console.log(pessoa1, pessoa2, pessoa3);
