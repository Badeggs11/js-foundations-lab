# Módulo 3 — Estado

Objetivo:
Entender objetos como representação de estado.

O que eu acho que é "estado" em um programa:
(escreva com suas palavras, sem pesquisar)
é em qual situação o objeto se encontra, com quais valores

Ideia-chave do módulo
Estado é um retrato de “como as coisas estão agora”.

O estado só faz uma leitura dos atributos do objeto, capturando como eles estão naquele momento

Mudar o estado é aplicar uma alteração em algum dos atributos do objeto; A alteração pode ser feita por uma função sem retorno, que somente atua no objeto mas não devolve nada. Interessante de ser usada quando quero fazer alterações silenciosas no objeto.

🔑 Regra de ouro do Módulo 3

Ler estado é seguro.
Mutar estado é perigoso.
Retornar novo estado é poderoso.

Aprendi que não preciso mudar realmento o estado de um objeto se quiser expressar mudanças como retorno. Posso apenar ler o estado e retornar um novo objeto com as alterações que desejo no objeto anterior.

O JavaScript faz, conceitualmente:

- Cria um novo objeto
- Reserva outro espaço na memória
- Copia os valores:
  nome (string, valor simples)
  vida (number, valor simples)
- Retorna a referência desse novo objeto
- Nada no objeto original é alterado.
