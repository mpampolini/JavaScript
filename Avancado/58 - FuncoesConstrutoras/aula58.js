// Função construtora -> Função que cria objetos
// Construtora -> É uma função que cria objetos, e o nome da função deve começar com letra maiúscula
// Instância -> É um objeto criado a partir de uma função construtora
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  const id = 123456; // Variável privada, não acessível fora da função construtora
  // Método privado, não acessível fora da função construtora
  const metodoInterno = () => {
    console.log(this.nome + " Sou um método interno");
  };

  this.metodo = () => {
    console.log(this.nome + " Sou um método");
  };
}

const p1 = new Pessoa("Mateus", "Pampolini");
const p2 = new Pessoa("João", "Silva");

console.log(typeof p1); // object
p1.metodo(); // Mateus Sou um método
p2.metodo(); // João Sou um método
