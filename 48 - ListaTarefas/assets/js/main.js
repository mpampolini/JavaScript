const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// Cria a li
function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  //botaoApagar.classList.add("apagar");

  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;

  // Cria a tarefa
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    // Pega o elemento pai (li) e remove
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  // Transformar em JSON
  // JSON.stringify transforma um objeto em string
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  // Salvar em localStorage
  // localStorage.setItem salva um item no localStorage
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  // Pega o item tarefas do localStorage
  // localStorage.getItem pega um item do localStorage
  const tarefas = localStorage.getItem("tarefas");
  // JSON.parse transforma uma string em objeto
  const listaDeTarefas = JSON.parse(tarefas);
  // Se não houver tarefas salvas, retorna
  if (!listaDeTarefas) return;
  // Se houver tarefas salvas, cria as tarefas
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
  console.log(listaDeTarefas);
}

adicionaTarefasSalvas();
