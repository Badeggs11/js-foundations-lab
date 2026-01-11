import { atacar } from "./engine.js";

let estado = [
  { nome: "Heroi", vida: 100 },
  { nome: "Orc", vida: 50 },
];

let eventos = [];

function render() {
  renderPersonagens();
  renderEventos();
}

function renderPersonagens() {
  const container = document.getElementById("lista-personagens");
  container.innerHTML = "";

  for (let personagem of estado) {
    const div = document.createElement("div");
    div.className = "personagem";

    const nome = document.createElement("div");
    nome.className = "nome";
    nome.textContent = personagem.nome;

    const vida = document.createElement("div");
    vida.className = "vida";
    vida.textContent = "Vida: " + personagem.vida;

    div.appendChild(nome);
    div.appendChild(vida);
    container.appendChild(div);
  }
}

function renderEventos() {
  const log = document.getElementById("log-eventos");
  log.innerHTML = "";

  for (let evento of eventos) {
    const linha = document.createElement("div");

    if (evento.tipo === "DANO_APLICADO") {
      linha.textContent = `${evento.atacante} atacou ${evento.alvo} causando ${evento.dano} de dano`;
    }
    if (evento.tipo === "ACAO_INVALIDA") {
      linha.textContent = `Acao invalida: ${evento.motivo}`;
    }

    log.appendChild(linha);
  }
}

function onAtacar() {
  const resultado = atacar(estado, "Heroi", "Orc");

  estado = resultado.estado;
  eventos = eventos.concat(resultado.eventos);

  render();
}

document.getElementById("btn-atacar").addEventListener("click", onAtacar);

render();
