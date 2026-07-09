import { CheckCircle2 } from "lucide-react";
import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { outcomes, roadmap } from "../data/content";

export function Curriculum() {
  return (
    <Section id="curriculum" tone="dim">
      <Reveal>
        <Eyebrow>Level 1 · A1 Beginner</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
          What you'll actually be able to do.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {outcomes.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.08}>
            <div className="flex gap-4 rounded-2xl bg-paper p-6">
              <CheckCircle2 className="mt-0.5 shrink-0 text-jade-600" size={22} />
              <div>
                <h3 className="font-semibold text-ink">{o.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{o.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-8 rounded-2xl border border-dashed border-mint-300 bg-mint-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-mint-600">
            Where the path leads next
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{roadmap}</p>
        </div>
      </Reveal>
    </Section>
  );
}
