import type { ObjectiveQuestion } from "../../types/flow";

interface QuestionCardProps {
  question: ObjectiveQuestion;
  selectedOptionId?: string;
  questionNumber: number;
  totalQuestions: number;
  onSelectOption: (optionId: string) => void;
}

export function QuestionCard({
  question,
  selectedOptionId,
  questionNumber,
  totalQuestions,
  onSelectOption,
}: QuestionCardProps) {
  return (
    <section className="panel-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Pergunta {questionNumber} de {totalQuestions}
      </p>
      <p className="mt-2 text-sm text-slate-400">
        {question.category.replace("_", " ")}
      </p>
      <h2 className="mt-4 text-2xl font-bold leading-tight text-white">
        {question.prompt}
      </h2>

      <div className="mt-8 grid gap-3">
        {question.options.map((option) => {
          const isSelected = option.id === selectedOptionId;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectOption(option.id)}
              className={[
                "rounded-2xl border px-4 py-4 text-left transition",
                isSelected
                  ? "border-emerald-400/40 bg-emerald-400/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
              ].join(" ")}
            >
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-sm font-bold text-emerald-200">
                {option.label}
              </span>
              <span className="text-sm leading-6">{option.text}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
