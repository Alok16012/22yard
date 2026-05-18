export default function CTAButtons() {
  return (
    <section style={{
      background: "#0f0b1e",
      padding: "20px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      borderBottom: "1px solid rgba(124,58,237,0.2)",
    }}>
      {/* Primary */}
      <a
        href="https://wa.me/918102104776"
        target="_blank"
        rel="noopener noreferrer"
        className="anim-pulse-gold"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          background: "linear-gradient(135deg,#f5c518 0%,#ffdd55 50%,#e6a800 100%)",
          backgroundSize: "200% auto",
          color: "#0f0b1e",
          fontWeight: 900,
          fontSize: "17px",
          padding: "17px",
          borderRadius: "16px",
          textDecoration: "none",
          letterSpacing: "0.3px",
          textTransform: "uppercase",
          boxShadow: "0 6px 30px rgba(245,197,24,0.4)",
        }}
      >
        🎁 SIGNUP &amp; GET ₹100 FREE
      </a>

      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href="https://wa.me/918102104776"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            background: "rgba(34,22,69,0.8)",
            color: "#c4b5fd",
            fontWeight: 700,
            fontSize: "15px",
            padding: "14px",
            borderRadius: "14px",
            textDecoration: "none",
            border: "1px solid rgba(124,58,237,0.4)",
          }}
        >
          💳 Deposit
        </a>

        <a
          href="https://whatsapp.com/channel/"
          target="_blank"
          rel="noopener noreferrer"
          className="anim-pulse-green"
          style={{
            flex: 1,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            background: "linear-gradient(135deg,#25d366,#128c7e)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "13px",
            padding: "14px 10px",
            borderRadius: "14px",
            textDecoration: "none",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
          }}
        >
          📲 JOIN WHATSAPP 🚀
        </a>
      </div>
    </section>
  );
}
