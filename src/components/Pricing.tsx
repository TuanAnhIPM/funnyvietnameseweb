import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { programs } from "../data/content";

export function Pricing() {
  return (
    <Section id="pricing">
      <Reveal>
        <Eyebrow>Tuition &amp; programs</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
          Simple pricing, billed monthly. First lesson's on us.
        </h2>
      </Reveal>

      <div className="mt-12 space-y-10">
        {programs.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <div className="rounded-2xl border border-ink/10 bg-paper-dim p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl font-semibold text-ink">{p.name}</h3>
                <span className="text-sm font-medium text-mint-600">{p.eyebrow}</span>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink/15 text-ink/50">
                      <th className="py-2 pr-4 font-medium">Format</th>
                      <th className="py-2 pr-4 font-medium">Mode</th>
                      <th className="py-2 pr-4 font-medium">Price</th>
                      <th className="py-2 font-medium">Structure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.pricing.map((row) => (
                      <tr key={row.format + row.mode} className="border-b border-ink/5 last:border-0">
                        <td className="py-3 pr-4 text-ink/70">{row.format}</td>
                        <td className="py-3 pr-4 text-ink/70">{row.mode}</td>
                        <td className="py-3 pr-4 font-semibold text-ink">
                          {row.price}
                          <span className="font-normal text-ink/50"> {row.unit}</span>
                        </td>
                        <td className="py-3 text-ink/70">{row.sessionInfo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {p.note && <p className="mt-4 text-sm italic text-ink/60">{p.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
