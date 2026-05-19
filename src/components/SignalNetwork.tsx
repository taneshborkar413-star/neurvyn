/**
 * Hero signal network — an SVG of connected operational nodes
 * with pulsing signals traveling between layers. Pure SVG/CSS.
 */

// Pre-computed delay values to avoid hydration mismatch from Math.random()
const DELAY_VALUES = [
  1.13, 1.23, 1.82, 2.25, 1.71, 1.0, 3.69, 3.45, 2.59, 3.53, 1.02, 0.27, 1.23,
  0.59, 2.97, 1.11, 1.92, 2.7, 2.75, 3.65,
];

export function SignalNetwork() {
  // Five layered columns of nodes representing ecosystem layers
  const layers = [
    { x: 80, nodes: [120, 220, 320] },
    { x: 240, nodes: [80, 180, 280, 380] },
    { x: 400, nodes: [140, 240, 340] },
    { x: 560, nodes: [100, 200, 300, 400] },
    { x: 720, nodes: [160, 260, 360] },
  ];

  const connections: Array<[number, number, number, number, number]> = [];
  let delayIndex = 0;
  for (let i = 0; i < layers.length - 1; i++) {
    layers[i].nodes.forEach((y1) => {
      layers[i + 1].nodes.forEach((y2, j) => {
        if (j % 2 === i % 2) {
          connections.push([
            layers[i].x,
            y1,
            layers[i + 1].x,
            y2,
            DELAY_VALUES[delayIndex % DELAY_VALUES.length],
          ]);
          delayIndex++;
        }
      });
    });
  }

  return (
    <div className="relative w-full">
      <svg viewBox="0 0 800 480" className="w-full h-auto" aria-hidden>
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.63 0.22 285)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="oklch(0.72 0.16 250)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.63 0.22 285)" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="oklch(0.74 0.17 295)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="oklch(0.63 0.22 285)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.63 0.22 285)" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Connections */}
        {connections.map(([x1, y1, x2, y2, delay], i) => (
          <g key={`c-${i}`}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#line-grad)"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle r="2.5" fill="oklch(0.74 0.17 295)" filter="url(#soft-glow)">
              <animateMotion
                dur={`${5 + delay}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
                path={`M${x1},${y1} L${x2},${y2}`}
              />
            </circle>
          </g>
        ))}

        {/* Layer nodes */}
        {layers.map((layer, li) =>
          layer.nodes.map((y, ni) => (
            <g key={`n-${li}-${ni}`}>
              <circle cx={layer.x} cy={y} r="20" fill="url(#node-glow)" opacity="0.6" />
              <circle
                cx={layer.x}
                cy={y}
                r="4"
                fill="oklch(0.97 0.005 250)"
                className="animate-signal-pulse"
                style={{
                  animationDelay: `${(li + ni) * 0.3}s`,
                  transformOrigin: `${layer.x}px ${y}px`,
                }}
              />
              <circle
                cx={layer.x}
                cy={y}
                r="6"
                fill="none"
                stroke="oklch(1 0 0 / 0.15)"
                strokeWidth="0.8"
              />
            </g>
          )),
        )}

        {/* Layer labels */}
        {["Ledger", "Solutions", "OS", "Intelligence", "Autopilot"].map((label, i) => (
          <text
            key={label}
            x={layers[i].x}
            y={448}
            textAnchor="middle"
            fill="oklch(0.71 0.02 250)"
            fontSize="11"
            fontFamily="Geist, sans-serif"
            letterSpacing="0.1em"
          >
            {label.toUpperCase()}
          </text>
        ))}
      </svg>
    </div>
  );
}
