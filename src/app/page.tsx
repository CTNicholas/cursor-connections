"use client";

import { nanoid } from "nanoid";
import { useState } from "react";

const links = [
  "/r3f-cursors/",
  "/r3f-cursor-lines/",
  "/r3f-starter-kit/",
  "/html-cursor-lines/",
];

export default function Home() {
  const [random, setRandom] = useState(false);
  const suffix = random ? nanoid() : "default-room";
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 6, padding: 20 }}
    >
      <h1 style={{ margin: "4px 0" }}>Enter rooms</h1>
      {links.map((link) => (
        <a key={link} href={link + suffix}>
          {link + suffix}
        </a>
      ))}
      <label style={{ userSelect: "none" }}>
        Join random room?{" "}
        <input
          type="checkbox"
          checked={random}
          onChange={(e) => setRandom(e.target.checked)}
        />
      </label>
    </div>
  );
}
