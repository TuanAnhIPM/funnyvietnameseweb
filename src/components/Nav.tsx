import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#curriculum", label: "What You'll Learn" },
  { href: "#teacher", label: "Teacher" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-paper/90 shadow-sm backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight text-ink">
          Funny Vietnamese
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink/80 hover:text-mint-600">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-mint-400 to-mint-600 px-5 py-2.5 text-sm font-semibold text-paper shadow-lg shadow-mint-400/40 transition duration-200 hover:scale-105 hover:shadow-mint-400/60"
          >
            Book Free Trial
          </a>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-mint-400 to-mint-600 px-5 py-2.5 text-center text-sm font-semibold text-paper shadow-lg shadow-mint-400/40"
          >
            Book Free Trial
          </a>
        </nav>
      )}
    </header>
  );
}
