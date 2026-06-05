"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// Dot positions (we'll fine tune later)
const statePositions: any = {
  CA:{x:80,y:220},
  TX:{x:320,y:300},
  FL:{x:590,y:340},
  NY:{x:560,y:130},
  PA:{x:540,y:170},
  NJ:{x:570,y:180},
  MD:{x:560,y:200},
  VA:{x:540,y:230},
};

// Your vendor data
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
    <div style={{ padding: 20 }}>
      <h2>Vendor Map Dashboard</h2>

      <div style={{ display: "flex", gap: 40 }}>

        {/* MAP */}
        <div style={{ position: "relative", width: 700 }}>

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
              height: "100%",
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
                  r={10}
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

        {/* VENDOR PANEL */}
        <div style={{ width: 300 }}>
          <h3>Vendors {selected && `- ${selected}`}</h3>

          {selected ? (
            <ul>
              {vendorData[selected]?.map((v: string, i: number) => (
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
