"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    tag: "🔴 LIVE NOW",
    tagColor: "#ef4444",
    badge: "🏆 OFFICIAL BETTING PARTNER",
    title: "IPL 2026",
    sub: "India's Most Trusted Cricket Betting Platform",
    emoji: "🏏",
    bg: "radial-gradient(ellipse at 30% 50%, #3b0764 0%, #1e0a3c 40%, #0f0b1e 100%)",
    accent: "#c084fc",
    dot: "#7c3aed",
  },
  {
    tag: "🔥 HOT DEAL",
    tagColor: "#f97316",
    badge: "⚡ EXCLUSIVE OFFER",
    title: "WIN BIG EVERY DAY",
    sub: "500+ Games · Instant Withdrawal · 24/7 Support",
    emoji: "💰",
    bg: "radial-gradient(ellipse at 70% 50%, #4c1d95 0%, #1e0a3c 40%, #0f0b1e 100%)",
    accent: "#f5c518",
    dot: "#f5c518",
  },
  {
    tag: "🎁 FREE BONUS",
    tagColor: "#22c55e",
    badge: "⚡ INSTANT ID",
    title: "GET STARTED IN 2 MINS",
    sub: "Signup Now & Get ₹100 FREE Welcome Bonus",
    emoji: "🎁",
    bg: "radial-gradient(ellipse at 50% 30%, #065f46 0%, #1e0a3c 40%, #0f0b1e 100%)",
    accent: "#4ade80",
    dot: "#25d366",
  },
];

export default function HeroBanner() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  const s = slides[cur];

  return (
    <section style={{ position: "relative" }}>
      <div style={{
        background: s.bg,
        minHeight: "260px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "36px 24px 28px",
        textAlign: "center",
        overflow: "hidden",
        transition: "background 1s ease",
      }}>
        {/* mesh overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(124,58,237,0.15) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(124,58,237,0.1) 0%, transparent 50%)",
        }}/>

        {/* live tag */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          backgroundColor: s.tagColor,
          color: "#fff",
          fontSize: "10px", fontWeight: 800,
          padding: "4px 12px", borderRadius: "20px",
          display: "flex", alignItems: "center", gap: "5px",
          letterSpacing: "0.5px",
          boxShadow: `0 2px 10px ${s.tagColor}60`,
        }}>{s.tag}</div>

        {/* badge */}
        <div style={{
          fontSize: "11px", fontWeight: 700,
          color: s.accent, letterSpacing: "2.5px",
          textTransform: "uppercase", marginBottom: "10px",
        }}>{s.badge}</div>

        {/* emoji */}
        <div className="anim-float" style={{ fontSize: "64px", lineHeight: 1, marginBottom: "10px" }}>
          {s.emoji}
        </div>

        {/* title */}
        <h1 style={{
          fontSize: "clamp(30px,8vw,52px)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.05,
          letterSpacing: "-1.5px",
          marginBottom: "10px",
          textShadow: `0 0 40px ${s.accent}50`,
        }}>{s.title}</h1>

        <p style={{ fontSize: "14px", color: "#c4b5fd", maxWidth: "340px", lineHeight: 1.5 }}>
          {s.sub}
        </p>

        {/* dots */}
        <div style={{ display: "flex", gap: "8px", marginTop: "22px" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCur(i)} style={{
              width: i === cur ? "28px" : "8px", height: "8px",
              borderRadius: "4px",
              background: i === cur ? s.dot : "rgba(255,255,255,0.2)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.35s ease",
            }}/>
          ))}
        </div>
      </div>
    </section>
  );
}
