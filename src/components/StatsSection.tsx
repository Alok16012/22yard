const stats = [
  { emoji: "😊", value: "10,000+", label: "Happy Players",      color: "#c084fc" },
  { emoji: "💸", value: "₹50 Cr+", label: "Paid to Winners",   color: "#f5c518" },
  { emoji: "⚡", value: "5 Min",   label: "Avg Withdrawal",    color: "#4ade80" },
];

export default function StatsSection() {
  return (
    <section style={{
      padding: "28px 18px",
      background: "linear-gradient(180deg,#0f0b1e 0%,#130e26 100%)",
      borderTop: "1px solid rgba(124,58,237,0.15)",
    }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{
          fontSize: "20px", fontWeight: 900,
          color: "#ffffff",
        }}>🏆 Our Achievements</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: "linear-gradient(145deg,#1a1035,#221645)",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: "18px",
            padding: "22px 10px",
            textAlign: "center",
            display: "flex", flexDirection: "column", gap: "6px",
            boxShadow: "0 4px 20px rgba(124,58,237,0.1)",
          }}>
            <span style={{ fontSize: "30px" }}>{s.emoji}</span>
            <div style={{
              fontSize: "clamp(15px,4vw,20px)", fontWeight: 900,
              color: s.color, lineHeight: 1,
            }}>{s.value}</div>
            <div style={{ fontSize: "10px", color: "rgba(167,139,250,0.6)", fontWeight: 600 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
