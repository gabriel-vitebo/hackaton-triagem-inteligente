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
        <p className="section-kicker">
          Processo seletivo
        </p>
        <h2 className="title-strong mt-3 text-3xl font-bold">{scenario.name}</h2>
        <p className="text-soft mt-3 max-w-3xl text-sm leading-6">
          {flowMessages.modalitySelectionHint}
        </p>
        {!scenario.requiresEssay && (
          <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-qb-primary-dark">
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
