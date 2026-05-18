"use client";
import { useState } from "react";

const items = [
  { icon:"🏠", label:"Home"    },
  { icon:"🏆", label:"Sports"  },
  { icon:"🎰", label:"Casino"  },
  { icon:"💳", label:"Wallet"  },
  { icon:"👤", label:"Profile" },
];

export default function AppBottomNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav style={{
      position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)",
      width:"100%", maxWidth:"430px",
      background:"rgba(10,7,20,0.97)",
      backdropFilter:"blur(20px)",
      borderTop:"1px solid rgba(124,58,237,0.25)",
      padding:"10px 0 16px",
      display:"flex", zIndex:100,
    }}>
      {items.map(item => (
        <button key={item.label} onClick={() => setActive(item.label)} style={{
          flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:"3px",
          background:"none", border:"none", cursor:"pointer", padding:"4px 0",
        }}>
          <span style={{ fontSize:"21px", filter: active===item.label ? "none" : "grayscale(0.5) opacity(0.45)" }}>
            {item.icon}
          </span>
          <span className="font-rajdhani" style={{
            fontSize:"10px", fontWeight:700, letterSpacing:"0.3px",
            color: active===item.label ? "#c084fc" : "rgba(255,255,255,0.25)",
          }}>{item.label}</span>
          {active===item.label && (
            <span style={{ width:"18px", height:"2.5px", background:"linear-gradient(90deg,#7c3aed,#c084fc)", borderRadius:"2px" }}/>
          )}
        </button>
      ))}
    </nav>
  );
}
