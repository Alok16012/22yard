const offers = [
  { emoji:"💰", value:"5%",    label:"Every Deposit",   color:"#c084fc", bg:"rgba(124,58,237,0.12)", border:"rgba(124,58,237,0.3)" },
  { emoji:"🎁", value:"7%",    label:"Total Bonus",     color:"#f5c518", bg:"rgba(245,197,24,0.1)",  border:"rgba(245,197,24,0.3)"  },
  { emoji:"🔄", value:"2%",    label:"Weekly Cashback", color:"#22d3ee", bg:"rgba(34,211,238,0.1)",  border:"rgba(34,211,238,0.3)"  },
  { emoji:"⚡", value:"5 Min", label:"Withdrawal",      color:"#4ade80", bg:"rgba(74,222,128,0.1)",  border:"rgba(74,222,128,0.3)"  },
];

export default function AppOfferStrip() {
  return (
    <div style={{ padding:"16px 16px 6px" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"12px" }}>
        <h2 className="font-bebas" style={{ fontSize:"22px", color:"#fff", margin:0, letterSpacing:"1.5px" }}>🔥 Exclusive Offers</h2>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        {offers.map((o,i) => (
          <div key={i} style={{
            background:o.bg, border:`1.5px solid ${o.border}`,
            borderRadius:"16px", padding:"16px 12px",
            display:"flex", flexDirection:"column", alignItems:"center",
            textAlign:"center", gap:"5px",
          }}>
            <span style={{ fontSize:"28px" }}>{o.emoji}</span>
            <span className="font-bebas" style={{ fontSize:"32px", color:o.color, lineHeight:1, letterSpacing:"1px" }}>{o.value}</span>
            <span className="font-rajdhani" style={{ fontSize:"11px", color:"rgba(255,255,255,0.4)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.5px" }}>{o.label}</span>
          </div>
        ))}
      </div>

      {/* ── CTA after offers ── */}
      <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
        display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
        background:"linear-gradient(135deg,#7c3aed,#5b21b6)",
        color:"#fff",
        padding:"15px",
        borderRadius:"14px",
        textDecoration:"none",
        boxShadow:"0 6px 25px rgba(124,58,237,0.45)",
      }}>
        <span style={{ fontFamily:"var(--font-bebas)", fontSize:"20px", letterSpacing:"2px" }}>
          🎁 CLAIM ALL BONUSES NOW
        </span>
      </a>
    </div>
  );
}
