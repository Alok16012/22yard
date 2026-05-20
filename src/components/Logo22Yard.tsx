// SVG Logo matching the 22Yard brand — purple & gold cricket design
export default function Logo22Yard({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#F5A800"/>
        </linearGradient>
        <linearGradient id="purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#4c1d95"/>
        </linearGradient>
      </defs>

      {/* Outer gold circle ring */}
      <circle cx="60" cy="60" r="55" fill="url(#gold)" />
      <circle cx="60" cy="60" r="50" fill="url(#purple)" />

      {/* Cricket bat shape (diagonal) */}
      <rect
        x="52" y="10" width="10" height="55"
        rx="5"
        fill="url(#gold)"
        transform="rotate(-20 60 60)"
      />
      {/* bat handle */}
      <rect
        x="55" y="8" width="5" height="20"
        rx="2"
        fill="#4c1d95"
        transform="rotate(-20 60 60)"
      />

      {/* Arrow / swoosh */}
      <path
        d="M30 35 Q60 15 90 30"
        stroke="url(#gold)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <polygon
        points="88,22 95,35 80,32"
        fill="url(#gold)"
      />

      {/* "22" text */}
      <text
        x="60" y="80"
        textAnchor="middle"
        fontFamily="Impact, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="32"
        fill="url(#gold)"
        stroke="#4c1d95"
        strokeWidth="1.5"
      >22</text>

      {/* "YARD" text */}
      <text
        x="60" y="100"
        textAnchor="middle"
        fontFamily="Impact, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="16"
        fill="url(#gold)"
        stroke="#4c1d95"
        strokeWidth="1"
        letterSpacing="3"
      >YARD</text>
    </svg>
  );
}
