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
                  ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                  : "border-white/10 bg-white/5 text-slate-400",
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
