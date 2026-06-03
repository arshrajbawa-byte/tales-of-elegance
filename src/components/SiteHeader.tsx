import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoMark.url}
            alt="The Signature Stories"
            className="h-10 md:h-12 w-auto invert transition-transform duration-500 group-hover:scale-105"
          />
          <span className="font-serif text-lg md:text-xl text-cream tracking-wide hidden sm:inline">
            The <span className="gradient-gold-text italic">Signature</span> Stories
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-cream/70 hover:text-gold" }}
              className="text-xs uppercase tracking-[0.3em] transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gold/20 mt-3 bg-ink/95">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-cream/80" }}
                className="text-sm uppercase tracking-[0.3em]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
