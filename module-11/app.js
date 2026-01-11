let estado = [
  { nome: "Heroi", vida: 100 },
  { nome: "Orc", vida: 50 },
];

function render() {
  renderPersonagens();
  renderEventos();
}

let eventos = [];

function renderPersonagens() {
  const container = document.getElementById("lista-personagens");
  container.innerHTML = "";

  for (let i = 0; i < estado.length; i++) {
    const personagem = estado[i];

    const div = document.createElement("div");
    div.className = "personagem";

    const nome = document.createElement("div");
    nome.className = "nome";
    nome.textContent = personagem.nome;

    const vida = document.createElement("div");
    vida.className = "vida";
    vida.textContent = "vida: " + personagem.vida;

    div.appendChild(nome);
    div.appendChild(vida);
    container.appendChild(div);
  }
}

function renderEventos() {
  const log = document.getElementById("log-eventos");
  log.innerHTML = "";

  for (let i = 0; i < eventos.length; i++) {
    const evento = eventos[i];

    const linha = document.createElement("div");
    linha.textContent = evento;

    log.appendChild(linha);
  }
}

function atacar() {
  const dano = 10;

  for (let i = 0; i < estado.length; i++) {
    if (estado[i].nome === "Orc") {
      estado[i].vida -= dano;

      eventos.push("Heroi atacaou Orc causando " + dano + " de dano");
    }
  }
  render();
  setTimeout(() => {
    estado[1].vida = 100;
    render();
  }, 3000);
}

document.getElementById("btn-atacar").addEventListener("click", atacar);

render();
