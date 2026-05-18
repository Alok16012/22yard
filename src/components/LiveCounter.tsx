"use client";
import { useState, useEffect } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState(124);
  useEffect(() => {
    const t = setInterval(() => {
      setCount(p => Math.max(100, Math.min(200, p + (Math.floor(Math.random() * 5) - 2))));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: "rgba(124,58,237,0.08)",
      borderBottom: "1px solid rgba(124,58,237,0.2)",
      padding: "10px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    }}>
      {/* pulsing dot */}
      <span style={{
        position: "relative", display: "inline-flex",
        width: "10px", height: "10px",
      }}>
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "#22c55e", opacity: 0.6,
          animation: "pulse-green 1.5s ease-in-out infinite",
        }}/>
        <span style={{
          width: "10px", height: "10px", borderRadius: "50%",
          background: "#22c55e", position: "relative",
        }}/>
      </span>
      <span style={{ fontSize: "13px", color: "#a78bfa" }}>
        <span style={{ color: "#f5c518", fontWeight: 800, fontSize: "15px" }}>{count}</span>
        {" "}people viewing this page right now
      </span>
    </div>
  );
}
