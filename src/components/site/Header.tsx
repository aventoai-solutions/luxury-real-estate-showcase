import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Residences" },
  { to: "/about", label: "The House" },
  { to: "/contact", label: "Enquire" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 lg:px-10">
        <Link to="/" className="min-w-0">
          <span className="block font-display text-2xl leading-none tracking-tight">
            Meridian
          </span>
          <span className="eyebrow block pt-1">Estates · Est. 1974</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-gold/60 px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Private viewing
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 text-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="mx-6 flex flex-col gap-1 border border-border bg-surface/95 p-4 backdrop-blur md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-2 py-3 text-sm tracking-wide text-muted-foreground hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
