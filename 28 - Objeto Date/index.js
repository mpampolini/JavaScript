// Marco 0 01/01/1970
// 0 = Janeiro
// 11 = Dezembro

// const tresHoras = 3 * 60 * 60 * 1000;
// const data = new Date(0 + tresHoras); // 0 = 1 de janeiro de 1970 formada por milésimos de segundos

// a, m, d, h, M, s, ms
// 0 = domingo 6 = sábado

// const dataString = new Date("2019-04-20T20:20:59.100");
// const data1 = new Date(2019, 3, 20, 15, 14, 27, 500); // 20 de abril de 2019 às 15:14:27

// console.log(data1.toString());
// console.log(dataString.toString());

// console.log("Dia", dataString.getDate());
// console.log("Mês", dataString.getMonth() + 1); // Janeiro = 0
// console.log("Ano", dataString.getFullYear());
// console.log("Hora", dataString.getHours());
// console.log("Minuto", dataString.getMinutes());
// console.log("Segundo", dataString.getSeconds());
// console.log("Milissegundo", dataString.getMilliseconds());
// console.log("Dia da semana", dataString.getDay()); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado getDay() retorna o dia da semana (0 a 6) da data especificada.
// console.log(Date.now()); // Retorna a data atual em milissegundos desde 1 de janeiro de 1970

function formataData(data) {
  const dia = data.getDate().toString().padStart(2, "0"); // Adiciona zero à esquerda se necessário
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Janeiro = 0
  const ano = data.getFullYear();
  const hora = data.getHours().toString().padStart(2, "0");
  const minuto = data.getMinutes().toString().padStart(2, "0"); // Adiciona zero à esquerda se necessário
  const segundo = data.getSeconds().toString().padStart(2, "0"); // Adiciona zero à esquerda se necessário

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); // Formato: dd/mm/aaaa hh:mm:ss
