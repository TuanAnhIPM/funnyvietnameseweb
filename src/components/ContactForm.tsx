import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Check, ChevronDown, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { activePromo, contact, programInterest, vietnameseLevels } from "../data/content";

const fieldClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-mint-400 focus:outline-none focus:ring-2 focus:ring-mint-200";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  error?: boolean;
}

function CustomSelect({ value, onChange, options, placeholder, error }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={clsx(
          "flex w-full items-center justify-between rounded-xl border bg-paper px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-mint-200",
          value ? "text-ink" : "text-ink/40",
          error ? "border-red-300" : "border-ink/15 focus:border-mint-400",
        )}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          size={16}
          className={clsx("ml-2 shrink-0 text-ink/40 transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-ink/10 bg-paper py-1.5 shadow-xl shadow-ink/10"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={clsx(
                    "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-mint-50",
                    value === opt ? "font-medium text-mint-600" : "text-ink/80",
                  )}
                >
                  {opt}
                  {value === opt && <Check size={14} className="text-mint-500" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [level, setLevel] = useState("");
  const [program, setProgram] = useState("");
  const [errors, setErrors] = useState<{ level?: boolean; program?: boolean }>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const missing: { level?: boolean; program?: boolean } = {};
    if (!level) missing.level = true;
    if (!program) missing.program = true;
    if (missing.level || missing.program) {
      setErrors(missing);
      return;
    }

    const data = new FormData(e.currentTarget);
    const discountCode = data.get("discountCode");
    const lines = [
      "Free trial lesson request",
      `Name: ${data.get("name")}`,
      `Age: ${data.get("age")}`,
      `Email: ${data.get("email")}`,
      `Phone / WhatsApp: ${data.get("phone")}`,
      `Languages spoken: ${data.get("languages")}`,
      `Vietnamese level: ${level}`,
      `Interested in: ${program}`,
      ...(discountCode ? [`Discount code: ${discountCode}`] : []),
      `Note: ${data.get("note")}`,
    ].join("\n");

    const phone = contact.whatsapp.replace(/[^\d]/g, "");
    const text = encodeURIComponent(lines);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noreferrer");
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
                WhatsApp should have opened with your details filled in — just hit send and
                we'll get back to you to schedule your free trial.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-ink/10 bg-paper-dim p-6 md:p-8">
              <div className="flex items-center gap-2 rounded-xl bg-mint-50 px-4 py-3 text-sm font-medium text-mint-700">
                <Sparkles size={16} className="shrink-0 text-mint-500" />
                {activePromo.percent}% off right now — code{" "}
                <span className="font-semibold">{activePromo.code}</span> is already applied below.
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full name" className={fieldClass} />
                <input
                  name="age"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Age"
                  className={fieldClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="email" type="email" required placeholder="Email" className={fieldClass} />
                <input name="phone" required placeholder="Phone / WhatsApp" className={fieldClass} />
              </div>
              <input name="languages" placeholder="Languages you speak" className={fieldClass} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <CustomSelect
                    value={level}
                    onChange={(v) => {
                      setLevel(v);
                      setErrors((er) => ({ ...er, level: false }));
                    }}
                    options={vietnameseLevels}
                    placeholder="Your Vietnamese level"
                    error={errors.level}
                  />
                  {errors.level && <p className="mt-1.5 text-xs text-red-500">Please select your level</p>}
                </div>
                <div>
                  <CustomSelect
                    value={program}
                    onChange={(v) => {
                      setProgram(v);
                      setErrors((er) => ({ ...er, program: false }));
                    }}
                    options={programInterest}
                    placeholder="Program you're interested in"
                    error={errors.program}
                  />
                  {errors.program && <p className="mt-1.5 text-xs text-red-500">Please select a program</p>}
                </div>
              </div>
              <input
                name="discountCode"
                defaultValue={activePromo.code}
                placeholder="Discount code (if any)"
                className={fieldClass}
              />
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
