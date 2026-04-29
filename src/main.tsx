import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BootstrapPreview() {
  return (
    <main className="min-h-screen text-slate-50">
      <div className="app-container">
        <span className="eyebrow-badge">
          Prototipo em setup
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-white">
          Triagem Inteligente
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Base React + TypeScript + Tailwind pronta para iniciar a implementacao
          do fluxo de admissao.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <section className="panel-card p-6">
            <p className="text-sm font-medium text-slate-400">Stack</p>
            <p className="mt-2 text-xl font-semibold text-white">
              React + Tailwind
            </p>
          </section>
          <section className="panel-card p-6">
            <p className="text-sm font-medium text-slate-400">Objetivo</p>
            <p className="mt-2 text-xl font-semibold text-white">
              Fluxo unico em memoria
            </p>
          </section>
          <section className="panel-card p-6">
            <p className="text-sm font-medium text-slate-400">Status</p>
            <p className="mt-2 text-xl font-semibold text-white">
              Setup concluido
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BootstrapPreview />
  </React.StrictMode>,
);
