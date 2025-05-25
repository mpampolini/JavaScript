function ePaisagem(largura, altura) {
  return largura > altura;
}

console.log(ePaisagem(1920, 1080)); // true
console.log(ePaisagem(1080, 1920)); // false

const ePaisagem2 = (largura, altura) => {
  return largura > altura;
};

console.log(ePaisagem2(1920, 1080));
console.log(ePaisagem2(1080, 1920)); // false

const ePaisagem3 = (largura, altura) => largura > altura;

console.log(ePaisagem3(1920, 1080)); // true
console.log(ePaisagem3(1080, 1920)); // false
