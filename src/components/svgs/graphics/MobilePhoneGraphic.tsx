export const DeviceGraphic = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes scanline {
            from { transform: translateY(0); }
            to   { transform: translateY(340px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50%       { opacity: 0.7; }
          }
          @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-8px); }
          }
 
          .dg-device    { animation: floatY 5s ease-in-out infinite; transform-origin: 340px 260px; }
          .dg-cursor    { animation: blink 1.1s step-end infinite; }
          .dg-scan      { animation: scanline 3s linear infinite; opacity: 0.04; }
 
          .dg-line1 { animation: fadeUp 0.6s ease forwards 0.2s; opacity: 0; }
          .dg-line2 { animation: fadeUp 0.6s ease forwards 0.5s; opacity: 0; }
          .dg-line3 { animation: fadeUp 0.6s ease forwards 0.8s; opacity: 0; }
          .dg-line4 { animation: fadeUp 0.6s ease forwards 1.1s; opacity: 0; }
          .dg-line5 { animation: fadeUp 0.6s ease forwards 1.4s; opacity: 0; }
          .dg-card1 { animation: fadeUp 0.7s ease forwards 1.7s; opacity: 0; }
          .dg-card2 { animation: fadeUp 0.7s ease forwards 2.0s; opacity: 0; }
          .dg-ext1  { animation: fadeUp 0.8s ease forwards 2.4s; opacity: 0; }
          .dg-ext2  { animation: fadeUp 0.8s ease forwards 2.7s; opacity: 0; }
 
          .dg-pulse1 { animation: pulse 2s ease-in-out infinite; }
          .dg-pulse2 { animation: pulse 2s ease-in-out infinite 0.4s; }
          .dg-pulse3 { animation: pulse 2s ease-in-out infinite 0.8s; }
        `}</style>
      </defs>

      {/* Shadow under device */}
      <ellipse
        cx="340"
        cy="488"
        rx="90"
        ry="10"
        fill="currentColor"
        opacity="0.06"
      />

      {/* ── DEVICE GROUP (floats) ── */}
      <g className="dg-device">
        {/* Phone outer body */}
        <rect
          x="215"
          y="48"
          width="250"
          height="440"
          rx="36"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />

        {/* Screen bezel */}
        <rect
          x="228"
          y="72"
          width="224"
          height="392"
          rx="24"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.2"
        />

        {/* Scanline sweep */}
        <rect
          className="dg-scan"
          x="228"
          y="72"
          width="224"
          height="6"
          fill="currentColor"
        />

        {/* Dynamic island */}
        <rect
          x="296"
          y="60"
          width="88"
          height="20"
          rx="10"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle
          cx="370"
          cy="70"
          r="4"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.4"
        />
        <circle
          className="dg-pulse1"
          cx="315"
          cy="70"
          r="2.5"
          fill="currentColor"
          opacity="0.5"
        />

        {/* Side buttons */}
        <rect
          x="212"
          y="148"
          width="5"
          height="44"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <rect
          x="212"
          y="204"
          width="5"
          height="28"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <rect
          x="463"
          y="168"
          width="5"
          height="56"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />

        {/* Status bar */}
        <text
          x="242"
          y="98"
          fontFamily="monospace"
          fontSize="9"
          fill="currentColor"
          opacity="0.3"
        >
          9:41
        </text>
        <rect
          x="394"
          y="91"
          width="14"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <rect
          x="395"
          y="92"
          width="10"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="412"
          y="92"
          width="8"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <rect
          x="424"
          y="92"
          width="10"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />

        {/* Avatar + name skeleton */}
        <g className="dg-line1">
          <circle
            cx="258"
            cy="134"
            r="16"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.25"
          />
          <rect
            x="284"
            y="126"
            width="80"
            height="8"
            rx="4"
            fill="currentColor"
            opacity="0.18"
          />
          <rect
            x="284"
            y="140"
            width="52"
            height="6"
            rx="3"
            fill="currentColor"
            opacity="0.1"
          />
        </g>

        {/* Divider */}
        <line
          className="dg-line2"
          x1="238"
          y1="162"
          x2="442"
          y2="162"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.15"
        />

        {/* Content lines */}
        <g className="dg-line3">
          <rect
            x="238"
            y="174"
            width="130"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.18"
          />
          <rect
            x="238"
            y="187"
            width="160"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="238"
            y="200"
            width="100"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.08"
          />
        </g>

        {/* Mini chart block */}
        <g className="dg-line4">
          <rect
            x="238"
            y="222"
            width="192"
            height="64"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <rect
            x="252"
            y="258"
            width="14"
            height="18"
            rx="3"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="272"
            y="248"
            width="14"
            height="28"
            rx="3"
            fill="currentColor"
            opacity="0.18"
          />
          <rect
            x="292"
            y="242"
            width="14"
            height="34"
            rx="3"
            fill="currentColor"
            opacity="0.22"
          />
          <rect
            x="312"
            y="250"
            width="14"
            height="26"
            rx="3"
            fill="currentColor"
            opacity="0.16"
          />
          <rect
            x="332"
            y="255"
            width="14"
            height="21"
            rx="3"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="360"
            y="240"
            width="52"
            height="6"
            rx="3"
            fill="currentColor"
            opacity="0.14"
          />
          <rect
            x="360"
            y="252"
            width="38"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.09"
          />
        </g>

        {/* Two mini cards */}
        <g className="dg-card1">
          <rect
            x="238"
            y="302"
            width="90"
            height="56"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <circle
            cx="260"
            cy="320"
            r="8"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <rect
            x="252"
            y="334"
            width="56"
            height="6"
            rx="3"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="258"
            y="346"
            width="44"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.08"
          />
        </g>
        <g className="dg-card2">
          <rect
            x="340"
            y="302"
            width="90"
            height="56"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <rect
            x="354"
            y="316"
            width="62"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.14"
          />
          <rect
            x="354"
            y="329"
            width="44"
            height="6"
            rx="3"
            fill="currentColor"
            opacity="0.09"
          />
          <rect
            x="354"
            y="342"
            width="28"
            height="10"
            rx="5"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <circle cx="374" cy="347" r="4" fill="currentColor" opacity="0.18" />
        </g>

        {/* Cursor line */}
        <g className="dg-line5">
          <rect
            x="238"
            y="374"
            width="88"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.14"
          />
          <rect
            className="dg-cursor"
            x="330"
            y="374"
            width="2"
            height="9"
            rx="1"
            fill="currentColor"
            opacity="0.5"
          />
        </g>

        {/* Bottom nav */}
        <line
          x1="228"
          y1="430"
          x2="452"
          y2="430"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.12"
        />
        <circle
          cx="280"
          cy="450"
          r="3.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <circle cx="315" cy="450" r="3.5" fill="currentColor" opacity="0.35" />
        <circle
          cx="350"
          cy="450"
          r="3.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />
        <circle
          cx="385"
          cy="450"
          r="3.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />

        {/* Home indicator */}
        <rect
          x="301"
          y="470"
          width="78"
          height="4"
          rx="2"
          fill="currentColor"
          opacity="0.2"
        />
      </g>

      {/* ── SATELLITE CARD — top left ── */}
      <g className="dg-ext1">
        <rect
          x="60"
          y="110"
          width="118"
          height="60"
          rx="12"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.18"
        />
        <rect
          x="76"
          y="126"
          width="50"
          height="7"
          rx="3.5"
          fill="currentColor"
          opacity="0.15"
        />
        <rect
          x="76"
          y="139"
          width="72"
          height="6"
          rx="3"
          fill="currentColor"
          opacity="0.09"
        />
        <rect
          x="76"
          y="151"
          width="40"
          height="5"
          rx="2.5"
          fill="currentColor"
          opacity="0.07"
        />
        <circle
          className="dg-pulse2"
          cx="158"
          cy="120"
          r="3"
          fill="currentColor"
          opacity="0.3"
        />
      </g>

      {/* ── SATELLITE CARD — bottom right ── */}
      <g className="dg-ext2">
        <rect
          x="502"
          y="330"
          width="118"
          height="56"
          rx="12"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.18"
        />
        <rect
          x="516"
          y="362"
          width="8"
          height="14"
          rx="2"
          fill="currentColor"
          opacity="0.12"
        />
        <rect
          x="528"
          y="354"
          width="8"
          height="22"
          rx="2"
          fill="currentColor"
          opacity="0.18"
        />
        <rect
          x="540"
          y="358"
          width="8"
          height="18"
          rx="2"
          fill="currentColor"
          opacity="0.14"
        />
        <rect
          x="552"
          y="349"
          width="8"
          height="27"
          rx="2"
          fill="currentColor"
          opacity="0.22"
        />
        <rect
          x="574"
          y="344"
          width="30"
          height="6"
          rx="3"
          fill="currentColor"
          opacity="0.14"
        />
        <rect
          x="574"
          y="356"
          width="22"
          height="5"
          rx="2.5"
          fill="currentColor"
          opacity="0.09"
        />
        <circle
          className="dg-pulse3"
          cx="610"
          cy="338"
          r="3"
          fill="currentColor"
          opacity="0.3"
        />
      </g>

      {/* Connecting dashed lines */}
      <line
        x1="178"
        y1="142"
        x2="215"
        y2="180"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        opacity="0.12"
      />
      <line
        x1="502"
        y1="358"
        x2="465"
        y2="320"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        opacity="0.12"
      />
    </svg>
  );
};
