// Factory functions (Função Fábrica) são funções que retornam objetos ou outras funções,
// permitindo a criação de instâncias com propriedades e métodos específicos.
// Elas são úteis para encapsular lógica e criar objetos reutilizáveis.

function criaPessoa(nome, sobrenome, a = 1.75, p = 70) {
  return {
    nome,
    sobrenome,
    // Método para retornar o nome completo da pessoa

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter para definir o nome completo da pessoa
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },
    fala(assunto = "falando sobre nada") {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    // Getter para calcular o IMC (Índice de Massa Corporal)
    // O getter permite acessar o IMC como uma propriedade, sem precisar chamar como função.
    get imc() {
      const indice = this.peso / (this.altura * this.altura);
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Mateus", "Couto", 1.85, 115);
p1.nomeCompleto = "Lucas Pampolini Couto";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
