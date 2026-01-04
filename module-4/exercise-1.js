function estarVivo(personagem) {
  if (personagem.vida > 0) {
    return true;
  } else {
    return false;
  }
}

let personagem = {
  nome: "Herói",
  vida: 10,
};

let vivo = estarVivo(personagem);

console.log("Está vivo?", vivo);
