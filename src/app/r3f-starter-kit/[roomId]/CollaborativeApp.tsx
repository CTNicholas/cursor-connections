"use client";

import { Canvas } from "@react-three/fiber";
import { useUpdateMyPresence } from "@/liveblocks.config";
import { useRef, useState } from "react";
import { Cursors } from "./Cursors";
import { Html } from "@react-three/drei";

export function CollaborativeApp() {
  const updateMyPresence = useUpdateMyPresence();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iframeSrc, setIframeSrc] = useState(
    "https://nextjs-starter-kit.liveblocks.app/text/0LLet8_xRjahcLWJBxDfA"
  );

  return (
    <>
      <Canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
        }}
        camera={{ position: [1, 0.5, 4.5] }}
      >
        <group>
          <ambientLight intensity={0.1} />
          <directionalLight color="#fff" position={[1, 2, 3]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Html
            position={[8, 2, -20]}
            transform
            occlude
            onPointerMove={(event) => {
              const [x, y] = event.point.toArray();
              updateMyPresence({
                cursor: { x, y },
              });
            }}
          >
            <Tablet src={iframeSrc} />
          </Html>
          <Html
            position={[-18.5, -8, -16]}
            rotation={[0, 0.6, 0]}
            transform
            occlude
          >
            <Tablet src={iframeSrc} />
          </Html>
          <Cursors />
        </group>
      </Canvas>
      <label
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        Website URL
        <input
          type="text"
          value={iframeSrc}
          onChange={(e) => setIframeSrc(e.target.value)}
          style={{ padding: 4 }}
        />
      </label>
    </>
  );
}

function Tablet({ src }: { src: string }) {
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
        src={src}
        title="Liveblocks"
        width="1000"
        height="700"
        style={{ border: "none" }}
      />
    </div>
  );
}
