function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    resultado.innerHTML += `<p>Nome: ${nome.value} - Sobrenome: ${sobrenome.value} - Peso: ${peso.value} - Idade: ${altura.value} </p>`;

    console.log(pessoas);
  }

  form.addEventListener("submit", recebeEventoForm);

  // Uma das formas de evitar o recarregamento da página
  //   form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //     alert(1);
  //     console.log("Foi enviado");
  //   };
}

meuEscopo();
