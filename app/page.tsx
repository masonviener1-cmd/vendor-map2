"use client";

import { useState } from "react";
import USMap from "../components/USMap";

const PRIMARY = "#0c3c5c";

const vendorData: any = {
  TX: ["Texas Vendors"],
  PA: ["Pennsylvania Vendors"],
  NJ: ["New Jersey Vendors"],
  MD: ["Maryland Vendors"],
  VA: ["Virginia Vendors"],
};

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: PRIMARY }}>Vendor Map Dashboard</h2>

      <div style={{ display: "flex", gap: 30 }}>
        
        {/* MAP */}
        <div style={{ flex: 1 }}>
          <USMap
            selected={selected}
            onSelect={setSelected}
            vendorStates={vendorData}
          />
        </div>

        {/* PANEL */}
        <div style={{ width: 300 }}>
          <h3>
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
