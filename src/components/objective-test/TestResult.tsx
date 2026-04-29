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
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Resultado imediato
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">{body}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Acertos
          </p>
          <p className="mt-2 text-3xl font-black text-white">{result.score}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Nota de corte
          </p>
          <p className="mt-2 text-3xl font-black text-white">
            {objectiveTestCutScore}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Status
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            {result.passed ? "Aprovado para avancar" : "Etapa complementar"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onContinue}
          className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          {cta}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Refazer escolha de modalidade
        </button>
      </div>
    </section>
  );
}
