import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";
import { contact } from "../data/content";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#curriculum", label: "What You'll Learn" },
  { href: "#teacher", label: "Teacher" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="h-1 w-full bg-gradient-to-r from-mint-400 via-mint-500 to-mint-700" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold text-paper">Funny Vietnamese</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              Private &amp; group Vietnamese lessons, online or in Vietnam — built to break the
              tone barrier, one real conversation at a time.
            </p>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-sm font-medium text-paper transition hover:border-mint-400 hover:text-mint-300"
            >
              <InstagramIcon size={16} />
              {contact.instagramHandle}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-paper/70 hover:text-mint-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-paper/70 hover:text-mint-300"
                >
                  <Mail size={16} className="text-mint-400" /> {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-paper/70 hover:text-mint-300"
                >
                  <MessageCircle size={16} className="text-mint-400" /> {contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Funny Vietnamese. All rights reserved.</p>
          <p>Made with love in Vietnam.</p>
        </div>
      </div>
    </footer>
  );
}
