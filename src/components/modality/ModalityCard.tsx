import type { ModalityDefinition } from "../../types/flow";

interface ModalityCardProps {
  modality: ModalityDefinition;
  onSelect: () => void;
}

export function ModalityCard({ modality, onSelect }: ModalityCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="panel-card flex h-full flex-col justify-between p-6 text-left transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/10"
    >
      <div>
        <h3 className="text-xl font-bold text-white">{modality.label}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {modality.description}
        </p>
      </div>
      <span className="mt-6 inline-flex text-sm font-semibold text-emerald-200">
        {modality.primaryCta}
      </span>
    </button>
  );
}
