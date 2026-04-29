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
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        {isComplementary ? "Redacao complementar" : "Redacao obrigatoria"}
      </p>
      <h2 className="mt-4 text-3xl font-bold text-white">
        {isComplementary
          ? "Continue sua admissao com uma redacao"
          : "Complete a redacao exigida pela instituicao"}
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-300">
        Tema mockado: {essayTheme}
      </p>

      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Titulo</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Digite um titulo para sua redacao"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-200">
          <span className="font-medium">Texto</span>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={10}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/40"
            placeholder="Escreva aqui sua redacao"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onSubmit({ title, body })}
        className="mt-8 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Enviar redacao
      </button>
    </section>
  );
}
