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
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
        Etapa complementar
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">
        {flowMessages.fallbackTitle}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
        {flowMessages.fallbackBody}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onContinue}
          className="rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Iniciar redacao complementar
        </button>
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Voltar para modalidades
        </button>
      </div>
    </section>
  );
}
