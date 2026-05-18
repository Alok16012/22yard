export default function TickerBanner() {
  const items = [
    "🏏 22Yard — India's #1 Betting Platform",
    "🔥 5% BONUS ON EVERY DEPOSIT",
    "⚡ INSTANT WITHDRAWAL IN 5 MINUTES",
    "🏆 OFFICIAL BETTING PARTNER — IPL 2026",
    "💰 SIGNUP & GET ₹100 FREE",
    "🎯 500+ GAMES AVAILABLE",
    "✅ 10,000+ HAPPY PLAYERS",
    "🔒 100% SAFE & SECURE",
  ];
  const text = items.join("   ·   ");

  return (
    <div style={{
      background: "linear-gradient(90deg,#7c3aed,#9d60ff,#7c3aed)",
      padding: "9px 0",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}>
      <span className="ticker-inner font-rajdhani" style={{
        fontSize: "13px",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.8px",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}>
        {text}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;{text}
      </span>
    </div>
  );
}
