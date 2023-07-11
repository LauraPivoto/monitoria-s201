class AnimalCorrida {
  constructor(velocidade, nome, cor) {
    this.velocidade = velocidade;
    this.nome = nome;
    this.cor = cor;
  }
  
}

class Cavalo extends AnimalCorrida {
  constructor(velocidade, nome, cor, posicao) {
    super(velocidade, nome, cor);
    this._posicao = 0;
  }

  mover() {
    while(this.posicao < 200){
      this.posicao = this.posicao + this.velocidade*4; }
    console.log(`${this.nome} terminou a corrida!`);
  }

  get posicao() {
    return this._posicao;
  }

  set posicao(value) {
    this._posicao = value;
  }
}

c1 = new Cavalo(10, 'Figo', 'preto');
c2 = new Cavalo(11, 'Theo', 'preto');
c3 = new Cavalo(12, 'Thor', 'preto');

c1.mover();
c2.mover();
c3.mover();



