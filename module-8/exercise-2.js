function processarAcaoAtacar(personagens, acao) {
  let resultado = [];

  for (let i = 0; i < personagens.length; i++) {
    let atual = personagens[i];

    if (atual.nome === acao.atacante && atual.vida > 0) {
      resultado.push({
        nome: atual.nome,
        vida: atual.vida - acao.dano,
      });
    } else {
      resultado.push(atual);
    }
  }

  return resultado;
}

let personagens = [
  { nome: "Herói", vida: 100 },
  { nome: "Orc", vida: 50 },
];

let acao = {
  tipo: "ATACAR",
  atacante: "Herói",
  dano: 10,
};

let depois = processarAcaoAtacar(personagens, acao);

console.log("Antes:", personagens);
console.log("Depois:", depois);
