function processarAcaoAtacar(personagens, acao) {
  let resultado = [];
  let eventos = [];

  for (let i = 0; i < personagens.length; i++) {
    let atual = personagens[i];

    if (atual.nome === acao.atacante && atual.vida > 0) {
      let novaVida = atual.vida - acao.dano;

      resultado.push({
        nome: atual.nome,
        vida: novaVida,
      });

      eventos.push({
        nome: atual.nome,
        vida: novaVida,
      });

      eventos.push({
        tipo: "DANO_APLICADO",
        alvo: atual.nome,
        dano: acao.dano,
      });
    } else {
      resultado.push(atual);
    }
  }
  return { estado: resultado, eventos: eventos };
}
let personagens = [
  { nome: "Herói", vida: 100 },
  { nome: "Orc", vida: 50 },
];
let acao = { tipo: "ATACAR", atacante: "Herói", dano: 10 };
let saida = processarAcaoAtacar(personagens, acao);
console.log("Eventos:", saida.eventos);
console.log("Estado depois:", saida.estado);
