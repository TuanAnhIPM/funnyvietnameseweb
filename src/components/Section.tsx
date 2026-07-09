import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "dim" | "ink";
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper",
  dim: "bg-paper-dim",
  ink: "bg-ink text-paper",
};

export function Section({ id, children, className, tone = "paper" }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 md:py-28", toneClasses[tone])}>
      <div className={clsx("mx-auto max-w-6xl px-6", className)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-mint-600">
      {children}
    </p>
  );
}
