# Módulo 5 — Múltiplos Caminhos

Objetivo:
Entender decisões que levam a resultados diferentes.

O que muda quando uma regra não retorna apenas true/false:
(escreva com suas palavras)

A necessidade de usar o if.

🧠 Ideia-chave do módulo

Decidir não é só permitir ou bloquear.
Decidir é escolher um resultado.

🔑 Frase-chave do Módulo 5 (memorize)

Regra decide o que é.
Consequência decide o que acontece.

Se você misturar essas duas coisas:
o código cresce torto
regras ficam difíceis de mudar
tudo vira um “ifão”

Anote explicitamente:

onde fica a regra:
uma boa prática manter a função que dita a regra separada da função que informa a consequência;

onde fica a consequência:
na funcao consequência que recebe uma referencia da função regra;

por que separar isso facilita o RPG:
Porque voce só precisa aplicar o (personagem a regra) e isto a consequencia
