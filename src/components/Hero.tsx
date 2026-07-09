import { motion } from "framer-motion";
import teacherPhoto from "../assets/teacher.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-saffron-300), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-jade-100), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-mint-600">
            Private &amp; group Vietnamese lessons
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Speak Vietnamese like you mean it.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
            Online or in Vietnam, one-on-one or in a small group — lessons built to break the tone
            barrier that stops most learners cold, so you're understood the first time you speak.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-mint-500 px-7 py-3.5 text-base font-semibold text-paper shadow-md shadow-mint-500/20 transition hover:bg-mint-600"
            >
              Book Your Free Trial Lesson
            </a>
            <a
              href="#programs"
              className="text-base font-semibold text-ink/80 underline decoration-mint-300 decoration-2 underline-offset-4 hover:text-ink"
            >
              See programs &amp; pricing
            </a>
          </div>
          <p className="mt-6 text-sm text-ink/50">
            First lesson is free. No pressure, no long-term contract to start.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-jade-400/20" />
          <img
            src={teacherPhoto}
            alt="Trân, your Vietnamese teacher"
            className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
