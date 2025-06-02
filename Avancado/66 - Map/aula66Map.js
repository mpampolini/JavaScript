// Map altera o array original
// Para evitar esse cenário, pode-se usar o spread operator

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor) => valor * 2);

// console.log(numeros);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
//const idades = pessoas.map((obj) => ({ idade: obj.idade }));
pessoas.map((obj) => console.log(obj));

const comIds = pessoas.map(function (obj, indice) {
  obj.id = (indice + 1) * 100;
  return obj;
});
comIds.map((obj) => console.log(obj));
