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

let status = "ferido";

let mensagem = mensagemPorStatus(status);

console.log(mensagem);
