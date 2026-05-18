"use client";
import { useState, useEffect } from "react";

export default function AppHeader() {
  const [count, setCount] = useState(124);
  useEffect(() => {
    const t = setInterval(() => setCount(p => Math.max(100, Math.min(200, p + (Math.floor(Math.random()*5)-2)))), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <header style={{
      background: "rgba(18,15,30,0.97)",
      backdropFilter: "blur(20px)",
      padding: "12px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: "1px solid rgba(124,58,237,0.2)",
    }}>
      {/* QR Icon */}
      <div style={{
        width: "40px", height: "40px",
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(124,58,237,0.3)",
        borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "18px", cursor: "pointer",
      }}>⊞</div>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{
          width: "32px", height: "32px",
          background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px",
          boxShadow: "0 3px 12px rgba(124,58,237,0.4)",
        }}>🏏</div>
        <div>
          <div className="font-bebas" style={{
            fontSize: "22px", color: "#c084fc", letterSpacing: "2px", lineHeight: 1,
          }}>22YARD</div>
          <div className="font-rajdhani" style={{
            fontSize: "9px", color: "rgba(192,132,252,0.5)", letterSpacing: "3px", marginTop: "-2px",
          }}>.IN</div>
        </div>
      </div>

      {/* Live + Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{
          background: "rgba(239,68,68,0.15)",
          border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: "20px",
          padding: "4px 10px",
          display: "flex", alignItems: "center", gap: "4px",
        }}>
          <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#ef4444", display:"inline-block" }}/>
          <span className="font-rajdhani" style={{ fontSize:"11px", fontWeight:700, color:"#f87171" }}>LIVE</span>
          <span className="font-rajdhani" style={{ fontSize:"11px", fontWeight:700, color:"#f5c518" }}>{count}</span>
        </div>
        <div style={{
          width:"40px", height:"40px",
          background:"rgba(124,58,237,0.15)",
          border:"1px solid rgba(124,58,237,0.3)",
          borderRadius:"50%",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:"18px", cursor:"pointer",
        }}>👤</div>
      </div>
    </header>
  );
}
