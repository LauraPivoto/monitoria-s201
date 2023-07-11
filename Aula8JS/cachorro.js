class Cavalo extends AnimalCorrida {
  constructor(velocidade, nome, cor, posicao) {
    super(velocidade, nome, cor);
    this._posicao = 0;
  }

  mover() {
    while(${this.posicao < 200}){
      ${this.posicao} = ${this.velocidade*4};
    }else{
      console.log('${this.nome} terminou a corrida');
    }
  }

  get posicao() {
    return this._posicao;
  }

  set posicao(value) {
    this._posicao = value;
  }
}