"use client";

import { useUpdateMyPresence } from "@/liveblocks.config";
import { Cursors } from "./Cursors";
import { CursorLines } from "./CursorLines";

export function CollaborativeApp() {
  const updateMyPresence = useUpdateMyPresence();

  return (
    <main
      style={{ width: "100vw", height: "100vh", background: "black" }}
      onPointerMove={(event) => {
        updateMyPresence({
          cursor: {
            x: Math.round(event.clientX),
            y: Math.round(event.clientY),
          },
        });
      }}
      // onPointerLeave={() =>
      //   updateMyPresence({
      //     cursor: null,
      //   })
      // }
    >
      <Cursors />
      <CursorLines />
    </main>
  );
}
