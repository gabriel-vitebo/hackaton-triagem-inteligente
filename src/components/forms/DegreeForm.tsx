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
      <p className="section-kicker">
        Portador de diploma
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">
        Informe os dados do seu diploma
      </h2>
      <p className="text-soft mt-4 max-w-3xl text-sm leading-6">
        Este envio e mockado e serve apenas para demonstrar a continuidade do
        fluxo.
      </p>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Instituicao</span>
          <input
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            className="form-field"
            placeholder="Nome da instituicao"
          />
        </label>

        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Curso</span>
          <input
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            className="form-field"
            placeholder="Nome do curso"
          />
        </label>

        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Ano de conclusao</span>
          <input
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
            className="form-field"
            placeholder="Ex.: 2023"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onSubmit({ institution, course, graduationYear })}
        className="btn-primary mt-8"
      >
        Enviar diploma
      </button>
    </section>
  );
}
