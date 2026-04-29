# Feature Specification: Demo Rápida da Prova Objetiva

**Feature Branch**: `003-demo-objective-outcomes`  
**Created**: 2026-04-29  
**Status**: Draft  
**Input**: User description: "Criar uma melhoria no protótipo “Triagem Inteligente” para facilitar testes rápidos do fluxo da prova objetiva durante demonstrações."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Simular etapa complementar com 1 resposta (Priority: P1)

Como pessoa avaliadora do protótipo, quero responder apenas 1 questão e finalizar a prova para validar rapidamente o desfecho que leva para redação complementar.

**Why this priority**: Este é o caminho mais importante para encurtar demonstrações do fallback sem exigir a prova inteira.

**Independent Test**: Pode ser testado isoladamente ao iniciar a prova objetiva, responder exatamente 1 questão, finalizar e verificar o encaminhamento para a etapa complementar.

**Acceptance Scenarios**:

1. **Given** que a prova objetiva exibe 10 questões, **When** a pessoa responde exatamente 1 questão e finaliza, **Then** o protótipo simula resultado abaixo do corte e mostra o fluxo de redação complementar.
2. **Given** que a pessoa finalizou a prova com exatamente 1 resposta, **When** o resultado é exibido, **Then** a interface comunica esse desfecho como comportamento de demo/mock e não como regra real de produto.

---

### User Story 2 - Simular aprovação com 2 respostas ou mais (Priority: P2)

Como pessoa avaliadora do protótipo, quero responder 2 questões ou mais e finalizar a prova para validar rapidamente o desfecho de aprovação e avanço no fluxo.

**Why this priority**: Demonstra o caminho positivo da prova objetiva em poucos cliques, reduzindo o tempo total da apresentação.

**Independent Test**: Pode ser testado isoladamente ao iniciar a prova objetiva, responder 2 questões, finalizar e verificar a liberação de avanço.

**Acceptance Scenarios**:

1. **Given** que a prova objetiva exibe 10 questões, **When** a pessoa responde 2 ou mais questões e finaliza, **Then** o protótipo simula aprovação e libera o avanço no fluxo.
2. **Given** que a pessoa respondeu parcialmente a prova com 2 ou mais respostas, **When** conclui a avaliação, **Then** o protótipo não exige completar as 10 questões para mostrar o resultado positivo de demo.

---

### User Story 3 - Entender a regra de protótipo antes de finalizar (Priority: P3)

Como pessoa avaliadora do protótipo, quero ver uma explicação curta sobre a regra de demo para entender como testar os dois desfechos sem confundir isso com a lógica real.

**Why this priority**: Sem essa indicação, a alteração pode parecer regra real de produto e comprometer a leitura correta da proposta.

**Independent Test**: Pode ser testado isoladamente ao acessar a introdução da prova ou a área de finalização e verificar se a regra de mock está visível e discreta.

**Acceptance Scenarios**:

1. **Given** que a pessoa acessa a introdução da prova ou a área do botão de finalizar, **When** observa as instruções da etapa, **Then** encontra uma mensagem curta explicando que 1 resposta simula etapa complementar e 2 respostas simulam aprovação.
2. **Given** que a pessoa ainda não respondeu nenhuma questão, **When** tenta finalizar a prova, **Then** recebe um bloqueio ou alerta amigável pedindo ao menos 1 resposta.

---

### Edge Cases

