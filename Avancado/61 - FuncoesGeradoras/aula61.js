// Lazy Evaluation with Generators
// sintax: function* nomeDaGeradora() { ... }
// A generator function is a special type of function that can be paused and resumed,
// allowing it to produce a series of values over time, rather than computing them all at once and returning them in an array.
function* geradora1() {
  // Código qualquer...
  // retorna o primeiro valor
  yield "Valor 1";
  // Código qualquer...
  yield "Valor 2";
  // Código qualquer...
  yield "Valor 3";
}

const g1 = geradora1();

//console.log(g1);
// console.log(g1.next().value); // { value: 'Valor 1', done: false }
// console.log(g1.next().value); // { value: 'Valor 2', done: false }
// console.log(g1.next()); // { value: 'Valor 3', done: false }
// console.log(g1.next()); // { value: undefined, done: true }
for (let valor of g1) {
  console.log(valor);
}

function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
for (let i = 0; i < 10; i++) {
  console.log(g2.next().value);
}

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}
function* geradora4() {
  yield* geradora3(); // Chama a geradora3 e retorna seus valores
  yield 3;
  yield 4;
  yield 5;
}

for (let valor of geradora4()) {
  console.log(valor);
}

function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };
  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1(); // "Vim do y1"
func2(); // "Vim do y2"
