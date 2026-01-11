# Módulo 11 — JS no Frontend

Objetivo:
Ligar estado em JavaScript com interface HTML.

O que eu acho que significa "renderizar":
(escreva com suas palavras)
é atualizar a tela(UI) para que apresente o estado atual;
O que eu acho que é "estado no frontend":
(escreva com suas palavras)
A condição dos valores dos atributos e constantes e resultados no momento

🧠 Regra de ouro (guarde essa)

UI dispara intenções.
Estado define a verdade.
Render projeta a verdade.

🧠 Regra de ouro (guarde isso)

ID (#) → identidade única
Classe (.) → tipo reutilizável

Se você decorar só isso, já está ótimo.

⚠️ Um detalhe importante (especificidade)

IDs têm prioridade maior que classes.

Se você fizer isso:

.vida { color: red; }
#log-eventos { color: green; }

O #log-eventos vence.

Isso importa depois — mas por enquanto só saiba que:

# é mais forte que .

🔁 Conexão com sua engine (olha que bonito isso)
Engine Frontend
personagem.id id
tipo de entidade class
lista de entidades .personagem
log único #log-eventos

Mesma ideia. Outro domínio.
