import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.swatch} style={{ background: product.swatch }} aria-hidden="true">
        <span className={styles.swatchLabel}>{product.name}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.colorway}>{product.colorway}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
