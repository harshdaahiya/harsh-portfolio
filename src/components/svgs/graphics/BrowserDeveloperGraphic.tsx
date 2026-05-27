export const BrowserDeveloperGraphic = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes fsg-floatY {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-3px); }
          }
          @keyframes fsg-fadeUp {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fsg-blink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0; }
          }
          @keyframes fsg-dash {
            to { stroke-dashoffset: -24; }
          }
          @keyframes fsg-pulse {
            0%, 100% { opacity: 0.25; }
            50%       { opacity: 0.65; }
          }
          @keyframes fsg-ping {
            0%   { r: 3;  opacity: 0.7; }
            100% { r: 9;  opacity: 0;   }
          }

          .fsg-float  { animation: fsg-floatY 5s ease-in-out infinite; transform-origin: 340px 240px; }
          .fsg-cursor { animation: fsg-blink   1.1s step-end infinite; }
          .fsg-cursor2{ animation: fsg-blink   1.1s step-end infinite .3s; }

          .fsg-api    { stroke-dasharray: 8 5; animation: fsg-dash 1.2s linear infinite; }
          .fsg-api-r  { stroke-dasharray: 8 5; animation: fsg-dash 1.2s linear infinite reverse; }

          .fsg-dot    { animation: fsg-pulse 2s ease-in-out infinite; }
          .fsg-dot2   { animation: fsg-pulse 2s ease-in-out infinite .5s; }
          .fsg-ping   { animation: fsg-ping  1.8s ease-out  infinite; }

          .fsg-f1 { animation: fsg-fadeUp .5s ease forwards .1s;  opacity: 0; }
          .fsg-f2 { animation: fsg-fadeUp .5s ease forwards .4s;  opacity: 0; }
          .fsg-f3 { animation: fsg-fadeUp .5s ease forwards .7s;  opacity: 0; }
          .fsg-f4 { animation: fsg-fadeUp .5s ease forwards 1s;   opacity: 0; }
          .fsg-f5 { animation: fsg-fadeUp .5s ease forwards 1.3s; opacity: 0; }
          .fsg-f6 { animation: fsg-fadeUp .6s ease forwards 1.6s; opacity: 0; }
          .fsg-f7 { animation: fsg-fadeUp .6s ease forwards 1.9s; opacity: 0; }
          .fsg-f8 { animation: fsg-fadeUp .6s ease forwards 2.2s; opacity: 0; }
        `}</style>
      </defs>

      {/* ── BROWSER WINDOW (floats) ── */}
      <g className="fsg-float">
        {/* Window frame */}
        <rect
          x="60"
          y="40"
          width="400"
          height="400"
          rx="16"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.3"
        />

        {/* Title bar */}
        <rect
          x="60"
          y="40"
          width="400"
          height="40"
          rx="16"
          fill="currentColor"
          opacity="0.06"
        />
        <rect
          x="60"
          y="64"
          width="400"
          height="16"
          fill="currentColor"
          opacity="0.06"
        />

        {/* Traffic lights */}
        <circle
          cx="86"
          cy="60"
          r="5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <circle
          cx="103"
          cy="60"
          r="5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <circle
          cx="120"
          cy="60"
          r="5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <circle cx="86" cy="60" r="2.5" fill="currentColor" opacity="0.25" />

        {/* URL bar */}
        <rect
          x="146"
          y="51"
          width="220"
          height="18"
          rx="9"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.2"
        />
        <text
          x="158"
          y="63"
          fontFamily="monospace"
          fontSize="8"
          fill="currentColor"
          opacity="0.55"
        >
          https://harshdahiya.dev
        </text>
        <circle
          cx="155"
          cy="60"
          r="2.5"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.2"
        />

        {/* Refresh icon */}
        <path
          d="M382 55 A8 8 0 1 1 374 63"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          fill="none"
        />
        <polygon
          points="382,55 378,50 386,50"
          fill="currentColor"
          opacity="0.2"
        />

        {/* ── NAVBAR ── */}
        <g className="fsg-f1">
          <line
            x1="76"
            y1="98"
            x2="444"
            y2="98"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.15"
          />
          <rect
            x="80"
            y="104"
            width="36"
            height="10"
            rx="5"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="290"
            y="106"
            width="28"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="326"
            y="106"
            width="28"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="362"
            y="106"
            width="28"
            height="7"
            rx="3.5"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="404"
            y="103"
            width="34"
            height="13"
            rx="6.5"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.3"
          />
        </g>

        {/* ── HERO TEXT BLOCK ── */}
        <g className="fsg-f2">
          <rect
            x="80"
            y="128"
            width="140"
            height="12"
            rx="6"
            fill="currentColor"
            opacity="0.22"
          />
          <rect
            x="80"
            y="146"
            width="190"
            height="10"
            rx="5"
            fill="currentColor"
            opacity="0.16"
          />
          <rect
            x="80"
            y="162"
            width="110"
            height="10"
            rx="5"
            fill="currentColor"
            opacity="0.1"
          />
          <rect
            x="80"
            y="180"
            width="70"
            height="20"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.3"
          />
          <rect
            x="84"
            y="184"
            width="42"
            height="12"
            rx="6"
            fill="currentColor"
            opacity="0.12"
          />
          <rect
            x="160"
            y="180"
            width="60"
            height="20"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.18"
          />
        </g>

        {/* ── COMPONENT CARDS ROW ── */}
        <g className="fsg-f3">
          {[80, 185, 290].map((x, i) => (
            <g key={i}>
              <rect
                x={x}
                y="215"
                width="95"
                height="80"
                rx="10"
                stroke="currentColor"
                strokeWidth="0.75"
                opacity="0.22"
              />
              <rect
                x={x + 8}
                y="222"
                width="79"
                height="38"
                rx="6"
                fill="currentColor"
                opacity="0.07"
              />
              <line
                x1={x + 8}
                y1="248"
                x2={x + 87}
                y2="248"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.1"
              />
              <rect
                x={x + 8}
                y="266"
                width="55"
                height="6"
                rx="3"
                fill="currentColor"
                opacity="0.14"
              />
              <rect
                x={x + 8}
                y="278"
                width="38"
                height="5"
                rx="2.5"
                fill="currentColor"
                opacity="0.08"
              />
            </g>
          ))}
        </g>

        {/* ── CODE EDITOR ── */}
        <g className="fsg-f4">
          <rect
            x="80"
            y="310"
            width="170"
            height="110"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <rect
            x="80"
            y="310"
            width="170"
            height="18"
            rx="10"
            fill="currentColor"
            opacity="0.06"
          />
          <rect
            x="80"
            y="320"
            width="170"
            height="8"
            fill="currentColor"
            opacity="0.06"
          />
          <rect
            x="88"
            y="313"
            width="44"
            height="10"
            rx="5"
            fill="currentColor"
            opacity="0.14"
          />

          {/* Line numbers */}
          {[337, 348, 359, 370, 381].map((y, i) => (
            <rect
              key={i}
              x="88"
              y={y}
              width="8"
              height="5"
              rx="2"
              fill="currentColor"
              opacity="0.1"
            />
          ))}

          {/* Code lines */}
          <rect
            x="102"
            y="337"
            width="60"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.2"
          />
          <rect
            x="102"
            y="348"
            width="100"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.15"
          />
          <rect
            x="106"
            y="359"
            width="80"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.18"
          />
          <rect
            x="106"
            y="370"
            width="50"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.13"
          />
          <rect
            x="102"
            y="381"
            width="30"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.2"
          />

          {/* Syntax color accent blocks */}
          <rect
            x="102"
            y="337"
            width="18"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.35"
          />
          <rect
            x="102"
            y="348"
            width="22"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.32"
          />
          <rect
            x="106"
            y="359"
            width="14"
            height="5"
            rx="2.5"
            fill="currentColor"
            opacity="0.38"
          />

          {/* Cursor */}
          <rect
            className="fsg-cursor"
            x="134"
            y="381"
            width="1.5"
            height="7"
            rx="1"
            fill="currentColor"
            opacity="0.5"
          />
        </g>

        {/* ── TERMINAL ── */}
        <g className="fsg-f5">
          <rect
            x="264"
            y="310"
            width="170"
            height="110"
            rx="10"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.2"
          />
          <rect
            x="264"
            y="310"
            width="170"
            height="18"
            rx="10"
            fill="currentColor"
            opacity="0.06"
          />
          <rect
            x="264"
            y="320"
            width="170"
            height="8"
            fill="currentColor"
            opacity="0.06"
          />
          <circle
            cx="277"
            cy="318"
            r="3"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.25"
          />
          <circle
            cx="288"
            cy="318"
            r="3"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.25"
          />
          <circle
            cx="299"
            cy="318"
            r="3"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.25"
          />
          <text
            x="274"
            y="342"
            fontFamily="monospace"
            fontSize="7"
            fill="currentColor"
            opacity="0.65"
          >
            $ npm run dev
          </text>
          <text
            x="274"
            y="355"
            fontFamily="monospace"
            fontSize="7"
            fill="currentColor"
            opacity="0.45"
          >
            ▶ ready on localhost:3000
          </text>
          <text
            x="274"
            y="368"
            fontFamily="monospace"
            fontSize="7"
            fill="currentColor"
            opacity="0.4"
          >
            ✓ compiled in 842ms
          </text>
          <text
            x="274"
            y="381"
            fontFamily="monospace"
            fontSize="7"
            fill="currentColor"
            opacity="0.35"
          >
            ○ / (static)
          </text>
          <text
            x="274"
            y="394"
            fontFamily="monospace"
            fontSize="7"
            fill="currentColor"
            opacity="0.65"
          >
            $
          </text>
          <rect
            className="fsg-cursor2"
            x="281"
            y="388"
            width="5"
            height="7"
            rx="1"
            fill="currentColor"
            opacity="0.3"
          />
        </g>

        {/* Bottom browser bar */}
        <line
          x1="76"
          y1="432"
          x2="444"
          y2="432"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <rect
          x="80"
          y="438"
          width="80"
          height="5"
          rx="2.5"
          fill="currentColor"
          opacity="0.08"
        />
      </g>

      {/* ── API ARROWS ── */}
      <g className="fsg-f6">
        <line
          className="fsg-api"
          x1="468"
          y1="200"
          x2="530"
          y2="200"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        <polygon
          points="528,195 536,200 528,205"
          fill="currentColor"
          opacity="0.3"
        />
        <text
          x="489"
          y="193"
          fontFamily="monospace"
          fontSize="8"
          fill="currentColor"
          opacity="0.6"
        >
          REST / GQL
        </text>

        <line
          className="fsg-api-r"
          x1="530"
          y1="214"
          x2="468"
          y2="214"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        <polygon
          points="470,209 462,214 470,219"
          fill="currentColor"
          opacity="0.3"
        />
        <text
          x="474"
          y="228"
          fontFamily="monospace"
          fontSize="8"
          fill="currentColor"
          opacity="0.5"
        >
          JSON
        </text>
      </g>

      {/* ── SERVER / BACKEND BLOCK ── */}
      <g className="fsg-f7">
        <rect
          x="538"
          y="130"
          width="106"
          height="200"
          rx="14"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.25"
        />
        <rect
          x="538"
          y="130"
          width="106"
          height="22"
          rx="14"
          fill="currentColor"
          opacity="0.07"
        />
        <rect
          x="538"
          y="144"
          width="106"
          height="8"
          fill="currentColor"
          opacity="0.07"
        />
        <text
          x="591"
          y="144"
          fontFamily="monospace"
          fontSize="7"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.6"
        >
          server.js
        </text>

        {/* Route rows */}
        {[
          { y: 164, label: 'GET  /api/user' },
          { y: 184, label: 'POST /api/data' },
          { y: 204, label: 'PUT  /api/update' },
        ].map(({ y, label }) => (
          <g key={y}>
            <rect
              x="550"
              y={y}
              width="82"
              height="14"
              rx="7"
              stroke="currentColor"
              strokeWidth="0.6"
              opacity="0.18"
            />
            <text
              x="558"
              y={y + 10}
              fontFamily="monospace"
              fontSize="6.5"
              fill="currentColor"
              opacity="0.55"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Divider */}
        <line
          x1="550"
          y1="226"
          x2="632"
          y2="226"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.12"
        />

        {/* DB cylinder */}
        <ellipse
          cx="591"
          cy="244"
          rx="22"
          ry="7"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.22"
        />
        <line
          x1="569"
          y1="244"
          x2="569"
          y2="272"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.22"
        />
        <line
          x1="613"
          y1="244"
          x2="613"
          y2="272"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.22"
        />
        <ellipse
          cx="591"
          cy="272"
          rx="22"
          ry="7"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.22"
        />
        <ellipse
          cx="591"
          cy="258"
          rx="22"
          ry="7"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <text
          x="591"
          y="262"
          fontFamily="monospace"
          fontSize="6.5"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.55"
        >
          DB
        </text>

        {/* Status dot + ping */}
        <circle
          className="fsg-dot"
          cx="630"
          cy="138"
          r="3.5"
          fill="currentColor"
          opacity="0.4"
        />
        <circle
          className="fsg-ping"
          cx="630"
          cy="138"
          r="3"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0"
          fill="none"
        />
      </g>

      {/* ── TECH STACK CHIPS ── */}
      <g className="fsg-f8">
        {[
          { x: 60, label: 'React', w: 52 },
          { x: 120, label: 'Next.js', w: 58 },
          { x: 186, label: 'Node', w: 52 },
          { x: 246, label: 'TypeScript', w: 76 },
          { x: 330, label: 'PostgreSQL', w: 80 },
        ].map(({ x, label, w }) => (
          <g key={label}>
            <rect
              x={x}
              y="12"
              width={w}
              height="22"
              rx="11"
              fill="currentColor"
              opacity="0.08"
            />
            <rect
              x={x}
              y="12"
              width={w}
              height="22"
              rx="11"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            <text
              x={x + w / 2}
              y="27"
              fontFamily="monospace"
              fontSize="8.5"
              fontWeight="600"
              textAnchor="middle"
              fill="currentColor"
              opacity="0.85"
            >
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};
