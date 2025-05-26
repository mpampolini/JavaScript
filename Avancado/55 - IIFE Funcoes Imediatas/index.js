// IIFE -> Immediately Invoked Function Expression
// Função que é executada imediatamente após ser definida
// Função auto invocada
// Útil para criar escopos isolados e evitar poluição do escopo global
// (function () {})(); // IIFE
(function () {
  console.log("Olá mundo!");
})();

// Exemplo de IIFE com parâmetros
(function (nome) {
  console.log(`Olá ${nome}!`);
})("João");

// Exemplo de IIFE com escopo isolado
(function () {
  const nome = "Maria";
  console.log(`Olá ${nome}!`);
})();

// Exemplo de IIFE com escopo isolado e retorno
(function (nome) {
  const saudacao = `Olá ${nome}!`;
  return saudacao;
})("Ana");
