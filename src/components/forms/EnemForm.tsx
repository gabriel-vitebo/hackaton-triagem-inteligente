import { useState } from "react";

interface EnemFormProps {
  onSubmit: (payload: { registrationNumber: string; year: string }) => void;
}

export function EnemForm({ onSubmit }: EnemFormProps) {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [year, setYear] = useState("");

  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        ENEM
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">
        Use sua nota para seguir com a admissao
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
        Informe os dados basicos do ENEM para simular o envio da sua nota.
      </p>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Numero de inscricao</span>
          <input
            value={registrationNumber}
            onChange={(event) => setRegistrationNumber(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Digite o numero de inscricao"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Ano</span>
          <input
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Ex.: 2024"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onSubmit({ registrationNumber, year })}
        className="mt-8 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Enviar dados do ENEM
      </button>
    </section>
  );
}
