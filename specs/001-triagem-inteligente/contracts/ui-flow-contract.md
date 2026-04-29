# UI Flow Contract: Triagem Inteligente

## Scenario selection

- Input: clique em um cenário mockado.
- Output: `scenarioId` definido e `currentStep = "selection"`.

## Modality selection

- Input: clique em uma modalidade disponível.
- Output:
  - `objective_test` -> `currentStep = "objective_intro"`
  - `essay` -> `currentStep = "essay_form"`
  - `enem` -> `currentStep = "enem_form"`
  - `degree` -> `currentStep = "degree_form"`

## Objective test start

- Input: clique em iniciar prova.
- Output: `startedAt` preenchido, `elapsedSeconds = 0`, `currentStep = "objective_test"`.

## Objective test answer

- Input: selecionar alternativa.
- Output: `answers[questionId] = optionId`.

## Objective test finish

- Input: clique em finalizar prova.
- Output: `score` calculado e `currentStep = "objective_result"`.

## Result branching

- Condition: `score >= 5`
- Output: `finalStatus = "ready_for_documents"` e `currentStep = "success"`.

- Condition: `score < 5`
- Output: `currentStep = "essay_intro"`.

## Essay submission

- Input: enviar redação.
- Output: `finalStatus = "essay_under_review"` e `currentStep = "success"`.

## ENEM/Degree submission

- Input: enviar formulário.
- Output: `finalStatus = "ready_for_documents"` e `currentStep = "success"`.
