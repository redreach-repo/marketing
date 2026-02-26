const stats = [
  { number: "500+", label: "Businesses Served" },
  { number: "8+", label: "Years in Dubai" },
  { number: "50K+", label: "Uniforms Delivered" },
  { number: "14", label: "Day Avg. Turnaround" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar" style={sectionStyle}>
      <div className="container">
        <div className="stats-grid" style={gridStyle}>
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-number" style={numStyle}>
                {s.number}
              </div>
              <div className="stat-label" style={labelStyle}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: "var(--primary)",
  color: "white",
  padding: "40px 0",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "20px",
  textAlign: "center",
};

const numStyle: React.CSSProperties = {
  fontSize: "clamp(32px, 4vw, 48px)",
  fontWeight: 700,
  lineHeight: 1,
};

const labelStyle: React.CSSProperties = {
  fontSize: "13px",
  opacity: 0.85,
  marginTop: "6px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};
