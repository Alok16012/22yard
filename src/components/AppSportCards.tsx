"use client";
import { useState } from "react";

const filters = ["All Betting","Cricket","Football","Tennis"];

const sportCards = [
  { title:"Cricket Match Live", tag:"LIVE",     tagColor:"#ef4444", img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80", odds:"IND 2.1 · AUS 1.8" },
  { title:"Live Football",      tag:"LIVE",     tagColor:"#ef4444", img:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80", odds:"MCI 1.5 · MUN 2.4" },
  { title:"Tennis Open",        tag:"UPCOMING", tagColor:"#f59e0b", img:"https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80", odds:"FED 1.3 · NAD 3.1" },
  { title:"IPL 2026 Final",     tag:"HOT",      tagColor:"#7c3aed", img:"https://images.unsplash.com/photo-1624880357913-a8539238245b?w=600&q=80", odds:"MI 2.2 · CSK 1.7"  },
];

export default function AppSportCards() {
  const [active, setActive] = useState("All Betting");

  return (
    <div style={{ padding:"16px 16px 6px" }}>
      {/* Filter row */}
      <div style={{ display:"flex", gap:"8px", overflowX:"auto", marginBottom:"14px", paddingBottom:"4px" }}>
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)} style={{
            background: active===f ? "#ffffff" : "rgba(255,255,255,0.07)",
            color: active===f ? "#0f0b1e" : "rgba(255,255,255,0.5)",
            border: active===f ? "none" : "1px solid rgba(255,255,255,0.1)",
            borderRadius:"50px", padding:"8px 16px",
            fontFamily:"var(--font-rajdhani)", fontSize:"13px", fontWeight:700,
            cursor:"pointer", whiteSpace:"nowrap", flexShrink:0,
            boxShadow: active===f ? "0 3px 12px rgba(255,255,255,0.15)" : "none",
            transition:"all 0.2s", letterSpacing:"0.3px",
          }}>{f}</button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
        {sportCards.map((c,i) => (
          <div key={i} style={{
            borderRadius:"18px", overflow:"hidden",
            height:"140px", position:"relative", cursor:"pointer",
            boxShadow:"0 6px 25px rgba(0,0,0,0.5)",
          }}>
            <img src={c.img} alt={c.title} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}
              onError={e => { (e.target as HTMLImageElement).style.background="linear-gradient(135deg,#1a1035,#2d1b69)"; }}/>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(5,3,15,0.95) 0%,rgba(5,3,15,0.45) 55%,rgba(5,3,15,0.1) 100%)" }}/>

            {/* tag */}
            <div className="font-rajdhani" style={{
              position:"absolute", top:"12px", left:"12px",
              background:c.tagColor, color:"#fff",
              fontSize:"10px", fontWeight:700,
              padding:"3px 11px", borderRadius:"20px", letterSpacing:"1px",
              boxShadow:`0 2px 8px ${c.tagColor}60`,
            }}>{c.tag}</div>

            {/* Bet Now */}
            <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer"
              className="font-rajdhani"
              style={{
                position:"absolute", top:"10px", right:"12px",
                background:"linear-gradient(135deg,#7c3aed,#5b21b6)",
                color:"#fff", fontSize:"11px", fontWeight:700,
                padding:"5px 13px", borderRadius:"20px",
                textDecoration:"none",
                boxShadow:"0 3px 10px rgba(124,58,237,0.45)",
                letterSpacing:"0.5px",
              }}>BET NOW</a>

            {/* Bottom */}
            <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"10px 14px 12px", display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
              <div>
                <div className="font-bebas" style={{ fontSize:"20px", color:"#fff", letterSpacing:"1px" }}>{c.title}</div>
                <div className="font-inter" style={{ fontSize:"11px", color:"rgba(255,255,255,0.45)", marginTop:"1px" }}>{c.odds}</div>
              </div>
              <div className="font-rajdhani" style={{
                background:"rgba(245,197,24,0.15)",
                border:"1px solid rgba(245,197,24,0.4)",
                borderRadius:"8px", padding:"5px 10px",
                fontSize:"12px", fontWeight:700, color:"#f5c518",
              }}>+₹100</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA after sport cards ── */}
      <a href="https://wa.me/918102104776" target="_blank" rel="noopener noreferrer" style={{
        display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
        background:"linear-gradient(135deg,#f5c518,#ffdd55)",
        color:"#0f0b1e",
        padding:"15px",
        borderRadius:"14px",
        textDecoration:"none",
        marginTop:"14px",
        boxShadow:"0 6px 25px rgba(245,197,24,0.4)",
      }}>
        <span style={{ fontFamily:"var(--font-bebas)", fontSize:"20px", letterSpacing:"2px" }}>
          🎯 GET YOUR BETTING ID — 2 MINUTES
        </span>
      </a>
    </div>
  );
}
