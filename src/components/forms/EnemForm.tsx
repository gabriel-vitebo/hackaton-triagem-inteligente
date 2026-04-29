import { useState } from "react";

interface EnemFormProps {
  onSubmit: (payload: { registrationNumber: string; year: string }) => void;
}

export function EnemForm({ onSubmit }: EnemFormProps) {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [year, setYear] = useState("");

  return (
    <section className="panel-card p-8">
      <p className="section-kicker">
        ENEM
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">
        Use sua nota para seguir com a admissao
      </h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">
        Informe os dados basicos do ENEM para simular o envio da sua nota.
      </p>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Numero de inscricao</span>
          <input
            value={registrationNumber}
            onChange={(event) => setRegistrationNumber(event.target.value)}
            className="form-field"
            placeholder="Digite o numero de inscricao"
          />
        </label>

        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Ano</span>
          <input
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="form-field"
            placeholder="Ex.: 2024"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onSubmit({ registrationNumber, year })}
        className="btn-primary mt-8"
      >
        Enviar dados do ENEM
      </button>
    </section>
  );
}
