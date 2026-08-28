import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: Array<{ heading: string; body: ReactNode }>;
}) {
  return (
    <main className="container-x pb-28 pt-36">
      <h1 className="display max-w-3xl text-4xl md:text-5xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{intro}</p>}
      <div className="mt-16 max-w-2xl space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em]">{s.heading}</h2>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
