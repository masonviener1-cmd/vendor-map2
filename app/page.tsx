"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// Organized vendor data
const vendorData: any = {
  MD: {
    Construction: [
      "Chesapeake Contracting Group",
      "Glen Arm Construction",
      "HBW Construction",
      "Kalmia Construction",
      "Kas Con Inc",
      "MCN Build",
      "RC Legnini",
      "Warfel Construction",
      "Therrien Waddell",
    ],
    Signage: ["AA Signs"],
    Playground: ["Playground Specialists", "Forever Lawn"],
  },
  VA: {
    Construction: [
      "Bognet Construction",
      "Benchmark Building Solutions",
      "Dario Construction",
      "ML Bell",
      "Plano Coudon",
      "Teel",
      "Trinity Group Construction",
    ],
    Playground: ["Playground Specialists", "Forever Lawn"],
  },
  TX: {
    Construction: ["Synergy", "SYCON", "20-Twenty Construction"],
  },
  PA: {
    Construction: ["Adams Bickel", "Total Construction INC"],
  },
  NJ: {
    Construction: ["A. Hinman Construction", "Old Forge Builders"],
  },
};

// Better map layout
const statePositions: any = {
  MD: { x: 520, y: 200 },
  VA: { x: 500, y: 230 },
  PA: { x: 480, y: 170 },
  NJ: { x: 510, y: 150 },
  TX: { x: 250, y: 300 },
};

export default function Page() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const renderVendors = () => {
    if (!selectedState) return <p>Select a state</p>;

    const state = vendorData[selectedState];
    if (!state) return <p>No vendors listed</p>;

    return Object.keys(state).map((category) => (
      <div key={category} style={{ marginBottom: "15px" }}>
        <h4 style={{ color: ACCENT }}>{category}</h4>
        <ul>
          {state[category].map((v: string, i: number) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: PRIMARY }}>Vendor Map Dashboard</h2>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        
        {/* Map */}
        <div
          style={{
            background: "white",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: PRIMARY }}>Map</h3>

          <svg width="600" height="400">
            {Object.keys(statePositions).map((state) => {
              const hasData = vendorData[state];

              return (
                <g
                  key={state}
                  onClick={() => hasData && setSelectedState(state)}
                  style={{ cursor: hasData ? "pointer" : "not-allowed" }}
                >
                  <circle
                    cx={statePositions[state].x}
                    cy={statePositions[state].y}
                    r={18}
                    fill={
                      selectedState === state
                        ? ACCENT
                        : hasData
                        ? PRIMARY
                        : "#cbd5f5"
                    }
                  />
                  <text
                    x={statePositions[state].x}
                    y={statePositions[state].y + 5}
                    textAnchor="middle"
                    fontSize="10"
                    fill="white"
                  >
                    {state}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Vendor Panel */}
        <div
          style={{
            background: "white",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            minWidth: "300px",
          }}
        >
          <h3 style={{ color: PRIMARY }}>
            Vendors {selectedState && `- ${selectedState}`}
          </h3>

          {renderVendors()}
        </div>
      </div>
    </div>
  );
}
