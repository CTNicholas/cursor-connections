import { useOthers } from "@/liveblocks.config";

export function Cursors() {
  const others = useOthers();

  return others.map(({ connectionId, presence }) => (
    <mesh
      key={connectionId}
      position={[presence.cursor.x, presence.cursor.y, 1]}
      rotation={[-1.5, 0, -0.1]}
    >
      <coneGeometry args={[0.3, 0.6, 50]} />
      <meshMatcapMaterial color={presence.color} />
    </mesh>
  ));
}
