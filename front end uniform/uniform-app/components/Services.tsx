const services = [
  { icon: "fas fa-pencil-ruler", title: "Bespoke Design", text: "Our in-house designers create concepts that align perfectly with your brand identity and color palette." },
  { icon: "fas fa-tshirt", title: "Premium Fabrics", text: "Sourcing high-performance, breathable fabrics specifically selected for the Middle Eastern climate." },
  { icon: "fas fa-cut", title: "In-House Tailoring", text: "Strict quality control with our own production line ensures perfect stitching and finish every time." },
  { icon: "fas fa-boxes", title: "Scalable Orders", text: "Whether you need 20 or 20,000 sets, we maintain full consistency and quality across all bulk orders." },
  { icon: "fas fa-paint-brush", title: "Logo Embroidery", text: "High-density embroidery, screen printing, and heat-press branding with Pantone color matching." },
  { icon: "fas fa-shipping-fast", title: "Fast UAE Delivery", text: "Standard 14–21 day production with express options available for time-sensitive requirements." },
  { icon: "fas fa-flask", title: "Sample First", text: "We always produce a sample set before bulk production so you can approve every detail." },
  { icon: "fas fa-headset", title: "Dedicated Support", text: "A dedicated account manager guides you from initial brief through to final delivery." },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <h2 className="section-title">Why RR Threads?</h2>
        <p className="section-sub">Leading the way in professional uniform manufacturing across the UAE.</p>
        <div className="grid-4" style={gridStyle}>
          {services.map((s) => (
            <div key={s.title} className="feature-card" style={cardStyle}>
              <i className={s.icon} style={iconStyle} />
              <h3 style={{ margin: "0 0 10px", fontSize: 18 }}>{s.title}</h3>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: 14 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "30px",
};

const cardStyle: React.CSSProperties = {
  background: "var(--white)",
  padding: "40px 30px",
  borderRadius: "8px",
  textAlign: "center",
  border: "1px solid var(--border)",
  transition: "var(--transition)",
};

const iconStyle: React.CSSProperties = {
  fontSize: 36,
  color: "var(--primary)",
  marginBottom: "18px",
  display: "block",
};
