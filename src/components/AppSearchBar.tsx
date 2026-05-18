"use client";
import { useState } from "react";

const pills = ["Live Now", "Quick Bets", "IPL 2026", "Casino"];

export default function AppSearchBar() {
  const [active, setActive] = useState("Live Now");

  return (
    <div style={{ padding: "14px 16px 10px", background: "#120f1e" }}>
      {/* Search */}
      <div style={{
        display:"flex", alignItems:"center", gap:"10px",
        background:"rgba(255,255,255,0.06)",
        border:"1px solid rgba(124,58,237,0.25)",
        borderRadius:"50px",
        padding:"11px 16px",
        marginBottom:"12px",
      }}>
        <span style={{ fontSize:"15px", color:"rgba(192,132,252,0.5)" }}>🔍</span>
        <span className="font-inter" style={{ fontSize:"13px", color:"rgba(255,255,255,0.25)", fontWeight:400 }}>
          Search sports, teams, matches…
        </span>
      </div>

      {/* Pills */}
      <div style={{ display:"flex", gap:"8px", overflowX:"auto", paddingBottom:"2px" }}>
        {pills.map(p => (
          <button key={p} onClick={() => setActive(p)} style={{
            background: active===p ? "linear-gradient(135deg,#7c3aed,#5b21b6)" : "rgba(255,255,255,0.07)",
            color: active===p ? "#fff" : "rgba(255,255,255,0.45)",
            border: active===p ? "1px solid #7c3aed" : "1px solid rgba(255,255,255,0.1)",
            borderRadius:"50px",
            padding:"7px 16px",
            fontFamily:"var(--font-rajdhani)", fontSize:"13px", fontWeight:700,
            cursor:"pointer", whiteSpace:"nowrap", flexShrink:0,
            boxShadow: active===p ? "0 3px 12px rgba(124,58,237,0.4)" : "none",
            transition:"all 0.2s",
            letterSpacing:"0.3px",
          }}>{p}</button>
        ))}
      </div>
    </div>
  );
}
