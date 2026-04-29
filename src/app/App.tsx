import { useMemo, useReducer } from "react";
import { flowMessages, homeCopy, prototypeBadgeLabel } from "../data/content";
import { getScenarioById, scenarios } from "../data/scenarios";
import { flowReducer, initialFlowState } from "./reducer";
import { AppShell } from "../components/layout/AppShell";
import { AdmissionStepper } from "../components/layout/AdmissionStepper";
import { ScenarioSelector } from "../components/scenario/ScenarioSelector";
import { ModalitySelection } from "../components/modality/ModalitySelection";
import { ObjectiveTestIntro } from "../components/objective-test/ObjectiveTestIntro";

function PendingFeaturePanel({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
        Proxima etapa
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
        {flowMessages.pendingFeatureBody}
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
      <PendingFeaturePanel
        title="Fluxo da prova objetiva"
        onBack={() => dispatch({ type: "back_to_selection" })}
      />
    );
  }

  if (state.currentStep === "essay_form") {
    content = (
      <PendingFeaturePanel
        title="Fluxo de redacao"
        onBack={() => dispatch({ type: "back_to_selection" })}
      />
    );
  }

  if (state.currentStep === "enem_form") {
    content = (
      <PendingFeaturePanel
        title="Fluxo ENEM"
        onBack={() => dispatch({ type: "back_to_selection" })}
      />
    );
  }

  if (state.currentStep === "degree_form") {
    content = (
      <PendingFeaturePanel
        title="Fluxo portador de diploma"
        onBack={() => dispatch({ type: "back_to_selection" })}
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
    </AppShell>
  );
}
