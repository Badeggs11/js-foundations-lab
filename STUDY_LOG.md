# 🧠 STUDY_LOG — Curso de Arquitetura JS + Frontend + Engine

Este documento registra **o que foi estudado**, **como foi estudado** e **por que o curso está estruturado dessa forma**. Ele serve como memória técnica e também como guia mental para revisões futuras.

---

## 📌 FILOSOFIA DO CURSO

Este curso **não é baseado em copiar código** nem em decorar frameworks.

Ele segue três princípios centrais:

1. **Separação de responsabilidades**
2. **Estado como fonte da verdade**
3. **Previsão antes da execução**

Tudo é aprendido de forma incremental, respeitando o fluxo real de sistemas interativos (jogos, frontends modernos, engines).

---

## 🔁 RITUAL FIXO DE APRENDIZADO

Cada exercício segue sempre o mesmo ciclo:

1. **Previsão** — o que deve acontecer?
2. **Execução** — rodar o código
3. **Observação** — o que realmente aconteceu?
4. **Explicação** — por que aconteceu?
5. **Registro** — anotar o aprendizado

Esse ritual treina **pensamento causal**, não tentativa e erro.

---

## 🧩 MÓDULO 9 — AÇÕES, VALIDAÇÕES E EVENTOS

### Conceitos aprendidos

- Ação ≠ Evento
- Ação é intenção
- Evento é o que realmente aconteceu
- Estado só muda via processamento válido

### Arquitetura introduzida

- Função recebe estado + ação
- Função retorna:

  - novo estado
  - lista de eventos

- Eventos inválidos também são registrados

### Exemplos de eventos

- `DANO_APLICADO`
- `ACAO_INVALIDA`

### Previsões treinadas

- O dano será aplicado?
- O estado muda?
- Qual evento deve ser gerado?

---

## 🧱 MÓDULO 10 — HTML, CSS E VISUAL COMO SISTEMA

### Trilha B — HTML/CSS

#### HTML

- HTML representa **estado**, não comportamento
- HTML inicial pode ser vazio
- HTML descreve estrutura e significado

#### CSS

- CSS não muda estado
- CSS muda percepção e hierarquia
- Visual "cru" ≠ visual feio

#### Classes e IDs

- `#id` → elemento único
- `.classe` → tipo reutilizável
- Classes são contrato entre HTML, CSS e JS

### Trilha C — Visual

- Visual também é sistema
- Consistência > enfeite
- Cada elemento visual tem intenção

### Previsões treinadas

- O HTML muda?
- O estado muda?
- Só o visual muda?

---

## ⚙️ MÓDULO 11 — JAVASCRIPT NO FRONTEND

### Conceitos centrais

- Estado no frontend
- Render como projeção do estado
- UI não manda, estado manda

### Estrutura criada

- `estado` em JS
- `render()` responsável pela tela
- HTML como casca inicial

### Função render

Responsabilidades:

- Limpar a tela
- Percorrer o estado
- Criar elementos HTML
- Inserir no DOM

### Importante

- Render não altera estado
- Estado não altera UI sozinho
- Reatividade só existe se `render()` for chamado

### Eventos no frontend

- Eventos armazenados em array
- Log visual como histórico
- UI apenas exibe eventos

### Previsões treinadas

- Onde está o estado?
- Onde ocorre o render?
- O que muda primeiro: estado ou tela?

---

## 🧠 MÓDULO 12 — ENGINE INTEGRADA AO FRONTEND

### Virada arquitetural

Antes:

- Botão decidia regra

Depois:

- UI dispara intenção
- Engine decide regra
- Frontend apenas aplica e renderiza

### Engine

Responsabilidades:

- Receber estado
- Criar cópia segura
- Validar regras
- Gerar eventos estruturados
- Retornar `{ estado, eventos }`

### Padrões importantes

- `map + spread` → cópia do estado
- `find` → localizar entidades
- `return` antecipado → parar fluxo inválido

### Early return

- Evita execução indevida
- Garante contrato da função
- Protege frontend de erros

### Frontend

Responsabilidades:

- Chamar engine
- Substituir estado
- Concatenar eventos
- Renderizar resultado

### Previsões treinadas

- Quem decide a regra?
- A engine conhece a UI?
- O frontend conhece as regras?

---

## 🧠 FRASES-CHAVE DO CURSO

- **A tela é consequência. O estado é causa.**
- **UI dispara intenções, engine decide, render projeta.**
- **Eventos explicam o que aconteceu, não mudam o estado.**
- **Separação de responsabilidades evita bugs.**

---

## 🎯 OBJETIVO FINAL DO CURSO

Formar um desenvolvedor que:

- entende arquitetura antes de framework
- sabe depurar pelo raciocínio
- constrói sistemas previsíveis
- consegue escalar para jogos, APIs, frontends modernos

Este STUDY_LOG não é um diário emocional.
É um **mapa mental técnico**.

Ele deve ser revisitado sempre que algo parecer confuso.
