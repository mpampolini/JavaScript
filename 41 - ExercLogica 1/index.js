function max(x, y) {
  return x > y ? x : y;
}

console.log(max(10, 20));

const max2 = (x, y) => {
  return x > y ? x : y;
};

console.log(max2(100, 20));

const max3 = (x, y) => (x > y ? x : y);
console.log(max3(1, 27));
