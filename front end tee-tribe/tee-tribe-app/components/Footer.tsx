import Link from "next/link";
import { collections } from "@/data/collections";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logo}>Tee Tribe</div>
          <p className={styles.tag}>
            Designer graphic tees, printed and shipped from the UAE.
          </p>
        </div>

        <div>
          <div className="eyebrow">Shop</div>
          <ul className={styles.list}>
            {collections.map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Tee Tribe</div>
          <ul className={styles.list}>
            <li>
              <a href="https://redreach.ae" target="_blank" rel="noreferrer">
                A Red Reach brand
              </a>
            </li>
            <li>
              <a href="mailto:hello@teetribe.ae">hello@teetribe.ae</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; {new Date().getFullYear()} Tee Tribe. All rights reserved.</span>
      </div>
    </footer>
  );
}
