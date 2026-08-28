export interface Product {
  slug: string;
  name: string;
  collection: string; // Collection.slug
  price: number; // AED
  sizes: string[];
  colorway: string;
  blurb: string;
  swatch: string; // placeholder art color, stands in for a real product photo
}

// Placeholder catalog. Swap `swatch` for real product photography and this
// data shape is otherwise close to what a headless commerce backend
// (Shopify Storefront API / Medusa) would hand back per product.
export const products: Product[] = [
  {
    slug: "unpayable-debt-tee",
    name: "Unpayable Debt",
    collection: "faith",
    price: 99,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Washed Navy",
    blurb: "Matthew 18 on the back, quiet enough for a Tuesday.",
    swatch: "#2B4C7E",
  },
  {
    slug: "still-here-tee",
    name: "Still Here",
    collection: "faith",
    price: 99,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Bone",
    blurb: "A one-line testimony tee. No verse reference needed.",
    swatch: "#D9B872",
  },
  {
    slug: "root-of-bitterness-tee",
    name: "Root of Bitterness",
    collection: "faith",
    price: 109,
    sizes: ["S", "M", "L", "XL"],
    colorway: "Charcoal",
    blurb: "Hebrews 12:15, small type, front left chest.",
    swatch: "#3A342E",
  },
  {
    slug: "skyline-script-tee",
    name: "Skyline Script",
    collection: "uae",
    price: 89,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Sand",
    blurb: "Dubai's skyline rendered as one continuous line.",
    swatch: "#C0271D",
  },
  {
    slug: "seven-flags-tee",
    name: "Seven Flags",
    collection: "uae",
    price: 95,
    sizes: ["S", "M", "L", "XL"],
    colorway: "Off-White",
    blurb: "All seven emirates, one crest, minimal treatment.",
    swatch: "#E8813A",
  },
  {
    slug: "48-degrees-tee",
    name: "48 Degrees",
    collection: "uae",
    price: 85,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Heather Grey",
    blurb: "For anyone who's survived an August commute here.",
    swatch: "#8A8880",
  },
  {
    slug: "meetings-that-could-be-emails-tee",
    name: "This Meeting Could've Been an Email",
    collection: "funny",
    price: 89,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Black",
    blurb: "For the group chat, and the group chat's boss.",
    swatch: "#1B1B1B",
  },
  {
    slug: "coffee-first-tee",
    name: "Coffee First, Personality Later",
    collection: "funny",
    price: 79,
    sizes: ["S", "M", "L", "XL"],
    colorway: "Cream",
    blurb: "Honest branding for honest mornings.",
    swatch: "#E8813A",
  },
  {
    slug: "im-fine-tee",
    name: "I'm Fine (This Is Fine)",
    collection: "funny",
    price: 79,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Rust",
    blurb: "The universal RSVP to a bad week.",
    swatch: "#B65C2E",
  },
  {
    slug: "grid-form-tee",
    name: "Grid Form",
    collection: "everyday",
    price: 85,
    sizes: ["S", "M", "L", "XL"],
    colorway: "Stone",
    blurb: "A single 3x3 grid, off-center. That's the whole design.",
    swatch: "#3E7C6B",
  },
  {
    slug: "negative-space-tee",
    name: "Negative Space",
    collection: "everyday",
    price: 85,
    sizes: ["S", "M", "L", "XL", "2XL"],
    colorway: "Ecru",
    blurb: "One shape, cut from the fabric's own color.",
    swatch: "#C9C2B4",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection === collectionSlug);
}
