"use client";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// Adjust these once map loads (I’ll help you fine tune after)
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

export default function USMap({ selected, onSelect, vendorStates }: any) {
  return (
    <div style={{ position: "relative", width: 700 }}>

      {/* ✅ BACKGROUND MAP IMAGE */}
      <img
        src="/us-map.png"
        alt="US Map"
        style={{ width: "100%", display: "block" }}
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
          const hasData = vendorStates[state];

          return (
            <circle
              key={state}
              cx={pos.x}
              cy={pos.y}
              r={10}
              onClick={() => hasData && onSelect(state)}
              fill={
                selected === state
                  ? ACCENT
                  : hasData
                  ? PRIMARY
                  : "#9ca3af"
              }
