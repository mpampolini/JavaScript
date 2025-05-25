const numeros = [1, 2, 3, 4, 5];

const numeros1 = [...numeros];
const numeros2 = numeros1;
const numeros4 = [];

console.log(`Numeros: ${numeros}`);
console.log(`Numeros1: ${numeros1}`);
console.log(`Numeros2: ${numeros2}`);

numeros.push(6);
numeros1.push(7);
numeros2.push(8);

const numeros3 = (...num) => {
  num.map((n) => {
    numeros4.push(n);
  });
  numeros4.push(10);
};

console.log(`Numeros: ${numeros}`);
console.log(`Numeros1: ${numeros1}`);
console.log(`Numeros2: ${numeros2}`);

numeros3(numeros);

console.log(`Numeros: ${numeros}`);
console.log(`Numeros1: ${numeros1}`);
console.log(`Numeros2: ${numeros2}`);
console.log(`Numeros4: ${numeros4}`);

let numero = 2;
const pessoa = [
  { nome: "Lucas", idade: 25 },
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 28 },
][numero];

console.log(pessoa);
