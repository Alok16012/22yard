const offers = [
  {
    emoji: "💰", value: "5%",  label: "Every Deposit",
    badge: "PREMIUM", badgeBg: "#7c3aed",
    glow: "rgba(124,58,237,0.3)",
    border: "rgba(124,58,237,0.5)",
    accent: "#c084fc",
    bg: "linear-gradient(145deg,#1e0f42,#2d1b69)",
  },
  {
    emoji: "🎁", value: "7%",  label: "Total Bonus",
    badge: "EXCLUSIVE", badgeBg: "#dc2626",
    glow: "rgba(245,197,24,0.25)",
    border: "rgba(245,197,24,0.4)",
    accent: "#f5c518",
    bg: "linear-gradient(145deg,#2d1500,#3d1f00)",
  },
  {
    emoji: "🔄", value: "2%",  label: "Cash Back / Week",
    badge: "WEEKLY", badgeBg: "#0891b2",
    glow: "rgba(34,211,238,0.2)",
    border: "rgba(34,211,238,0.35)",
    accent: "#22d3ee",
    bg: "linear-gradient(145deg,#0a1e2a,#0d2d40)",
  },
  {
    emoji: "⚡", value: "5 Min", label: "Instant Withdrawal",
    badge: "FASTEST", badgeBg: "#16a34a",
    glow: "rgba(74,222,128,0.2)",
    border: "rgba(74,222,128,0.35)",
    accent: "#4ade80",
    bg: "linear-gradient(145deg,#071a0f,#0d2d1a)",
  },
];

export default function OffersGrid() {
  return (
    <section style={{ padding: "28px 18px", background: "#0f0b1e" }}>
      {/* heading */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <span style={{
          display: "inline-block",
          background: "rgba(124,58,237,0.15)",
          border: "1px solid rgba(124,58,237,0.4)",
          color: "#c084fc",
          fontSize: "11px", fontWeight: 700,
          padding: "5px 14px", borderRadius: "20px",
          letterSpacing: "2px", textTransform: "uppercase",
          marginBottom: "8px",
        }}>Exclusive Offers</span>
        <h2 style={{
          fontSize: "22px", fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.5px",
        }}>🔥 Best Bonuses In India</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {offers.map((o, i) => (
          <div key={i} style={{
            background: o.bg,
            border: `1.5px solid ${o.border}`,
            borderRadius: "18px",
            padding: "20px 14px",
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center", gap: "6px",
            position: "relative", overflow: "hidden",
            boxShadow: `0 8px 30px ${o.glow}`,
          }}>
            {/* badge */}
            <div style={{
              position: "absolute", top: "10px", right: "10px",
              background: o.badgeBg, color: "#fff",
              fontSize: "8px", fontWeight: 800,
              padding: "3px 8px", borderRadius: "6px", letterSpacing: "0.5px",
            }}>{o.badge}</div>

            <div style={{ fontSize: "32px", lineHeight: 1 }}>{o.emoji}</div>
            <div style={{
              fontSize: "30px", fontWeight: 900,
              color: o.accent, lineHeight: 1,
            }}>{o.value}</div>
            <div style={{
              fontSize: "11px", fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.3px", textTransform: "uppercase",
            }}>{o.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
