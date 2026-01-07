# Módulo 7 — Sistema em Movimento

Objetivo:
Unir funções, estado e loops para simular comportamento.

O que eu acho que é uma "rodada" em um sistema:
(escreva com suas palavras)
É uma leitura dos codigos que estao no sistema

🧠 Ideia-chave do módulo

Sistema é:
estado inicial → regras → estado final

Loop só repete isso várias vezes.

🧠 Regra mental definitiva (guarde)

Um sistema é imutável
não quando nada muda,
mas quando o original não é alterado.

Mudança ≠ mutação.

Você mudou valores, mas não mutou o estado original.

✍️ Ajuste recomendado
module-7/notes.md

Vale registrar explicitamente:

diferença entre “mudar valores” e “mutar estado”

por que esse padrão é melhor para sistemas
preserva o objeto original e ainda assim permite que se atualize o resultado

Esse é um conceito que você vai usar sempre.
Espero que sim

🧠 Frase-chave (muito importante)

Sistema bom é aquele onde o estado antigo ainda existe.

Se o estado antigo some, você perde:

controle

histórico

confiança

Vale muito registrar algo como:

o que diferencia uma função comum de uma rodada?
funcao de rodada representa o tempo passando, altera um sistema inteiro;

por que retornar o estado inteiro é importante?
para que se tenha um controle histórico do objeto.
