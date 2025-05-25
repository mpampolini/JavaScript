const h1 = document.querySelector(".container h1");
const data = new Date();

const dia = data.getDate();
const mes = data.getMonth(); // Janeiro = 0
const ano = data.getFullYear();
const hora = data.getHours().toString().padStart(2, "0"); // Adiciona zero à esquerda se necessário
const minuto = data.getMinutes().toString().padStart(2, "0"); // Adiciona zero à esquerda se necessário
const diaSemana = data.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

// diaSemanaTexto é um array que contém os nomes dos dias da semana e diaSemana é usado como índice para obter o nome do dia atual
// O índice do array diaSemanaTexto começa em 0, então usamos diaSemana diretamente
const diaSemanaTexto = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
][diaSemana];

// meses é um array que contém os nomes dos meses do ano e mes - 1 é usado para obter o índice correto do mês atual
// O índice do array meses começa em 0, então subtraímos 1 do mês atual para obter o nome correto do mês
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
][mes];

const dataFormatada = `${diaSemanaTexto}, ${dia} de ${meses} de ${ano} às ${hora}:${minuto}`;

h1.innerHTML = dataFormatada;
h1.innerHTML += "<br>";

// Outra forma de exibir a data formatada com apenas 3 comandos
const data1 = new Date();

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

h1.innerHTML +=
  data1.toLocaleDateString("pt-BR", options).charAt(0).toUpperCase() +
  data1.toLocaleDateString("pt-BR", options).slice(1);
