import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/971507008977?text=Hi%20RR%20Threads%2C%20I'd%20like%20a%20quote%20for%20custom%20uniforms.";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction" style={heroStyle}>
      <div className="container hero-content" style={contentStyle}>
        <span className="hero-badge" style={badgeStyle}>
          🇦🇪 Trusted by 500+ UAE Businesses
        </span>
        <h1 style={h1Style}>Custom Uniforms That Build Your Brand</h1>
        <p style={pStyle}>
          From concept to delivery — bespoke tailoring for corporate, hospitality, healthcare, aviation, and retail. Get
          a free quote in 24 hours.
        </p>
        <div className="hero-btns" style={btnsStyle}>
          <Link href="#lead-form" className="btn-primary">
            Get My Free Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" style={{ marginRight: 8 }} /> WhatsApp Us
          </a>
        </div>
        <div className="hero-trust" style={trustStyle}>
          <div className="hero-trust-item" style={trustItemStyle}>
            <i className="fas fa-check-circle" style={{ color: "var(--accent)", fontSize: 16 }} /> Free quote — no
            obligation
          </div>
          <div className="hero-trust-item" style={trustItemStyle}>
            <i className="fas fa-check-circle" style={{ color: "var(--accent)", fontSize: 16 }} /> MOQ from 20 sets
          </div>
          <div className="hero-trust-item" style={trustItemStyle}>
            <i className="fas fa-check-circle" style={{ color: "var(--accent)", fontSize: 16 }} /> 14–21 day delivery
          </div>
          <div className="hero-trust-item" style={trustItemStyle}>
            <i className="fas fa-check-circle" style={{ color: "var(--accent)", fontSize: 16 }} /> Logo embroidery
            included
          </div>
        </div>
      </div>
    </section>
  );
}

const heroStyle: React.CSSProperties = {
  position: "relative",
  background:
    "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)) url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1400) center/cover",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "var(--white)",
};

const contentStyle: React.CSSProperties = { width: "100%" };

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: "var(--primary)",
  color: "white",
  padding: "6px 18px",
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: "20px",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(28px, 5vw, 56px)",
  marginBottom: "16px",
  lineHeight: 1.2,
};

const pStyle: React.CSSProperties = {
  fontSize: "clamp(16px, 2vw, 20px)",
  marginBottom: "36px",
  opacity: 0.9,
  maxWidth: 640,
  marginLeft: "auto",
  marginRight: "auto",
};

const btnsStyle: React.CSSProperties = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const trustStyle: React.CSSProperties = {
  marginTop: "48px",
  display: "flex",
  justifyContent: "center",
  gap: "32px",
  flexWrap: "wrap",
  opacity: 0.85,
};

const trustItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "13px",
  fontWeight: 500,
};
