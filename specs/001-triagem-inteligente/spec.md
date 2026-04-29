# Feature Specification: Triagem Inteligente

**Feature Branch**: `001-triagem-inteligente`  
**Created**: 2026-04-29  
**Status**: Draft  
**Input**: User description: "Criar uma especificação para um protótipo chamado Triagem Inteligente, que propõe uma melhoria no fluxo de admissão digital do Quero Bolsa."

## Clarifications

### Session 2026-04-29

- Q: Como o fluxo do protótipo será estruturado? → A: Fluxo único controlado por estado, com navegação linear entre macroetapas e retorno apenas dentro da etapa corrente.
- Q: Como o estado será mantido? → A: Estado apenas em memória durante a sessão, sem persistência e sem suporte a refresh com recuperação.
- Q: Como os cenários e a prova objetiva funcionarão? → A: Dois botões de cenário na entrada; prova com uma pergunta por vez, navegação livre entre perguntas e contador real iniciado ao clicar para começar.
- Q: Como o resultado e o fallback serão apresentados? → A: Resultado por número de acertos, aprovação com 5 ou mais acertos, nota exibida ao usuário e tela intermediária amigável antes da redação complementar simplificada.
- Q: Quais limites e prioridades de experiência guiam o protótipo? → A: Experiência deve assumir explicitamente que é protótipo, comunicar benefícios, usar tom amigável, priorizar boa apresentação com solução leve, loading curto simulado e nenhum backend, autenticação, API real ou validação complexa.

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Escolher modalidade sem redação inicial (Priority: P1)

Como candidato em uma faculdade que não exige redação, eu quero ver opções de processo seletivo sem a redação como padrão para seguir por um caminho mais rápido.

**Why this priority**: Este é o núcleo da proposta de valor: reduzir dependência de redação e acelerar a jornada.

**Independent Test**: Pode ser testado isoladamente ao selecionar o cenário sem redação obrigatória e verificar se a etapa de processo seletivo mostra ENEM, prova objetiva e diploma, sem exibir redação na entrada.

**Acceptance Scenarios**:

1. **Given** que o candidato escolheu uma faculdade sem redação obrigatória, **When** ele acessa a etapa de processo seletivo, **Then** ele vê as modalidades principais disponíveis sem a redação online como opção inicial.
2. **Given** que o candidato está avaliando as modalidades disponíveis, **When** ele compara as opções exibidas, **Then** a interface deixa claro que a prova objetiva é um caminho rápido para continuar a admissão.

---

### User Story 2 - Concluir prova objetiva e avançar (Priority: P2)

Como candidato, eu quero realizar uma prova objetiva curta e receber um resultado imediato para saber se posso seguir para a próxima etapa sem depender de correção externa.

**Why this priority**: Demonstra o ganho operacional e a aceleração do fluxo em relação à redação tradicional.

**Independent Test**: Pode ser testado isoladamente ao escolher prova objetiva, responder a avaliação, atingir o critério mínimo e confirmar o avanço para a próxima etapa.

**Acceptance Scenarios**:

1. **Given** que o candidato escolheu prova objetiva, **When** ele inicia a avaliação, responde às perguntas e atinge o critério mínimo, **Then** o sistema informa aprovação imediata no processo seletivo e libera o avanço no fluxo.
2. **Given** que o candidato ainda não iniciou a avaliação, **When** ele acessa a introdução da prova, **Then** o tempo da avaliação só começa a contar após a ação explícita de iniciar.
3. **Given** que o candidato está respondendo a prova objetiva, **When** ele navega entre questões, **Then** ele vê uma pergunta por vez e pode avançar ou voltar sem perder respostas já marcadas.

---

### User Story 3 - Continuar com etapa complementar (Priority: P3)

Como candidato que não atingiu o critério mínimo na prova objetiva, eu quero seguir com uma etapa complementar sem linguagem punitiva para continuar minha admissão sem fricção desnecessária.

**Why this priority**: Valida o fallback para redação e preserva a experiência do candidato nos casos em que a prova objetiva não basta.

**Independent Test**: Pode ser testado isoladamente ao concluir a prova objetiva abaixo do critério mínimo e verificar se a redação surge como continuação natural do processo.

**Acceptance Scenarios**:

