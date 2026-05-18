const items = [
  { emoji: "🔒", title: "100% Safe",      sub: "& Secure",            color: "#4ade80" },
  { emoji: "💳", title: "Easy Deposit",   sub: "UPI / IMPS / NEFT",   color: "#c084fc" },
  { emoji: "⚡", title: "Instant Payout", sub: "Within 5 Minutes",    color: "#f5c518" },
  { emoji: "🕐", title: "24/7 Support",   sub: "Always Available",    color: "#22d3ee" },
  { emoji: "🏆", title: "Trusted",        sub: "10,000+ Players",     color: "#fb923c" },
  { emoji: "✅", title: "Verified",       sub: "Licensed Platform",   color: "#a3e635" },
];

export default function TrustIndicators() {
  return (
    <section style={{ padding: "28px 18px", background: "#0f0b1e", borderTop: "1px solid rgba(124,58,237,0.15)" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{
          fontSize: "20px", fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.3px",
        }}>
          Why Choose <span style={{ color: "#c084fc" }}>22Yard?</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: "linear-gradient(145deg,#1a1035,#221645)",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: "16px",
            padding: "18px 10px",
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center", gap: "5px",
          }}>
            <span style={{ fontSize: "26px" }}>{item.emoji}</span>
            <span style={{ fontSize: "10px", fontWeight: 800, color: item.color, letterSpacing: "0.2px" }}>
              {item.title}
            </span>
            <span style={{ fontSize: "9px", color: "rgba(167,139,250,0.6)" }}>{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
