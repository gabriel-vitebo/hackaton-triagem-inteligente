import { flowMessages } from "../../data/content";
import { modalityDefinitions } from "../../data/scenarios";
import type { ModalityId, ScenarioDefinition } from "../../types/flow";
import { ModalityCard } from "./ModalityCard";

interface ModalitySelectionProps {
  scenario: ScenarioDefinition;
  onSelectModality: (modalityId: ModalityId) => void;
}

export function ModalitySelection({
  scenario,
  onSelectModality,
}: ModalitySelectionProps) {
  const modalities = scenario.availableModalities.map(
    (modalityId) => modalityDefinitions[modalityId],
  );

  return (
    <section className="space-y-6">
      <div className="panel-card p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Processo seletivo
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">{scenario.name}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          {flowMessages.modalitySelectionHint}
        </p>
        {!scenario.requiresEssay && (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-emerald-200">
            {flowMessages.objectiveTestBenefit}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {modalities.map((modality) => (
          <ModalityCard
            key={modality.id}
            modality={modality}
            onSelect={() => onSelectModality(modality.id)}
          />
        ))}
      </div>
    </section>
  );
}
