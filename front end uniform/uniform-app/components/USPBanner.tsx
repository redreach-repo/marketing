const items = [
  { icon: "fas fa-medal", title: "ISO-Standard Quality", text: "Every batch undergoes strict QC inspection before delivery." },
  { icon: "fas fa-palette", title: "Pantone Color Matching", text: "We match your brand colors exactly — every time." },
  { icon: "fas fa-truck", title: "UAE-Wide Delivery", text: "Dubai, Abu Dhabi, Sharjah, and across the Emirates." },
  { icon: "fas fa-undo", title: "Satisfaction Guarantee", text: "Not happy with your sample? We'll rework it, no questions asked." },
];

export default function USPBanner() {
  return (
    <section className="usp-banner" style={sectionStyle}>
      <div className="container">
        <div className="usp-grid" style={gridStyle}>
          {items.map((item) => (
            <div key={item.title} className="usp-item" style={itemStyle}>
              <i className={item.icon} style={{ fontSize: 28, marginBottom: 12, display: "block", opacity: 0.9 }} />
              <h4 style={{ margin: "0 0 6px", fontSize: 16 }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = { background: "var(--primary)", color: "white", padding: "50px 0" };
const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 30, textAlign: "center" };
const itemStyle: React.CSSProperties = {};
