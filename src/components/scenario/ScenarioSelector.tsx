import type { ScenarioDefinition } from "../../types/flow";

interface ScenarioSelectorProps {
  scenarios: ScenarioDefinition[];
  onSelectScenario: (scenarioId: string) => void;
}

export function ScenarioSelector({
  scenarios,
  onSelectScenario,
}: ScenarioSelectorProps) {
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      {scenarios.map((scenario) => (
        <button
          key={scenario.id}
          type="button"
          onClick={() => onSelectScenario(scenario.id)}
          className="panel-card selectable-card text-left p-7"
        >
          <p className="section-kicker">
            {scenario.requiresEssay ? "Redacao obrigatoria" : "Prova objetiva liberada"}
          </p>
          <h2 className="title-strong mt-4 text-2xl font-bold">{scenario.name}</h2>
          <p className="text-soft mt-3 text-sm leading-6">
            {scenario.heroMessage}
          </p>
          <span className="mt-6 inline-flex text-sm font-semibold text-qb-primary">
            Escolher este cenario
          </span>
        </button>
      ))}
    </section>
  );
}
