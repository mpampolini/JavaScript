const pessoa = {
  nome: "Lucas",
  sobrenome: "Silva",
  idade: 25,
  endereco: {
    rua: "Av Brasil",
    numero: 123,
  },
};

//const { nome: usuario = "Não Existe", sobrenome, idade } = pessoa; valor padrão para a variável usuario
const { nome = "Não Existe", sobrenome, idade } = pessoa; // Desestruturação de objeto
console.log(nome, sobrenome, idade); // Lucas Silva 25

const {
  // valor padrão para a variável logradouro
  endereco: { rua: logradouro = "123456", numero },
  endereco,
} = pessoa; // Desestruturação de objeto
console.log(logradouro, numero, endereco); // Av Brasil 123

const { nome: firstName, ...resto } = pessoa; // Desestruturação de objeto
console.log(firstName, resto); // Lucas { sobrenome: 'Silva', idade: 25, endereco: { rua: 'Av Brasil', numero: 123 } }
