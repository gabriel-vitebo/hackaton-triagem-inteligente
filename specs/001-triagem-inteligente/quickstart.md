# Quickstart: Triagem Inteligente

## Goal

Implementar rápido um protótipo React front-end only, em fluxo único, sem backend.

## Recommended order

1. Inicializar Vite com React + TypeScript.
2. Criar reducer central e tipos.
3. Subir `ScenarioSelector`, `AdmissionStepper` e `ModalitySelection`.
4. Implementar prova objetiva completa.
5. Implementar resultado aprovado e fallback.
6. Implementar redação, ENEM e diploma.
7. Polir visual, loading e textos.

## Smoke checklist

1. Escolher cenário com redação obrigatória e enviar redação.
2. Escolher cenário sem redação obrigatória e aprovar na prova.
3. Escolher cenário sem redação obrigatória e cair no fallback de redação.
4. Enviar ENEM mockado.
5. Enviar diploma mockado.
6. Dar refresh e confirmar reset do estado.

## Done signal

- Dois cenários funcionam.
- Prova objetiva tem 10 perguntas.
- Score aprova com 5 ou mais.
- Fallback amigável funciona.
- Stepper comunica progresso.
- Valor da proposta aparece de forma visível.
