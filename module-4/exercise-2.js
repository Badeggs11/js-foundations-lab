function estaVivo(personagem) {
  return personagem.vida > 0;
}

let personagem = {
  nome: "Herói",
  vida: 0,
};

let vivo = estaVivo(personagem);

console.log("Está vivo?", vivo);
