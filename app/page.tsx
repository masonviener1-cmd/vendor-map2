"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

const statePositions: any = {
  CA: { x: 85, y: 230 },
  TX: { x: 300, y: 315 },
  FL: { x: 560, y: 350 },
  NY: { x: 520, y: 130 },
  PA: { x: 500, y: 170 },
  NJ: { x: 530, y: 180 },
  MD: { x: 520, y: 200 },
  VA: { x: 500, y: 235 },
};

const vendorData: any = {
  TX: ["Texas Vendor 1", "Texas Vendor 2"],
  MD: ["Maryland Vendor"],
  VA: ["Virginia Vendor"],
  PA: ["Pennsylvania Vendor"],
  NJ: ["New Jersey Vendor"],
  CA: ["California Vendor"],
  FL: ["Florida Vendor"],
  NY: ["New York Vendor"],
};

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2 style={{ color: PRIMARY }}>Vendor Map Dashboard</h2>

      <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
        
        {/* MAP */}
        <div
          style={{
            position: "relative",
            width: 700,
            background: "white",
            padding: 10,
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        
div
  style={{
    position: "relative",
    width: 700,
    background: "white",
    padding: 10,
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  }}
>
  {/* ✅ MAP IMAGE */}
  <img
    src="/us-map.png"
    style={{ width: "100%", display: "block" }}
    alt="US Map"
  />

  {/* ✅ DOT OVERLAY */}
  <svg
    viewBox="0 0 700 420"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
}}
  >

            {Object.keys(statePositions).map((state) => {
              const pos = statePositions[state];
              const hasData = vendorData[state];

              return (
                <circle
                  key={state}
                  cx={pos.x}
                  cy={pos.y}
                  r={9}
                  stroke="white"
                  strokeWidth={2}
                  onClick={() => hasData && setSelected(state)}
                  fill={
                    selected === state
                      ? ACCENT
                      : hasData
                      ? PRIMARY
                      : "#9ca3af"
                  }
                  style={{ cursor: hasData ? "pointer" : "default" }}
                />
              );
            })}
          </svg>
        </div>

        {/* PANEL */}
        <div style={{ width: 300 }}>
          <h3 style={{ color: PRIMARY }}>
            Vendors {selected && `- ${selected}`}
          </h3>

          {selected ? (
            <ul>
              {vendorData[selected].map((v: string, i: number) => (
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
