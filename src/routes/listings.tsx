import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Residences for Sale — Meridian Estates" },
      {
        name: "description",
        content:
          "Browse Meridian Estates' represented residences: skyline penthouses, seafront estates, desert villas and alpine chalets from $7M.",
      },
      { property: "og:title", content: "Residences for Sale — Meridian Estates" },
      {
        property: "og:description",
        content: "Skyline penthouses, seafront estates, desert villas and alpine chalets.",
      },
    ],
  }),
  component: Listings,
});

const filters = ["All", "Exclusive", "For Sale", "New Listing"] as const;

function Listings() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (filter === "All" ? properties : properties.filter((p) => p.status === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen">
      <Header />

      <section className="border-b border-border px-6 pb-14 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">Represented residences</h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A working selection of the homes currently under our mandate. Off-market inventory is
            shared privately with represented buyers.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors ${
                  filter === f
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {visible.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mx-auto max-w-7xl pt-8 text-sm text-muted-foreground">
            No residences under this status right now.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
}
