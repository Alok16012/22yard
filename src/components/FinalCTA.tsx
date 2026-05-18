export default function FinalCTA() {
  return (
    <section style={{
      padding: "36px 18px",
      background: "radial-gradient(ellipse at 50% 0%, #3b0764 0%, #1e0a3c 50%, #0f0b1e 100%)",
      borderTop: "1px solid rgba(124,58,237,0.4)",
      textAlign: "center",
    }}>
      <div style={{
        display: "inline-block",
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(124,58,237,0.4)",
        color: "#c084fc",
        fontSize: "11px", fontWeight: 700,
        padding: "5px 14px", borderRadius: "20px",
        letterSpacing: "2px", textTransform: "uppercase",
        marginBottom: "16px",
      }}>Ready to Win?</div>

      <div className="anim-float" style={{ fontSize: "56px", marginBottom: "14px", display: "block" }}>🏆</div>

      <h2 style={{
        fontSize: "clamp(26px,7vw,40px)", fontWeight: 900,
        color: "#ffffff",
        lineHeight: 1.05, letterSpacing: "-1px", marginBottom: "12px",
      }}>
        READY TO WIN BIG?
      </h2>

      <p style={{
        fontSize: "14px", color: "#a78bfa",
        marginBottom: "28px", lineHeight: 1.6,
        maxWidth: "300px", margin: "0 auto 28px",
      }}>
        Join 10,000+ players already winning with 22Yard. Get your ID in just 2 minutes!
      </p>

      <a
        href="https://wa.me/918102104776"
        target="_blank"
        rel="noopener noreferrer"
        className="anim-pulse-gold"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          background: "linear-gradient(135deg,#f5c518,#ffdd55)",
          color: "#0f0b1e", fontWeight: 900, fontSize: "18px",
          padding: "18px 24px", borderRadius: "16px",
          textDecoration: "none", letterSpacing: "0.3px", textTransform: "uppercase",
          boxShadow: "0 8px 35px rgba(245,197,24,0.45)",
          maxWidth: "400px", margin: "0 auto",
        }}
      >
        START BETTING NOW 💰
      </a>

      <div style={{
        marginTop: "16px",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
        color: "#4ade80", fontSize: "13px", fontWeight: 700,
      }}>
        ⚡ INSTANT ID — READY IN 2 MINUTES
      </div>
    </section>
  );
}
