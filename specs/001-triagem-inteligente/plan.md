# Implementation Plan: Triagem Inteligente

**Branch**: `001-triagem-inteligente` | **Date**: 2026-04-29 | **Spec**: [spec.md](/home/gabrielvitebo/Documentos/hackathon/triagem-inteligente/specs/001-triagem-inteligente/spec.md)
**Input**: Feature specification from `/specs/001-triagem-inteligente/spec.md`

## Summary

Construir um protótipo React front-end only, em fluxo único controlado por estado, para demonstrar a troca da redação como caminho padrão por uma prova objetiva quando a faculdade não exigir redação. A implementação deve ser simples, rápida e apresentável, com dados mockados locais, loading curto simulado e sem qualquer dependência de backend.

## Technical Context

**Language/Version**: TypeScript com React 18+  
**Primary Dependencies**: React, React DOM, Vite, CSS simples próprio  
**Storage**: N/A  
**Testing**: validação manual guiada; testes automatizados opcionais apenas se sobrarem tempo  
**Target Platform**: navegador desktop moderno, responsivo para mobile  
**Project Type**: single-page web app  
**Performance Goals**: navegação instantânea entre estados e renderização fluida durante a prova  
**Constraints**: sem backend, sem autenticação, sem persistência, sem libs complexas, entrega até hoje 18h  
**Scale/Scope**: 1 app, 2 cenários mockados, 4 modalidades, 10 perguntas, cerca de 10 a 14 componentes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

O arquivo de constituição atual está em placeholder e não define gates operacionais. Para esta feature:

- Pass: sem conflito conhecido com regras do projeto.
- Pass: solução mantém escopo mínimo e sem complexidade arquitetural desnecessária.
- Pass: documentação de implementação e modelo de dados serão gerados antes de tasks.

## Project Structure

### Documentation (this feature)

```text
specs/001-triagem-inteligente/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-flow-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── App.tsx
│   ├── flow.ts
│   └── reducer.ts
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx
│   │   └── AdmissionStepper.tsx
│   ├── scenario/
│   │   └── ScenarioSelector.tsx
│   ├── modality/
│   │   ├── ModalitySelection.tsx
│   │   └── ModalityCard.tsx
│   ├── objective-test/
│   │   ├── ObjectiveTestIntro.tsx
│   │   ├── ObjectiveTest.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── TestNavigation.tsx
│   │   └── TestResult.tsx
│   ├── essay/
│   │   ├── ComplementaryEssayIntro.tsx
│   │   └── EssayForm.tsx
│   ├── forms/
│   │   ├── EnemForm.tsx
│   │   └── DegreeForm.tsx
│   └── feedback/
│       ├── LoadingOverlay.tsx
│       └── SuccessState.tsx
├── data/
│   ├── scenarios.ts
│   ├── objectiveQuestions.ts
│   └── content.ts
├── styles/
│   ├── globals.css
│   └── tokens.css
├── types/
│   └── flow.ts
├── main.tsx
└── vite-env.d.ts
```

**Structure Decision**: SPA React com estado central local. Sem roteador. Sem pasta `services` porque não há integração real. Fluxo controlado por reducer único para evitar estado espalhado.

## Architecture Decisions

### App shape

- Uma única página SPA.
- Render condicional por `currentView`.
- Stepper fixo no topo para contexto da admissão.
- Container central troca só o conteúdo do fluxo.

### State strategy

- `useReducer` no `App` como fonte única de verdade.
- Estado em memória somente.
- Nenhum `localStorage`.
- `setInterval` isolado no módulo da prova para o contador.

### Styling strategy

- CSS próprio com tokens simples em `tokens.css`.
- Sem Tailwind para evitar setup e ruído.
- Visual limpo com cards, stepper, badges e blocos de feedback.

### Data strategy

- Todos os mocks em arquivos `src/data`.
- Cenários definem:
  - `id`
  - `name`
  - `requiresEssay`
  - `availableModalities`
  - `heroMessage`
- Questões definem:
  - `id`
  - `category`
  - `prompt`
  - `options`
  - `correctOptionId`

### Loading strategy

- Loading simulado de 600ms a 1200ms em submissões:
  - envio ENEM
  - envio diploma
  - cálculo final da prova
  - envio redação
- Implementado por timeout simples com overlay.

## Flow Rules

### Cenário com redação obrigatória

- Home escolhe faculdade.
- Stepper aparece já com processo seletivo ativo.
- Modalidade disponível principal é redação online.
- Usuário entra direto no formulário de redação.
- Após envio, estado final fica `essay_under_review`.

### Cenário sem redação obrigatória

- Home escolhe faculdade.
- Modalidades iniciais: ENEM, prova objetiva, diploma.
- Redação não aparece na seleção inicial.

### Escolha de prova objetiva

- Tela introdutória explica 10 perguntas e início do contador após clique.
- Prova mostra uma pergunta por vez.
- Navegação livre entre perguntas.
- Finalização calcula acertos.

### Aprovação

- `score >= 5`
- Mostrar nota e mensagem positiva.
- Marcar processo seletivo como concluído.
- Liberar estado final `ready_for_documents`.

### Fallback para redação

- `score < 5`
- Mostrar tela intermediária amigável.
- Abrir redação complementar simples.
- Após envio, estado final `essay_under_review`.

