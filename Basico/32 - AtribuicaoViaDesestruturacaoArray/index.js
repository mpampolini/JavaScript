// ... rest, ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const [um, dois, tres, ...resto] = numeros;
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete); // 1000 3000 5000 7000
//console.log(um, dois, tres); // 1000 2000 3000
//console.log(resto); // [4000, 5000, 6000, 7000, 8000, 9000]
