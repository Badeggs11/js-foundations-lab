let personagem = {
  nome: "Herói",
  vida: 100,
};

function causarDano(p, dano) {
  p.vida = p.vida - dano;
}

causarDano(personagem, 30);
console.log("Vida após dano:", personagem.vida);
