# UI Branding Contract

## Purpose

Definir o comportamento visual esperado para a aplicação da identidade Quero Bolsa sem alterar fluxo ou lógica.

## Global Rules

- A cor principal de ação deve ser a cor azul pura da marca.
- Hover e focus de ações principais devem usar tons mais escuros da paleta.
- Fundos suaves e superfícies secundárias devem usar tons claros da paleta.
- Texto principal deve preservar legibilidade em todas as superfícies.
- Foco visível deve existir em todos os alvos interativos principais.

## Component Contracts

### AppShell

- Hero principal deve abandonar o viés verde atual.
- Header deve usar superfície clara ou institucional coerente com a nova paleta.
- Título principal deve parecer institucional e legível.

### Primary Buttons

- Fundo padrão: `qb-primary`.
- Hover: `qb-primary-dark`.
- Focus: outline ou ring visível com `qb-primary-darkest` ou equivalente.
- Texto: contraste alto e estável.

### Secondary Buttons

- Devem parecer secundários sem competir com CTA primário.
- Podem usar fundo branco/azul muito claro com borda azul clara.
- Hover deve reforçar clicabilidade.

### Cards

- Estado padrão: superfície suave, borda discreta, sombra consistente.
- Hover: leve destaque de borda/sombra, sem efeito chamativo.
- Estado selecionado: borda azul, fundo claro, título/label reforçados.

### Scenario and Modality Selection

- Cenário ou modalidade selecionada deve ficar inequívoco.
- CTA interno deve herdar linguagem visual da marca.

### Admission Stepper

- Etapa atual deve ter destaque imediato.
- Etapas inativas devem continuar legíveis, mas com menor ênfase.

### Badges

- Devem usar superfície clara e texto institucional.
- Não devem parecer alertas ou feedbacks de erro/sucesso.

### Progress and Loading

- Loading deve usar linguagem da marca, sem voltar para verde.
- Overlay deve continuar legível e não bloquear entendimento.

### Result Screens

- Estados de aprovação, continuidade e fallback devem manter diferenciação visual.
- Azul da marca deve dominar ações e estrutura.
- Mensagens positivas não devem depender da identidade verde antiga para parecer sucesso.

## Acceptance Contract

- Nenhum componente listado no escopo permanece com identidade dominante verde.
- Ações principais, estados selecionados e etapa ativa usam padrões consistentes.
- Não há mudança funcional percebida durante a navegação.
