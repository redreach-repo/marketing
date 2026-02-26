export default function TopBar() {
  return (
    <div className="top-bar" style={topBarStyle}>
      ✓ Free quote in 24 hours — no obligation.{" "}
      <a href="#lead-form" style={linkStyle}>
        Get your custom uniform quote now
      </a>
    </div>
  );
}

const topBarStyle: React.CSSProperties = {
  background: "var(--primary)",
  color: "white",
  textAlign: "center",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.3px",
};

const linkStyle: React.CSSProperties = {
  color: "white",
  fontWeight: 700,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};
