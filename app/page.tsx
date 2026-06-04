"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

const vendorData = {
  MD: ["Chesapeake Contracting Group","Glen Arm Construction"],
  VA: ["Bognet Construction","Benchmark Building Solutions"],
  PA: ["Adams Bickel"],
  NJ: ["A. Hinman Construction"],
  TX: ["Synergy","SYCON"]
};

const statePositions = {
  MD: { x: 520, y: 180 },
  VA: { x: 500, y: 200 },
  PA: { x: 480, y: 150 },
  NJ: { x: 500, y: 140 },
  TX: { x: 250, y: 300 }
};

export default function Page() {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: PRIMARY }}>Vendor Map</h2>

      <svg width="600" height="400">
        {Object.keys(statePositions).map((state) => (
          <g key={state} onClick={() => setSelectedState(state)}>
            <circle
              cx={statePositions[state].x}
              cy={statePositions[state].y}
              r={18}
              fill={selectedState === state ? ACCENT : PRIMARY}
              style={{ cursor: "pointer" }}
            />
            <text
              x={statePositions[state].x}
              y={statePositions[state].y + 5}
              textAnchor="middle"
              fill="white"
              fontSize="10"
            >
              {state}
            </text>
          </g>
        ))}
      </svg>

      <div style={{ marginTop: 20 }}>
        <h3 style={{ color: PRIMARY }}>
          Vendors {selectedState && `- ${selectedState}`}
        </h3>

        {selectedState ? (
          <ul>
            {vendorData[selectedState].map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        ) : (
          <p>Select a state</p>
        )}
      </div>
    </div>
  );
}
