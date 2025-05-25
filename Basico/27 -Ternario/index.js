// ? :
// Ternary operator
// (condição) ? (valor se verdadeiro) : (valor se falso)

const pontuacoUsuario = 999;

const nivelUsuario = pontuacoUsuario >= 1000 ? "Usuário VIP" : "Usuário Comum";

const corUsuario = null;
const corPadrao = corUsuario || "Preto"; // Se corUsuario for null, o valor de corPadrao será "Preto", caso contrário, será o valor de corUsuario

// Se pontuacaoUsuario for maior ou igual a 1000, o valor de nivelUsuario será "Usuário VIP", caso contrário, será "Usuário Comum"
console.log(nivelUsuario);

console.log(corPadrao); // Se corUsuario for null, o valor de corPadrao será "Preto", caso contrário, será o valor de corUsuario
