function criarAcaoAtacar(atacante, dano) {
  return {
    tipo: "ATACAR",
    atacante: atacante,
    dano: dano,
  };
}

let acao = criarAcaoAtacar("Herói", 10);

console.log(acao);
