const sites = [
  { name: "Cbuzz777.com",       icon: "🎯", color: "rgba(255,100,100,0.8)"  },
  { name: "Exchbet365.com",     icon: "⚽", color: "rgba(96,165,250,0.8)"   },
  { name: "Nice777.net",        icon: "🎰", color: "rgba(245,167,0,0.8)"    },
  { name: "Allpanelexch9.com",  icon: "🏏", color: "rgba(192,132,252,0.8)" },
  { name: "Jetwin.com",         icon: "✈️", color: "rgba(74,222,128,0.8)"  },
];

export default function AppAvailableSites() {
  return (
    <div style={{ padding: "4px 16px 16px" }}>

      {/* Section heading */}
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        marginBottom: "10px",
      }}>
        <div style={{
          width: "4px", height: "20px",
          background: "linear-gradient(180deg,#FFD700,#F5A800)",
          borderRadius: "4px",
        }}/>
        <span className="font-bebas" style={{
          fontSize: "17px", color: "#FFD700", letterSpacing: "2px",
        }}>AVAILABLE SITES</span>
        <span style={{
          marginLeft: "auto",
          background: "rgba(74,222,128,0.15)",
          border: "1px solid rgba(74,222,128,0.4)",
          borderRadius: "20px",
          padding: "2px 10px",
          display: "flex", alignItems: "center", gap: "5px",
        }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#4ade80", display: "inline-block",
            animation: "pulse-green 1.5s infinite",
          }}/>
          <span className="font-rajdhani" style={{
            fontSize: "10px", fontWeight: 700, color: "#4ade80", letterSpacing: "1px",
          }}>LIVE</span>
        </span>
      </div>

      {/* Sites list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {sites.map((site, i) => (
          <a
            key={i}
            href={`https://${site.name}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(255,255,255,0.08)`,
              borderLeft: `3px solid ${site.color}`,
              borderRadius: "12px",
              padding: "12px 14px",
              textDecoration: "none",
            }}
          >
            {/* Icon circle */}
            <div style={{
              width: "36px", height: "36px",
              borderRadius: "10px",
              background: `rgba(255,255,255,0.06)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", flexShrink: 0,
            }}>
              {site.icon}
            </div>

            {/* Name */}
            <span className="font-rajdhani" style={{
              fontSize: "14px", fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.5px",
              flex: 1,
            }}>
              {site.name}
            </span>

            {/* Available badge */}
            <span style={{
              background: "rgba(74,222,128,0.12)",
              border: "1px solid rgba(74,222,128,0.35)",
              borderRadius: "6px",
              padding: "3px 8px",
            }}>
              <span className="font-rajdhani" style={{
                fontSize: "10px", fontWeight: 700,
                color: "#4ade80", letterSpacing: "0.5px",
              }}>✓ AVAILABLE</span>
            </span>
          </a>
        ))}
      </div>

    </div>
  );
}
