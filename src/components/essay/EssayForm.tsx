import { useState } from "react";
import { essayTheme } from "../../data/content";

interface EssayFormProps {
  mode: "required" | "complementary";
  onSubmit: (payload: { title: string; body: string }) => void;
}

export function EssayForm({ mode, onSubmit }: EssayFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const isComplementary = mode === "complementary";

  return (
    <section className="panel-card p-8">
      <p className="section-kicker">
        {isComplementary ? "Redacao complementar" : "Redacao obrigatoria"}
      </p>
      <h2 className="title-strong mt-4 text-3xl font-bold">
        {isComplementary
          ? "Continue sua admissao com uma redacao"
          : "Complete a redacao exigida pela instituicao"}
      </h2>
      <p className="text-soft mt-4 text-sm leading-6">
        Tema mockado: {essayTheme}
      </p>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Titulo</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-field"
            placeholder="Digite um titulo para sua redacao"
          />
        </label>

        <label className="grid gap-2 text-sm text-qb-primary-dark">
          <span className="font-medium">Texto</span>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={10}
            className="form-field"
            placeholder="Escreva aqui sua redacao"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onSubmit({ title, body })}
        className="btn-primary mt-8"
      >
        Enviar redacao
      </button>
    </section>
  );
}
