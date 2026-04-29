import { admissionSteps } from "../../data/content";
import type { AdmissionPhase } from "../../types/flow";

interface AdmissionStepperProps {
  currentPhase: AdmissionPhase;
}

export function AdmissionStepper({ currentPhase }: AdmissionStepperProps) {
  return (
    <section className="panel-card mb-8 p-5">
      <div className="flex flex-wrap gap-3">
        {admissionSteps.map((step) => {
          const isProcessStep = step === "Processo seletivo";
          const isDocumentsStep = step === "Documentos";
          const isActive =
            (currentPhase === "processo_seletivo" && isProcessStep) ||
            (currentPhase === "documentos" && isDocumentsStep);

          return (
            <div
              key={step}
              className={[
                "rounded-2xl border px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "selected-state text-qb-primary-darkest"
                  : "border-qb-primary/10 bg-white/80 text-qb-primary-dark",
              ].join(" ")}
            >
              {step}
            </div>
          );
        })}
      </div>
    </section>
  );
}
