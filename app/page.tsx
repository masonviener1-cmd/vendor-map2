"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// Add your vendor states here
const vendorStates: any = {
  TX: ["Texas Vendor"],
  PA: ["Pennsylvania Vendor"],
  NJ: ["New Jersey Vendor"],
  MD: ["Maryland Vendor"],
  VA: ["Virginia Vendor"],
};

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2 style={{ color: PRIMARY }}>USA Vendor Map</h2>

      <svg viewBox="0 0 960 600" style={{ width: "100%", maxWidth: 800 }}>

        {/* VERY simplified but proportional US layout */}

        {/* Texas */}
        <rect x="300" y="350" width="120" height="80"
          fill={selected === "TX" ? ACCENT : vendorStates["TX"] ? PRIMARY : "#ccc"}
          stroke="#fff"
          onClick={() => setSelected("TX")}
        />

        {/* Pennsylvania */}
        <rect x="700" y="200" width="100" height="40"
          fill={selected === "PA" ? ACCENT : vendorStates["PA"] ? PRIMARY : "#ccc"}
          stroke="#fff"
          onClick={() => setSelected("PA")}
        />

        {/* New Jersey */}
        <rect x="810" y="210" width="25" height="60"
          fill={selected === "NJ" ? ACCENT : vendorStates["NJ"] ? PRIMARY : "#ccc"}
          stroke="#fff"
          onClick={() => setSelected("NJ")}
        />

        {/* Maryland */}
        <rect x="760" y="270" width="60" height="30"
          fill={selected === "MD" ? ACCENT : vendorStates["MD"] ? PRIMARY : "#ccc"}
          stroke="#fff"
          onClick={() => setSelected("MD")}
        />

        {/* Virginia */}
        <rect x="700" y="300" width="120" height="50"
          fill={selected === "VA" ? ACCENT : vendorStates["VA"] ? PRIMARY : "#ccc"}
          stroke="#fff"
          onClick={() => setSelected("VA")}
        />

      </svg>

      <div style={{ marginTop: 20 }}>
        <h3 style={{ color: PRIMARY }}>
          Vendors {selected && `- ${selected}`}
        </h3>

        {selected ? (
          <ul>
            {vendorStates[selected]?.map((v: string, i: number) => (
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
