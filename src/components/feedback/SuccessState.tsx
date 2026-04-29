interface SuccessStateProps {
  title: string;
  description: string;
  ctaLabel: string;
  onReset: () => void;
}

export function SuccessState({
  title,
  description,
  ctaLabel,
  onReset,
}: SuccessStateProps) {
  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Status final
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
        {description}
      </p>

      <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-100">
        O fluxo principal foi demonstrado com dados mockados e sem dependencia
        de backend.
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        {ctaLabel}
      </button>
    </section>
  );
}
