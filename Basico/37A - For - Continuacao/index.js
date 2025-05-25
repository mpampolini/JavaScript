//const nome = "Luiz Otávio";
const nome = ["Luiz", "Otávio", "Henrique"];

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// console.log("###############################");

// for (let i in nome) {
//   console.log(nome[i]);
// }

// console.log("###############################");

// Obter o valor sem precisar do índice
for (let valor of nome) {
  console.log(valor);
}

nome.forEach(function (elemento, indece, array) {
  console.log(elemento, indece, array);
});
