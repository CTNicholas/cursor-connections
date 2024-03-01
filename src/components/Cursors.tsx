import { memo } from "react";
import { useOthers } from "@/liveblocks.config";

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

export const Cursors = memo(function Cursors() {
  const others = useOthers();
  return others.map(({ connectionId, presence }) => {
    if (presence.cursor === null) {
      return null;
    }

    return (
      <Cursor
        key={`cursor-${connectionId}`}
        // connectionId is an integer that is incremented at every new connections
        // Assigning a color with a modulo makes sure that a specific user has the same colors on every clients
        color={COLORS[connectionId % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
      />
    );
  });
});

type CursorProps = {
  color: string;
  x: number;
  y: number;
};

export default function Cursor({ color, x, y }: CursorProps) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: `translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 50%))`,
        background: "white",
        borderRadius: 99999,
        width: 20,
        height: 20,
        filter: "blur(0px)",
      }}
    ></div>
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "200px",
        height: "200px",
        transform: `translateX(calc(${x}px - 50%)) translateY(calc(${y}px - 50%))`,
        // filter: "blur(15px) saturate(45)",
        background:
          "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
      }}
    />
  );

  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translateX(${x}px) translateY(${y}px)`,
        // filter: "blur(15px) saturate(45)",
      }}
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill={color}
      />
    </svg>
  );
}
