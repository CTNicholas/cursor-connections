import { useOthers, useSelf } from "@/liveblocks.config";
import { Line } from "@react-three/drei";

export function CursorLines() {
  const others = useOthers();
  // const self = useSelf();

  return (
    <>
      {/*{*/}
      {/*  // Render lines attached to your cursor*/}
      {/*  others.map(({ connectionId, presence }) => (*/}
      {/*    <Line*/}
      {/*      key={`cursor-me-${connectionId}`}*/}
      {/*      color={presence.color}*/}
      {/*      points={[*/}
      {/*        [presence.cursor.x, presence.cursor.y, 1],*/}
      {/*        [self.presence.cursor.x, self.presence.cursor.y, 1],*/}
      {/*      ]}*/}
      {/*    />*/}
      {/*  ))*/}
      {/*}*/}
      {others.map((one) => {
        return others.map((two) => (
          <Line
            lineWidth={10}
            key={`cursor-${one.connectionId}-${two.connectionId}`}
            color={one.presence.color}
            points={[
              [one.presence.cursor.x, one.presence.cursor.y, 1],
              [two.presence.cursor.x, two.presence.cursor.y, 1],
            ]}
          />
        ));
      })}
    </>
  );
}