### ENEM e diploma

- Formulários mínimos.
- Campos básicos apenas.
- Após envio simulado, resultado final `ready_for_documents`.

## State Model

```text
scenarioId: string | null
currentStep: "home" | "selection" | "objective_intro" | "objective_test" | "objective_result" | "essay_intro" | "essay_form" | "enem_form" | "degree_form" | "success"
admissionPhase: "processo_seletivo" | "documentos"
selectedModality: "objective_test" | "essay" | "enem" | "degree" | null
answers: Record<string, string>
currentQuestionIndex: number
startedAt: number | null
elapsedSeconds: number
score: number | null
submissionStatus: "idle" | "loading" | "submitted"
finalStatus: "idle" | "ready_for_documents" | "essay_under_review"
```

## Component Plan

- `App`: inicializa reducer e decide view atual.
- `AppShell`: layout base com header e conteúdo.
- `AdmissionStepper`: mostra macroetapas e status visual.
- `ScenarioSelector`: home com dois cenários mockados.
- `ModalitySelection`: lista modalidades permitidas para o cenário.
- `ModalityCard`: card clicável de modalidade.
- `ObjectiveTestIntro`: resumo da prova e CTA de início.
- `ObjectiveTest`: orquestra pergunta atual, timer e respostas.
- `QuestionCard`: enunciado e alternativas.
- `TestNavigation`: anterior, próxima, finalizar.
- `TestResult`: mensagem de aprovação ou passo complementar.
- `ComplementaryEssayIntro`: transição amigável para redação.
- `EssayForm`: redação obrigatória ou complementar.
- `EnemForm`: submissão mockada de ENEM.
- `DegreeForm`: submissão mockada de diploma.
- `SuccessState`: estado final para avanço a documentos ou análise.
- `LoadingOverlay`: feedback curto de processamento.

## Files To Create

- `src/main.tsx`
- `src/app/App.tsx`
- `src/app/reducer.ts`
- `src/app/flow.ts`
- `src/types/flow.ts`
- `src/data/scenarios.ts`
- `src/data/objectiveQuestions.ts`
- `src/data/content.ts`
- `src/components/layout/AppShell.tsx`
- `src/components/layout/AdmissionStepper.tsx`
- `src/components/scenario/ScenarioSelector.tsx`
- `src/components/modality/ModalitySelection.tsx`
- `src/components/modality/ModalityCard.tsx`
- `src/components/objective-test/ObjectiveTestIntro.tsx`
- `src/components/objective-test/ObjectiveTest.tsx`
- `src/components/objective-test/QuestionCard.tsx`
- `src/components/objective-test/TestNavigation.tsx`
- `src/components/objective-test/TestResult.tsx`
- `src/components/essay/ComplementaryEssayIntro.tsx`
- `src/components/essay/EssayForm.tsx`
- `src/components/forms/EnemForm.tsx`
- `src/components/forms/DegreeForm.tsx`
- `src/components/feedback/LoadingOverlay.tsx`
- `src/components/feedback/SuccessState.tsx`
- `src/styles/tokens.css`
- `src/styles/globals.css`
- `index.html`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`

## Implementation Phases

### Phase 1: Bootstrap

- Criar base Vite React + TypeScript.
- Configurar `main.tsx`, `App.tsx`, CSS global e tokens.
- Criar tipos centrais e reducer vazio.

### Phase 2: Static flow skeleton

- Implementar `ScenarioSelector`.
- Implementar `AdmissionStepper`.
- Implementar `ModalitySelection` com dados mockados.
- Garantir troca entre cenários e modalidades.

### Phase 3: Objective test flow

- Implementar intro da prova.
- Implementar prova com uma pergunta por vez.
- Implementar navegação livre e persistência de respostas em memória.
- Implementar contador real.
- Implementar cálculo de acertos.

### Phase 4: Result states

- Implementar tela de resultado aprovado.
- Implementar fallback com intro amigável.
- Implementar redação complementar e redação obrigatória.

### Phase 5: Other modalities

- Implementar ENEM mínimo.
- Implementar diploma mínimo.
- Implementar success states e análise.

### Phase 6: Polish

- Ajustar microcopy.
- Melhorar hierarquia visual.
- Adicionar loadings simulados.
- Revisar responsividade desktop/mobile.

## Risks

- Estado fragmentado se usar muitos `useState`; mitigar com reducer único.
- Prova objetiva pode consumir tempo; mitigar com dados mockados prontos e navegação simples.
- UI pode parecer genérica; mitigar com tokens visuais claros, bom espaçamento e cards consistentes.
- Timer pode gerar bugs de cleanup; mitigar isolando start/stop/reset em um único ponto.
- Escopo crescer para “produto real”; mitigar mantendo forms mínimos e sem integrações.

## Scope Cut Strategy

- ENEM e diploma ficam com 2 ou 3 campos apenas.
- Redação fica com título + texto + botão enviar.
- Loading é só timeout curto com overlay.
- Validações são básicas: campos obrigatórios.
- Timer é apenas crescente; sem limite regressivo.
- Se faltar tempo, resultado aprovado e fallback usam o mesmo componente base com textos diferentes.

## Complexity Tracking

Sem violações justificadas no momento.
