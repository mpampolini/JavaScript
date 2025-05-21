function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Mateus", "Pampolini", 43);
const pessoa2 = criaPessoa("Maria", "Pereira", 15);
const pessoa3 = criaPessoa("Ricardo", "Oliveira", 28);
const pessoa4 = criaPessoa("Conceição", "Barbosa", 7);
const pessoa5 = criaPessoa("Jonas", "Silva", 88);

console.log(pessoa1);

//objeto literal
const pessoa = {
  nome: "Mateus",
  sobrenome: "Pampolini",
  idade: 43,

  fala() {
    console.log(`A minha idade atual é: ${this.idade}`);
  },

  incrementaIdade() {
    ++this.idade;
  },
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

// const pessoa2 = {
//   nome: "Maurílio",
//   sobrenome: "Pampolini",
//   idade: 80,
// };

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
