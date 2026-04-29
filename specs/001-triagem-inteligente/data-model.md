# Data Model: Triagem Inteligente

## Scenario

- `id`: identificador estável do cenário.
- `name`: nome da faculdade mockada.
- `requiresEssay`: define se redação é obrigatória.
- `availableModalities`: lista de modalidades permitidas na entrada.
- `heroMessage`: mensagem curta de contexto/benefício.

## Modality

- `id`: `objective_test` | `essay` | `enem` | `degree`
- `label`: texto exibido no card.
- `description`: explicação curta.
- `primaryCta`: texto do botão.

## ObjectiveQuestion

- `id`: identificador da pergunta.
- `category`: `portugues` | `matematica` | `conhecimentos_gerais`
- `prompt`: enunciado.
- `options`: lista de alternativas.
- `correctOptionId`: resposta correta mockada.

## ObjectiveAnswerSet

- `answers`: mapa `questionId -> optionId`.
- `currentQuestionIndex`: pergunta visível.
- `startedAt`: timestamp de início.
- `elapsedSeconds`: contador da sessão.

## TestResult

- `score`: total de acertos.
- `passed`: boolean derivado de `score >= 5`.
- `nextAction`: `documents` | `complementary_essay`
- `message`: mensagem amigável exibida ao usuário.

## EssaySubmission

- `mode`: `required` | `complementary`
- `theme`: tema mockado.
- `title`: título digitado.
- `body`: conteúdo digitado.
- `status`: `idle` | `loading` | `submitted`

## ExternalFormSubmission

- `type`: `enem` | `degree`
- `fields`: pares simples de entrada.
- `status`: `idle` | `loading` | `submitted`

## FlowState

- `scenarioId`: cenário selecionado.
- `currentStep`: view atual do app.
- `admissionPhase`: fase macro do stepper.
- `selectedModality`: modalidade ativa.
- `test`: estado da prova objetiva.
- `result`: resultado calculado.
- `submissionStatus`: status global de operação simulada.
- `finalStatus`: `idle` | `ready_for_documents` | `essay_under_review`

## State Transitions

- `home -> selection`: após escolher cenário.
- `selection -> objective_intro`: ao escolher prova objetiva.
- `selection -> essay_form`: redação obrigatória.
- `selection -> enem_form`: ao escolher ENEM.
- `selection -> degree_form`: ao escolher diploma.
- `objective_intro -> objective_test`: ao iniciar prova.
- `objective_test -> objective_result`: ao finalizar prova.
- `objective_result -> success`: se `score >= 5`.
- `objective_result -> essay_intro`: se `score < 5`.
- `essay_intro -> essay_form`: ao continuar.
- `essay_form -> success`: após envio.
- `enem_form -> success`: após envio.
- `degree_form -> success`: após envio.
