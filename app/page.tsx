"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// Vendor Data (sample — expand later)
const vendorData: any = {
  MD: ["Chesapeake Contracting Group","Glen Arm Construction"],
  VA: ["Bognet Construction","Benchmark Building Solutions"],
  PA: ["Adams Bickel"],
  NJ: ["A. Hinman Construction"],
  TX: ["Synergy","SYCON"]
};

// Simplified real US map using SVG paths (focus on your active states)
const states = [
  {
    id: "TX",
    path: "M100 300 L200 300 L220 350 L180 380 L120 370 Z"
  },
  {
    id: "PA",
    path: "M400 150 L460 150 L460 180 L400 180 Z"
  },
  {
    id: "NJ",
    path: "M470 140 L490 140 L495 175 L475 180 Z"
  },
  {
    id: "MD",
    path: "M460 190 L500 190 L500 210 L460 210 Z"
  },
  {
    id: "VA",
    path: "M440 210 L520 210 L500 240 L420 240 Z"
  }
];

export default function Page() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div
      style={{
        padding: 20,
        background: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ color: PRIMARY, marginBottom: 20 }}>
        Vendor Map Dashboard
      </h2>

      <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
        
        {/* MAP */}
        <div
          style={{
            background: "white",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ color: PRIMARY }}>USA Map</h3>

          <svg width="600" height="400" viewBox="0 0 600 400">
            {states.map((state) => {
              const hasData = vendorData[state.id];

              return (
                <path
                  key={state.id}
                  d={state.path}
                  fill={
                    selectedState === state.id
                      ? ACCENT
                      : hasData
                      ? PRIMARY
                      : "#d1d5db"
                  }
                  stroke="white"
                  strokeWidth="2"
                  onClick={() => hasData && setSelectedState(state.id)}
                  style={{
                    cursor: hasData ? "pointer" : "not-allowed",
                    transition: "0.2s"
                  }}
                />
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
            minWidth: 300
          }}
        >
          <h3 style={{ color: PRIMARY }}>
            Vendors {selectedState && `- ${selectedState}`}
          </h3>

          {selectedState ? (
            <ul>
              {vendorData[selectedState].map((v: string, i: number) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          ) : (
            <p>Select a state</p>
          )}
        </div>
      </div>
    </div>
  );
}
