"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import styles from "./AddToCart.module.css";

export default function AddToCart({ product }: { product: Product }) {
  const { addLine } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);
  const router = useRouter();

  function handleAdd() {
    addLine(product.slug, size, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div>
      <div className={styles.sizes} role="group" aria-label="Select size">
        {product.sizes.map((s) => (
          <button
            key={s}
            type="button"
            className={`${styles.size} ${s === size ? styles.sizeActive : ""}`}
            onClick={() => setSize(s)}
            aria-pressed={s === size}
          >
            {s}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          {added ? "Added" : "Add to cart"}
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => {
            addLine(product.slug, size, 1);
            router.push("/cart");
          }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
