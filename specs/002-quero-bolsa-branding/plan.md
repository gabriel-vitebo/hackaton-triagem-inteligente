# Implementation Plan: Branding Quero Bolsa

**Branch**: `002-quero-bolsa-branding` | **Date**: 2026-04-29 | **Spec**: [spec.md](/home/gabrielvitebo/Documentos/hackathon/triagem-inteligente/specs/002-quero-bolsa-branding/spec.md)
**Input**: Feature specification from `/specs/002-quero-bolsa-branding/spec.md`

## Summary

Aplicar a identidade visual do Quero Bolsa no protótipo existente, sem alterar fluxo ou lógica, centralizando a paleta em tokens semânticos do Tailwind e ajustando componentes visuais já existentes para ganhar consistência, contraste e acabamento de UI.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18.x  
**Primary Dependencies**: React, React DOM, Vite, Tailwind CSS 3  
**Storage**: N/A  
**Testing**: build do Vite/TypeScript e validação manual guiada  
**Target Platform**: navegador desktop e mobile moderno  
**Project Type**: single-page web app frontend-only  
**Performance Goals**: nenhuma regressão perceptível de renderização ou interação  
**Constraints**: não alterar lógica, fluxo, reducer, dados mockados ou estrutura principal de telas  
**Scale/Scope**: 1 app, ~15 componentes visuais relevantes, branding e polish de UI apenas

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

O arquivo de constituição continua em placeholder, sem gates operacionais reais.

- Pass: escopo restrito a estilo e consistência visual.
- Pass: nenhuma mudança arquitetural grande.
- Pass: sem dependências novas previstas.
- Pass: sem conflito com a restrição de não alterar lógica.

## Project Structure

### Documentation (this feature)

```text
specs/002-quero-bolsa-branding/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-branding-contract.md
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
│   ├── essay/
│   ├── feedback/
│   ├── forms/
│   ├── layout/
│   ├── modality/
│   ├── objective-test/
│   └── scenario/
├── data/
├── styles/
│   ├── globals.css
│   └── tokens.css
├── types/
│   └── flow.ts
├── index.css
├── main.tsx
└── vite-env.d.ts

tailwind.config.ts
package.json
postcss.config.js
vite.config.ts
```

**Structure Decision**: manter SPA atual. Branding será centralizado em `tailwind.config.ts` e estilos base (`src/styles/*.css`), com retoques visuais nos componentes existentes. Nenhuma pasta nova de lógica.

## Architecture Decisions

### Theme configuration

- Recomendado: estender `tailwind.config.ts` com tokens semânticos do Quero Bolsa.
- Nomes base:
  - `qb-primary`
  - `qb-primary-dark`
  - `qb-primary-darkest`
  - `qb-primary-light`
  - `qb-primary-lightest`
- Manter CSS variables em `src/styles/tokens.css` para superfícies, texto, bordas, sombras e radius.
- Regra: evitar hex espalhado em componentes; componentes devem consumir classes Tailwind semânticas e classes utilitárias locais.

### Styling strategy

- Migrar o visual atual de tema escuro/verde para tema claro-azulado alinhado à marca.
- Concentrar padrões repetidos em classes globais:
  - `panel-card`
  - `surface-highlight`
  - `eyebrow-badge`
  - possíveis utilitárias novas para botão primário, botão secundário e estado selecionado
- Usar tokens para:
  - ação primária
  - hover/focus
  - superfície suave
  - borda destacada
  - texto institucional

### Component scope

- Ajustar visual de:
  - `AppShell`
  - `AdmissionStepper`
  - `ScenarioSelector`
  - `ModalitySelection`
  - `ModalityCard`
  - `ObjectiveTestIntro`
  - `ObjectiveTest`
  - `QuestionCard`
  - `TestNavigation`
  - `TestResult`
  - `ComplementaryEssayIntro`
  - `EssayForm`
  - `EnemForm`
  - `DegreeForm`
  - `SuccessState`
  - `LoadingOverlay`
- Não alterar reducer, fluxo nem conteúdo mockado.

### Hierarchy rules

- `qb-primary`: CTA principal, links principais, etapa ativa, selected state.
- `qb-primary-dark`: hover/focus/pressed de elementos primários.
- `qb-primary-darkest`: títulos institucionais, ênfases fortes, outlines de foco quando necessário.
- `qb-primary-light`: bordas suaves, highlights de seleção, fundos de badges discretos.
- `qb-primary-lightest`: fundos suaves de cards, blocos de informação e áreas secundárias.

### Consistency rules

- Bordas: unificar espessura e cor base com variação só para estados ativos.
- Radius: reaproveitar um padrão único para cards e botões.
- Sombras: reduzir variedade; uma sombra base para cards e uma mais sutil para elementos internos.
- Espaçamento: manter escala atual; apenas corrigir discrepâncias visuais locais.
- Ativo/selecionado: sempre combinar fundo claro + borda azul + texto mais escuro.
- Hover: sempre perceptível, sem deslocamentos excessivos.
- Disabled: contraste reduzido, mas legível e obviamente inativo.

### Accessibility baseline

- Garantir contraste legível em:
  - texto branco sobre azul puro
  - texto escuro sobre azul muito claro
  - botões secundários e ghost states
- Foco visível em botões, cards clicáveis e navegação da prova.
- Evitar usar azul claro para texto principal em fundo branco.

## Implementation Phases

### Phase 0: Research

- Confirmar melhor estratégia híbrida: tokens no Tailwind + CSS variables globais.
- Definir convenção semântica para classes e estados.
- Mapear regressões prováveis ao trocar tema escuro por claro.

### Phase 1: Design Artifacts

- Documentar modelo de elementos visuais e estados.
- Definir contrato de UI para cores e comportamento visual por componente.
- Registrar checklist de execução manual.

### Phase 2: Task Planning Input

- Sequência recomendada:
  1. configurar tokens no Tailwind
  2. ajustar `tokens.css` e `globals.css`
  3. padronizar botões
  4. padronizar cards e estados selecionados
  5. ajustar stepper e badges
  6. ajustar telas de resultado e loading
  7. revisão visual geral

## Files Likely To Change

- `tailwind.config.ts`
- `src/styles/tokens.css`
- `src/styles/globals.css`
- `src/index.css`
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
- `src/components/feedback/SuccessState.tsx`
- `src/components/feedback/LoadingOverlay.tsx`

## Risks

- Regressão visual por mistura de tokens antigos verde/escuro com novos azuis.
- Contraste ruim em textos herdados de `text-slate-*` ao migrar fundos para tons claros.
- Cards clicáveis perderem affordance se hover/focus ficar sutil demais.
- Stepper e estados de resultado parecerem iguais demais se a hierarquia de azul não for bem distribuída.
- Desalinhamento entre classes globais e classes inline Tailwind gerando inconsistência.

## Manual Validation

- App sobe e build continua funcionando.
- Fluxo principal segue idêntico.
- Cores da paleta aparecem de forma consistente.
- Botões primários e secundários têm hover/focus claros.
- Cards selecionados ficam óbvios.
- Stepper destaca a etapa atual.
- Loading e telas de resultado seguem legíveis.
- Nenhuma lógica foi alterada.
- Interface parece alinhada ao branding Quero Bolsa.

## Scope Cut

- Prioridade 1: botões, cards, stepper.
- Prioridade 2: telas de resultado e fallback.
- Prioridade 3: badges, loading e detalhes finos.

## Post-Design Constitution Check

- Pass: design continua sem mudança funcional.
- Pass: sem complexidade extra além de tokens e refinamento visual.
- Pass: validação manual suficiente para este escopo de UI.
