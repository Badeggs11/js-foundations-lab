function causarDanoSemMutar(personagem, dano) {
  return {
    nome: personagem.nome,
    vida: personagem.vida - dano,
  };
}

let personagens = [
  { nome: "Herói", vida: 100 },
  { nome: "Orc", vida: 80 },
  { nome: "Mago", vida: 60 },
];

let novosPersonagens = [];

for (let i = 0; i < personagens.length; i++) {
  let personagemAtual = personagens[i];
  let personagemAtualizado = causarDanoSemMutar(personagemAtual, 10);
  novosPersonagens.push(personagemAtualizado);
}

console.log(novosPersonagens);
