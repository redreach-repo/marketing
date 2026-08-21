"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProduct } from "@/data/products";
import { formatPrice } from "@/lib/format";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <section className={`container ${styles.confirm}`}>
        <h1>This is a scaffold, not a live order</h1>
        <p>
          No payment gateway is wired up yet, so nothing was charged and no order was
          created. Once a gateway (Telr, Stripe, or Network International — plus Tabby
          or Tamara for buy-now-pay-later) is connected here, this screen becomes the
          real order confirmation.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to shop
        </Link>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className={`container ${styles.confirm}`}>
        <h1>Your cart is empty</h1>
        <Link href="/" className="btn btn-primary">
          Browse collections
        </Link>
      </section>
    );
  }

  return (
    <section className={`container ${styles.wrap}`}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setPlaced(true);
          clear();
        }}
      >
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.notice}>
          <strong>Payment gateway not yet connected.</strong> Submitting this form
          simulates placing an order — no real payment is processed. Wire{" "}
          <code>onSubmit</code> below to a real checkout session (Shopify/Medusa
          checkout, or Telr/Stripe directly) before launch.
        </div>

        <fieldset className={styles.fieldset}>
          <legend className="eyebrow">Contact</legend>
          <input type="email" placeholder="Email address" required />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className="eyebrow">Shipping address</legend>
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Address line 1" required />
          <input type="text" placeholder="Address line 2 (optional)" />
          <div className={styles.row}>
            <input type="text" placeholder="Emirate" required />
            <input type="tel" placeholder="Phone number" required />
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className="eyebrow">Payment</legend>
          <p className={styles.paymentPlaceholder}>
            Card / Tabby / Tamara options render here once a gateway is connected.
          </p>
        </fieldset>

        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
          Place order &mdash; {formatPrice(subtotal)}
        </button>
      </form>

      <aside className={styles.summary}>
        <h2 className="eyebrow">Order summary</h2>
        <div className={styles.summaryLines}>
          {lines.map((line) => {
            const product = getProduct(line.productSlug);
            if (!product) return null;
            return (
              <div className={styles.summaryLine} key={`${line.productSlug}-${line.size}`}>
                <span>
                  {product.name} ({line.size}) &times; {line.quantity}
                </span>
                <span>{formatPrice(product.price * line.quantity)}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.summaryTotal}>
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </aside>
    </section>
  );
}
