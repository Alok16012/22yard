const sports = [
  { emoji: "🏏", name: "Cricket",      active: true },
  { emoji: "⚽", name: "Football",     active: false },
  { emoji: "🎾", name: "Tennis",       active: false },
  { emoji: "🏀", name: "Basketball",   active: false },
];

const cards = [
  { emoji: "🏏", title: "Cricket Match Live",   tag: "LIVE",   tagColor: "#ef4444", gradient: "linear-gradient(135deg,#1a3a1a,#0d2040)" },
  { emoji: "⚽", title: "Live Football",         tag: "LIVE",   tagColor: "#ef4444", gradient: "linear-gradient(135deg,#1a1a3a,#0d2040)" },
  { emoji: "🎾", title: "Tennis",                tag: "UPCOMING", tagColor: "#f59e0b", gradient: "linear-gradient(135deg,#3a2a00,#1a1040)" },
];

export default function GamesSection() {
  return (
    <section style={{
      padding: "28px 0 0",
      background: "#0f0b1e",
      borderTop: "1px solid rgba(124,58,237,0.15)",
    }}>
      {/* header row */}
      <div style={{ padding: "0 18px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", margin: 0 }}>
          Top Betting Sports
        </h2>
        <span style={{ fontSize: "13px", color: "#7c3aed", fontWeight: 600 }}>See All</span>
      </div>

      {/* sport pills */}
      <div style={{ padding: "0 18px", display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto" }}>
        {sports.map((sp, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "7px",
            background: sp.active ? "linear-gradient(135deg,#7c3aed,#5b21b6)" : "rgba(34,22,69,0.7)",
            border: sp.active ? "1px solid #7c3aed" : "1px solid rgba(124,58,237,0.25)",
            color: sp.active ? "#fff" : "#a78bfa",
            fontWeight: 700, fontSize: "14px",
            padding: "9px 18px", borderRadius: "50px",
            cursor: "pointer", whiteSpace: "nowrap",
            flexShrink: 0,
            boxShadow: sp.active ? "0 4px 15px rgba(124,58,237,0.35)" : "none",
          }}>
            <span style={{ fontSize: "18px" }}>{sp.emoji}</span>
            {sp.name}
          </div>
        ))}
      </div>

      {/* match cards */}
      <div style={{ padding: "0 18px", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            background: c.gradient,
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: "18px",
            padding: "22px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer",
            position: "relative", overflow: "hidden",
            minHeight: "80px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "36px" }}>{c.emoji}</span>
              <div>
                <div style={{
                  display: "inline-block",
                  background: c.tagColor, color: "#fff",
                  fontSize: "9px", fontWeight: 800,
                  padding: "2px 8px", borderRadius: "4px",
                  letterSpacing: "0.5px", marginBottom: "5px",
                }}>{c.tag}</div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#fff" }}>{c.title}</div>
                <div style={{ fontSize: "12px", color: "#a78bfa", marginTop: "2px" }}>Today, 6:30 AM</div>
              </div>
            </div>
            <div style={{
              background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
              color: "#fff", fontSize: "12px", fontWeight: 700,
              padding: "8px 14px", borderRadius: "10px",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(124,58,237,0.4)",
            }}>Bet Now</div>
          </div>
        ))}
      </div>

      {/* 500+ banner */}
      <div style={{
        margin: "0 18px 28px",
        background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
        borderRadius: "18px",
        padding: "20px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 8px 30px rgba(124,58,237,0.4)",
      }}>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#c4b5fd", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>
            Available Games
          </div>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "#fff" }}>500+ Games 🎮</div>
        </div>
        <a
          href="https://wa.me/918102104776"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg,#f5c518,#e6a800)",
            color: "#0f0b1e", fontWeight: 800, fontSize: "13px",
            padding: "12px 18px", borderRadius: "12px",
            textDecoration: "none", whiteSpace: "nowrap",
          }}
        >🎁 Claim 7%</a>
      </div>
    </section>
  );
}
