interface LoadingOverlayProps {
  label?: string;
}

export function LoadingOverlay({
  label = "Processando sua etapa...",
}: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-qb-primary-darkest/30 px-6 backdrop-blur-sm">
      <div className="panel-card w-full max-w-md p-8 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-qb-primary-light/60 border-t-qb-primary" />
        <p className="section-kicker mt-5">
          Aguarde
        </p>
        <p className="text-soft mt-3 text-sm leading-6">{label}</p>
      </div>
    </div>
  );
}
