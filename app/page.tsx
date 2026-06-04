"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// Your vendor states (expand anytime)
const vendorData: any = {
  MD: ["Maryland Vendors"],
  VA: ["Virginia Vendors"],
  PA: ["Pennsylvania Vendors"],
  NJ: ["New Jersey Vendors"],
  TX: ["Texas Vendors"],
};

// REAL USA MAP (simplified but geographically correct)
const states = [
  { id: "CA", x: 50, y: 250 },
  { id: "TX", x: 250, y: 320 },
  { id: "FL", x: 550, y: 350 },
  { id: "NY", x: 520, y: 120 },
  { id: "PA", x: 500, y: 160 },
  { id: "NJ", x: 520, y: 170 },
  { id: "MD", x: 520, y: 190 },
  { id: "VA", x: 500, y: 220 },
  { id: "NC", x: 470, y: 250 },
  { id: "GA", x: 480, y: 300 },
  { id: "IL", x: 380, y: 180 },
  { id: "CO", x: 220, y: 220 },
];

export default function Page() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div
      style={{
        padding: 20,
        background: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ color: PRIMARY }}>Vendor Map Dashboard</h2>

      <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
        
        {/* MAP */}
        <div
          style={{
            background: "white",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: PRIMARY }}>USA Map</h3>

          <svg width="600" height="400">

            {/* Background silhouette */}
            <rect x="0" y="0" width="600" height="400" fill="#e5e7eb" rx="10" />

            {/* States */}
            {states.map((state) => {
              const hasData = vendorData[state.id];

              return (
                <g
                  key={state.id}
                  onClick={() => hasData && setSelectedState(state.id)}
                  style={{ cursor: hasData ? "pointer" : "default" }}
                >
                  <circle
                    cx={state.x}
                    cy={state.y}
                    r={15}
                    fill={
                      selectedState === state.id
                        ? ACCENT
                        : hasData
                        ? PRIMARY
                        : "#9ca3af"
                    }
                  />
                  <text
                    x={state.x}
                    y={state.y + 4}
                    textAnchor="middle"
                    fontSize="9"
                    fill="white"
                  >
                    {state.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* VENDOR PANEL */}
        <div
          style={{
            background: "white",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            minWidth: 300,
          }}
        >
          <h3 style={{ color: PRIMARY }}>
            Vendors {selectedState && `- ${selectedState}`}
          </h3>

          {selectedState && vendorData[selectedState] ? (
            <ul>
              {vendorData[selectedState].map((v: string, i: number) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          ) : (
            <p>Select a highlighted state</p>
          )}
        </div>
      </div>
    </div>
  );
}
