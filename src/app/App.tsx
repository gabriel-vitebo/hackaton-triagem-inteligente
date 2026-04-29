import { useMemo, useReducer } from "react";
import {
  finalStatusMessages,
  flowMessages,
  homeCopy,
  prototypeBadgeLabel,
} from "../data/content";
import { getScenarioById, scenarios } from "../data/scenarios";
import { flowReducer, initialFlowState } from "./reducer";
import { AppShell } from "../components/layout/AppShell";
import { AdmissionStepper } from "../components/layout/AdmissionStepper";
import { ScenarioSelector } from "../components/scenario/ScenarioSelector";
import { ModalitySelection } from "../components/modality/ModalitySelection";
import { ObjectiveTestIntro } from "../components/objective-test/ObjectiveTestIntro";
import { ObjectiveTest } from "../components/objective-test/ObjectiveTest";
import { objectiveQuestions } from "../data/objectiveQuestions";
import { TestResult } from "../components/objective-test/TestResult";
import { ComplementaryEssayIntro } from "../components/essay/ComplementaryEssayIntro";
import { EssayForm } from "../components/essay/EssayForm";
import { EnemForm } from "../components/forms/EnemForm";
import { DegreeForm } from "../components/forms/DegreeForm";
import { SuccessState } from "../components/feedback/SuccessState";
import { LoadingOverlay } from "../components/feedback/LoadingOverlay";

const SIMULATED_LOADING_MS = 900;

export function App() {
  const [state, dispatch] = useReducer(flowReducer, initialFlowState);

  const selectedScenario = useMemo(
    () => getScenarioById(state.scenarioId),
    [state.scenarioId],
  );

  const showStepper = state.currentStep !== "home";

  const simulateSubmission = (
    startAction:
      | "submit_enem_start"
      | "submit_degree_start"
      | "submit_essay_start",
    successAction:
      | "submit_enem_success"
      | "submit_degree_success"
      | "submit_essay_success",
  ) => {
    dispatch({ type: startAction });
    window.setTimeout(() => {
      dispatch({ type: successAction });
    }, SIMULATED_LOADING_MS);
  };

  const simulateTestCorrection = () => {
    dispatch({ type: "start_test_correction" });
    window.setTimeout(() => {
      dispatch({ type: "finish_test", questions: objectiveQuestions });
    }, SIMULATED_LOADING_MS);
  };

  let content = (
    <section className="panel-card p-8">
      <p className="section-kicker">
        {homeCopy.scenariosTitle}
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">{homeCopy.title}</h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">
        {homeCopy.scenariosBody}
      </p>
      <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-qb-primary-dark">
        {homeCopy.benefit}
      </p>
      <div className="mt-8">
        <ScenarioSelector
          scenarios={scenarios}
          onSelectScenario={(scenarioId) =>
            dispatch({ type: "select_scenario", scenarioId })
          }
        />
      </div>
    </section>
  );

  if (state.currentStep === "selection" && selectedScenario) {
    content = (
      <ModalitySelection
        scenario={selectedScenario}
        onSelectModality={(modalityId) =>
          dispatch({ type: "select_modality", modalityId })
        }
      />
    );
  }

  if (state.currentStep === "objective_intro") {
    content = (
      <ObjectiveTestIntro
        onStart={() => dispatch({ type: "start_objective_test" })}
        onBack={() => dispatch({ type: "back_to_selection" })}
      />
    );
  }

  if (state.currentStep === "objective_test") {
    content = (
      <ObjectiveTest
        questions={objectiveQuestions}
        answers={state.test.answers}
        currentQuestionIndex={state.test.currentQuestionIndex}
        startedAt={state.test.startedAt}
        elapsedSeconds={state.test.elapsedSeconds}
        onSelectOption={(questionId, optionId) =>
          dispatch({ type: "answer_question", questionId, optionId })
        }
        onChangeQuestion={(index) =>
          dispatch({ type: "set_current_question", index })
        }
        onElapsedChange={(seconds) =>
          dispatch({ type: "set_elapsed_seconds", seconds })
        }
        onFinish={simulateTestCorrection}
      />
    );
  }

  if (state.currentStep === "objective_result" && state.result) {
    content = (
      <TestResult
        result={state.result}
        onContinue={() => dispatch({ type: "continue_after_result" })}
        onBack={() => dispatch({ type: "back_to_selection" })}
      />
    );
  }

  if (state.currentStep === "essay_intro") {
    content = (
      <ComplementaryEssayIntro
        onContinue={() => dispatch({ type: "go_to_step", step: "essay_form" })}
        onBack={() => dispatch({ type: "back_to_selection" })}
      />
    );
  }

  if (state.currentStep === "essay_form") {
    const mode =
      selectedScenario?.requiresEssay || state.result?.nextAction === "complementary_essay"
        ? state.result?.nextAction === "complementary_essay"
          ? "complementary"
          : "required"
        : "required";

    content = (
      <EssayForm
        mode={mode}
        onSubmit={() =>
          simulateSubmission("submit_essay_start", "submit_essay_success")
        }
      />
    );
  }

  if (state.currentStep === "success") {
    const finalMessage = finalStatusMessages[state.finalStatus];

    content = (
      <SuccessState
        title={finalMessage.title}
        description={finalMessage.description}
        ctaLabel="Reiniciar demonstracao"
        onReset={() => dispatch({ type: "restart_flow" })}
      />
    );
  }

  if (state.currentStep === "enem_form") {
    content = (
      <EnemForm
        onSubmit={() =>
          simulateSubmission("submit_enem_start", "submit_enem_success")
        }
      />
    );
  }

  if (state.currentStep === "degree_form") {
    content = (
      <DegreeForm
        onSubmit={() =>
          simulateSubmission("submit_degree_start", "submit_degree_success")
        }
      />
    );
  }

  return (
    <AppShell
      badge={prototypeBadgeLabel}
      title={homeCopy.title}
      subtitle={homeCopy.subtitle}
    >
      {showStepper && <AdmissionStepper currentPhase={state.admissionPhase} />}
      {content}
      {state.submissionStatus === "loading" && (
        <LoadingOverlay label="Organizando sua proxima etapa..." />
      )}
    </AppShell>
  );
}
