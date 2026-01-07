function causarDanoSeVivo(personagem, dano) {
  if (personagem.vida > 0) {
    return {
      nome: personagem.nome,
      vida: personagem.vida - dano,
    };
  }
  return personagem;
}

let personagens = [
  { nome: "Herói", vida: 100 },
  { nome: "Orc", vida: 0 },
  { nome: "Mago", vida: 60 },
];

let novosPersonagens = [];

for (let i = 0; i < personagens.length; i++) {
  let atual = personagens[i];
  let atualizado = causarDanoSeVivo(atual, 10);
  novosPersonagens.push(atualizado);
}

console.log(novosPersonagens);
