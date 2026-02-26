const WHATSAPP_URL =
  "https://wa.me/971507008977?text=Hi%20RR%20Threads%2C%20I'd%20like%20a%20quote%20for%20custom%20uniforms.";

export default function CTABanner() {
  return (
    <section className="cta-banner" style={sectionStyle}>
      <div className="container">
        <h2 style={h2Style}>Ready to Dress Your Team for Success?</h2>
        <p style={pStyle}>
          Get your free quote in 24 hours — no obligation. Join 500+ UAE businesses who trust RR Threads.
        </p>
        <div className="cta-buttons" style={btnsStyle}>
          <a href="#lead-form" className="btn-white">
            Get My Free Quote
          </a>
          <a href={WHATSAPP_URL} className="btn-outline-white" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp" /> WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
  color: "white",
  padding: "70px 0",
  textAlign: "center",
};
const h2Style: React.CSSProperties = { fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 14 };
const pStyle: React.CSSProperties = { fontSize: 18, opacity: 0.9, marginBottom: 32 };
const btnsStyle: React.CSSProperties = { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" };
