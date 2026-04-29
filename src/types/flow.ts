export type ModalityId = "objective_test" | "essay" | "enem" | "degree";

export type AdmissionPhase = "processo_seletivo" | "documentos";

export type CurrentStep =
  | "home"
  | "selection"
  | "objective_intro"
  | "objective_test"
  | "objective_result"
  | "essay_intro"
  | "essay_form"
  | "enem_form"
  | "degree_form"
  | "success";

export type SubmissionStatus = "idle" | "loading" | "submitted";

export type FinalStatus =
  | "idle"
  | "ready_for_documents"
  | "essay_under_review";

export type EssayMode = "required" | "complementary";

export type QuestionCategory =
  | "portugues"
  | "matematica"
  | "conhecimentos_gerais";

export type ResultNextAction = "documents" | "complementary_essay";

export interface ModalityDefinition {
  id: ModalityId;
  label: string;
  description: string;
  primaryCta: string;
}

export interface ScenarioDefinition {
  id: string;
  name: string;
  requiresEssay: boolean;
  availableModalities: ModalityId[];
  heroMessage: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  text: string;
}

export interface ObjectiveQuestion {
  id: string;
  category: QuestionCategory;
  prompt: string;
  options: QuestionOption[];
  correctOptionId: string;
}

export interface ObjectiveAnswerSet {
  answers: Record<string, string>;
  currentQuestionIndex: number;
  startedAt: number | null;
  elapsedSeconds: number;
}

export interface TestResult {
  score: number;
  answeredCount: number;
  passed: boolean;
  nextAction: ResultNextAction;
  message: string;
}

export interface EssaySubmission {
  mode: EssayMode;
  theme: string;
  title: string;
  body: string;
  status: SubmissionStatus;
}

export interface ExternalFormSubmission {
  type: Extract<ModalityId, "enem" | "degree">;
  fields: Record<string, string>;
  status: SubmissionStatus;
}

export interface FlowState {
  scenarioId: string | null;
  currentStep: CurrentStep;
  admissionPhase: AdmissionPhase;
  selectedModality: ModalityId | null;
  test: ObjectiveAnswerSet;
  result: TestResult | null;
  submissionStatus: SubmissionStatus;
  finalStatus: FinalStatus;
}
