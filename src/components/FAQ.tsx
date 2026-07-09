import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { faqs } from "../data/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" tone="dim">
      <Reveal>
        <Eyebrow>Questions</Eyebrow>
        <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
          Good to know before you start.
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-paper">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-ink">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={clsx("shrink-0 text-ink/50 transition-transform duration-300", isOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink/70">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
