export default function AppStats() {
  return (
    <div style={{ padding:"16px 16px 6px" }}>
      <div style={{
        background:"linear-gradient(135deg,#1e0f42,#2d1b69)",
        border:"1px solid rgba(124,58,237,0.35)",
        borderRadius:"20px",
        padding:"20px 18px",
        boxShadow:"0 8px 30px rgba(124,58,237,0.2)",
        marginBottom:"14px",
      }}>
        <div className="font-bebas" style={{ fontSize:"18px", color:"rgba(192,132,252,0.7)", letterSpacing:"2px", marginBottom:"16px" }}>
          🏆 PLATFORM STATS
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"12px" }}>
          {[
            { v:"10K+",   l:"Happy Players", c:"#c084fc" },
            { v:"₹50Cr+", l:"Paid Out",      c:"#f5c518" },
            { v:"5 Min",  l:"Withdrawal",    c:"#4ade80" },
          ].map((s,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <div className="font-bebas" style={{ fontSize:"clamp(18px,4vw,24px)", color:s.c, letterSpacing:"1px" }}>{s.v}</div>
              <div className="font-rajdhani" style={{ fontSize:"10px", color:"rgba(167,139,250,0.5)", fontWeight:600, marginTop:"2px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges row */}
      <div style={{ display:"flex", gap:"8px" }}>
        {[
          { icon:"🔒", text:"100% Safe & Secure" },
          { icon:"💳", text:"UPI / IMPS / NEFT"  },
          { icon:"🕐", text:"24/7 Support"        },
        ].map((b,i) => (
          <div key={i} style={{
            flex:1, background:"rgba(255,255,255,0.04)",
            border:"1px solid rgba(124,58,237,0.2)",
            borderRadius:"12px", padding:"10px 8px",
            display:"flex", flexDirection:"column", alignItems:"center", gap:"4px", textAlign:"center",
          }}>
            <span style={{ fontSize:"18px" }}>{b.icon}</span>
            <span className="font-rajdhani" style={{ fontSize:"10px", color:"rgba(255,255,255,0.4)", fontWeight:600, lineHeight:1.2 }}>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