- A pessoa tenta finalizar a prova com 0 respostas e deve receber bloqueio ou alerta amigável sem alterar o restante do fluxo.
- A pessoa responde 1 questão, volta entre perguntas e remove essa resposta; o protótipo deve reavaliar o estado como 0 respostas.
- A pessoa responde 2 ou mais questões não consecutivas; o protótipo deve considerar apenas a quantidade total preenchida.
- A pessoa finaliza com respostas parciais e o protótipo deve manter as 10 questões visíveis como parte da representação do fluxo completo.
- A regra de demo não deve alterar o comportamento de outras modalidades nem o fluxo já existente de redação complementar e avanço.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O protótipo MUST manter a prova objetiva com 10 questões exibidas dentro do fluxo atual.
- **FR-002**: O protótipo MUST permitir finalizar a prova objetiva com respostas parciais.
- **FR-003**: O protótipo MUST impedir a finalização apenas quando nenhuma questão tiver resposta preenchida.
- **FR-004**: Quando houver exatamente 1 resposta preenchida no momento da finalização, o protótipo MUST simular resultado abaixo do corte.
- **FR-005**: Quando houver exatamente 1 resposta preenchida no momento da finalização, o protótipo MUST encaminhar a pessoa para o fluxo existente de redação complementar.
- **FR-006**: Quando houver 2 ou mais respostas preenchidas no momento da finalização, o protótipo MUST simular aprovação e liberar o avanço no fluxo.
- **FR-007**: O protótipo MUST usar a quantidade de respostas preenchidas como regra exclusiva de demo para esses desfechos rápidos, sem introduzir cálculo real de nota nesta alteração.
- **FR-008**: A interface MUST comunicar de forma visível e discreta que essa regra existe apenas para facilitar demonstrações do protótipo.
- **FR-009**: A mensagem de orientação MUST informar que responder 1 questão simula etapa complementar e responder 2 questões ou mais simula aprovação.
- **FR-010**: A alteração MUST preservar o fluxo existente de fallback para redação complementar.
- **FR-011**: A alteração MUST preservar o fluxo existente de aprovação e avanço após resultado positivo.
- **FR-012**: A alteração MUST não remover a nota de corte conceitual nem redefinir a lógica real de avaliação como parte deste escopo.
- **FR-013**: A alteração MUST não exigir backend, persistência ou mudanças nas demais regras do protótipo.

### Key Entities *(include if feature involves data)*

- **Tentativa de Prova Objetiva**: Representa a sessão de resposta da prova, incluindo quais questões receberam resposta e se a finalização está liberada.
- **Regra de Demo da Prova**: Representa a convenção temporária de demonstração baseada apenas na quantidade de respostas preenchidas.
- **Desfecho da Prova**: Representa o resultado simulado da finalização parcial, podendo ser encaminhamento para redação complementar ou aprovação com avanço.
- **Mensagem de Modo Protótipo**: Representa o aviso curto que explica a regra de mock na interface.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em demonstração, a pessoa avaliadora consegue acionar o fluxo de redação complementar respondendo apenas 1 questão e finalizando a prova.
- **SC-002**: Em demonstração, a pessoa avaliadora consegue acionar o fluxo de aprovação respondendo apenas 2 questões e finalizando a prova.
- **SC-003**: A prova continua apresentando 10 questões durante os testes rápidos dos dois desfechos.
- **SC-004**: A interface explicita a regra de demo em pelo menos um ponto visível da etapa da prova sem exigir explicação verbal adicional.
- **SC-005**: O bloqueio para 0 respostas continua evitando finalização vazia sem quebrar a experiência da demonstração.
- **SC-006**: Nenhuma outra modalidade ou regra do protótipo precisa ser alterada para validar os dois desfechos principais da prova objetiva.

## Assumptions

- A melhoria será usada apenas em contexto de protótipo, apresentação e teste rápido, não como regra real de produto.
- O fluxo atual já possui caminhos funcionais de aprovação e de redação complementar, e esta alteração apenas decide qual deles mostrar mais cedo.
- Resposta preenchida significa qualquer questão objetiva marcada pela pessoa usuária no momento da finalização.
- O texto explicativo pode ser inserido na introdução da prova, próximo ao botão de finalizar, ou em ambos, desde que permaneça discreto e visível.
- A lógica real de nota, acertos e corte continua conceitualmente existente, mas não será recalculada nem detalhada nesta feature.
