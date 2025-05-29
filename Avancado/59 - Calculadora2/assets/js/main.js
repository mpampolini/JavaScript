function Calculadora() {
  // Atributos declarados na parte superior
  this.display = document.querySelector(".display");
  // Métodos declarados na parte inferior
  this.inicia = () => {
    cliqueBotoes();
    pressionaBackSpace();
    pressionaEnter();
  };

  // pressionar enter
  pressionaEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        // Se a tecla pressionada for Enter (código 13)
        this.realizaConta();
      }
    });
  };

  pressionaBackSpace = () => {
    this.display.addEventListener("keydown", (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        this.clearDisplay();
      }
    });
  };

  clearDisplay = () => {
    this.display.value = "";
  };

  apagaUltimo = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  realizaConta = () => {
    let conta = this.display.value;

    try {
      // Avalia a expressão matemática contida no display
      console.log(conta);
      conta = eval(conta);

      if (!conta) {
        alert("Conta inválida");
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  cliqueBotoes = () => {
    // this é o objeto calculadora
    document.addEventListener("click", (event) => {
      const element = event.target;

      if (element.classList.contains("btn-num")) {
        btnParaDisplay(element.innerText);
      }

      if (element.classList.contains("btn-clear")) {
        clearDisplay();
      }

      if (element.classList.contains("btn-del")) {
        // Se o botão for de apagar, remove o último caractere do display
        apagaUltimo();
      }

      if (element.classList.contains("btn-eq")) {
        // Se o botão for de igual, avalia a expressão no display
        realizaConta();
      }

      this.display.focus(); // Foca no display após cada clique
    });
  };

  btnParaDisplay = (valor) => {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
