let vidaBase = 100;

let personagem = {
  nome: "Alicia",
  vida: vidaBase,
};

let copiaVida = vidaBase;
let copiaPersonagem = personagem;

vidaBase = 50;

console.log(vidaBase);
console.log(copiaVida);
console.log(personagem.vida);
console.log(copiaPersonagem.vida);
