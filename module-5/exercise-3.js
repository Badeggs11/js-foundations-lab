function classificarVida(personagem) {
  if (personagem.vida <= 0) {
    return "morto";
  } else if (personagem.vida <= 30) {
    return "ferido";
  } else {
    return "saudável";
  }
}

function mensagemPorStatus(status) {
  switch (status) {
    case "morto":
      return "O personagem caiu em combate";
    case "ferido":
      return "O personagem esta gravemente ferido";
    case "saudável":
      return "O personagem está pronto para lutar";
    default:
      return "Status desconhecido";
  }
}

let personagem = {
  noem: "Herói",
  vida: 20,
};

let status = classificarVida(personagem);

let mensagem = mensagemPorStatus(status);

console.log(mensagem);
