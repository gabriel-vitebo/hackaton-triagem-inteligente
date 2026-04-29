import type {
  ModalityDefinition,
  ModalityId,
  ScenarioDefinition,
} from "../types/flow";

export const modalityDefinitions: Record<ModalityId, ModalityDefinition> = {
  objective_test: {
    id: "objective_test",
    label: "Prova objetiva",
    description:
      "Uma avaliacao rapida com resultado imediato para acelerar sua admissao.",
    primaryCta: "Fazer prova",
  },
  enem: {
    id: "enem",
    label: "ENEM",
    description: "Use sua nota do ENEM para seguir com o processo seletivo.",
    primaryCta: "Enviar nota",
  },
  degree: {
    id: "degree",
    label: "Portador de diploma",
    description: "Informe os dados do seu diploma para continuar a admissao.",
    primaryCta: "Enviar diploma",
  },
  essay: {
    id: "essay",
    label: "Redacao online",
    description:
      "Uma etapa de escrita usada quando a instituicao exige avaliacao complementar.",
    primaryCta: "Iniciar redacao",
  },
};

export const scenarios: ScenarioDefinition[] = [
  {
    id: "faculdade-redacao-obrigatoria",
    name: "Faculdade Horizonte",
    requiresEssay: true,
    availableModalities: ["essay"],
    heroMessage:
      "Neste cenario, a instituicao exige redacao obrigatoria no processo seletivo.",
  },
  {
    id: "faculdade-prova-objetiva",
    name: "Centro Universitario Avanca",
    requiresEssay: false,
    availableModalities: ["enem", "objective_test", "degree"],
    heroMessage:
      "Neste cenario, a prova objetiva reduz espera e evita usar redacao como etapa inicial.",
  },
];
