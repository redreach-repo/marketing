"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#gallery", label: "Portfolio" },
  { href: "#workshop", label: "Our Workshop" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#lead-form", label: "Get Quote", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" style={headerStyle}>
      <div className="container header-inner" style={innerStyle}>
        <Link href="/">
          <span style={logoStyle}>RR Threads</span>
        </Link>
        <button
          type="button"
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links${open ? " open" : ""}`} id="nav-links">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.cta ? "nav-cta" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const headerStyle: React.CSSProperties = {
  background: "var(--white)",
  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  padding: "10px 0",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const innerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 700,
  color: "var(--dark)",
  textDecoration: "none",
};
