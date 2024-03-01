"use client";

import { Canvas } from "@react-three/fiber";
import { useUpdateMyPresence } from "@/liveblocks.config";
import { useRef } from "react";
import { Cursors } from "./Cursors";
import { Html } from "@react-three/drei";

export function CollaborativeApp() {
  const updateMyPresence = useUpdateMyPresence();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Canvas
      ref={canvasRef}
      style={{ width: "100vw", height: "100vh", background: "coral" }}
      camera={{ position: [1, 0.5, 4.5] }}
    >
      <group
        onPointerMove={(event) => {
          const [x, y] = event.point.toArray();
          updateMyPresence({
            cursor: { x, y },
          });
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="#fff" position={[1, 2, 3]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Html position={[8, 2, -20]} transform occlude>
          <Tablet />
        </Html>
        <Html
          position={[-18.5, -8, -16]}
          rotation={[0, 0.6, 0]}
          transform
          occlude
        >
          <Tablet />
        </Html>
        <Cursors />
      </group>
    </Canvas>
  );
}

function Tablet() {
  return (
    <div
      style={{
        background: "#333",
        padding: "25px",
        borderRadius: "20px",
        border: "3px solid white",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://nextjs-starter-kit.liveblocks.app/text/0LLet8_xRjahcLWJBxDfA"
        title="Liveblocks"
        width="1000"
        height="700"
        style={{ border: "none" }}
      />
    </div>
  );
}
