# Quickstart: Implementacao do Branding

## Objetivo

Aplicar identidade Quero Bolsa no protótipo sem alterar lógica.

## Ordem Recomendada

1. Atualizar `tailwind.config.ts` com cores semânticas `qb-*`.
2. Revisar `src/styles/tokens.css` para fundo, texto, bordas, sombras e radius.
3. Revisar `src/styles/globals.css` para classes base reutilizadas.
4. Ajustar componentes de ação e seleção:
   - `ScenarioSelector`
   - `ModalityCard`
   - `AdmissionStepper`
5. Ajustar componentes de resultado e suporte:
   - `TestResult`
   - `SuccessState`
   - `LoadingOverlay`
6. Revisão visual geral no app inteiro.

## Arquivos de Maior Prioridade

- `tailwind.config.ts`
- `src/styles/tokens.css`
- `src/styles/globals.css`
- `src/components/layout/AdmissionStepper.tsx`
- `src/components/scenario/ScenarioSelector.tsx`
- `src/components/modality/ModalityCard.tsx`

## Checklist Manual

- `npm run build`
- Abrir app e percorrer fluxo principal.
- Verificar botões primários/secundários.
- Verificar cards e estados selecionados.
- Verificar stepper ativo.
- Verificar loading.
- Verificar telas finais.
- Confirmar ausência de regressão funcional.

## Corte de Escopo

- Se faltar tempo, fechar primeiro:
  1. tokens globais
  2. botões
  3. cards
  4. stepper

- Deixar por último:
  1. badges
  2. loading
  3. microajustes visuais
