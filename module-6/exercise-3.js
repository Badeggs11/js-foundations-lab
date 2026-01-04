let personagens = [
  { nome: "Herói", vida: 100 },
  { nome: "Orc", vida: 0 },
  { nome: "Mago", vida: 30 },
];

for (let i = 0; i < personagens.length; i++) {
  let personagem = personagens[i];
  console.log(personagem.nome, "-", personagem.vida);
}
