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

1. Cenário sem redação obrigatória não mostra redação inicialmente.
2. Cenário sem redação obrigatória mostra ENEM, Prova objetiva e Diploma.
3. Prova objetiva inicia contador apenas após clique em iniciar.
4. Prova preserva respostas ao avançar e voltar.
5. Prova com 5 ou mais acertos aprova.
6. Prova com menos de 5 acertos leva para redação complementar.
7. Fallback não usa linguagem punitiva.
8. Cenário com redação obrigatória mostra redação diretamente.
9. ENEM simula envio e avanço.
10. Diploma simula envio e avanço.
11. Refresh reinicia o protótipo.
12. Não há chamadas reais para backend ou API.

## Manual validation record

- `npm run build` executado com sucesso.
- Home, seleção de cenário, modalidade e intro da prova validados.
- Aprovação por prova e fallback para redação validados manualmente.
- Redação obrigatória, ENEM e diploma conectados com envio simulado.
- Reinício do protótipo disponível no estado final.

## Done signal

- Dois cenários funcionam.
- Prova objetiva tem 10 perguntas.
- Score aprova com 5 ou mais.
- Fallback amigável funciona.
- Stepper comunica progresso.
- Valor da proposta aparece de forma visível.
