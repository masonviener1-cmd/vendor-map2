"use client";

import { useState } from "react";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// State positions (we will fine-tune later)
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

// Vendor data
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

