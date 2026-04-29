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
          className="panel-card text-left p-7 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {scenario.requiresEssay ? "Redacao obrigatoria" : "Prova objetiva liberada"}
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white">{scenario.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {scenario.heroMessage}
          </p>
          <span className="mt-6 inline-flex text-sm font-semibold text-emerald-200">
            Escolher este cenario
          </span>
        </button>
      ))}
    </section>
  );
}
