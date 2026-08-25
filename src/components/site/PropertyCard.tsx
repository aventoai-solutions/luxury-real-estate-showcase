import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="luxe-card group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={`${property.name} in ${property.location}`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-gold/60 bg-background/70 px-3 py-1 text-[0.625rem] uppercase tracking-[0.2em] text-gold backdrop-blur">
          {property.status}
        </span>
      </div>

      <div className="p-6">
        <p className="flex items-center gap-2 text-xs tracking-wide text-muted-foreground">
          <MapPin className="size-3.5 shrink-0 text-gold" />
          <span className="truncate">{property.location}</span>
        </p>
        <h3 className="mt-2 font-display text-2xl">{property.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{property.blurb}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs tracking-wide text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4 text-gold" /> {property.beds} beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4 text-gold" /> {property.baths} baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4 text-gold" /> {property.area}
          </span>
        </div>

        <p className="mt-5 font-display text-xl text-gold">{property.price}</p>
      </div>
    </article>
  );
}
