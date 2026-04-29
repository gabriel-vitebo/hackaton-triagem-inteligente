---

description: "Task list for implementing the Triagem Inteligente React prototype"
---

# Tasks: Triagem Inteligente

**Input**: Design documents from `/specs/001-triagem-inteligente/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Sem TDD obrigatório. Incluir checklist manual ao final para validação do protótipo.

**Organization**: Tasks grouped by setup, foundation, user stories, and final polish.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: User story mapping
- Every task includes exact file paths

## Phase 1: Setup

**Purpose**: Bootstrap do app React com base mínima executável

- [x] T001 Inicializar projeto Vite React + TypeScript em `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html` e `src/main.tsx`
- [x] T002 Criar estrutura base de diretórios conforme o plano em `src/app/`, `src/components/`, `src/data/`, `src/styles/` e `src/types/`
- [x] T003 [P] Criar estilos globais e tokens visuais iniciais em `src/styles/globals.css` e `src/styles/tokens.css`
- [x] T004 Garantir ponto de entrada executável com app mínimo em `src/app/App.tsx` e import em `src/main.tsx`

---

## Phase 2: Foundational

**Purpose**: Dados e estado central que bloqueiam todas as telas

- [x] T005 [P] Criar tipos centrais do fluxo em `src/types/flow.ts`
- [x] T006 [P] Criar mocks de cenários, modalidades, etapas, mensagens e nota de corte em `src/data/scenarios.ts` e `src/data/content.ts`
- [x] T007 [P] Criar banco mockado de 10 perguntas com alternativas e resposta correta em `src/data/objectiveQuestions.ts`
- [x] T008 Criar definição de views, transições e helpers do fluxo em `src/app/flow.ts`
- [x] T009 Implementar reducer central com estado em memória e ações do protótipo em `src/app/reducer.ts`
- [x] T010 Integrar reducer e estado inicial no shell do app em `src/app/App.tsx`

**Checkpoint**: base pronta para construir histórias sem espalhar estado

---

## Phase 3: User Story 1 - Escolher modalidade sem redação inicial (Priority: P1) 🎯 MVP

**Goal**: Permitir escolher cenário e modalidade com redação oculta no cenário sem obrigatoriedade

**Independent Test**: Escolher o cenário sem redação obrigatória e confirmar que aparecem ENEM, prova objetiva e diploma, sem redação na entrada

- [x] T011 [P] [US1] Criar layout principal com estrutura de página e área de conteúdo em `src/components/layout/AppShell.tsx`
- [x] T012 [P] [US1] Criar seletor inicial de cenários com dois cards/botões em `src/components/scenario/ScenarioSelector.tsx`
- [x] T013 [P] [US1] Criar stepper visual da admissão em `src/components/layout/AdmissionStepper.tsx`
- [x] T014 [P] [US1] Criar card reutilizável de modalidade em `src/components/modality/ModalityCard.tsx`
- [x] T015 [US1] Criar lista de modalidades condicionada ao cenário em `src/components/modality/ModalitySelection.tsx`
- [x] T016 [US1] Conectar `App.tsx` para renderizar home, stepper, badge de protótipo e seleção de modalidade conforme cenário em `src/app/App.tsx`
- [x] T017 [US1] Ajustar microcopy de proposta de valor na home e na seleção de modalidade em `src/data/content.ts` e `src/components/modality/ModalitySelection.tsx`

**Checkpoint**: cenário com redação obrigatória e cenário sem redação obrigatória ficam distinguíveis e navegáveis

---

## Phase 4: User Story 2 - Concluir prova objetiva e avançar (Priority: P2)

**Goal**: Executar prova objetiva com resultado imediato e avanço para documentos

**Independent Test**: No cenário sem redação obrigatória, escolher prova objetiva, responder 10 perguntas, obter 5+ acertos e chegar ao estado de avanço para documentos

- [x] T018 [P] [US2] Criar tela introdutória da prova com regras e CTA em `src/components/objective-test/ObjectiveTestIntro.tsx`
- [x] T019 [P] [US2] Criar card de pergunta com alternativas selecionáveis em `src/components/objective-test/QuestionCard.tsx`
- [x] T020 [P] [US2] Criar navegação da prova com anterior, próxima e finalizar em `src/components/objective-test/TestNavigation.tsx`
- [x] T021 [US2] Implementar container da prova com uma pergunta por vez, progresso e respostas preservadas em `src/components/objective-test/ObjectiveTest.tsx`
- [x] T022 [US2] Implementar timer funcional iniciado apenas após clique em iniciar prova em `src/components/objective-test/ObjectiveTest.tsx`
- [x] T023 [US2] Implementar regra amigável para impedir finalização com perguntas em branco em `src/components/objective-test/ObjectiveTest.tsx`
- [x] T024 [US2] Implementar cálculo de acertos e decisão `score >= 5` no reducer em `src/app/reducer.ts`
- [x] T025 [US2] Criar tela de resultado positivo com exibição simples da nota/acertos em `src/components/objective-test/TestResult.tsx`
- [x] T026 [US2] Conectar o fluxo de prova e resultado aprovado no `App.tsx` e em `src/app/flow.ts`

**Checkpoint**: prova objetiva completa, com timer, navegação e aprovação funcional

---

## Phase 5: User Story 3 - Continuar com etapa complementar (Priority: P3)

**Goal**: Direcionar para redação obrigatória ou complementar sem linguagem punitiva

**Independent Test**: No cenário sem redação obrigatória, terminar a prova com menos de 5 acertos e seguir para redação complementar; no cenário com redação obrigatória, abrir redação diretamente

- [x] T027 [P] [US3] Criar tela intermediária amigável para fallback de redação em `src/components/essay/ComplementaryEssayIntro.tsx`
- [x] T028 [P] [US3] Criar formulário de redação com tema mockado, título, texto e envio em `src/components/essay/EssayForm.tsx`
- [x] T029 [US3] Implementar ramo `score < 5` para levar do resultado à introdução da redação complementar em `src/app/reducer.ts` e `src/app/flow.ts`
- [x] T030 [US3] Implementar fluxo direto de redação obrigatória ao selecionar cenário/faculdade correspondente em `src/app/App.tsx` e `src/components/modality/ModalitySelection.tsx`
- [x] T031 [US3] Criar feedback final de “redação enviada e em análise” em `src/components/feedback/SuccessState.tsx`
- [x] T032 [US3] Garantir textos sem reprovação e com tom amigável no fallback e na redação em `src/data/content.ts`, `src/components/essay/ComplementaryEssayIntro.tsx` e `src/components/essay/EssayForm.tsx`

**Checkpoint**: fallback e redação obrigatória demonstram continuidade natural do processo

---

## Phase 6: User Story 4 - Enviar ENEM e diploma mockados (Priority: P4)

**Goal**: Permitir caminhos alternativos mínimos para ENEM e diploma

**Independent Test**: No cenário sem redação obrigatória, escolher ENEM ou diploma, preencher campos mínimos e chegar ao estado de avanço para documentos

- [x] T033 [P] [US4] Criar formulário mínimo de ENEM em `src/components/forms/EnemForm.tsx`
- [x] T034 [P] [US4] Criar formulário mínimo de diploma em `src/components/forms/DegreeForm.tsx`
- [x] T035 [US4] Implementar ações de envio simulado para ENEM e diploma no reducer em `src/app/reducer.ts`
- [x] T036 [US4] Conectar rotas internas de ENEM e diploma no `App.tsx` e em `src/app/flow.ts`
- [x] T037 [US4] Reaproveitar estado final positivo para avanço a documentos após ENEM ou diploma em `src/components/feedback/SuccessState.tsx`

**Checkpoint**: caminhos alternativos funcionam com forms mínimos

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Melhorar apresentação, loading, reset e validação manual

- [x] T038 [P] Criar overlay ou estado visual de loading curto para envios e processamentos em `src/components/feedback/LoadingOverlay.tsx`
- [x] T039 Integrar loading simulado por timeout nos envios de prova, redação, ENEM e diploma em `src/app/reducer.ts` e `src/app/App.tsx`
- [x] T040 Implementar estado final consolidado com mensagem de avanço para documentos e botão de reinício em `src/components/feedback/SuccessState.tsx`
- [x] T041 Implementar ação de reinício completo do protótipo em `src/app/reducer.ts` e conexão no `App.tsx`
- [x] T042 Refinar responsividade, espaçamento, cards, botões e hierarquia visual em `src/styles/globals.css`, `src/styles/tokens.css` e componentes visuais
- [x] T043 Revisar todos os textos para reforçar “menos espera”, “menos dependência de redação” e “admissão mais rápida” em `src/data/content.ts`
- [x] T044 Criar checklist de testes manuais obrigatórios em `specs/001-triagem-inteligente/quickstart.md`
- [x] T045 Executar validação manual do fluxo completo e registrar ajustes finais em `specs/001-triagem-inteligente/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1**: sem dependências
- **Phase 2**: depende da Phase 1
- **US1**: depende da Phase 2
- **US2**: depende de US1
- **US3**: depende de US2
- **US4**: depende de US1
- **Polish**: depende das histórias desejadas estarem prontas

