export function atacar(estado, atacanteNome, alvoNome) {
  const eventos = [];

  const novoEstado = estado.map((p) => ({ ...p }));

  const atacante = novoEstado.find((p) => p.nome === atacanteNome);
  const alvo = novoEstado.find((p) => p.nome === alvoNome);

  if (!atacante) {
    eventos.push({
      tipo: "ACAO_INVALIDA",
      motivo: "Atacante inexistente",
      atacante: atacanteNome,
    });
    return { estado: novoEstado, eventos };
  }

  if (!alvo) {
    eventos.push({
      tipo: "ACAO_INVALIDA",
      motivo: "Alvo inexistente",
      alvo: alvoNome,
    });
    return { estado: novoEstado, eventos };
  }

  if (atacante.vida <= 0) {
    eventos.push({
      tipo: "ACAO_INVALIDA",
      motivo: "Atacante morto",
      alvo: alvo.nome,
    });
    return { estado: novoEstado, eventos };
  }

  if (alvo.vida <= 0) {
    eventos.push({
      tipo: "ACAO_INVALIDA",
      motivo: "Alvo morto",
      alvo: alvo.nome,
    });
    return { estado: novoEstado, eventos };
  }

  const dano = 10;
  alvo.vida -= dano;

  eventos.push({
    tipo: "DANO_APLICADO",
    atacante: atacante.nome,
    alvo: alvo.nome,
    dano,
  });

  return { estado: novoEstado, eventos };
}
