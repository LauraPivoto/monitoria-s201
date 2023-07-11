class Gato extends Animal {
  constructor(nome, idade, especie, cor) {
    super(nome, idade, especie);
    this.cor = cor;
  }

  printInfo() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}, Cor: ${this.cor}`);
  }
}