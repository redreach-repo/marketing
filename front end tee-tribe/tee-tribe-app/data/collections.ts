export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: string; // hex, used for the collection's card + detail accent
}

// Placeholder line-up covering the four audiences from the brief.
// Names/copy are easy to swap once the real brand direction is set —
// what matters structurally is that each is its own collection with
// its own accent, not a shared "religious vs secular" toggle.
export const collections: Collection[] = [
  {
    slug: "faith",
    name: "Faith Collection",
    tagline: "Wear the word",
    description:
      "Scripture-inspired graphic tees for everyday faith — understated enough for the office, bold enough for youth group.",
    accent: "#2B4C7E",
  },
  {
    slug: "uae",
    name: "UAE Collection",
    tagline: "Local pride, world class",
    description:
      "Designs pulled from Emirati heritage, the Dubai skyline, and the seven flags — made for residents and visitors alike.",
    accent: "#C0271D",
  },
  {
    slug: "funny",
    name: "Funny Business",
    tagline: "Say it with a smirk",
    description:
      "For people who don't take themselves too seriously. New drops whenever something funny needs saying on a shirt.",
    accent: "#E8813A",
  },
  {
    slug: "everyday",
    name: "Everyday Originals",
    tagline: "No message. Just good design.",
    description:
      "Clean, minimal graphic tees for daily rotation — no punchline, no verse, just a shirt worth wearing.",
    accent: "#3E7C6B",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
