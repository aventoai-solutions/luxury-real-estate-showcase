import penthouse from "@/assets/prop-penthouse.jpg";
import estate from "@/assets/prop-estate.jpg";
import mansion from "@/assets/prop-mansion.jpg";
import chalet from "@/assets/prop-chalet.jpg";

export type Property = {
  slug: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  status: "For Sale" | "Exclusive" | "New Listing";
  image: string;
  blurb: string;
};

export const properties: Property[] = [
  {
    slug: "skyline-penthouse",
    name: "The Skyline Penthouse",
    location: "Upper West Side, New York",
    price: "$14,750,000",
    beds: 4,
    baths: 5,
    area: "6,200 sq ft",
    status: "Exclusive",
    image: penthouse,
    blurb:
      "A full-floor residence with double-height glazing, private elevator landing and uninterrupted skyline frontage.",
  },
  {
    slug: "casa-almiran",
    name: "Casa Almirán",
    location: "Costa Brava, Spain",
    price: "€9,400,000",
    beds: 6,
    baths: 6,
    area: "8,100 sq ft",
    status: "For Sale",
    image: estate,
    blurb:
      "Seafront estate on a private headland with terraced gardens, guest pavilion and direct cove access.",
  },
  {
    slug: "villa-noctis",
    name: "Villa Noctis",
    location: "Paradise Valley, Arizona",
    price: "$7,250,000",
    beds: 5,
    baths: 6,
    area: "7,400 sq ft",
    status: "New Listing",
    image: mansion,
    blurb:
      "Board-formed concrete and glass volumes framing twin reflecting pools and the McDowell ridgeline.",
  },
  {
    slug: "chalet-verbier",
    name: "Chalet Aurelle",
    location: "Verbier, Switzerland",
    price: "CHF 12,900,000",
    beds: 7,
    baths: 8,
    area: "9,000 sq ft",
    status: "Exclusive",
    image: chalet,
    blurb:
      "Ski-in, ski-out chalet with spa level, cinema and hand-hewn timber interiors above the Val de Bagnes.",
  },
];
