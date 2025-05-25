const paragrafros = document.querySelector(".paragrafos");
const ps = paragrafros.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
  // backgroundColor
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#FFFFFF";
}

console.log("Olá, 'Mundo'!");
console.log('Olá, "Mundo"!');
console.log(`'Olá', "Mundo"!`);
