import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Key, ShieldCheck, Globe2 } from "lucide-react";

import hero from "@/assets/hero-villa.jpg";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Estates — Luxury Homes & Private Residences" },
      {
        name: "description",
        content:
          "Meridian Estates is a private brokerage for architecturally significant homes: penthouses, seafront estates, desert villas and alpine chalets.",
      },
      { property: "og:title", content: "Meridian Estates — Luxury Homes & Private Residences" },
      {
        property: "og:description",
        content:
          "Private brokerage for architecturally significant homes across Europe and North America.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Key,
    title: "Off-market access",
    body: "Two thirds of the homes we transact are never publicly listed. Our register opens only to represented buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Absolute discretion",
    body: "NDA-first process, private viewings after hours, and no third-party syndication of your address or imagery.",
  },
  {
    icon: Globe2,
    title: "Cross-border fluency",
    body: "In-house counsel and tax partners in nine jurisdictions, so an acquisition abroad reads like one at home.",
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={hero}
          alt="Cliffside modern villa at dusk with an infinity pool overlooking the coast"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10">
          <p className="eyebrow">Coastal · Alpine · Metropolitan</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Homes that hold their
            <span className="block italic text-gold">place in the light.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A private brokerage of thirty-two advisors, representing architecturally significant
            residences from the Costa Brava to the Sonoran Desert.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/listings"
              className="group inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the collection
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-border px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Speak with an advisor
            </Link>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
            {[
              ["$4.1B", "Transacted 2025"],
              ["9", "Jurisdictions"],
              ["52 yrs", "In practice"],
              ["Ø 41", "Days to offer"],
            ].map(([v, k]) => (
              <div key={k} className="min-w-0">
                <dt className="font-display text-3xl text-gold">{v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow">Featured residences</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Currently represented</h2>
            </div>
            <Link
              to="/listings"
              className="inline-flex shrink-0 items-center gap-2 text-sm text-gold hover:opacity-80"
            >
              All residences <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="gold-rule mt-8" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {properties.slice(0, 4).map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Why Meridian</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl">
            A brokerage built around privacy, not volume.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t border-gold/40 pt-6">
                <Icon className="size-6 text-gold" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Private register</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Ten to fifteen homes reach the register each quarter.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Tell us the geography, the architecture and the ceiling. We will only be in touch when
            something genuinely matches.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
