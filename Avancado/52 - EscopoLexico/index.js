const nome = "Mateus"; // Declara uma variável nome com o valor "Mateus"

function falaNome() {
  console.log(nome); // Exibe o valor da variável nome
}

function usaFalaNome() {
  const nome = "Pampolini"; // Declara uma variável nome com o valor "Pampolini"
  //const nome = "Pampolini"; // Declara uma variável nome com o valor "Pampolini"
  falaNome(); // Chama a função falaNome, que exibe "Mateus" (variável global)
}

usaFalaNome(); // Chama a função usaFalaNome, que por sua vez chama falaNome
