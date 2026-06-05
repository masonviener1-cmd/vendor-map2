"use client";

const PRIMARY = "#0c3c5c";
const ACCENT = "#B3BE35";

// CLEAN spacing for all 50 states
const statePositions: any = {
  // WEST
  WA:{x:80,y:60}, OR:{x:80,y:100}, CA:{x:80,y:160},
  ID:{x:120,y:60}, NV:{x:120,y:120}, UT:{x:160,y:120}, AZ:{x:140,y:180},

  MT:{x:180,y:60}, WY:{x:180,y:100}, CO:{x:200,y:150}, NM:{x:200,y:200},

  // PLAINS
  ND:{x:260,y:60}, SD:{x:260,y:100}, NE:{x:260,y:140}, KS:{x:260,y:180},
  OK:{x:260,y:220}, TX:{x:260,y:300},

  // MIDWEST
  MN:{x:320,y:70}, IA:{x:320,y:120}, MO:{x:320,y:170},
  AR:{x:320,y:220}, LA:{x:320,y:300},

  WI:{x:360,y:80}, IL:{x:360,y:130}, TN:{x:360,y:190}, MS:{x:360,y:250},

  MI:{x:410,y:70}, IN:{x:400,y:130}, KY:{x:400,y:180}, AL:{x:400,y:250},

  // EAST / SOUTH
  OH:{x:440,y:140}, WV:{x:440,y:190}, GA:{x:440,y:280}, FL:{x:500,y:360},

  PA:{x:480,y:120}, VA:{x:480,y:180}, NC:{x:480,y:220}, SC:{x:480,y:260},

  // NORTHEAST (spread out)
  NY:{x:510,y:90},
  VT:{x:540,y:70}, NH:{x:580,y:70}, ME:{x:620,y:60},

  MA:{x:540,y:110}, CT:{x:570,y:120}, RI:{x:600,y:120},

  NJ:{x:520,y:150},
  DE:{x:560,y:150},
  MD:{x:560,y:180},

  // NON-CONTIGUOUS
  AK:{x:80,y:360},
  HI:{x:150,y:380},
};

export default function USMap({ selected, onSelect, vendorStates }: any) {
  return (
    <svg width="700" height="420" style={{ background: "#f3f4f6", borderRadius: 10 }}>
      
      {Object.keys(statePositions).map((state) => {
        const pos = statePositions[state];
        const hasData = vendorStates[state];

        return (
          <g
            key={state}
            onClick={() => hasData && onSelect(state)}
            style={{ cursor: hasData ? "pointer" : "default" }}
          >
            <circle
              cx={pos.x}
              cy={pos.y}
              r={12}
              fill={
                selected === state
                  ? ACCENT
                  : hasData
                  ? PRIMARY
                  : "#9ca3af"
              }
            />
            <text
              x={pos.x}
              y={pos.y + 4}
              textAnchor="middle"
              fontSize="9"
              fill="white"
            >
              {state}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
