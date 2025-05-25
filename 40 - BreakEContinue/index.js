const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue; // Pula para a próxima iteração do loop sem executar o restante do código dentro do loop
  }

  if (numero === 7) {
    break; // Interrompe o loop completamente
  }

  console.log(numero);
}

for (let i of numeros) {
  let numero = i;
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue; // Pula para a próxima iteração do loop sem executar o restante do código dentro do loop
  }

  if (numero === 7) {
    break; // Interrompe o loop completamente
  }

  console.log(numero);
}

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue; // Pula para a próxima iteração do loop sem executar o restante do código dentro do loop
  }

  if (numero === 7) {
    break; // Interrompe o loop completamente
  }

  console.log(numero);
}

let i = 0;

while (i < numeros.length) {
  let numero = numeros[i];
  if (numero === 2) {
    console.log("Pulei o número 2");
    i++; // Incrementa o índice para evitar loop infinito
    continue; // Pula para a próxima iteração do loop sem executar o restante do código dentro do loop
  }

  if (numero === 7) {
    break; // Interrompe o loop completamente
  }

  i++; // Incrementa o índice para evitar loop infinito

  console.log(numero);
}

i = 0;

do {
  let numero = numeros[i];
  if (numero === 2) {
    console.log("Pulei o número 2");
    i++; // Incrementa o índice para evitar loop infinito
    continue; // Pula para a próxima iteração do loop sem executar o restante do código dentro do loop
  }

  if (numero === 7) {
    break; // Interrompe o loop completamente
  }

  i++; // Incrementa o índice para evitar loop infinito

  console.log(numero);
} while (i < numeros.length);
