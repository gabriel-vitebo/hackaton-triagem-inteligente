interface TestNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export function TestNavigation({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onFinish,
}: TestNavigationProps) {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="panel-card mt-6 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={isLastQuestion}
          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Proxima
        </button>
      </div>

      <button
        type="button"
        onClick={onFinish}
        className="btn-primary"
      >
        Finalizar prova
      </button>
    </div>
  );
}
