"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@/liveblocks.config";
import { useParams } from "next/navigation";
import { ClientSideSuspense } from "@liveblocks/react";
import { Loading } from "@/components/Loading";

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

const color = COLORS[Math.floor(Math.random() * COLORS.length)];

export default function Room({ children }: { children: ReactNode }) {
  const { roomId } = useParams();

  return (
    <RoomProvider
      id={roomId as string}
      initialPresence={{
        cursor: { x: -10, y: -10 },
        color,
      }}
      initialStorage={{}}
    >
      <ClientSideSuspense fallback={<Loading />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
