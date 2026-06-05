"use client";

import { useState } from "react";
import USMap from "./USMap";

export default function Page() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2>Test Map</h2>
      <USMap selected={selected} onSelect={setSelected} vendorStates={{}} />
    </div>
  );
}