1. **Given** que o candidato concluiu a prova objetiva abaixo do critério mínimo, **When** o resultado é apresentado, **Then** o sistema solicita uma etapa complementar de redação sem usar linguagem de reprovação.
2. **Given** que a faculdade exige redação obrigatória, **When** o candidato acessa a etapa de processo seletivo, **Then** a redação online é apresentada diretamente como modalidade necessária.
3. **Given** que o candidato não atingiu o critério mínimo na prova objetiva, **When** o resultado é exibido, **Then** o sistema mostra primeiro uma explicação breve e amigável antes de abrir a redação complementar.

---

### Edge Cases

- O candidato tenta concluir a prova objetiva com perguntas sem resposta.
- O candidato navega entre perguntas antes de finalizar e o sistema deve preservar respostas já escolhidas.
- O candidato atinge exatamente o critério mínimo e deve avançar normalmente.
- O candidato troca de cenário de faculdade e o conjunto de modalidades precisa refletir o novo contexto sem manter estado indevido.
- O candidato atualiza a página no meio do fluxo e o protótipo reinicia no estado inicial sem restaurar progresso anterior.
- O candidato acessa ENEM ou diploma e envia dados incompletos; o protótipo deve orientar o preenchimento antes de simular avanço.
- O candidato envia a redação complementar; o protótipo deve indicar que ela foi recebida e está em análise, sem prometer prazo real de correção.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O protótipo MUST apresentar uma página inicial com o nome "Triagem Inteligente", uma explicação breve da proposta e escolha entre pelo menos dois cenários de faculdade.
- **FR-001a**: A escolha de cenário MUST ser feita por botões ou cards diretos na entrada do protótipo, sem depender de cadastro ou seleção complexa.
- **FR-002**: O protótipo MUST representar visualmente as etapas da admissão digital: dados pessoais, processo seletivo, documentos, contrato e taxa de matrícula, destacando que o usuário está em processo seletivo.
- **FR-003**: O protótipo MUST suportar pelo menos um cenário com redação obrigatória e pelo menos um cenário sem redação obrigatória.
- **FR-003a**: Os cenários mockados MUST se diferenciar explicitamente por nome da faculdade, obrigatoriedade de redação e modalidades disponíveis no processo seletivo.
- **FR-004**: Em cenário com redação obrigatória, o protótipo MUST apresentar a redação online diretamente como caminho necessário do processo seletivo.
- **FR-005**: Em cenário sem redação obrigatória, o protótipo MUST ocultar a redação online na escolha inicial e apresentar prova objetiva, ENEM e diploma quando aplicáveis.
- **FR-006**: O protótipo MUST permitir ao candidato selecionar uma modalidade de processo seletivo e seguir para o fluxo correspondente.
- **FR-007**: Ao escolher prova objetiva, o protótipo MUST exibir uma etapa introdutória informando que a avaliação é rápida, quantas perguntas possui e que o tempo começa apenas após a ação explícita de iniciar.
- **FR-008**: A prova objetiva MUST conter 10 perguntas de múltipla escolha distribuídas entre português, matemática e conhecimentos gerais.
- **FR-009**: Durante a prova objetiva, o protótipo MUST exibir uma pergunta por vez, permitir avançar e voltar entre perguntas, visualizar progresso e visualizar tempo decorrido.
- **FR-009a**: O contador da prova MUST ser funcional dentro da sessão ativa e iniciar somente após o clique em iniciar prova.
- **FR-010**: O protótipo MUST calcular o resultado da prova objetiva apenas com dados mockados no front-end.
- **FR-010a**: O cálculo do resultado MUST ser baseado no número de acertos da prova objetiva.
- **FR-011**: Quando o candidato atingir 5 ou mais acertos na prova objetiva, o protótipo MUST informar conclusão positiva do processo seletivo, exibir a pontuação obtida e liberar continuidade para documentos.
- **FR-012**: Quando o candidato atingir menos de 5 acertos na prova objetiva, o protótipo MUST apresentar uma tela intermediária breve e amigável antes de exibir a redação online como etapa complementar do mesmo fluxo.
- **FR-013**: O protótipo MUST evitar termos de reprovação no fluxo de fallback e usar linguagem que indique continuidade natural do processo.
- **FR-014**: O fluxo de redação complementar MUST exibir tema mockado, campo de título, campo de texto e ação para envio.
- **FR-015**: Após o envio da redação, o protótipo MUST exibir confirmação de envio e status em análise.
- **FR-016**: O fluxo de ENEM MUST permitir informar dados básicos de inscrição e, após envio simulado, indicar avanço no processo.
- **FR-017**: O fluxo de diploma MUST permitir informar dados básicos do diploma e, após envio simulado, indicar avanço no processo.
- **FR-018**: O protótipo MUST comunicar de forma visível que a proposta reduz dependência de redação como etapa principal e acelera a admissão.
- **FR-018a**: A interface MUST deixar claro que se trata de um protótipo demonstrativo.
- **FR-018b**: O conteúdo textual MUST usar tom amigável e direto, evitando linguagem excessivamente formal ou punitiva.
- **FR-019**: Todo comportamento do protótipo MUST funcionar sem autenticação, sem backend real, sem banco de dados e sem chamadas reais para APIs externas.
- **FR-019a**: O protótipo MUST manter o estado apenas em memória da sessão ativa e reiniciar no estado inicial após refresh da página.
- **FR-019b**: O protótipo MAY usar loading simulado curto em transições-chave de envio ou processamento apenas para reforçar a experiência demonstrativa.

