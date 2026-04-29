import { useState } from "react";

interface DegreeFormProps {
  onSubmit: (payload: {
    institution: string;
    course: string;
    graduationYear: string;
  }) => void;
}

export function DegreeForm({ onSubmit }: DegreeFormProps) {
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Portador de diploma
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">
        Informe os dados do seu diploma
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
        Este envio e mockado e serve apenas para demonstrar a continuidade do
        fluxo.
      </p>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Instituicao</span>
          <input
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Nome da instituicao"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Curso</span>
          <input
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Nome do curso"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Ano de conclusao</span>
          <input
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Ex.: 2023"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onSubmit({ institution, course, graduationYear })}
        className="mt-8 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Enviar diploma
      </button>
    </section>
  );
}
