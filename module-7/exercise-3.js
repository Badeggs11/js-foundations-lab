function rodadaDano(personagens, dano) {
  let resultado = [];

  for (let i = 0; i < personagens.length; i++) {
    let atual = personagens[i];

    if (atual.vida > 0) {
      resultado.push({
        nome: atual.nome,
        vida: atual.vida - dano,
      });
    } else {
      resultado.push(atual);
    }
  }

  return resultado;
}

let personagens = [
  { nome: "Herói", vida: 20 },
  { nome: "Orc", vida: 0 },
  { nome: "Mago", vida: 15 },
];

let depoisDaRodada = rodadaDano(personagens, 10);

console.log("Antes:", personagens);
console.log("Depois:", depoisDaRodada);