### User Story Dependencies

- **US1 (P1)**: base do MVP
- **US2 (P2)**: depende da seleção de modalidade de US1
- **US3 (P3)**: depende do resultado da prova de US2 ou do cenário obrigatório de US1
- **US4 (P4)**: depende apenas da seleção de modalidade de US1

### Parallel Opportunities

- T003, T005, T006 e T007 podem rodar em paralelo
- T011, T012, T013 e T014 podem rodar em paralelo após foundation
- T018, T019 e T020 podem rodar em paralelo
- T027 e T028 podem rodar em paralelo
- T033 e T034 podem rodar em paralelo
- T038 e T044 podem rodar em paralelo na fase final

---

## Parallel Example: MVP

```text
T005 Criar tipos centrais do fluxo em src/types/flow.ts
T006 Criar mocks de cenários e conteúdo em src/data/scenarios.ts e src/data/content.ts
T007 Criar perguntas mockadas em src/data/objectiveQuestions.ts
```

```text
T011 Criar layout principal em src/components/layout/AppShell.tsx
T012 Criar seletor inicial de cenários em src/components/scenario/ScenarioSelector.tsx
T013 Criar stepper visual em src/components/layout/AdmissionStepper.tsx
T014 Criar card de modalidade em src/components/modality/ModalityCard.tsx
```

---

## Implementation Strategy

### MVP First

1. Completar Phase 1
2. Completar Phase 2
3. Completar US1
4. Completar US2
5. Validar demo principal: cenário sem redação obrigatória + prova objetiva + aprovação

### Incremental Delivery

1. Adicionar US3 para demonstrar fallback
2. Adicionar cenário de redação obrigatória
3. Adicionar US4 com ENEM e diploma mínimos
4. Finalizar polish e checklist manual

### Scope Cut Priority

1. US1 + US2
2. US3
3. Redação obrigatória direta
4. US4
5. Polish visual avançado

## Notes

- Projeto continua front-end only
- Sem backend, API real, autenticação ou persistência
- Validações de formulário devem ser básicas
- Timer pode ser apenas tempo decorrido simples
