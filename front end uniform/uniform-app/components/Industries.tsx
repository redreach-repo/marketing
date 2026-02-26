const industries = [
  { strong: "Hospitality:", rest: " Chefs, Front Desk, Housekeeping, F&B Staff" },
  { strong: "Corporate:", rest: " Executive Suits, Blazers, Formal Shirts, Ties" },
  { strong: "Healthcare:", rest: " Antimicrobial Scrubs, Lab Coats, Dental Wear" },
  { strong: "Retail:", rest: " Brand-aligned Polo Shirts, Aprons, Caps" },
  { strong: "Aviation:", rest: " Cabin Crew & Ground Staff Uniforms" },
  { strong: "Industrial:", rest: " High-Vis Vests & Safety Wear (PPE)" },
  { strong: "Security:", rest: " Guard Uniforms, Reflective Gear, Formal Attire" },
  { strong: "Education:", rest: " School Uniforms, Staff Wear, Sports Kits" },
  { strong: "Events & Promotions:", rest: " Branded T-Shirts, Event Staff Outfits" },
  { strong: "Fitness & Wellness:", rest: " Gym Wear, Spa Uniforms, Active Wear" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-sub">Specialized apparel solutions for every professional sector in the UAE.</p>
        <div className="industry-list" style={listStyle}>
          {industries.map(({ strong, rest }) => (
            <div key={strong} className="industry-item" style={itemStyle}>
              <span className="check" style={checkStyle}>✓</span>
              <div><strong>{strong}</strong>{rest}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const listStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "16px",
  marginTop: "40px",
};

const itemStyle: React.CSSProperties = {
  background: "var(--white)",
  padding: "18px 20px",
  display: "flex",
  alignItems: "center",
  borderRadius: "6px",
  border: "1px solid var(--border)",
  transition: "var(--transition)",
};

const checkStyle: React.CSSProperties = {
  color: "var(--primary)",
  marginRight: "14px",
  fontWeight: "bold",
  fontSize: "18px",
  flexShrink: 0,
};
