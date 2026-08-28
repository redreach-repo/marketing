import Link from "next/link";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import CollectionCard from "@/components/CollectionCard";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className="eyebrow">Designed &amp; printed in the UAE</div>
          <h1 className={styles.heroTitle}>Shirts with something to say.</h1>
          <p className={styles.heroSub}>
            Four collections, one tribe: faith, local pride, humor, and clean everyday
            design. Pick the one that says what you'd actually wear.
          </p>
          <div className={styles.heroActions}>
            <Link href="/collections/faith" className="btn btn-primary">
              Shop collections
            </Link>
            <Link href="#collections" className="btn btn-outline">
              See what's new
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} id="collections">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Shop by collection</h2>
          </div>
          <div className={styles.collectionGrid}>
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Featured</h2>
            <Link href="/collections/faith" className={styles.link}>
              View all
            </Link>
          </div>
          <div className={styles.productGrid}>
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
