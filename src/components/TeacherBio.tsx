import { InstagramIcon } from "./icons/InstagramIcon";
import teacherPhoto from "../assets/teacher.jpg";
import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { contact } from "../data/content";

export function TeacherBio() {
  return (
    <Section id="teacher" tone="dim">
      <div className="grid items-center gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[1.75rem] bg-saffron-300/40" />
            <img
              src={teacherPhoto}
              alt="Trân, your Vietnamese teacher"
              className="relative aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-lg"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>Meet your teacher</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Trân
          </h2>
          <div className="mt-5 space-y-4 max-w-xl text-[15px] leading-relaxed text-ink/75">
            <p>
              Trân teaches Vietnamese with the eye of someone who has always been fascinated by how
              the language and the culture click together — not just the words, but the thinking
              behind them.
            </p>
            <p>
              Her lessons are visual-first and intuition-first, so you're never just repeating
              sounds back — you're learning to actually hear and feel the difference yourself,
              inside and outside of class.
            </p>
            <p className="font-medium text-ink">
              One belief drives every lesson: you don't truly learn a language by studying it. You
              learn it by owning it.
            </p>
          </div>

          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink/85"
          >
            <InstagramIcon size={18} />
            See Trân teach on Instagram — {contact.instagramHandle}
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
