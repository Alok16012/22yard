export default function Footer() {
  return (
    <footer style={{
      background: "#080612",
      borderTop: "1px solid rgba(124,58,237,0.25)",
      padding: "30px 18px 24px",
      textAlign: "center",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "18px" }}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "10px",
          background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px", boxShadow: "0 4px 15px rgba(124,58,237,0.4)",
        }}>🏏</div>
        <div style={{
          fontSize: "20px", fontWeight: 900,
          color: "#c084fc",
        }}>22YARD.IN</div>
      </div>

      {/* Contact */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
        <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer"
          style={{ color: "#25d366", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          📱 +91 8102104776
        </a>
        <span style={{ color: "rgba(167,139,250,0.5)", fontSize: "12px" }}>22yard.in</span>
      </div>

      {/* Disclaimer */}
      <div style={{
        background: "rgba(34,22,69,0.5)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: "12px",
        padding: "14px",
        marginBottom: "18px",
      }}>
        <p style={{ fontSize: "11px", color: "rgba(167,139,250,0.6)", lineHeight: 1.7, margin: 0 }}>
          ⚠️ Gambling can be addictive. Please play responsibly.<br/>
          🔞 18+ only. Terms and conditions apply.<br/>
          This site is intended for entertainment purposes only.
        </p>
      </div>

      <p style={{ fontSize: "11px", color: "rgba(124,58,237,0.4)", margin: 0 }}>
        © 2026 22Yard.in — All Rights Reserved
      </p>
    </footer>
  );
}
