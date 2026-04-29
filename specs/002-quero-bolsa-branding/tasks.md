# Tasks: Branding Quero Bolsa

**Input**: Design documents from `/specs/002-quero-bolsa-branding/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/ui-branding-contract.md`

**Tests**: Não há tasks de teste automatizado. Validação será manual e por `npm run build`.  
**Organization**: Tasks agrupadas por user story e em ordem de execução.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: pode rodar em paralelo
- **[Story]**: user story relacionada
- Cada task inclui paths exatos e critérios de aceite

## Phase 1: Setup

**Purpose**: preparar a base de tema semântico do branding

- [x] T001 Configurar tokens semânticos do Quero Bolsa em `tailwind.config.ts`
  **Título**: Configurar tokens de cor no Tailwind
  **Descrição**: Adicionar as cores `qb-primary`, `qb-primary-dark`, `qb-primary-darkest`, `qb-primary-light`, `qb-primary-lightest` e `qb-secondary` no tema do Tailwind, alinhando a convenção semântica planejada e evitando necessidade de hex solto nos componentes.
  **Arquivos provavelmente afetados**: `tailwind.config.ts`
  **Dependências**: nenhuma
  **Critério de aceite**: tokens semânticos do Quero Bolsa existem no Tailwind e estão prontos para consumo por classes utilitárias; nenhum componente foi alterado ainda.
  **Validação manual sugerida**: revisar `tailwind.config.ts` e confirmar que todos os nomes semânticos planejados existem e apontam para a paleta correta.

---

## Phase 2: Foundational

**Purpose**: alinhar a base visual global antes dos componentes

- [x] T002 Ajustar base visual global em `src/styles/tokens.css`, `src/styles/globals.css` e `src/index.css`
  **Título**: Atualizar fundo, tipografia e superfícies base
  **Descrição**: Substituir o viés verde/escuro atual por base clara/azulada alinhada ao Quero Bolsa, ajustando fundo geral, textos padrão, títulos, bordas, sombras e classes globais reutilizadas sem mexer em layout estrutural.
  **Arquivos provavelmente afetados**: `src/styles/tokens.css`, `src/styles/globals.css`, `src/index.css`
  **Dependências**: `T001`
  **Critério de aceite**: app passa a ter base visual coerente com a nova paleta; classes globais reutilizáveis refletem o novo branding; layout continua o mesmo.
  **Validação manual sugerida**: subir a aplicação e verificar hero, fundo, painéis e legibilidade geral sem alterar navegação ou estrutura.

**Checkpoint**: base pronta; componentes já podem ser atualizados com baixo risco de retrabalho.

---

## Phase 3: User Story 1 - Aplicar identidade visual consistente (Priority: P1) 🎯 MVP

**Goal**: aplicar branding Quero Bolsa de forma visível e consistente nos principais pontos de interação.

**Independent Test**: navegar pelas telas principais e verificar uso consistente da paleta em ações, destaques, cards e stepper.

- [x] T003 [US1] Padronizar botões e ações em `src/components/layout/AppShell.tsx`, `src/components/objective-test/TestResult.tsx`, `src/components/feedback/SuccessState.tsx`, `src/components/essay/ComplementaryEssayIntro.tsx`, `src/components/essay/EssayForm.tsx`, `src/components/forms/EnemForm.tsx` e `src/components/forms/DegreeForm.tsx`
  **Título**: Padronizar botões primários e secundários
  **Descrição**: Aplicar cor primária da marca em CTAs principais, definir hover/focus com azul escuro, padronizar botões secundários e garantir foco visível sem alterar comportamento de clique ou submissão.
  **Arquivos provavelmente afetados**: `src/components/layout/AppShell.tsx`, `src/components/objective-test/TestResult.tsx`, `src/components/feedback/SuccessState.tsx`, `src/components/essay/ComplementaryEssayIntro.tsx`, `src/components/essay/EssayForm.tsx`, `src/components/forms/EnemForm.tsx`, `src/components/forms/DegreeForm.tsx`, possivelmente `src/styles/globals.css`
  **Dependências**: `T002`
  **Critério de aceite**: botões principais e secundários seguem padrão único de cor, hover e foco; nenhuma ação muda de comportamento.
  **Validação manual sugerida**: percorrer telas com CTAs, testar hover/focus por mouse e teclado, e confirmar contraste legível.

- [x] T004 [US1] Atualizar cards em `src/components/scenario/ScenarioSelector.tsx`, `src/components/modality/ModalityCard.tsx`, `src/components/modality/ModalitySelection.tsx`, `src/components/objective-test/QuestionCard.tsx` e `src/components/objective-test/ObjectiveTestIntro.tsx`
  **Título**: Atualizar cards de cenário, modalidade e perguntas
  **Descrição**: Ajustar superfícies, bordas, sombras, CTA interno e estados ativos/hover dos cards usando a paleta Quero Bolsa, mantendo o mesmo conteúdo e a mesma interação.
  **Arquivos provavelmente afetados**: `src/components/scenario/ScenarioSelector.tsx`, `src/components/modality/ModalityCard.tsx`, `src/components/modality/ModalitySelection.tsx`, `src/components/objective-test/QuestionCard.tsx`, `src/components/objective-test/ObjectiveTestIntro.tsx`, possivelmente `src/styles/globals.css`
  **Dependências**: `T002`, `T003`
  **Critério de aceite**: cards ficam visualmente consistentes com a marca; estados de hover e destaque são claros; não há hex espalhado desnecessariamente.
  **Validação manual sugerida**: abrir home, seleção de modalidade e prova; verificar leitura, borda, sombra e clicabilidade dos cards.

