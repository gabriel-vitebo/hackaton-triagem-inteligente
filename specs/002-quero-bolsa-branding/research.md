# Research: Branding Quero Bolsa

## Decision: Centralizar a paleta no Tailwind com nomes semânticos

**Rationale**: O projeto já usa Tailwind. Colocar a paleta no `tailwind.config.ts` reduz repetição, evita hex espalhado e simplifica consistência entre componentes.

**Alternatives considered**:

- Manter apenas hex inline nos componentes: rejeitado por aumentar acoplamento visual e dificultar revisão.
- Usar apenas CSS variables sem extensão no Tailwind: rejeitado porque perde ergonomia nas classes utilitárias já usadas no app.

## Decision: Manter CSS variables para superfícies e tokens compostos

**Rationale**: `src/styles/tokens.css` e `src/styles/globals.css` já concentram fundo, texto, sombras e radius. Isso continua útil para trocar o tema base sem reescrever tudo em classes utilitárias.

**Alternatives considered**:

- Migrar tudo para Tailwind puro: rejeitado por gerar edição extensa e pouco ganho prático.

## Decision: Estratégia híbrida de branding

**Rationale**: Tailwind para cores semânticas de uso direto; CSS variables para tema global, sombra, borda e classes reutilizáveis como `panel-card` e `eyebrow-badge`.

**Alternatives considered**:

- Criar design system completo: fora de escopo.

## Decision: Atualizar primeiro a base global, depois componentes

**Rationale**: O app atual carrega forte identidade verde/escura em tokens globais. Se os componentes forem ajustados antes da base, haverá retrabalho e inconsistência temporária.

**Alternatives considered**:

- Ajustar componente por componente sem tocar base: rejeitado por alto risco de inconsistência.

## Decision: Preservar layout e estrutura DOM

**Rationale**: O pedido proíbe alteração de lógica e fluxo. Planejamento deve focar em classes, superfícies, estados e contraste, sem mexer em comportamento nem composição principal.

**Alternatives considered**:

- Reorganizar layouts para “parecer mais produto”: rejeitado por abrir risco de regressão funcional e fugir do escopo.

## Decision: Definir selected/active states explícitos

**Rationale**: Cenário selecionado, modalidade selecionada e stepper ativo são pontos de percepção imediata. Esses estados precisam de regra visual comum: borda azul, fundo suave, título mais escuro e foco visível.

**Alternatives considered**:

- Variar cada componente isoladamente: rejeitado por reduzir consistência.

## Decision: Validar acessibilidade manual com foco em contraste crítico

**Rationale**: O projeto não tem suíte de testes visuais. Para esse escopo, a checagem manual de contraste em CTAs, textos sobre azul e foco visível é suficiente e compatível com o tempo.

**Alternatives considered**:

- Adicionar tooling de acessibilidade automática: rejeitado por aumentar escopo.
