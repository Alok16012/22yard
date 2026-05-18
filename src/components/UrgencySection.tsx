"use client";
import { useState, useEffect } from "react";

export default function UrgencySection() {
  const [t, setT] = useState({ h: 23, m: 45, s: 12 });
  useEffect(() => {
    const timer = setInterval(() => {
      setT(prev => {
        let { h, m, s } = prev;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const p = (n: number) => String(n).padStart(2, "0");

  return (
    <section style={{ padding: "20px 18px", background: "#0f0b1e" }}>
      {/* Limited IDs */}
      <div style={{
        background: "linear-gradient(135deg,#2d0a0a,#1a0505)",
        border: "1.5px solid rgba(239,68,68,0.5)",
        borderRadius: "16px",
        padding: "16px 18px",
        marginBottom: "12px",
        display: "flex", alignItems: "center", gap: "12px",
        boxShadow: "0 4px 20px rgba(239,68,68,0.15)",
      }}>
        <span style={{ fontSize: "28px" }}>🚨</span>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "#f87171" }}>
            Only 8 IDs available today!
          </div>
          <div style={{ fontSize: "12px", color: "rgba(248,113,113,0.6)", marginTop: "2px" }}>
            Hurry — claim yours before it's gone
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div style={{
        background: "linear-gradient(145deg,#1a1035,#221645)",
        border: "1px solid rgba(124,58,237,0.35)",
        borderRadius: "16px",
        padding: "20px 18px",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(124,58,237,0.15)",
      }}>
        <div style={{
          fontSize: "11px", fontWeight: 700,
          color: "#a78bfa", letterSpacing: "2.5px",
          textTransform: "uppercase", marginBottom: "16px",
        }}>⏰ Offer Ends In</div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          {[
            { val: p(t.h), label: "HRS" },
            { sep: true },
            { val: p(t.m), label: "MIN" },
            { sep: true },
            { val: p(t.s), label: "SEC" },
          ].map((item, i) =>
            "sep" in item ? (
              <span key={i} style={{
                fontSize: "28px", fontWeight: 900, color: "#7c3aed",
                marginBottom: "14px",
                animation: "countdown-blink 1s ease-in-out infinite",
              }}>:</span>
            ) : (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{
                  background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  fontSize: "26px", fontWeight: 900, color: "#fff",
                  minWidth: "64px", textAlign: "center",
                  fontVariantNumeric: "tabular-nums",
                  boxShadow: "0 4px 15px rgba(124,58,237,0.35)",
                }}>{"val" in item ? item.val : ""}</div>
                <span style={{ fontSize: "9px", color: "#7c3aed", letterSpacing: "1.5px", fontWeight: 700 }}>
                  {"label" in item ? item.label : ""}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
