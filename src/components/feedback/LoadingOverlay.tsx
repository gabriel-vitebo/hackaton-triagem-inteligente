interface LoadingOverlayProps {
  label?: string;
}

export function LoadingOverlay({
  label = "Processando sua etapa...",
}: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6 backdrop-blur-sm">
      <div className="panel-card w-full max-w-md p-8 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-300/20 border-t-emerald-300" />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Aguarde
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{label}</p>
      </div>
    </div>
  );
}
