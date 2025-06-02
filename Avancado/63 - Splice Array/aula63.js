//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(indice atual, delete (quantos itens remover), elem1, elem2, elem3);

// pop
//const removidos = nomes.splice(-1,1);

// shift
//const removidos = nomes.splice(0,1);

// push
//const removidos = nomes.splice(nomes.length, 0, "Luiz", "Otávio", "Miranda");

// unshift
const removidos = nomes.splice(0, 0, "Luiz", "Otávio", "Miranda");

//const removidos = nomes.splice(3, 2);
//const removidos = nomes.splice(-2, 4);
//const removidos = nomes.splice(3, 2, "Mateus", "Pampolini");
console.log(nomes, removidos);
