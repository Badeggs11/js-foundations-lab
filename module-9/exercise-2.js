function processarAcaoAtacar(personagens, acao) {
  let resultado = [];
  let eventos = [];
  let alvoEncontrado = false;

  for (let i = 0; i < personagens.length; i++) {
    let atual = personagens[i];

    if (atual.nome === acao.alvo) {
      alvoEncontrado = true;

      if (atual.vida <= 0) {
        eventos.push({
          tipo: "ACAO_INVALIDA",
          motivo: "Alvo já está morto",
          alvo: atual.nome,
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
  if (!alvoEncontrado) {
    eventos.push({
      tipo: "ACAO_INVALIDA",
      motivo: "Alvo inexistente",
      alvo: acao.alvo,
    });
  }

  return { estado: resultado, eventos };
}

let personagens = [
  { nome: "Herói", vida: 100 },
  { nome: "Orc", vida: 50 },
];

let acao = {
  tipo: "ATACAR",
  atacante: "Herói",
  alvo: "Dragão",
  dano: 10,
};

let saida = processarAcaoAtacar(personagens, acao);

console.log("Eventos:", saida.eventos);
console.log("Estado depois:", saida.estado);
