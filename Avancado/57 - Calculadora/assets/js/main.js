// function criaCalculadora() {
//   return {
//     display: document.querySelector(".display"),

//     inicia() {
//       this.cliqueBotoes();
//       this.pressionaBackSpace();
//       this.pressionaEnter();
//     },

//     pressionaBackSpace() {
//       this.display.addEventListener("keydown", (e) => {
//         if (e.keyCode === 8) {
//           e.preventDefault();
//           this.clearDisplay();
//         }
//       });
//     },

//     pressionaEnter() {
//       this.display.addEventListener("keyup", (e) => {
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       });
//     },

//     realizaConta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if (!conta) {
//           alert("Conta inválida");
//           return;
//         }

//         this.display.value = String(conta);
//       } catch (e) {
//         alert("Conta inválida");
//         return;
//       }
//     },

//     clearDisplay() {
//       this.display.value = "";
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     cliqueBotoes() {
//       document.addEventListener("click", (e) => {
//         const el = e.target;

//         if (el.classList.contains("btn-num")) {
//           this.btnParaDisplay(el.innerText);
//         }

//         if (el.classList.contains("btn-clear")) {
//           this.clearDisplay();
//         }

//         if (el.classList.contains("btn-del")) {
//           this.apagaUm();
//         }

//         if (el.classList.contains("btn-eq")) {
//           this.realizaConta();
//         }

//         this.display.focus();
//       });
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor;
//     },
//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

function criaCalculadora() {
  return {
    // Atributos declarados na parte superior
    display: document.querySelector(".display"),

    // Métodos declarados na parte inferior
    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    // pressionar enter
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          // Se a tecla pressionada for Enter (código 13)
          this.realizaConta();
        }
      });
    },

    pressionaBackSpace() {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },

    // pressionaEnter() {
    //   this.display.addEventListener("keyup", (e) => {
    //     if (e.keyCode === 13) {
    //       console.log(this.display.value);
    //       // Se a tecla pressionada for Enter (código 13)
    //       this.realizaConta();
    //     }
    //   });
    // },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUltimo() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;
      console.log(conta);
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
    },

    cliqueBotoes() {
      // this é o objeto calculadora
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          // Se o botão for de apagar, remove o último caractere do display
          this.apagaUltimo();
        }

        if (el.classList.contains("btn-eq")) {
          // Se o botão for de igual, avalia a expressão no display
          this.realizaConta();
        }

        this.display.focus(); // Foca no display após cada clique
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
