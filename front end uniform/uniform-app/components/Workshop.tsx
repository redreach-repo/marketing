"use client";

const heroImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1400";
const cards = [
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", title: "Industrial Stitching", sub: "Heavy-duty machines for precision seams" },
  { img: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600", title: "Logo Embroidery", sub: "High-density computerized embroidery" },
  { img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=600", title: "Fabric Cutting", sub: "Precision pattern cutting & grading" },
  { img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600", title: "Hand Tailoring", sub: "Skilled artisans for fine detail work" },
];
const bottomCards = [
  { img: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=900", title: "Fabric Selection & QC", sub: "Every roll inspected for colour, weight and weave consistency" },
  { img: "https://images.unsplash.com/photo-1571513722275-4ad5cd2fa0db?w=600", title: "Screen Printing", sub: "Vibrant, wash-resistant prints" },
  { img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600", title: "Final QC & Packing", sub: "Every piece checked before dispatch" },
];
const stats = [
  { icon: "fas fa-industry", title: "In-House Factory", text: "Full production under one roof — no outsourcing, no quality compromise." },
  { icon: "fas fa-users-cog", title: "30+ Skilled Craftspeople", text: "Tailors, embroiderers, cutters, and QC specialists on our team." },
  { icon: "fas fa-check-double", title: "3-Stage Quality Check", text: "Inline, post-production, and pre-dispatch inspections on every order." },
];

type WorkshopProps = { onLightbox: (src: string) => void };

export default function Workshop({ onLightbox }: WorkshopProps) {
  return (
    <section id="workshop" className="workshop-section" style={sectionStyle}>
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--white)" }}>Inside Our Workshop</h2>
        <p className="section-sub" style={{ color: "#aaa" }}>Every uniform is crafted by hand by our skilled team — see how it&apos;s made.</p>

        <div className="workshop-hero" style={heroStyle} onClick={() => onLightbox(heroImg)} role="button" tabIndex={0}>
          <img src={heroImg} alt="RR Threads production floor Dubai" />
        </div>

        <div className="workshop-grid" style={gridStyle}>
          {cards.map((c) => (
            <div key={c.title} className="workshop-card" style={cardStyle} onClick={() => onLightbox(c.img)} role="button" tabIndex={0}>
              <img src={c.img} alt={c.title} />
              <div className="workshop-card-label" style={labelStyle}>
                {c.title}<span>{c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="workshop-bottom-grid" style={bottomGridStyle}>
          {bottomCards.map((c) => (
            <div key={c.title} className="workshop-bottom-card" style={cardStyle} onClick={() => onLightbox(c.img)} role="button" tabIndex={0}>
              <img src={c.img} alt={c.title} />
              <div className="workshop-card-label" style={labelStyle}>{c.title}<span>{c.sub}</span></div>
            </div>
          ))}
        </div>

        <div className="workshop-stats" style={statsGridStyle}>
          {stats.map((s) => (
            <div key={s.title} className="workshop-stat" style={statStyle}>
              <i className={s.icon} style={{ fontSize: 28, color: "var(--accent)", marginBottom: 10, display: "block" }} />
              <h4 style={{ margin: "0 0 6px", fontSize: 18 }}>{s.title}</h4>
              <p style={{ margin: 0, fontSize: 13, color: "#aaa" }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = { padding: "80px 0", background: "var(--dark)" };
const heroStyle: React.CSSProperties = { position: "relative", height: 480, borderRadius: 12, overflow: "hidden", marginBottom: 16, cursor: "pointer" };
const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 16 };
const bottomGridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 };
const cardStyle: React.CSSProperties = { position: "relative", borderRadius: 10, overflow: "hidden", height: 240, cursor: "pointer" };
const labelStyle: React.CSSProperties = { position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.8))", color: "white", padding: "30px 14px 12px", fontSize: 13, fontWeight: 600 };
const statsGridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 40 };
const statStyle: React.CSSProperties = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: 24, textAlign: "center", color: "white" };
