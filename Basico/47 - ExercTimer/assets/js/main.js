// new Date(0)

function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", (event) => {
    const elemento = event.target;

    if (elemento.classList.contains("zerar")) {
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
    }

    if (elemento.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (elemento.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }
    //console.log(event.target); // event.target é o elemento que foi clicado
    //console.log(event.currentTarget); // event.currentTarget é o elemento que está ouvindo o evento
    //console.log(event); // event é o evento que ocorreu
    //console.log(event.currentTarget === elemento); // true
    //console.log(event.currentTarget === relogio); // false
    //console.log(event.currentTarget === document); // true
    //console.log(event.currentTarget === window); // false
    //console.log(event.currentTarget === document.querySelector('.relogio')); // true
    //console.log(event.currentTarget === document.querySelector('.relogio').parentNode); // true
    //console.log(event.currentTarget === document.querySelector('.relogio').parentNode.parentNode); // true
  });
}
relogio();
