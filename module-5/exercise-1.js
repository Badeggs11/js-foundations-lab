function classificarVida(personagem) {
  if (personagem.vida <= 0) {
    return "morto";
  } else if (personagem.vida <= 30) {
    return "ferido";
  } else {
    return "saudável";
  }
}

let personagem = {
  nome: "Herói",
  vida: 25,
};

let status = classificarVida(personagem);

console.log("Status:", status);
