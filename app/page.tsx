"use client";

import { useState } from "react";
import USMap from "../components/USMap";

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
        <USMap
          selected={selected}
          onSelect={setSelected}
          vendorStates={vendorData}
        />

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
