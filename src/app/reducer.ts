import { getAdmissionPhaseForStep, getStepAfterResult, getStepFromModality } from "./flow";
import type {
  CurrentStep,
  FlowState,
  ModalityId,
  ResultNextAction,
} from "../types/flow";

const baseTestState = {
  answers: {},
  currentQuestionIndex: 0,
  startedAt: null,
  elapsedSeconds: 0,
};

export const initialFlowState: FlowState = {
  scenarioId: null,
  currentStep: "home",
  admissionPhase: "processo_seletivo",
  selectedModality: null,
  test: baseTestState,
  result: null,
  submissionStatus: "idle",
  finalStatus: "idle",
};

export type FlowAction =
  | { type: "select_scenario"; scenarioId: string }
  | { type: "select_modality"; modalityId: ModalityId }
  | { type: "start_objective_test" }
  | { type: "set_current_question"; index: number }
  | { type: "answer_question"; questionId: string; optionId: string }
  | { type: "set_elapsed_seconds"; seconds: number }
  | { type: "finish_test"; score: number; nextAction: ResultNextAction; message: string }
  | { type: "submit_enem_start" }
  | { type: "submit_enem_success" }
  | { type: "submit_degree_start" }
  | { type: "submit_degree_success" }
  | { type: "submit_essay_start" }
  | { type: "submit_essay_success" }
  | { type: "go_to_step"; step: CurrentStep }
  | { type: "back_to_selection" }
  | { type: "restart_flow" };

function applyStep(state: FlowState, step: CurrentStep): FlowState {
  return {
    ...state,
    currentStep: step,
    admissionPhase: getAdmissionPhaseForStep(step),
  };
}

export function flowReducer(state: FlowState, action: FlowAction): FlowState {
  switch (action.type) {
    case "select_scenario":
      return {
        ...initialFlowState,
        scenarioId: action.scenarioId,
        currentStep: "selection",
      };

    case "select_modality":
      return applyStep(
        {
          ...state,
          selectedModality: action.modalityId,
          result: null,
          finalStatus: "idle",
          submissionStatus: "idle",
          test: baseTestState,
        },
        getStepFromModality(action.modalityId),
      );

    case "start_objective_test":
      return applyStep(
        {
          ...state,
          test: {
            ...state.test,
            startedAt: Date.now(),
            elapsedSeconds: 0,
          },
        },
        "objective_test",
      );

    case "set_current_question":
      return {
        ...state,
        test: {
          ...state.test,
          currentQuestionIndex: action.index,
        },
      };

    case "answer_question":
      return {
        ...state,
        test: {
          ...state.test,
          answers: {
            ...state.test.answers,
            [action.questionId]: action.optionId,
          },
        },
      };

    case "set_elapsed_seconds":
      return {
        ...state,
        test: {
          ...state.test,
          elapsedSeconds: action.seconds,
        },
      };

    case "finish_test": {
      const nextStep = getStepAfterResult(action.nextAction);
      return applyStep(
        {
          ...state,
          result: {
            score: action.score,
            passed: action.nextAction === "documents",
            nextAction: action.nextAction,
            message: action.message,
          },
          finalStatus:
            action.nextAction === "documents"
              ? "ready_for_documents"
              : "idle",
        },
        nextStep,
      );
    }

    case "submit_enem_start":
    case "submit_degree_start":
    case "submit_essay_start":
      return {
        ...state,
        submissionStatus: "loading",
      };

    case "submit_enem_success":
    case "submit_degree_success":
      return applyStep(
        {
          ...state,
          submissionStatus: "submitted",
          finalStatus: "ready_for_documents",
        },
        "success",
      );

    case "submit_essay_success":
      return applyStep(
        {
          ...state,
          submissionStatus: "submitted",
          finalStatus: "essay_under_review",
        },
        "success",
      );

    case "go_to_step":
      return applyStep(state, action.step);

    case "back_to_selection":
      return applyStep(
        {
          ...state,
          selectedModality: null,
          result: null,
          submissionStatus: "idle",
          finalStatus: "idle",
          test: baseTestState,
        },
        "selection",
      );

    case "restart_flow":
      return initialFlowState;

    default:
      return state;
  }
}
