export default function Header() {
  return (
    <header style={{
      background: "rgba(15,11,30,0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(124,58,237,0.3)",
      padding: "14px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          boxShadow: "0 4px 15px rgba(124,58,237,0.4)",
        }}>🏏</div>
        <div>
          <div style={{
            fontSize: "20px",
            fontWeight: 900,
            color: "#c084fc",
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}>
            22YARD
          </div>
          <div style={{
            fontSize: "9px",
            color: "#9d60ff",
            letterSpacing: "3px",
            fontWeight: 700,
          }}>.IN</div>
        </div>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/918102104776"
        target="_blank"
        rel="noopener noreferrer"
        className="anim-pulse-gold"
        style={{
          background: "linear-gradient(135deg,#f5c518,#e6a800)",
          color: "#0f0b1e",
          fontWeight: 800,
          fontSize: "14px",
          padding: "11px 22px",
          borderRadius: "50px",
          textDecoration: "none",
          letterSpacing: "0.3px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          boxShadow: "0 4px 20px rgba(245,197,24,0.35)",
        }}
      >
        🎯 GET ID
      </a>
    </header>
  );
}
