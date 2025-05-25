function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// setInterval executa uma função a cada X milissegundos
// setInterval é uma função que executa uma função a cada X milissegundos
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

// setTimeout executa uma função após X milissegundos
// setTimeout é uma função que executa uma função após X milissegundos
setTimeout(function () {
  clearInterval(timer);
}, 5000); // Para o setInterval após 5 segundos

setTimeout(function () {
  console.log("Olá Mundo!");
}, 6000);
