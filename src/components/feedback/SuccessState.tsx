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
      <p className="section-kicker">
        Status final
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">{title}</h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">
        {description}
      </p>

      <div className="info-banner mt-8">
        O fluxo principal foi demonstrado com dados mockados e sem dependencia
        de backend.
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-soft text-sm leading-6">
          Menos espera, menos dependencia de redacao e uma jornada de admissao
          mais rapida.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="btn-primary"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
