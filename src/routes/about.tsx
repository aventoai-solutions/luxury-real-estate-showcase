import { createFileRoute } from "@tanstack/react-router";

import advisor from "@/assets/advisor.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The House — Meridian Estates" },
      {
        name: "description",
        content:
          "Founded in 1974, Meridian Estates advises a small number of families on acquiring and releasing architecturally significant homes.",
      },
      { property: "og:title", content: "The House — Meridian Estates" },
      {
        property: "og:description",
        content: "Fifty-two years advising families on significant homes, quietly.",
      },
    ],
  }),
  component: About,
});

const milestones = [
  ["1974", "Founded in Geneva as a single-advisor practice representing lakeside villas."],
  ["1991", "First cross-border mandate: a Costa Brava headland sold to a New York family."],
  ["2008", "Opened the Manhattan desk; the private register formalises at 15 homes per quarter."],
  ["2026", "Thirty-two advisors, nine jurisdictions, still no public advertising."],
];

function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">The house</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.08] sm:text-6xl">
            We sell fewer homes than our competitors. That is the point.
          </h1>
          <div className="gold-rule mt-8" />

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0 space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                Meridian Estates was founded in 1974 to do one thing carefully: place significant
                houses with the people who will look after them. Half a century later the practice
                still runs on referral, and every mandate is handled by a named advisor from first
                walkthrough to final signature.
              </p>
              <p>
                We do not syndicate listings, we do not buy portal placement, and we do not publish
                a client's address. Buyers are qualified before an address is shared; sellers see a
                written strategy before a photograph is taken.
              </p>
              <p>
                What we do publish is our record — average forty-one days from launch to accepted
                offer, at a median of 98.4% of guide price across 2025.
              </p>

              <dl className="mt-10 space-y-8 border-t border-border pt-10">
                {milestones.map(([year, text]) => (
                  <div key={year} className="grid gap-2 sm:grid-cols-[6rem_minmax(0,1fr)]">
                    <dt className="font-display text-2xl text-gold">{year}</dt>
                    <dd className="text-sm leading-relaxed">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="luxe-card min-w-0 overflow-hidden">
              <img
                src={advisor}
                alt="Julien Rehberg, managing partner of Meridian Estates"
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="p-6">
                <p className="font-display text-2xl">Julien Rehberg</p>
                <p className="eyebrow mt-2">Managing partner</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “A house is a long argument between a place and the people in it. Our job is to
                  make sure the next owner agrees with it.”
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
