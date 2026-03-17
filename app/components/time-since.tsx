"use client";

import { useEffect, useState } from "react";

interface TimeSinceProps {
  timestamp: string;
}

export function TimeSince({ timestamp }: TimeSinceProps) {
  const [elapsed, setElapsed] = useState<string>("");

  useEffect(() => {
    const updateElapsed = () => {
      const generated = new Date(timestamp).getTime();
      const now = Date.now();
      const seconds = Math.floor((now - generated) / 1000);

      if (seconds < 60) {
        setElapsed(`${seconds}s ago`);
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        setElapsed(`${minutes}m ${seconds % 60}s ago`);
      } else {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        setElapsed(`${hours}h ${minutes}m ago`);
      }
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span className="font-mono text-slate-300">{elapsed || "calculating..."}</span>;
}
