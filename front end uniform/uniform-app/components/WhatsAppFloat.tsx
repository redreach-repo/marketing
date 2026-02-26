const WHATSAPP_URL =
  "https://wa.me/971507008977?text=Hi%20RR%20Threads%2C%20I'd%20like%20a%20quote%20for%20custom%20uniforms.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={style}
    >
      <i className="fab fa-whatsapp" style={{ fontSize: 20 }} />
      WhatsApp Us
    </a>
  );
}

const style: React.CSSProperties = {
  position: "fixed",
  bottom: 30,
  right: 30,
  background: "#25D366",
  color: "white",
  padding: "14px 22px",
  borderRadius: 50,
  fontWeight: 700,
  fontSize: 15,
  textDecoration: "none",
  zIndex: 9999,
  boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
  display: "flex",
  alignItems: "center",
  gap: 8,
  transition: "transform 0.2s, box-shadow 0.2s",
};
