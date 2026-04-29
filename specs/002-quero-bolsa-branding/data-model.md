# Data Model: Branding Quero Bolsa

## Overview

Esta feature não cria entidades de negócio novas. O modelo aqui descreve entidades visuais e seus estados, para orientar implementação consistente.

## Entities

### BrandPalette

**Purpose**: representar os tokens oficiais de cor da marca.

**Fields**:

- `primaryDarkest`: `#0D2262`
- `primaryDark`: `#143182`
- `primaryPure`: `#304FFE`
- `primaryLight`: `#C9D9FF`
- `primaryLightest`: `#EDF2FF`
- `secondaryPure`: `#304FFE`

**Validation Rules**:

- Deve existir fonte única dos tokens.
- Não deve exigir hex repetido em múltiplos componentes.

### VisualToken

**Purpose**: mapear a paleta para intenção de uso semântico.

**Fields**:

- `actionPrimary`
- `actionPrimaryHover`
- `actionPrimaryFocus`
- `surfaceSubtle`
- `surfaceHighlight`
- `borderSubtle`
- `borderActive`
- `textPrimary`
- `textSecondary`
- `textOnBrand`

**Validation Rules**:

- Cada token semântico deve apontar para uma cor de marca ou derivação controlada.
- Tokens devem cobrir componentes-alvo sem exigir exceções frequentes.

### UIElement

**Purpose**: representar grupos de componentes afetados.

**Fields**:

- `name`
- `category`: `button | card | stepper | badge | feedback | layout | form`
- `usesPrimaryAction`: boolean
- `supportsSelectedState`: boolean
- `supportsHover`: boolean
- `supportsFocus`: boolean
- `supportsDisabled`: boolean

**Validation Rules**:

- Elementos clicáveis devem suportar hover e focus visíveis.
- Elementos selecionáveis devem ter estado ativo distinto.

## State Model

### InteractionState

- `default`
- `hover`
- `focus`
- `active`
- `selected`
- `disabled`
- `success`
- `progress`

## State Transitions

- `default -> hover`: ponteiro sobre alvo interativo.
- `default -> focus`: navegação por teclado ou foco programático.
- `default -> active`: pressão/clique.
- `default -> selected`: item escolhido no fluxo.
- `default -> disabled`: ação indisponível.
- `default -> success`: conclusão positiva de etapa.
- `default -> progress`: etapa em andamento ou processamento.

## Relationships

- `BrandPalette` alimenta `VisualToken`.
- `VisualToken` orienta `UIElement`.
- `UIElement` aplica um ou mais `InteractionState`.

## Non-Goals

- Não modela reducer, fluxo, dados do processo seletivo ou novas regras.
- Não introduz persistência nem configuração dinâmica de tema.
