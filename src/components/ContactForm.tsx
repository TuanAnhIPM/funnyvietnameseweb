import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { contact, programInterest, vietnameseLevels } from "../data/content";

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-mint-400 focus:outline-none focus:ring-2 focus:ring-mint-200";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Age: ${data.get("age")}`,
      `Email: ${data.get("email")}`,
      `Phone / WhatsApp: ${data.get("phone")}`,
      `Languages spoken: ${data.get("languages")}`,
      `Vietnamese level: ${data.get("level")}`,
      `Interested in: ${data.get("program")}`,
      `Note: ${data.get("note")}`,
    ].join("\n");

    const subject = encodeURIComponent("Free trial lesson request");
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow>Get started</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Book your free trial lesson.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/70">
            Tell us a bit about you and we'll get back to you to schedule your free first
            lesson — no pressure, no contract to start.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-sm font-medium text-ink/75 hover:text-mint-600"
            >
              <Mail size={18} className="text-mint-500" /> {contact.email}
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink/75 hover:text-mint-600"
            >
              <MessageCircle size={18} className="text-mint-500" /> {contact.whatsapp} (WhatsApp)
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="rounded-2xl border border-jade-100 bg-jade-50 p-8 text-center">
              <h3 className="font-serif text-xl font-semibold text-jade-700">Almost done!</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                Your email app should have opened with your details filled in — just hit send.
                You can also reach out directly on WhatsApp any time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-ink/10 bg-paper-dim p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full name" className={fieldClass} />
                <input name="age" type="number" min={0} placeholder="Age" className={fieldClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="email" type="email" required placeholder="Email" className={fieldClass} />
                <input name="phone" required placeholder="Phone / WhatsApp" className={fieldClass} />
              </div>
              <input name="languages" placeholder="Languages you speak" className={fieldClass} />
              <div className="grid gap-4 sm:grid-cols-2">
                <select name="level" defaultValue="" required className={fieldClass}>
                  <option value="" disabled>
                    Your Vietnamese level
                  </option>
                  {vietnameseLevels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                <select name="program" defaultValue="" required className={fieldClass}>
                  <option value="" disabled>
                    Program you're interested in
                  </option>
                  {programInterest.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <textarea name="note" rows={3} placeholder="Anything else we should know?" className={fieldClass} />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-mint-500 px-6 py-3.5 text-sm font-semibold text-paper shadow-md shadow-mint-500/20 transition hover:bg-mint-600"
              >
                Send &amp; Book My Free Trial <Send size={16} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
