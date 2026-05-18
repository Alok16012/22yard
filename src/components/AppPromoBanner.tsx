export default function AppPromoBanner() {
  return (
    <div style={{ padding: "4px 16px 16px" }}>

      {/* ── TOP CTA BAR ── */}
      <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer"
        className="anim-pulse-gold"
        style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
          background:"linear-gradient(135deg,#f5c518,#ffdd55)",
          color:"#0f0b1e",
          padding:"15px",
          borderRadius:"14px",
          textDecoration:"none",
          marginBottom:"10px",
          boxShadow:"0 6px 28px rgba(245,197,24,0.45)",
        }}>
        <span style={{ fontFamily:"var(--font-bebas)", fontSize:"20px", letterSpacing:"2px" }}>
          🎁 SIGNUP &amp; GET ₹100 FREE
        </span>
      </a>

      {/* ── PROMO BANNER ── */}
      <div style={{
        background:"linear-gradient(135deg,#6d28d9 0%,#7c3aed 60%,#8b5cf6 100%)",
        borderRadius:"20px",
        padding:"20px 18px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        position:"relative",
        overflow:"hidden",
        minHeight:"110px",
        boxShadow:"0 8px 30px rgba(124,58,237,0.5)",
        marginBottom:"10px",
      }}>
        <div style={{ position:"absolute", top:"-20px", right:"80px", width:"100px", height:"100px", borderRadius:"50%", background:"rgba(255,255,255,0.07)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:"-30px", right:"20px", width:"130px", height:"130px", borderRadius:"50%", background:"rgba(255,255,255,0.05)", pointerEvents:"none" }}/>

        <div style={{ flex:1, zIndex:1 }}>
          <div className="font-rajdhani" style={{ fontSize:"10px", color:"rgba(255,255,255,0.65)", fontWeight:700, marginBottom:"4px", letterSpacing:"2px" }}>EXCLUSIVE OFFER</div>
          <div className="font-bebas" style={{ fontSize:"26px", color:"#fff", lineHeight:1.15, letterSpacing:"1px", marginBottom:"12px" }}>
            Unlock Premium<br/>Casino Rewards<br/>Today
          </div>
          <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
            display:"inline-block",
            background:"linear-gradient(135deg,#f5c518,#e6a800)",
            color:"#0f0b1e",
            fontFamily:"var(--font-rajdhani)",
            fontWeight:700, fontSize:"14px",
            padding:"9px 22px", borderRadius:"50px",
            textDecoration:"none",
            boxShadow:"0 4px 15px rgba(245,197,24,0.45)",
            letterSpacing:"0.3px",
          }}>Get Rewards 🎰</a>
        </div>
        <div style={{ fontSize:"70px", lineHeight:1, filter:"drop-shadow(0 8px 20px rgba(0,0,0,0.4))", zIndex:1 }}>🎰</div>
      </div>

      {/* ── MINI PILLS ── */}
      <div style={{ display:"flex", gap:"8px" }}>
        {[
          { icon:"🎁", text:"₹100 Welcome Bonus", color:"rgba(192,132,252,0.3)" },
          { icon:"⚡", text:"5-Min Withdrawal",   color:"rgba(245,197,24,0.25)"  },
        ].map((item,i) => (
          <a key={i} href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
            flex:1,
            background:"rgba(255,255,255,0.05)",
            border:`1px solid ${item.color}`,
            borderRadius:"12px",
            padding:"10px 12px",
            display:"flex", alignItems:"center", gap:"7px",
            textDecoration:"none",
          }}>
            <span style={{ fontSize:"18px" }}>{item.icon}</span>
            <span className="font-rajdhani" style={{ fontSize:"12px", fontWeight:700, color:"rgba(255,255,255,0.65)" }}>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
