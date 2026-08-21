import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/data/products";
import { getCollection } from "@/data/collections";
import { formatPrice } from "@/lib/format";
import AddToCart from "@/components/AddToCart";
import styles from "./page.module.css";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  const collection = getCollection(product.collection);

  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.swatch} style={{ background: product.swatch }} aria-hidden="true" />

      <div className={styles.info}>
        {collection && (
          <Link href={`/collections/${collection.slug}`} className="eyebrow">
            {collection.name}
          </Link>
        )}
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p className={styles.blurb}>{product.blurb}</p>
        <p className={styles.colorway}>Colorway: {product.colorway}</p>

        <AddToCart product={product} />

        <dl className={styles.meta}>
          <div>
            <dt>Material</dt>
            <dd>180gsm combed cotton</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>UAE, 2&ndash;4 business days</dd>
          </div>
          <div>
            <dt>Returns</dt>
            <dd>14-day exchange, unworn with tags</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