### Key Entities *(include if feature involves data)*

- **Cenário de Faculdade**: Representa o contexto mockado da instituição, incluindo nome, exigência de redação obrigatória e modalidades disponíveis no processo seletivo.
- **Estado de Fluxo**: Representa a etapa atual do protótipo, cenário escolhido, modalidade selecionada e progresso temporário do candidato durante a sessão.
- **Modalidade de Processo Seletivo**: Representa cada caminho possível de admissão, incluindo prova objetiva, redação online, ENEM e diploma.
- **Questão Objetiva**: Representa uma pergunta da prova com enunciado, categoria, alternativas e resposta correta mockada.
- **Tentativa de Prova**: Representa o conjunto de respostas do candidato, progresso entre perguntas, tempo decorrido e resultado calculado.
- **Resultado do Processo Seletivo**: Representa o desfecho mockado da modalidade escolhida, incluindo avanço direto, necessidade de etapa complementar ou envio em análise.
- **Redação Complementar**: Representa a submissão mockada da etapa complementar, incluindo tema, título, texto e status.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em demonstração guiada, 100% dos avaliadores conseguem identificar os dois cenários de faculdade e a diferença entre eles sem explicação adicional.
- **SC-002**: O fluxo com prova objetiva pode ser percorrido do início ao resultado final em no máximo 3 minutos durante uma demonstração padrão.
- **SC-003**: O protótipo demonstra de forma observável pelo menos três desfechos distintos: avanço por prova objetiva, redação obrigatória direta e redação complementar como fallback.
- **SC-004**: Em validação interna, os avaliadores conseguem descrever corretamente que a redação deixou de ser o caminho padrão no cenário sem obrigatoriedade.
- **SC-005**: O protótipo comunica explicitamente a proposta de valor de reduzir tempo de espera e dependência de correção externa em pelo menos uma tela principal do fluxo.
- **SC-006**: Em demonstração, o avaliador consegue completar a navegação principal sem precisar explicar como escolher cenário, iniciar prova, interpretar resultado ou seguir para fallback.

## Assumptions

- O protótipo será usado para demonstração interna ou de stakeholders, não como fluxo produtivo real de admissão.
- Todos os dados de faculdade, perguntas, respostas, notas e mensagens podem ser inteiramente mockados.
- O critério mínimo da prova objetiva será fixado em 5 acertos para diferenciar avanço direto de fallback.
- O protótipo não precisa persistir progresso entre sessões ou dispositivos e perderá o estado ao atualizar a página.
- O envio de ENEM, diploma e redação será apenas simulado, sem integração com sistemas externos.
- O escopo cobre clareza de fluxo e valor de negócio; robustez acadêmica da avaliação não faz parte desta fase.
- A navegação entre macroetapas do protótipo será linear, enquanto a navegação dentro da prova objetiva poderá usar avançar e voltar.
- A apresentação visual deve ser bem acabada, mas com solução leve e rápida de implementar.
