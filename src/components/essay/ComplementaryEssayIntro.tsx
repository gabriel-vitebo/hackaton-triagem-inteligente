import { flowMessages } from "../../data/content";

interface ComplementaryEssayIntroProps {
  onContinue: () => void;
  onBack: () => void;
}

export function ComplementaryEssayIntro({
  onContinue,
  onBack,
}: ComplementaryEssayIntroProps) {
  return (
    <section className="panel-card p-8">
      <p className="section-kicker">
        Etapa complementar
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">
        {flowMessages.fallbackTitle}
      </h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">
        {flowMessages.fallbackBody}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onContinue}
          className="btn-primary"
        >
          Iniciar redacao complementar
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
