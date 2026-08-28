import { notFound } from "next/navigation";
import { collections, getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import styles from "../../page.module.css";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = getCollection(params.slug);
  if (!collection) return notFound();

  const items = getProductsByCollection(collection.slug);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="eyebrow" style={{ color: collection.accent }}>
          {collection.tagline}
        </div>
        <h1 style={{ fontSize: 36, marginTop: 8 }}>{collection.name}</h1>
        <p style={{ marginTop: 12, color: "var(--ink-muted)", maxWidth: "60ch" }}>
          {collection.description}
        </p>

        <div className={styles.productGrid} style={{ marginTop: 40 }}>
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {items.length === 0 && (
          <p style={{ marginTop: 24, color: "var(--ink-muted)" }}>
            Nothing in this collection yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
