function processarAcaoAtacar(personagens, acao) {
  let resultado = [];
  let eventos = [];

  for (let i = 0; i < personagens.length; i++) {
    let atual = personagens[i];

    if (atual.nome === acao.atacante) {
      if (atual.vida <= 0) {
        eventos.push({
          tipo: "ACAO_INVALIDA",
          motivo: "Atacante esta morto",
          atacante: atual.nome,
        });

        resultado.push(atual);
      } else {
        resultado.push({
          nome: atual.nome,
          vida: atual.vida - acao.dano,
        });
        eventos.push({
          tipo: "DANO_APLICADO",
          alvo: atual.nome,
          dano: acao.dano,
        });
      }
    } else {
      resultado.push(atual);
    }
  }

  return { estado: resultado, eventos };
}

let personagens = [
  { nome: "Herói", vida: 0 },
  { nome: "Orc", vida: 50 },
];

let acao = {
  tipo: "ATACAR",
  atacante: "Herói",
  dano: 10,
};

let saida = processarAcaoAtacar(personagens, acao);

console.log("Eventos:", saida.eventos);
console.log("Estado depois:", saida.estado);
