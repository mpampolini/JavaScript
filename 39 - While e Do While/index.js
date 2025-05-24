function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("--------------------------");

do {
  rand = random(min, max);
  console.log(rand);
  if (rand === 10) {
    console.log("Acabou");
  }
} while (rand !== 10);
