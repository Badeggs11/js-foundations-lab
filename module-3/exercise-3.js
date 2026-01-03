let personagem = {
  nome: "Herói",
  vida: 100,
};

function causarDanoSemMutar(p, dano) {
  return {
    nome: p.nome,
    vida: p.vida - dano,
  };
}

let personagemFerido = causarDanoSemMutar(personagem, 30);

console.log("Original:", personagem.vida);
console.log("Novo", personagemFerido.vida);
