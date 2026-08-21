"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProduct } from "@/data/products";
import { formatPrice } from "@/lib/format";
import styles from "./page.module.css";

export default function CartPage() {
  const { lines, setQuantity, removeLine, subtotal } = useCart();

  if (lines.length === 0) {
    return (
      <section className={`container ${styles.empty}`}>
        <h1>Your cart is empty</h1>
        <p>Find something worth wearing.</p>
        <Link href="/" className="btn btn-primary">
          Browse collections
        </Link>
      </section>
    );
  }

  return (
    <section className={`container ${styles.wrap}`}>
      <h1 className={styles.title}>Your cart</h1>

      <div className={styles.lines}>
        {lines.map((line) => {
          const product = getProduct(line.productSlug);
          if (!product) return null;
          return (
            <div className={styles.line} key={`${line.productSlug}-${line.size}`}>
              <div className={styles.swatch} style={{ background: product.swatch }} />
              <div className={styles.lineInfo}>
                <Link href={`/products/${product.slug}`} className={styles.lineName}>
                  {product.name}
                </Link>
                <div className={styles.lineMeta}>
                  Size {line.size} &middot; {formatPrice(product.price)}
                </div>
                <div className={styles.qtyRow}>
                  <label htmlFor={`qty-${product.slug}-${line.size}`}>Qty</label>
                  <select
                    id={`qty-${product.slug}-${line.size}`}
                    value={line.quantity}
                    onChange={(e) =>
                      setQuantity(product.slug, line.size, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeLine(product.slug, line.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className={styles.lineTotal}>
                {formatPrice(product.price * line.quantity)}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.summary}>
        <div className={styles.subtotalRow}>
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <p className={styles.note}>Shipping and any VAT are calculated at checkout.</p>
        <Link href="/checkout" className="btn btn-primary" style={{ width: "100%" }}>
          Checkout
        </Link>
      </div>
    </section>
  );
}
