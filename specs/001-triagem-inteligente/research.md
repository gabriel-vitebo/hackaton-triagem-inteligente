# Research: Triagem Inteligente

## Decision 1: Stack base

- Decision: React + TypeScript + Vite.
- Rationale: menor tempo de bootstrap com tipagem suficiente para o estado central do fluxo.
- Alternatives considered: React + JavaScript foi descartado por menor segurança no reducer; Next.js foi descartado por complexidade desnecessária.

## Decision 2: Navegação

- Decision: fluxo único SPA sem React Router.
- Rationale: o protótipo é linear e controlado por estado; rotas só adicionariam superfície técnica.
- Alternatives considered: rotas por tela foram descartadas por aumentar sincronização entre URL e estado.

## Decision 3: Estado

- Decision: `useReducer` central no `App`.
- Rationale: várias transições dependem do mesmo conjunto de dados e o reducer evita estado espalhado e inconsistente.
- Alternatives considered: múltiplos `useState` foram descartados por risco de acoplamento; Context global foi descartado por ser desnecessário para uma árvore curta.

## Decision 4: Estilo

- Decision: CSS próprio com tokens.
- Rationale: entrega rápida, controle visual suficiente e zero dependência adicional.
- Alternatives considered: Tailwind foi descartado por setup extra; bibliotecas de UI foram descartadas por peso e risco de visual genérico.

## Decision 5: Testes

- Decision: foco em smoke manual do fluxo completo; testes automatizados só se sobrar tempo.
- Rationale: prazo curto e protótipo demonstrativo.
- Alternatives considered: suíte formal de testes desde o início foi descartada por custo de tempo.

## Decision 6: Loading e temporização

- Decision: loading simulado com `setTimeout` curto e contador real crescente na prova.
- Rationale: demonstra processamento sem fingir integrações complexas.
- Alternatives considered: loading instantâneo foi descartado por reduzir percepção de transição; cronômetro regressivo foi descartado por não agregar valor ao objetivo.
