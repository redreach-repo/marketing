import Link from "next/link";
import { Collection } from "@/data/collections";
import styles from "./CollectionCard.module.css";

export default function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className={styles.card}
      style={{ ["--card-accent" as string]: collection.accent }}
    >
      <div className={styles.swatch} aria-hidden="true" />
      <div className={styles.body}>
        <div className="eyebrow">{collection.tagline}</div>
        <h3 className={styles.name}>{collection.name}</h3>
        <p className={styles.desc}>{collection.description}</p>
        <span className={styles.link}>Shop the collection &rarr;</span>
      </div>
    </Link>
  );
}
