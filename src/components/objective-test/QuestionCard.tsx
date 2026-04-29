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
      <p className="section-kicker">
        Pergunta {questionNumber} de {totalQuestions}
      </p>
      <p className="text-muted mt-2 text-sm">
        {question.category.replace("_", " ")}
      </p>
      <h2 className="title-strong mt-4 text-2xl font-bold leading-tight">
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
                  ? "selected-state text-qb-primary-darkest"
                  : "border-qb-primary/10 bg-white/80 text-qb-primary-darkest hover:border-qb-primary/30 hover:bg-qb-primary-lightest",
              ].join(" ")}
            >
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-qb-primary-light text-sm font-bold text-qb-primary-dark">
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
