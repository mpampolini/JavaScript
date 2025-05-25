console.log(typeof 10); // number
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined

function fizzBuzz(numero) {
  if (typeof numero !== "number") return `Número é um ${typeof numero}`;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz("9")); // Erro: Não é um número
console.log(fizzBuzz(true)); // Erro: Não é um número
console.log(fizzBuzz(NaN)); // Erro: Não é um número
console.log(fizzBuzz(undefined)); // Erro: Não é um número
console.log(fizzBuzz(20)); // Buzz
console.log(fizzBuzz(21)); // 21
