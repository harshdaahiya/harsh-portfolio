export const BrowserDeveloperGraphic = () => {
  return (
    <svg
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="'JetBrains Mono','SFMono-Regular',Menlo,monospace"
    >
      <defs>
        <style>{`
          .stroke   { fill:none; stroke:#181a1b; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; }
          .strokeMd { fill:none; stroke:#181a1b; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
          .cardBg   { fill:#ffffff; stroke:#181a1b; stroke-width:2.4; }
          .bar      { fill:#dfe2e7; }
          .barDark  { fill:#181a1b; }
          .accent   { fill:#00c37e; }
          .term     { fill:#15171a; }
        `}</style>
      </defs>

      {/* back card: peeking code snippet, gives depth, no text needed to work */}
      <g transform="translate(96,58) rotate(-6)">
        <rect className="cardBg" x="0" y="0" width="230" height="150" rx="16" />
        <line className="strokeMd" x1="0" y1="34" x2="230" y2="34" />
        <circle cx="22" cy="17" r="5" fill="#ff5f57" />
        <circle cx="40" cy="17" r="5" fill="#febc2e" />
        <circle cx="58" cy="17" r="5" fill="#28c840" />

        <rect
          className="barDark"
          x="24"
          y="56"
          width="90"
          height="9"
          rx="4.5"
        />
        <rect className="bar" x="24" y="76" width="150" height="9" rx="4.5" />
        <rect className="accent" x="24" y="96" width="16" height="9" rx="4.5" />
        <rect
          className="barDark"
          x="46"
          y="96"
          width="80"
          height="9"
          rx="4.5"
        />
        <rect className="bar" x="24" y="116" width="120" height="9" rx="4.5" />
      </g>

      {/* main card: browser + terminal, the whole story in one place */}
      <g transform="translate(210,150) rotate(2)">
        <rect className="cardBg" x="0" y="0" width="360" height="270" rx="20" />

        {/* chrome bar */}
        <line className="strokeMd" x1="0" y1="42" x2="360" y2="42" />
        <circle cx="26" cy="21" r="6" fill="#ff5f57" />
        <circle cx="46" cy="21" r="6" fill="#febc2e" />
        <circle cx="66" cy="21" r="6" fill="#28c840" />
        <rect
          className="stroke"
          x="96"
          y="10"
          width="220"
          height="22"
          rx="11"
        />
        <text x="112" y="25.5" fill="#181a1b" fontSize="12">
          harshdaahiya.com
        </text>

        {/* headline mock */}
        <rect
          className="barDark"
          x="28"
          y="62"
          width="170"
          height="14"
          rx="7"
        />
        <rect className="bar" x="28" y="84" width="230" height="9" rx="4.5" />
        <rect
          className="stroke"
          x="28"
          y="106"
          width="86"
          height="26"
          rx="13"
        />

        {/* terminal */}
        <rect className="term" x="28" y="150" width="304" height="98" rx="12" />
        <circle cx="46" cy="167" r="4" fill="#4a4d52" />
        <circle cx="60" cy="167" r="4" fill="#4a4d52" />
        <circle cx="74" cy="167" r="4" fill="#4a4d52" />
        <text x="42" y="196" fill="#e6e8eb" fontSize="13">
          $ deploy
        </text>
        <text x="42" y="216" fill="#00d18f" fontSize="13">
          ✓ live in production
        </text>
        <rect x="42" y="228" width="270" height="7" rx="3.5" fill="#2c2f33" />
        <rect x="42" y="228" width="238" height="7" rx="3.5" fill="#00c37e" />
      </g>

      {/* single supporting accent: a status pulse, ties the eye off the main card */}
      <g transform="translate(560,168)">
        <circle cx="0" cy="0" r="16" fill="#ffffff" className="stroke" />
        <path className="stroke" d="M-6 0 L-2 5 L7 -6" fill="none" />
      </g>
    </svg>
  );
};
