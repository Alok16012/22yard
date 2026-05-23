"use client";
import { useState, useEffect } from "react";

export default function AppFooterCTA() {
  const [t, setT] = useState({ h:23, m:45, s:12 });
  useEffect(() => {
    const timer = setInterval(() => {
      setT(prev => {
        let {h,m,s} = prev;
        s--; if(s<0){s=59;m--;} if(m<0){m=59;h--;} if(h<0){h=23;m=59;s=59;}
        return {h,m,s};
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const p = (n:number) => String(n).padStart(2,"0");

  return (
    <div style={{ padding:"16px 16px 20px" }}>

      {/* ── Urgency card ── */}
      <div style={{
        background:"linear-gradient(135deg,#2d0a0a,#1a0505)",
        border:"1.5px solid rgba(239,68,68,0.45)",
        borderRadius:"16px", padding:"14px 16px",
        display:"flex", alignItems:"center", gap:"12px",
        marginBottom:"10px",
        boxShadow:"0 4px 20px rgba(239,68,68,0.15)",
      }}>
        <span style={{ fontSize:"26px" }}>🚨</span>
        <div>
          <div className="font-bebas" style={{ fontSize:"18px", color:"#f87171", letterSpacing:"1px" }}>Only 8 IDs Available Today!</div>
          <div className="font-inter" style={{ fontSize:"11px", color:"rgba(248,113,113,0.55)", marginTop:"1px" }}>Hurry — spots filling fast</div>
        </div>
      </div>

      {/* ── Countdown ── */}
      <div style={{
        background:"rgba(255,255,255,0.04)",
        border:"1px solid rgba(124,58,237,0.3)",
        borderRadius:"16px", padding:"16px 18px",
        textAlign:"center", marginBottom:"10px",
      }}>
        <div className="font-rajdhani" style={{ fontSize:"11px", fontWeight:700, color:"#a78bfa", letterSpacing:"2.5px", textTransform:"uppercase", marginBottom:"12px" }}>
          ⏰ OFFER ENDS IN
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"6px" }}>
          {[{v:p(t.h),l:"HRS"},{sep:true},{v:p(t.m),l:"MIN"},{sep:true},{v:p(t.s),l:"SEC"}].map((item,i) =>
            "sep" in item ? (
              <span key={i} className="font-bebas" style={{ fontSize:"30px", color:"#7c3aed", marginBottom:"14px", animation:"countdown-blink 1s infinite" }}>:</span>
            ) : (
              <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"3px" }}>
                <div className="font-bebas" style={{
                  background:"linear-gradient(135deg,#7c3aed,#5b21b6)",
                  borderRadius:"10px", padding:"10px 14px",
                  fontSize:"28px", color:"#fff",
                  minWidth:"60px", textAlign:"center",
                  boxShadow:"0 4px 15px rgba(124,58,237,0.35)",
                  letterSpacing:"2px",
                  fontVariantNumeric:"tabular-nums",
                }}>{"v" in item ? item.v : ""}</div>
                <span className="font-rajdhani" style={{ fontSize:"9px", color:"#7c3aed", letterSpacing:"1.5px", fontWeight:700 }}>{"l" in item ? item.l : ""}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* ── Final CTA block ── */}
      <div style={{
        background:"radial-gradient(ellipse at 50% 0%,#3b0764 0%,#1a1035 70%)",
        border:"1px solid rgba(124,58,237,0.3)",
        borderRadius:"20px", padding:"24px 20px",
        textAlign:"center",
        boxShadow:"0 8px 30px rgba(124,58,237,0.2)",
      }}>
        <div className="anim-float" style={{ fontSize:"48px", marginBottom:"10px", display:"block" }}>🏆</div>
        <h2 className="font-bebas" style={{ fontSize:"36px", color:"#fff", marginBottom:"6px", letterSpacing:"2px", lineHeight:1 }}>
          READY TO WIN BIG?
        </h2>
        <p className="font-inter" style={{ fontSize:"13px", color:"#a78bfa", marginBottom:"18px", lineHeight:1.6 }}>
          Join 10,000+ players — Get your ID in just 2 minutes!
        </p>

        <a href="https://wa.link/22yard" target="_blank" rel="noopener noreferrer"
          className="anim-pulse-gold"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
            background:"linear-gradient(135deg,#f5c518,#ffdd55)",
            color:"#0f0b1e", padding:"16px 20px", borderRadius:"14px",
            textDecoration:"none", marginBottom:"10px",
            boxShadow:"0 6px 25px rgba(245,197,24,0.45)",
          }}>
          <span style={{ fontFamily:"var(--font-bebas)", fontSize:"22px", letterSpacing:"2px" }}>START BETTING NOW 💰</span>
        </a>

        <a href="https://wa.link/22yard" target="_blank" rel="noopener noreferrer"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
            background:"linear-gradient(135deg,#25d366,#128c7e)",
            color:"#fff", padding:"13px 20px", borderRadius:"14px",
            textDecoration:"none",
            boxShadow:"0 4px 15px rgba(37,211,102,0.3)",
          }}>
          <span style={{ fontFamily:"var(--font-bebas)", fontSize:"18px", letterSpacing:"1.5px" }}>📲 JOIN WHATSAPP CHANNEL</span>
        </a>

        <div className="font-rajdhani" style={{ marginTop:"14px", color:"#4ade80", fontSize:"13px", fontWeight:700, letterSpacing:"0.5px" }}>
          ⚡ INSTANT ID — READY IN 2 MINUTES
        </div>
      </div>

      {/* Footer note */}
      <div style={{ textAlign:"center", marginTop:"16px" }}>
        <p className="font-inter" style={{ fontSize:"10px", color:"rgba(124,58,237,0.35)", lineHeight:1.7, margin:0 }}>
          ⚠️ 18+ only · Play Responsibly · 22yard.in<br/>
          © 2026 22Yard.in — All Rights Reserved
        </p>
      </div>
    </div>
  );
}
