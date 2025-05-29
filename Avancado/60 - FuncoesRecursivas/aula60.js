function recursiva(max) {
  if (max > 10) return;
  console.log(max);
  // Chama a função recursivamente, incrementando o valor de max
  recursiva(++max);
}

recursiva(5);
