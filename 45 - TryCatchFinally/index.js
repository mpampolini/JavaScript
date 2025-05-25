try {
  console.log(a); // Erro: a is not defined
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando o erro");
} finally {
  // O bloco finally é sempre executado, independentemente de um erro ter ocorrido ou não
  // Para que não seja executado, pode-se omitir o bloco finally
  // Para que não seja executado, o código deve ser interrompido com um return ou um throw
  console.log("FINALLY: Eu sempre sou executado");
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("07-05-1982 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch (e) {
  // Tratar o erro
} finally {
  console.log("FINALLY: Eu sempre sou executado, Tenha um bom dia!");
}
