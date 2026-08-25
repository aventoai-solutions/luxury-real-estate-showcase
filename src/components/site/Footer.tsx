import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <span className="block font-display text-3xl leading-none">Meridian Estates</span>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Private brokerage for architecturally significant homes across Europe and North
            America.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
          <Link to="/listings" className="transition-colors hover:text-gold">
            Residences
          </Link>
          <Link to="/about" className="transition-colors hover:text-gold">
            The House
          </Link>
          <Link to="/contact" className="transition-colors hover:text-gold">
            Enquire
          </Link>
          <span className="pt-4 text-xs tracking-wide">
            © {new Date().getFullYear()} Meridian Estates. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
