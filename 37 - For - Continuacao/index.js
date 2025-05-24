const frutas = ["Pera", "Maçã", "Banana", "Laranja", "Uva"];

// for in -> lê os índeces do array ou chaves de objetos
for (let indice in frutas) {
  console.log(frutas[indice]);
}

const pessoa = {
  nome: "Lucas",
  sobrenome: "Silva",
  idade: 25,
};

// for in -> lê os índeces do array ou chaves de objetos
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

console.log(pessoa.nome);
console.log(pessoa["nome"]);
