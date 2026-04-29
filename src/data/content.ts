import type { FinalStatus } from "../types/flow";

export const admissionSteps = [
  "Dados pessoais",
  "Processo seletivo",
  "Documentos",
  "Contrato",
  "Taxa de matricula",
] as const;

export const prototypeBadgeLabel = "Prototipo demonstrativo";

export const objectiveTestCutScore = 5;

export const objectiveTestSummary = {
  totalQuestions: 10,
  instantResultLabel: "Resultado imediato",
  timerRuleLabel: "Tempo comeca ao iniciar",
};

export const essayTheme =
  "Como a tecnologia pode tornar o ingresso no ensino superior mais simples e humano?";

export const homeCopy = {
  title: "Triagem Inteligente",
  subtitle:
    "Uma proposta para acelerar a admissao digital com menos dependencia de redacao como etapa principal.",
  benefit:
    "Menos espera, menos custo operacional e uma jornada mais fluida para o candidato.",
  scenariosTitle: "Escolha um cenario mockado para a demonstracao",
  scenariosBody:
    "Compare uma instituicao com redacao obrigatoria e outra que permite prova objetiva como caminho principal.",
};

export const flowMessages = {
  modalitySelectionHint:
    "Escolha a modalidade mais adequada para seguir seu processo seletivo.",
  objectiveTestBenefit:
    "A prova objetiva entrega uma validacao rapida e pode liberar seu avanco imediatamente.",
  fallbackTitle: "Etapa complementar necessaria",
  fallbackBody:
    "Para continuar sua admissao, vamos seguir com uma etapa complementar de redacao.",
  approvedTitle: "Processo seletivo concluido",
  approvedBody:
    "Voce pode seguir para a etapa de documentos com resultado imediato.",
  essaySubmittedTitle: "Redacao enviada",
  essaySubmittedBody:
    "Sua redacao foi recebida e agora esta em analise pela instituicao.",
  enemSubmittedTitle: "Dados do ENEM enviados",
  enemSubmittedBody:
    "A simulacao foi concluida e voce pode seguir para a etapa de documentos.",
  degreeSubmittedTitle: "Diploma enviado",
  degreeSubmittedBody:
    "Os dados mockados do diploma foram recebidos e o fluxo pode avancar.",
  pendingFeatureTitle: "Etapa em construcao",
  pendingFeatureBody:
    "Este fluxo sera implementado nas proximas tasks, mantendo o estado e a navegacao ja preparados.",
};

export const finalStatusMessages: Record<
  FinalStatus,
  { title: string; description: string }
> = {
  idle: {
    title: "Fluxo nao iniciado",
    description: "Escolha um cenario para comecar a demonstracao.",
  },
  ready_for_documents: {
    title: "Avanco liberado",
    description:
      "O processo seletivo foi concluido e a proxima etapa e o envio de documentos.",
  },
  essay_under_review: {
    title: "Redacao em analise",
    description:
      "A etapa complementar foi enviada e segue para avaliacao institucional.",
  },
};
