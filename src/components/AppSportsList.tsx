"use client";
import { useState } from "react";

const sports = [
  { emoji:"🏏", name:"Cricket"    },
  { emoji:"🎾", name:"Tennis"     },
  { emoji:"🏀", name:"Basketball" },
  { emoji:"⚽", name:"Football"   },
  { emoji:"🏈", name:"Kabaddi"    },
];

export default function AppSportsList() {
  const [active, setActive] = useState("Cricket");

  return (
    <div style={{ padding:"0 16px 16px" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"12px" }}>
        <h2 className="font-bebas" style={{ fontSize:"22px", color:"#fff", margin:0, letterSpacing:"1.5px" }}>
          Top Betting Sports
        </h2>
        <span className="font-rajdhani" style={{ fontSize:"13px", color:"#9d60ff", fontWeight:700 }}>See All →</span>
      </div>
      <div style={{ display:"flex", gap:"10px", overflowX:"auto", paddingBottom:"4px" }}>
        {sports.map(s => (
          <button key={s.name} onClick={() => setActive(s.name)} style={{
            display:"flex", alignItems:"center", gap:"8px",
            background: active===s.name ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.07)",
            color: active===s.name ? "#0f0b1e" : "rgba(255,255,255,0.6)",
            border: active===s.name ? "none" : "1px solid rgba(255,255,255,0.1)",
            borderRadius:"50px",
            padding:"10px 18px",
            fontFamily:"var(--font-rajdhani)", fontSize:"14px", fontWeight:700,
            cursor:"pointer", whiteSpace:"nowrap", flexShrink:0,
            boxShadow: active===s.name ? "0 4px 15px rgba(255,255,255,0.15)" : "none",
            transition:"all 0.2s",
            letterSpacing:"0.3px",
          }}>
            <span style={{ fontSize:"18px" }}>{s.emoji}</span>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
