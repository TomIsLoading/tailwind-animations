"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center">
      <TailwindSupported />
      <WithTailwindAnimate />
    </main>
  );
}

const TailwindSupported = () => {
  return (
    <>
      {/* Tailwind Default */}
      {/* <div className="size-36 bg-zinc-950 animate-spin" /> */}

      {/* <div className="size-36 bg-zinc-950 animate-spin-slow" /> */}
      {/* <div className="size-36 bg-zinc-950 animate-[spin_10s_linear_infinite]" /> */}

      {/* <div className="size-36 bg-zinc-950 animate-wiggle" /> */}
    </>
  );
};

const WithTailwindAnimate = () => {
  const [running, setRunning] = useState(true);

  return (
    <div
      onClick={() => setRunning((pv) => !pv)}
      className={`
      ${running ? "running" : "paused"}
      size-36 bg-zinc-950
      animate-wiggle 
      duration-1000 delay-1000 ease-in-out

      direction-alternate repeat-infinite fill-mode-forwards
    `}
    />
  );
};
