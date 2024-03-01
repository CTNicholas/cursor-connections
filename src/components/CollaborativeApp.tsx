"use client";

import { useOthers, useUpdateMyPresence } from "@/liveblocks.config";
import { Cursors } from "@/components/Cursors";
import { CursorLines } from "@/components/CursorLines";

export function CollaborativeApp() {
  const updateMyPresence = useUpdateMyPresence();

  return (
    <main
      style={{ width: "100vw", height: "100vh", background: "black" }}
      onPointerMove={(event) => {
        // Update the user cursor position on every pointer move
        updateMyPresence({
          cursor: {
            x: Math.round(event.clientX),
            y: Math.round(event.clientY),
          },
        });
      }}
      // onPointerLeave={() =>
      //   // When the pointer goes out, set cursor to null
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
