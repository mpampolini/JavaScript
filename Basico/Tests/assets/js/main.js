const data = new Date();
console.log(data);
const container = document.querySelector(".container");

function criaLista() {
  const lista = document.createElement("ul");
  lista.classList.add("lista");
  container.appendChild(lista);
}

function criaItemLista() {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = "Item da lista";
  const lista = document.querySelector(".lista");
  lista.appendChild(item);
}

criaLista();

const intervalo = setInterval(() => {
  const lista = document.querySelector(".lista");
  if (lista.children.length < 10) {
    criaItemLista();
  } else {
    clearInterval(intervalo);
    console.log("Lista completa!");
  }
}, 0);
// This code creates a list in the container and adds items to it every second until there are 10 items.
