import Link from "next/link";

const listItems = [
  "Breathable moisture-wicking blends",
  "UV-resistant outdoor fabrics",
  "Antimicrobial treatment for healthcare",
  "FR & high-vis industrial materials",
  "Pantone-matched custom dyeing available",
  "Sustainable fabric options on request",
];

const icons = ["fas fa-wind", "fas fa-sun", "fas fa-shield-alt", "fas fa-hard-hat", "fas fa-palette", "fas fa-recycle"];

export default function SplitSection() {
  return (
    <section className="split-section" style={sectionStyle}>
      <div className="split-img" style={imgWrapStyle}>
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800"
          alt="Premium uniform fabric selection"
          style={imgStyle}
        />
      </div>
      <div className="split-content" style={contentStyle}>
        <h2 style={h2Style}>Fabric That Performs in the UAE Climate</h2>
        <p style={pStyle}>
          We source premium fabrics engineered for the heat and humidity of the Middle East — keeping your team
          comfortable, professional, and looking sharp all day long.
        </p>
        <ul className="split-list" style={listStyle}>
          {listItems.map((text, i) => (
            <li key={text} style={liStyle}>
              <i className={icons[i]} style={{ color: "var(--accent)", width: 16 }} />
              {text}
            </li>
          ))}
        </ul>
        <Link href="#lead-form" className="btn-primary">
          Request a Fabric Consultation
        </Link>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 0,
  minHeight: 500,
};

const imgWrapStyle: React.CSSProperties = { overflow: "hidden" };
const imgStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
const contentStyle: React.CSSProperties = {
  padding: "60px 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "var(--dark)",
  color: "white",
};
const h2Style: React.CSSProperties = { fontSize: "clamp(22px, 3vw, 32px)", color: "white", marginBottom: 16 };
const pStyle: React.CSSProperties = { color: "#bbb", marginBottom: 24, lineHeight: 1.8 };
const listStyle: React.CSSProperties = { listStyle: "none", padding: 0, margin: "0 0 32px" };
const liStyle: React.CSSProperties = { padding: "8px 0", color: "#ccc", fontSize: 14, display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #2a2a2a" };
