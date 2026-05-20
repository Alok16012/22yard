"use client";
import { useState, useEffect } from "react";

// Inline SVG logo matching the 22Yard brand (purple + gold)
function YardLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#F5A800"/>
        </linearGradient>
        <linearGradient id="lp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#4c1d95"/>
        </linearGradient>
      </defs>
      {/* gold outer ring */}
      <circle cx="50" cy="50" r="48" fill="url(#lg)"/>
      {/* purple inner */}
      <circle cx="50" cy="50" r="42" fill="url(#lp)"/>
      {/* arrow/swoosh top */}
      <path d="M22 32 Q50 12 78 28" stroke="#FFD700" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <polygon points="76,20 82,32 68,29" fill="#FFD700"/>
      {/* bat */}
      <rect x="46" y="18" width="8" height="38" rx="4" fill="#FFD700" transform="rotate(-15 50 50)"/>
      <rect x="48" y="16" width="4" height="14" rx="2" fill="#4c1d95" transform="rotate(-15 50 50)"/>
      {/* "22" */}
      <text x="50" y="74" textAnchor="middle"
        fontFamily="Impact,Arial Black,sans-serif" fontWeight="900"
        fontSize="28" fill="#FFD700" stroke="#3b0764" strokeWidth="1.5" paintOrder="stroke">
        22
      </text>
      {/* "YARD" */}
      <text x="50" y="90" textAnchor="middle"
        fontFamily="Impact,Arial Black,sans-serif" fontWeight="900"
        fontSize="13" fill="#FFD700" stroke="#3b0764" strokeWidth="1" paintOrder="stroke" letterSpacing="2">
        YARD
      </text>
    </svg>
  );
}

export default function AppHeader() {
  const [count, setCount] = useState(124);
  useEffect(() => {
    const t = setInterval(() => setCount(p => Math.max(100, Math.min(200, p + (Math.floor(Math.random()*5)-2)))), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <header style={{
      background: "rgba(12,8,22,0.97)",
      backdropFilter: "blur(20px)",
      padding: "10px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "2px solid rgba(245,167,0,0.35)",
    }}>
      {/* QR / Menu */}
      <div style={{
        width:"38px", height:"38px",
        background:"rgba(124,58,237,0.15)",
        border:"1px solid rgba(124,58,237,0.3)",
        borderRadius:"10px",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:"17px", cursor:"pointer",
      }}>⊞</div>

      {/* Logo — SVG + text */}
      <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
        {/* if real logo.png exists it'll show; fallback to SVG */}
        <YardLogo size={42} />
        <div style={{ lineHeight:1 }}>
          <div className="font-bebas" style={{
            fontSize:"24px",
            color:"#FFD700",
            letterSpacing:"3px",
            textShadow:"0 0 12px rgba(255,215,0,0.5)",
          }}>22YARD</div>
          <div className="font-rajdhani" style={{
            fontSize:"9px", color:"rgba(255,215,0,0.45)", letterSpacing:"3px",
          }}>.IN</div>
        </div>
      </div>

      {/* Live counter + profile */}
      <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
        <div style={{
          background:"rgba(239,68,68,0.15)",
          border:"1px solid rgba(239,68,68,0.4)",
          borderRadius:"20px",
          padding:"4px 10px",
          display:"flex", alignItems:"center", gap:"4px",
        }}>
          <span style={{
            width:"6px", height:"6px", borderRadius:"50%",
            background:"#ef4444", display:"inline-block",
            animation:"pulse-green 1.5s infinite",
          }}/>
          <span className="font-rajdhani" style={{ fontSize:"11px", fontWeight:700, color:"#f87171" }}>LIVE</span>
          <span className="font-rajdhani" style={{ fontSize:"11px", fontWeight:700, color:"#FFD700" }}>{count}</span>
        </div>
        <div style={{
          width:"38px", height:"38px",
          background:"rgba(124,58,237,0.15)",
          border:"1px solid rgba(124,58,237,0.3)",
          borderRadius:"50%",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:"17px", cursor:"pointer",
        }}>👤</div>
      </div>
    </header>
  );
}
