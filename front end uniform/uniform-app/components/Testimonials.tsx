const testimonials = [
  { quote: "Outstanding quality uniforms for our hotel staff. Prompt delivery and professional service from start to finish.", initials: "HM", author: "Hospitality Manager", role: "5-Star Hotel, Dubai Marina" },
  { quote: "Perfect fit and incredible customization for our retail team. The embroidery quality on each piece is outstanding.", initials: "RD", author: "Retail Director", role: "Fashion Chain, Mall of Emirates" },
  { quote: "RR Threads made our entire corporate rebrand seamless. Delivered on time, on budget, and the team looked incredible.", initials: "OL", author: "Operations Lead", role: "Corporate HQ, Abu Dhabi" },
  { quote: "We've been ordering healthcare scrubs from RR Threads for 2 years. The antimicrobial fabric holds up wash after wash.", initials: "DC", author: "Clinic Director", role: "Private Medical Centre, Dubai" },
  { quote: "Ordered 300 sets for our F&B staff. Process was smooth, sample approved first try, delivery was ahead of schedule.", initials: "FM", author: "F&B Manager", role: "Restaurant Group, JBR" },
  { quote: "Professional team, competitive pricing, and the color matching for our brand was spot on. Will keep ordering from RR Threads.", initials: "BD", author: "Brand Director", role: "Retail Group, Sharjah" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-sub">Trusted by hotels, retailers, clinics, and corporations across the UAE.</p>
        <div className="testimonials-grid" style={gridStyle}>
          {testimonials.map((t) => (
            <div key={t.initials} className="testimonial-card" style={cardStyle}>
              <div className="stars" style={{ color: "#f5a623", fontSize: 16, marginBottom: 14 }}>★★★★★</div>
              <blockquote style={{ margin: "0 0 20px", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, fontSize: 14 }}>{t.quote}</blockquote>
              <div className="testimonial-meta" style={metaStyle}>
                <div className="testimonial-avatar" style={avatarStyle}>{t.initials}</div>
                <div>
                  <div className="testimonial-author" style={{ fontWeight: 700, color: "var(--dark)", fontSize: 14 }}>{t.author}</div>
                  <div className="testimonial-role" style={{ color: "var(--text-muted)", fontSize: 12 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 };
const cardStyle: React.CSSProperties = {
  background: "var(--white)",
  padding: 30,
  borderRadius: 8,
  border: "1px solid var(--border)",
  transition: "var(--transition)",
  position: "relative",
};
const metaStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12 };
const avatarStyle: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  background: "var(--primary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: 700,
  fontSize: 16,
  flexShrink: 0,
};
