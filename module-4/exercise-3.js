function podeAtacar(atacante, defensor) {
  return atacante.vida > 0 && defensor.vida > 0 && atacante.energia >= 10;
}

let atacante = {
  nome: "Herói",
  vida: 10,
  energia: 5,
};

let defensor = {
  nome: "Orc",
  vida: 20,
};

let resultado = podeAtacar(atacante, defensor);

console.log("Pode atacar?", resultado);
