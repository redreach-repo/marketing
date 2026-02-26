const steps = [
  { num: 1, title: "Consultation", text: "We discuss your brand colors, fabric needs, quantity, and budget in detail." },
  { num: 2, title: "Design & Quote", text: "Our team creates design concepts and sends you a detailed, transparent quotation." },
  { num: 3, title: "Sampling", text: "We produce a physical sample set for you to approve the fit, fabric, and finish." },
  { num: 4, title: "Production", text: "Full bulk production with quality checks at every stage of the manufacturing process." },
  { num: 5, title: "Delivery", text: "Final inspection, packaging, and door-to-door delivery across Dubai & the UAE." },
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <h2 className="section-title">The RR Threads Process</h2>
        <p className="section-sub">Simple, transparent, and designed around your needs.</p>
        <div className="process-steps" style={stepsStyle}>
          {steps.map((s) => (
            <div key={s.num} className="step" style={stepStyle}>
              <div className="step-number" style={numStyle}>
                {s.num}
              </div>
              <h4 style={{ margin: "0 0 8px", fontSize: 17 }}>{s.title}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stepsStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "20px",
  position: "relative",
};

const stepStyle: React.CSSProperties = {
  flex: "1 1 180px",
  minWidth: 180,
  padding: "20px",
  textAlign: "center",
  position: "relative",
  zIndex: 1,
};

const numStyle: React.CSSProperties = {
  width: 54,
  height: 54,
  background: "var(--primary)",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 18px",
  fontWeight: "bold",
  fontSize: 22,
  boxShadow: "0 0 0 6px var(--light)",
};
