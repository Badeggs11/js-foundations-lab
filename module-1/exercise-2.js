let personagemA = {
    nome: "Herói",
    vida: 100
};

let personagemB = personagemA;

personagemB.vida = 50;

console.log(personagemA.vida);
console.log(personagemB.vida);

