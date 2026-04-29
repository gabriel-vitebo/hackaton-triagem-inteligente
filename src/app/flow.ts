import type {
  AdmissionPhase,
  CurrentStep,
  ModalityId,
  ResultNextAction,
} from "../types/flow";

export const flowSteps: CurrentStep[] = [
  "home",
  "selection",
  "objective_intro",
  "objective_test",
  "objective_result",
  "essay_intro",
  "essay_form",
  "enem_form",
  "degree_form",
  "success",
];

export const modalityStepMap: Record<ModalityId, CurrentStep> = {
  objective_test: "objective_intro",
  essay: "essay_form",
  enem: "enem_form",
  degree: "degree_form",
};

export const allowedTransitions: Record<CurrentStep, CurrentStep[]> = {
  home: ["selection"],
  selection: ["objective_intro", "essay_form", "enem_form", "degree_form"],
  objective_intro: ["objective_test", "selection"],
  objective_test: ["objective_result", "objective_intro"],
  objective_result: ["success", "essay_intro", "selection"],
  essay_intro: ["essay_form", "selection"],
  essay_form: ["success", "selection"],
  enem_form: ["success", "selection"],
  degree_form: ["success", "selection"],
  success: ["home", "selection"],
};

const documentsPhaseSteps: CurrentStep[] = ["success"];

export function getStepFromModality(modality: ModalityId): CurrentStep {
  return modalityStepMap[modality];
}

export function getStepAfterResult(
  nextAction: ResultNextAction,
): CurrentStep {
  return nextAction === "documents" ? "success" : "essay_intro";
}

export function getAdmissionPhaseForStep(step: CurrentStep): AdmissionPhase {
  return documentsPhaseSteps.includes(step)
    ? "documentos"
    : "processo_seletivo";
}

export function canTransition(
  currentStep: CurrentStep,
  targetStep: CurrentStep,
): boolean {
  return allowedTransitions[currentStep].includes(targetStep);
}

export function isObjectiveTestStep(step: CurrentStep): boolean {
  return (
    step === "objective_intro" ||
    step === "objective_test" ||
    step === "objective_result"
  );
}
