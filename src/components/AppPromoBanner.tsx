// Replicates the 22Yard promotional poster:
// Stadium bg · 4 sport/game categories · Hindi slogans · 10% bonus strip

function YardLogoSmall() {
  return (
    <svg width="54" height="54" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700"/><stop offset="100%" stopColor="#F5A800"/>
        </linearGradient>
        <linearGradient id="lp2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#4c1d95"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#lg2)"/>
      <circle cx="50" cy="50" r="42" fill="url(#lp2)"/>
      <path d="M22 32 Q50 12 78 28" stroke="#FFD700" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <polygon points="76,20 82,32 68,29" fill="#FFD700"/>
      <rect x="46" y="18" width="8" height="38" rx="4" fill="#FFD700" transform="rotate(-15 50 50)"/>
      <rect x="48" y="16" width="4" height="14" rx="2" fill="#4c1d95" transform="rotate(-15 50 50)"/>
      <text x="50" y="74" textAnchor="middle" fontFamily="Impact,Arial Black,sans-serif"
        fontWeight="900" fontSize="28" fill="#FFD700" stroke="#3b0764" strokeWidth="1.5" paintOrder="stroke">22</text>
      <text x="50" y="90" textAnchor="middle" fontFamily="Impact,Arial Black,sans-serif"
        fontWeight="900" fontSize="13" fill="#FFD700" stroke="#3b0764" strokeWidth="1" paintOrder="stroke" letterSpacing="2">YARD</text>
    </svg>
  );
}

const categories = [
  {
    title: "CASINO GAMES",
    sub: "Roulette, Poker, Blackjack",
    emoji: "🎰",
    bg: "linear-gradient(135deg,#1a0a00,#3d1f00)",
    border: "rgba(245,167,0,0.5)",
    glow: "rgba(245,167,0,0.2)",
  },
  {
    title: "TENNIS MATCHES",
    sub: "Grand Slam Live Action",
    emoji: "🎾",
    bg: "linear-gradient(135deg,#001a00,#0a3d1a)",
    border: "rgba(74,222,128,0.5)",
    glow: "rgba(74,222,128,0.15)",
  },
  {
    title: "SOCCER LEAGUES",
    sub: "World Cup & Club Matches",
    emoji: "⚽",
    bg: "linear-gradient(135deg,#001020,#0a2040)",
    border: "rgba(96,165,250,0.5)",
    glow: "rgba(96,165,250,0.15)",
  },
  {
    title: "CRICKET TOURNAMENTS",
    sub: "IPL, ICC, T20 Live",
    emoji: "🏏",
    bg: "linear-gradient(135deg,#1a001a,#3d0a3d)",
    border: "rgba(192,132,252,0.5)",
    glow: "rgba(192,132,252,0.15)",
  },
];

export default function AppPromoBanner() {
  return (
    <div style={{ padding: "4px 16px 16px" }}>

      {/* ── TOP GOLD CTA ── */}
      <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer"
        className="anim-pulse-gold"
        style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
          background:"linear-gradient(135deg,#FFD700,#F5C518,#FFDD55)",
          color:"#0f0b1e", padding:"15px", borderRadius:"14px",
          textDecoration:"none", marginBottom:"12px",
          boxShadow:"0 6px 28px rgba(255,215,0,0.5)",
        }}>
        <span className="font-bebas" style={{ fontSize:"20px", letterSpacing:"2px" }}>
          🎁 SIGNUP &amp; GET ₹100 FREE
        </span>
      </a>

      {/* ── MAIN POSTER BANNER ── */}
      <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer"
        style={{
          display:"block",
          borderRadius:"20px",
          overflow:"hidden",
          border:"2px solid rgba(245,167,0,0.5)",
          boxShadow:"0 8px 35px rgba(124,58,237,0.4)",
          marginBottom:"12px",
          textDecoration:"none",
          position:"relative",
        }}>
        {/* Actual banner image */}
        <img
          src="/banner.jpg"
          alt="22Yard Promo Banner"
          style={{ width:"100%", display:"block", objectFit:"cover" }}
        />
        {/* Overlay CTA at bottom */}
        <div style={{
          background:"linear-gradient(90deg,#FFD700,#F5C518,#FFD700)",
          padding:"13px 16px",
          textAlign:"center",
          borderTop:"2px solid rgba(255,215,0,0.6)",
        }}>
          <span className="font-bebas" style={{
            fontSize:"17px", color:"#0f0b1e",
            letterSpacing:"2px",
          }}>
            🏏 KHELO 22 YARD MEIN — ABHI JOIN KARO!
          </span>
        </div>
      </a>

      {/* ── MINI STRIPS ── */}
      <div style={{ display:"flex", gap:"8px" }}>
        {[
          { icon:"🎁", text:"₹100 Welcome Bonus", color:"rgba(255,215,0,0.3)" },
          { icon:"⚡", text:"5-Min Withdrawal",   color:"rgba(74,222,128,0.25)" },
        ].map((item,i) => (
          <a key={i} href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
            flex:1, background:"rgba(255,255,255,0.04)",
            border:`1px solid ${item.color}`,
            borderRadius:"12px", padding:"10px 12px",
            display:"flex", alignItems:"center", gap:"7px",
            textDecoration:"none",
          }}>
            <span style={{ fontSize:"18px" }}>{item.icon}</span>
            <span className="font-rajdhani" style={{ fontSize:"12px", fontWeight:700, color:"rgba(255,255,255,0.6)" }}>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
