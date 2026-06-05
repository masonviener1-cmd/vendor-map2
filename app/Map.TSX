"use client";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

export default function USMap({ selected, onSelect, vendorStates }: any) {
  return (
    <svg viewBox="0 0 959 593" style={{ width: "100%", maxWidth: 900 }}>

      {/* TEXAS */}
      <path
        d="M300 350 L350 350 L370 380 L340 420 L280 400 Z"
        fill={
          selected === "TX"
            ? ACCENT
            : vendorStates["TX"]
            ? PRIMARY
            : "#ccc"
        }
        stroke="#fff"
        onClick={() => onSelect("TX")}
        style={{ cursor: "pointer" }}
      />

      {/* PENNSYLVANIA */}
      <path
        d="M600 200 L680 200 L680 240 L600 240 Z"
        fill={
          selected === "PA"
            ? ACCENT
            : vendorStates["PA"]
            ? PRIMARY
            : "#ccc"
        }
        stroke="#fff"
        onClick={() => onSelect("PA")}
        style={{ cursor: "pointer" }}
      />

      {/* NEW JERSEY */}
      <path
        d="M700 210 L720 220 L710 260 L690 250 Z"
        fill={
          selected === "NJ"
            ? ACCENT
            : vendorStates["NJ"]
            ? PRIMARY
            : "#ccc"
        }
        stroke="#fff"
        onClick={() => onSelect("NJ")}
        style={{ cursor: "pointer" }}
      />

      {/* MARYLAND */}
      <path
        d="M650 260 L710 260 L710 280 L650 280 Z"
        fill={
          selected === "MD"
            ? ACCENT
            : vendorStates["MD"]
            ? PRIMARY
            : "#ccc"
        }
        stroke="#fff"
        onClick={() => onSelect("MD")}
        style={{ cursor: "pointer" }}
      />

      {/* VIRGINIA */}
      <path
        d="M620 280 L760 280 L720 330 L600 320 Z"
        fill={
          selected === "VA"
            ? ACCENT
            : vendorStates["VA"]
            ? PRIMARY
            : "#ccc"
        }
        stroke="#fff"
        onClick={() => onSelect("VA")}
        style={{ cursor: "pointer" }}
      />
    </svg>
  );
}
``
