import { memo } from "react";
import { useOthers, useSelf } from "@/liveblocks.config";

const COLORS = [
  "#E57373",
  "#9575CD",
  "#4FC3F7",
  "#81C784",
  "#FFF176",
  "#FF8A65",
  "#F06292",
  "#7986CB",
];

function Line({
  color,
  x1,
  y1,
  x2,
  y2,
}: {
  color: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line
      style={
        {
          // opacity: 0.2,
          // mixBlendMode: "screen",
          // filter: "blur(10px) saturate(50000%)",
        }
      }
      stroke={"white"}
      strokeWidth={2}
      strokeLinecap="round"
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
    />
  );
}

export const CursorLines = memo(function CursorLines() {
  const others = useOthers();
  const self = useSelf();

  return (
    <>
      <svg
        style={{
          width: "100vw",
          height: "100vh",
          opacity: 0.3,
          //filter: "blur(1px) contrast(10)",
        }}
      >
        {others.map(({ connectionId, presence }) => (
          <Line
            key={`cursor-me-${connectionId}`}
            color={COLORS[connectionId % COLORS.length]}
            x1={presence.cursor.x}
            y1={presence.cursor.y}
            x2={self.presence.cursor.x}
            y2={self.presence.cursor.y}
          />
        ))}
        {others.map((one) => {
          return others.map((two) => (
            <Line
              key={`cursor-${one.connectionId}-${two.connectionId}`}
              color={COLORS[one.connectionId % COLORS.length]}
              x1={one.presence.cursor.x}
              y1={one.presence.cursor.y}
              x2={two.presence.cursor.x}
              y2={two.presence.cursor.y}
            />
          ));
        })}
      </svg>
      <CursorHide x={self.presence.cursor.x} y={self.presence.cursor.y} />
    </>
  );
});

function CursorHide({ x, y }: { x: number; y: number }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "10000px",
          height: "10000px",
          transform: `translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 50%))`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 5%)",
        }}
      />

      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "500px",
          height: "500px",
          transform: `translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 50%))`,
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/*<div*/}
      {/*  style={{*/}
      {/*    position: "fixed",*/}
      {/*    left: 0,*/}
      {/*    top: 0,*/}
      {/*    transform: `translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 50%))`,*/}
      {/*    background: "white",*/}
      {/*    borderRadius: 99999,*/}
      {/*    width: 20,*/}
      {/*    height: 20,*/}
      {/*    filter: "blur(0px)",*/}
      {/*  }}*/}
      {/*></div>*/}
    </>
  );
}