- [x] T005 [US1] Atualizar stepper em `src/components/layout/AdmissionStepper.tsx`
  **Título**: Ajustar stepper de admissão
  **Descrição**: Destacar a etapa ativa com azul principal, usar tons claros nas etapas futuras e definir contraste visível entre estados ativo, concluído e futuro, sem alterar a lógica já existente do stepper.
  **Arquivos provavelmente afetados**: `src/components/layout/AdmissionStepper.tsx`
  **Dependências**: `T002`
  **Critério de aceite**: stepper comunica claramente estado atual e próximos passos apenas via estilo; nenhuma mudança funcional na renderização condicional.
  **Validação manual sugerida**: navegar por telas antes e depois da transição para documentos e conferir a diferenciação visual do stepper.

**Checkpoint**: MVP visual entregue; branding já perceptível nos principais pontos de demonstração.

---

## Phase 4: User Story 2 - Preservar clareza e usabilidade (Priority: P2)

**Goal**: refinar estados de feedback e telas de resultado sem perder clareza.

**Independent Test**: percorrer aprovação, fallback para redação e estado final, confirmando que a interface segue clara e amigável.

- [x] T006 [US2] Atualizar telas de resultado, fallback e loading em `src/components/objective-test/TestResult.tsx`, `src/components/feedback/SuccessState.tsx`, `src/components/feedback/LoadingOverlay.tsx` e `src/components/essay/ComplementaryEssayIntro.tsx`
  **Título**: Refinar resultados, fallback e feedbacks
  **Descrição**: Melhorar visual da tela de resultado da prova, estados de sucesso, etapa complementar e loading com linguagem amigável, paleta consistente e legibilidade forte, sem depender da identidade verde antiga.
  **Arquivos provavelmente afetados**: `src/components/objective-test/TestResult.tsx`, `src/components/feedback/SuccessState.tsx`, `src/components/feedback/LoadingOverlay.tsx`, `src/components/essay/ComplementaryEssayIntro.tsx`
  **Dependências**: `T003`, `T004`, `T005`
  **Critério de aceite**: telas de resultado e fallback parecem parte do mesmo produto; feedbacks são claros; estados positivos e complementares não soam punitivos.
  **Validação manual sugerida**: executar fluxo de aprovação, fluxo com redação complementar e estados de loading, revisando clareza e consistência visual.

**Checkpoint**: jornadas principais continuam legíveis e visualmente coesas.

---

## Phase 5: User Story 3 - Evitar regressão funcional na apresentação (Priority: P3)

**Goal**: revisar o conjunto e garantir que a melhoria ficou só na camada visual.

**Independent Test**: rodar build e percorrer os fluxos principais comparando comportamento funcional com o protótipo atual.

- [x] T007 [US3] Revisar consistência visual final em `src/components/**/*`, `src/styles/*`, `tailwind.config.ts` e validar o fluxo com `npm run build`
  **Título**: Revisão visual final e validação manual
  **Descrição**: Fazer revisão final de espaçamentos, responsividade básica, sombras, bordas, estados ativos, foco visível e eventuais hex soltos; validar manualmente os fluxos principais e confirmar que não houve alteração de lógica nem refatoração grande.
  **Arquivos provavelmente afetados**: `tailwind.config.ts`, `src/styles/tokens.css`, `src/styles/globals.css`, `src/components/layout/AppShell.tsx`, `src/components/layout/AdmissionStepper.tsx`, `src/components/scenario/ScenarioSelector.tsx`, `src/components/modality/ModalitySelection.tsx`, `src/components/modality/ModalityCard.tsx`, `src/components/objective-test/ObjectiveTestIntro.tsx`, `src/components/objective-test/QuestionCard.tsx`, `src/components/objective-test/TestNavigation.tsx`, `src/components/objective-test/TestResult.tsx`, `src/components/essay/ComplementaryEssayIntro.tsx`, `src/components/essay/EssayForm.tsx`, `src/components/forms/EnemForm.tsx`, `src/components/forms/DegreeForm.tsx`, `src/components/feedback/SuccessState.tsx`, `src/components/feedback/LoadingOverlay.tsx`
  **Dependências**: `T006`
  **Critério de aceite**: build passa; fluxos principais seguem intactos; visual parece alinhado ao Quero Bolsa; não restam inconsistências visuais gritantes.
  **Validação manual sugerida**: rodar `npm run build`, abrir app em viewport desktop e mobile, percorrer cenário com prova objetiva, fallback para redação e estado final.

**Checkpoint**: branding final pronto para revisão e commits task a task.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: começa imediato
- **Foundational (Phase 2)**: depende de `T001`
- **US1**: depende de `T002`
- **US2**: depende de `T003`, `T004` e `T005`
- **US3**: depende de `T006`

### User Story Dependencies

- **US1**: primeira entrega útil; branding principal
- **US2**: depende da base visual já aplicada em US1
- **US3**: consolida e valida sem adicionar funcionalidade

### Within Each User Story

- Base global antes de componentes
- Botões antes de cards de ação
- Cards e stepper antes das telas de resultado
- Revisão final só depois das telas críticas

### Parallel Opportunities

- Não há paralelismo recomendado nesta branch se a meta é revisar e commitar uma task por vez.

---

## Implementation Strategy

### MVP First

1. Completar `T001`
2. Completar `T002`
3. Completar `T003`
4. Completar `T004`
5. Completar `T005`
6. Validar visualmente o MVP

### Incremental Delivery

1. Base semântica
2. Base global
3. Ações principais
4. Superfícies e seleção
5. Stepper
6. Resultados e fallback
7. Revisão final

## Notes

- Todas as tasks são pequenas o bastante para commit isolado.
- Nenhuma task deve alterar reducer, fluxo ou regras de negócio.
- Se faltar tempo, parar após `T005` ainda entrega bom ganho visual.
