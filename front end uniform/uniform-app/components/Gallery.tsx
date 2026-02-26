"use client";

import Image from "next/image";

const items = [
  { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800", title: "Corporate Collection", sub: "Executive Wear", tall: true },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600", title: "Hospitality Uniforms", sub: "Hotel & Restaurant Staff", tall: false },
  { src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600", title: "Healthcare Scrubs", sub: "Clinic & Hospital Wear", tall: false },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600", title: "Retail Staff Wear", sub: "Branded Polo & Aprons", tall: false },
  { src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600", title: "Aviation Crew", sub: "Ground Staff Uniforms", tall: false },
  { src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600", title: "Industrial Safety Wear", sub: "PPE & High-Vis", tall: true },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", title: "Security Uniforms", sub: "Guard & Patrol Wear", tall: false },
  { src: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600", title: "Education Uniforms", sub: "School & Staff Wear", tall: false },
  { src: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600", title: "Events & Promotions", sub: "Branded Event Wear", tall: false },
];

type GalleryProps = { onLightbox: (src: string) => void };

export default function Gallery({ onLightbox }: GalleryProps) {
  return (
    <section id="gallery" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-sub">A selection of our bespoke uniform work across Dubai and the UAE.</p>
        <div className="gallery-grid" style={gridStyle}>
          {items.map((item) => (
            <div
              key={item.title}
              className={`gallery-item${item.tall ? " tall" : ""}`}
              style={itemStyle}
              onClick={() => onLightbox(item.src)}
              onKeyDown={(e) => e.key === "Enter" && onLightbox(item.src)}
              role="button"
              tabIndex={0}
            >
              <img src={item.src} alt={item.title} loading="lazy" style={imgStyle} />
              <div className="gallery-overlay" style={overlayStyle}>
                <h4 style={{ margin: "0 0 2px", fontSize: 15 }}>{item.title}</h4>
                <span style={{ fontSize: 12, opacity: 0.75 }}>{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const itemStyle: React.CSSProperties = {
  position: "relative",
  overflow: "hidden",
  height: 320,
  borderRadius: 10,
  background: "#ddd",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  cursor: "pointer",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
  color: "white",
  padding: "20px 16px 14px",
};
