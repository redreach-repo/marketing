"use client";

import Link from "next/link";
import { useState } from "react";
import { collections } from "@/data/collections";
import { useCart } from "@/lib/cart-context";
import styles from "./Header.module.css";

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Tee Tribe
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              onClick={() => setMenuOpen(false)}
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartLink} aria-label="View cart">
            Cart
            {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
          </Link>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
