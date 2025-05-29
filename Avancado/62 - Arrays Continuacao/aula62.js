const nomes = ["Luiz", "Maria", "João"];
let novo = [...nomes]; // Cria uma cópia do array nomes
nomes[2] = "João";

const removido = nomes.pop(); // Remove o último elemento do array retornando-o

const removido2 = nomes.shift(); // Remove o primeiro elemento do array retornando-o

nomes.push("Eduardo"); // Adiciona um elemento ao final do array

// unshift adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
nomes.unshift("Fábio"); // Adiciona um elemento ao início do array

novo = novo.slice(0, 2); // Cria um novo array com os dois primeiros elementos de novo
// splice altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar.

// delete nomes[2]; // Deleta o índice 2
delete nomes[3]; // Deleta o índice 3
console.log(nomes);
console.log(removido);
console.log(removido2);

console.log(novo);

// nomes2 é um array com 6 elementos
//const nomes2 = new Array("Luiz", "Maria", "João", "Eduardo", "Gabriel", "Júlia");

const nome = "Mateus Silva Sauro";
const nomes2 = nome.split(" "); // Cria um array a partir da string nome, separando por espaços
const nomes3 = nomes2.join(" "); // Cria uma string a partir do array nomes2, unindo os elementos com espaços
console.log(nomes2);
console.log(nomes3);
