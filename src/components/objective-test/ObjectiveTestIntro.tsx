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
      <p className="section-kicker">
        Prova objetiva
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">
        Uma avaliacao curta para seguir com mais rapidez
      </h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">
        Responda {objectiveTestSummary.totalQuestions} perguntas de multipla
        escolha. O tempo so comeca quando voce clicar em iniciar prova e o
        resultado sai na hora.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="metric-card">
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.18em]">
            Quantidade
          </p>
          <p className="title-strong mt-2 text-xl font-bold">
            {objectiveTestSummary.totalQuestions} perguntas
          </p>
        </div>
        <div className="metric-card">
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.18em]">
            Formato
          </p>
          <p className="title-strong mt-2 text-xl font-bold">Multipla escolha</p>
        </div>
        <div className="metric-card">
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.18em]">
            Resultado
          </p>
          <p className="title-strong mt-2 text-xl font-bold">
            {objectiveTestSummary.instantResultLabel}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onStart}
          className="btn-primary"
        >
          Iniciar prova
        </button>
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary"
        >
          Voltar para modalidades
        </button>
      </div>
    </section>
  );
}
