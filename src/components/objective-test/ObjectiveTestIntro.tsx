import { objectiveTestSummary } from "../../data/content";

interface ObjectiveTestIntroProps {
  onStart: () => void;
  onBack: () => void;
}

export function ObjectiveTestIntro({
  onStart,
  onBack,
}: ObjectiveTestIntroProps) {
  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Prova objetiva
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">
        Uma avaliacao curta para seguir com mais rapidez
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
        Responda {objectiveTestSummary.totalQuestions} perguntas de multipla
        escolha. O tempo so comeca quando voce clicar em iniciar prova e o
        resultado sai na hora.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quantidade
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            {objectiveTestSummary.totalQuestions} perguntas
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Formato
          </p>
          <p className="mt-2 text-xl font-bold text-white">Multipla escolha</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Resultado
          </p>
          <p className="mt-2 text-xl font-bold text-white">
            {objectiveTestSummary.instantResultLabel}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Iniciar prova
        </button>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
        >
          Voltar para modalidades
        </button>
      </div>
    </section>
  );
}
