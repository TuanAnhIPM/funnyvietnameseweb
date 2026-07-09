import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { programs } from "../data/content";

export function Programs() {
  return (
    <Section id="programs">
      <Reveal>
        <Eyebrow>Choose your path</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
          Three ways to learn, depending on where you're starting from.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper-dim p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-jade-600">
                {p.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-mint-600">{p.tagline}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/70">{p.description}</p>
              <p className="mt-5 border-t border-ink/10 pt-4 text-sm text-ink/60">
                <span className="font-semibold text-ink">Best for:</span> {p.bestFor}
              </p>
              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mint-600 hover:text-mint-700"
              >
                See pricing <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
