import { objectiveTestCutScore } from "../../data/content";
import type { TestResult as TestResultType } from "../../types/flow";

interface TestResultProps {
  result: TestResultType;
  onContinue: () => void;
  onBack: () => void;
}

export function TestResult({
  result,
  onContinue,
  onBack,
}: TestResultProps) {
  const title = result.passed
    ? "Voce concluiu o processo seletivo"
    : "Vamos seguir com uma etapa complementar";

  const body = result.passed
    ? "Seu desempenho ja libera o avanço para a etapa de documentos."
    : "Sua admissao pode continuar com uma redacao complementar, sem perder o contexto do processo.";

  const cta = result.passed ? "Seguir para documentos" : "Continuar com redacao";

  return (
    <section className="panel-card p-8">
      <p className="section-kicker">
        Resultado imediato
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">{title}</h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">{body}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="metric-card">
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.18em]">
            Acertos
          </p>
          <p className="title-strong mt-2 text-3xl font-black">{result.score}</p>
        </div>
        <div className="metric-card">
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.18em]">
            Nota de corte
          </p>
          <p className="title-strong mt-2 text-3xl font-black">
            {objectiveTestCutScore}
          </p>
        </div>
        <div className="metric-card">
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.18em]">
            Status
          </p>
          <p className="title-strong mt-2 text-xl font-bold">
            {result.passed ? "Aprovado para avancar" : "Etapa complementar"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onContinue}
          className="btn-primary"
        >
          {cta}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary"
        >
          Refazer escolha de modalidade
        </button>
      </div>
    </section>
  );
}
