import { useEffect, useMemo, useState } from "react";
import type { ObjectiveQuestion } from "../../types/flow";
import { QuestionCard } from "./QuestionCard";
import { TestNavigation } from "./TestNavigation";

interface ObjectiveTestProps {
  questions: ObjectiveQuestion[];
  answers: Record<string, string>;
  currentQuestionIndex: number;
  startedAt: number | null;
  elapsedSeconds: number;
  onSelectOption: (questionId: string, optionId: string) => void;
  onChangeQuestion: (index: number) => void;
  onElapsedChange: (seconds: number) => void;
  onFinish: () => void;
}

function formatElapsedTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export function ObjectiveTest({
  questions,
  answers,
  currentQuestionIndex,
  startedAt,
  elapsedSeconds,
  onSelectOption,
  onChangeQuestion,
  onElapsedChange,
  onFinish,
}: ObjectiveTestProps) {
  const [friendlyAlert, setFriendlyAlert] = useState("");

  useEffect(() => {
    if (!startedAt) {
      return undefined;
    }

    const updateElapsed = () => {
      onElapsedChange(Math.floor((Date.now() - startedAt) / 1000));
    };

    updateElapsed();
    const timer = window.setInterval(updateElapsed, 1000);

    return () => window.clearInterval(timer);
  }, [onElapsedChange, startedAt]);

  const currentQuestion = questions[currentQuestionIndex];

  const unansweredCount = useMemo(() => {
    return questions.filter((question) => !answers[question.id]).length;
  }, [answers, questions]);

  const selectedOptionId = answers[currentQuestion.id];

  const handleFinish = () => {
    if (unansweredCount > 0) {
      setFriendlyAlert(
        `Faltam ${unansweredCount} pergunta(s) para concluir. Responda todas antes de finalizar.`,
      );
      return;
    }

    setFriendlyAlert("");
    onFinish();
  };

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="status-banner font-medium">
          Progresso: {currentQuestionIndex + 1} / {questions.length}
        </div>
        <div className="status-banner selected-state font-semibold">
          Tempo decorrido: {formatElapsedTime(elapsedSeconds)}
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedOptionId={selectedOptionId}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onSelectOption={(optionId) => onSelectOption(currentQuestion.id, optionId)}
      />

      {friendlyAlert && (
        <div className="status-banner-warn mt-4">
          {friendlyAlert}
        </div>
      )}

      <TestNavigation
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onPrevious={() => onChangeQuestion(currentQuestionIndex - 1)}
        onNext={() => onChangeQuestion(currentQuestionIndex + 1)}
        onFinish={handleFinish}
      />
    </div>
  );
}
