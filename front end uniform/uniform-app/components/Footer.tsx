import Link from "next/link";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="footer-grid" style={gridStyle}>
          <div className="footer-col">
            <div className="footer-logo" style={logoStyle}>RR Threads</div>
            <p style={pStyle}>
              Dubai&apos;s trusted destination for premium bespoke business uniforms and corporate apparel solutions.
            </p>
            <div className="footer-social" style={socialStyle}>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="https://wa.me/971507008977" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4 style={h4Style}>Services</h4>
            <p><Link href="#services">Corporate Uniforms</Link></p>
            <p><Link href="#services">Hospitality Wear</Link></p>
            <p><Link href="#services">Healthcare Scrubs</Link></p>
            <p><Link href="#services">Industrial Safety Wear</Link></p>
            <p><Link href="#services">Logo Embroidery</Link></p>
          </div>
          <div className="footer-col">
            <h4 style={h4Style}>Quick Links</h4>
            <p><Link href="#industries">Industries</Link></p>
            <p><Link href="#gallery">Our Portfolio</Link></p>
            <p><Link href="#workshop">Our Workshop</Link></p>
            <p><Link href="#testimonials">Client Reviews</Link></p>
            <p><Link href="#faq">FAQs</Link></p>
            <p><Link href="#lead-form">Get a Quote</Link></p>
          </div>
          <div className="footer-col">
            <h4 style={h4Style}>Contact Us</h4>
            <p><i className="fas fa-map-marker-alt" style={iconStyle} />Dubai, United Arab Emirates</p>
            <p><i className="fas fa-envelope" style={iconStyle} /><a href="mailto:info@redreach.ae">info@redreach.ae</a></p>
            <p><i className="fas fa-phone" style={iconStyle} /><a href="tel:+971507008977">+971 50 700 8977</a></p>
            <p style={{ marginTop: 12, fontSize: 13, color: "#888" }}>Mon – Sat: 9am – 6pm GST</p>
          </div>
        </div>
        <div className="footer-bottom" style={bottomStyle}>
          <p>© 2026 RR Threads Dubai. All Rights Reserved. | Bespoke Uniforms for Dubai & UAE Businesses</p>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = { background: "var(--dark)", color: "#ccc", padding: "60px 0 20px" };
const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 };
const logoStyle: React.CSSProperties = { color: "var(--white)", fontSize: 22, fontWeight: 700, marginBottom: 12 };
const pStyle: React.CSSProperties = { margin: "0 0 8px", fontSize: 14 };
const h4Style: React.CSSProperties = { color: "var(--white)", marginBottom: 16, fontSize: 15 };
const iconStyle: React.CSSProperties = { color: "var(--accent)", marginRight: 8 };
const socialStyle: React.CSSProperties = { display: "flex", gap: 12, marginTop: 16 };
const bottomStyle: React.CSSProperties = { borderTop: "1px solid #333", paddingTop: 20, textAlign: "center", fontSize: 13, color: "#888" };
