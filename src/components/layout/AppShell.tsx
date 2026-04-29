import type { ReactNode } from "react";

interface AppShellProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function AppShell({ badge, title, subtitle, children }: AppShellProps) {
  return (
    <main className="min-h-screen text-slate-50">
      <div className="app-container">
        <header className="surface-highlight panel-card mb-10 overflow-hidden p-8 md:p-10">
          <span className="eyebrow-badge">{badge}</span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            {subtitle}
          </p>
        </header>
        {children}
      </div>
    </main>
  );
}
