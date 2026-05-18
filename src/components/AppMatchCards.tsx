const matches = [
  {
    tag:"NEXT DECIDING MATCH", tagColor:"#f5c518",
    time:"Today, 6:30 AM",
    team1:{ name:"India",     flag:"🇮🇳", score:"245/6" },
    team2:{ name:"Australia", flag:"🇦🇺", score:"198/8" },
    sport:"🏏",
    bg:"linear-gradient(135deg,#1a0f35,#2d1b69)",
    p1:"https://images.unsplash.com/photo-1624880357913-a8539238245b?w=200&q=80",
    p2:"https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=200&q=80",
  },
  {
    tag:"UPCOMING", tagColor:"#a78bfa",
    time:"Today, 9:00 PM",
    team1:{ name:"Mumbai", flag:"🔵", score:"—" },
    team2:{ name:"Chennai",flag:"🟡", score:"—" },
    sport:"🏏",
    bg:"linear-gradient(135deg,#0f2010,#1a3d20)",
    p1:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=200&q=80",
    p2:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&q=80",
  },
];

export default function AppMatchCards() {
  return (
    <div style={{ padding:"0 16px 6px" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"12px" }}>
        <h2 className="font-bebas" style={{ fontSize:"22px", color:"#fff", margin:0, letterSpacing:"1.5px" }}>Live Matches</h2>
        <span className="font-rajdhani" style={{ fontSize:"13px", color:"#9d60ff", fontWeight:700 }}>See All →</span>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
        {matches.map((m,i) => (
          <div key={i} style={{
            background:m.bg,
            border:"1px solid rgba(124,58,237,0.3)",
            borderRadius:"20px",
            overflow:"hidden",
            boxShadow:"0 8px 30px rgba(0,0,0,0.4)",
          }}>
            {/* Player photos */}
            <div style={{ height:"110px", position:"relative", display:"flex", overflow:"hidden" }}>
              <div style={{ flex:1, position:"relative", overflow:"hidden" }}>
                <img src={m.p1} alt="p1" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }}
                  onError={e => { (e.target as HTMLImageElement).style.display="none"; }}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,transparent 50%,rgba(0,0,0,0.85))" }}/>
              </div>
              <div style={{ flex:1, position:"relative", overflow:"hidden" }}>
                <img src={m.p2} alt="p2" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }}
                  onError={e => { (e.target as HTMLImageElement).style.display="none"; }}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to left,transparent 50%,rgba(0,0,0,0.85))" }}/>
              </div>
              <div style={{
                position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)",
                background:"linear-gradient(135deg,#7c3aed,#5b21b6)",
                borderRadius:"50%", width:"34px", height:"34px",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontFamily:"var(--font-bebas)", fontSize:"13px", color:"#fff",
                border:"2px solid rgba(192,132,252,0.5)", zIndex:2, letterSpacing:"1px",
              }}>VS</div>
              <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"50px", background:"linear-gradient(to top,rgba(0,0,0,0.9),transparent)" }}/>
            </div>

            {/* Info */}
            <div style={{ padding:"12px 16px 14px" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px" }}>
                <span className="font-rajdhani" style={{
                  background:`${m.tagColor}20`, color:m.tagColor,
                  fontSize:"10px", fontWeight:700, padding:"3px 10px",
                  borderRadius:"20px", border:`1px solid ${m.tagColor}40`, letterSpacing:"1px",
                }}>{m.tag}</span>
                <span className="font-inter" style={{ fontSize:"11px", color:"rgba(255,255,255,0.35)" }}>🕐 {m.time}</span>
              </div>

              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontSize:"22px" }}>{m.team1.flag}</div>
                  <div className="font-rajdhani" style={{ fontSize:"14px", fontWeight:700, color:"#fff", marginTop:"2px" }}>{m.team1.name}</div>
                  {m.team1.score!=="—" && <div className="font-inter" style={{ fontSize:"11px", color:"#a78bfa" }}>{m.team1.score}</div>}
                </div>
                <div style={{ textAlign:"center" }}>
                  <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
                    background:"linear-gradient(135deg,#7c3aed,#5b21b6)",
                    color:"#fff",
                    fontFamily:"var(--font-rajdhani)",
                    fontWeight:700, fontSize:"13px",
                    padding:"9px 20px", borderRadius:"50px",
                    textDecoration:"none",
                    boxShadow:"0 4px 15px rgba(124,58,237,0.45)",
                    display:"block", letterSpacing:"0.5px",
                  }}>BET NOW 🎯</a>
                </div>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontSize:"22px" }}>{m.team2.flag}</div>
                  <div className="font-rajdhani" style={{ fontSize:"14px", fontWeight:700, color:"#fff", marginTop:"2px" }}>{m.team2.name}</div>
                  {m.team2.score!=="—" && <div className="font-inter" style={{ fontSize:"11px", color:"#a78bfa" }}>{m.team2.score}</div>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA after matches ── */}
      <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
        display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
        background:"linear-gradient(135deg,#25d366,#128c7e)",
        color:"#fff",
        padding:"14px",
        borderRadius:"14px",
        textDecoration:"none",
        marginTop:"12px",
        boxShadow:"0 5px 20px rgba(37,211,102,0.35)",
      }}>
        <span style={{ fontFamily:"var(--font-bebas)", fontSize:"18px", letterSpacing:"1.5px" }}>📲 JOIN WHATSAPP — GET ID INSTANTLY</span>
      </a>
    </div>
  );
}
