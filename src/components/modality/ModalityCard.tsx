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
      className="panel-card selectable-card flex h-full flex-col justify-between p-6 text-left"
    >
      <div>
        <h3 className="title-strong text-xl font-bold">{modality.label}</h3>
        <p className="text-soft mt-3 text-sm leading-6">
          {modality.description}
        </p>
      </div>
      <span className="mt-6 inline-flex text-sm font-semibold text-qb-primary">
        {modality.primaryCta}
      </span>
    </button>
  );
}
