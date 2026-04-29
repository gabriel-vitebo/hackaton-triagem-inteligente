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

function PendingFeaturePanel({
  title,
  onBack,
  children,
}: {
  title: string;
  onBack: () => void;
  children?: string;
}) {
  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
        Proxima etapa
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
        {children ?? flowMessages.pendingFeatureBody}
      </p>
      <button
        type="button"
        onClick={onBack}
        className="mt-6 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Voltar para modalidades
      </button>
    </section>
  );
}

export function App() {
  const [state, dispatch] = useReducer(flowReducer, initialFlowState);

  const selectedScenario = useMemo(
    () => getScenarioById(state.scenarioId),
    [state.scenarioId],
  );

  const showStepper = state.currentStep !== "home";

  let content = (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        {homeCopy.scenariosTitle}
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">{homeCopy.title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
        {homeCopy.scenariosBody}
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-200">
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
        onFinish={() =>
          dispatch({ type: "finish_test", questions: objectiveQuestions })
        }
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
        onSubmit={() => dispatch({ type: "submit_essay_success" })}
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
        onSubmit={() => dispatch({ type: "submit_enem_success" })}
      />
    );
  }

  if (state.currentStep === "degree_form") {
    content = (
      <DegreeForm
        onSubmit={() => dispatch({ type: "submit_degree_success" })}
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
      {state.submissionStatus === "loading" && <LoadingOverlay />}
    </AppShell>
  );
}
