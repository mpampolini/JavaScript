function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("x e y devem ser números");
  }
  return x + y;
}

try {
  console.log(soma(10, 20)); // 30
  console.log(soma(10, "20")); // Erro: x e y devem ser números
} catch (e) {
  console.log(e.name); // TypeError: x e y devem ser números
  console.log(e.message); // x e y devem ser números
}
