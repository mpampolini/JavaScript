const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");

for (let i = 0; i < elementos.length; i++) {
  let { tag: tag1, texto } = elementos[i];
  let criarTag = document.createElement(tag1);
  let textoCriado = document.createTextNode(texto);
  criarTag.appendChild(textoCriado);
  //criarTag.innerText = texto;
  //criarTag.innerHTML = texto; Não é necessário usar innerHTML, pois o texto não contém HTML
  //container.innerHTML += criarTag.outerHTML;
  container.appendChild(criarTag);
}
