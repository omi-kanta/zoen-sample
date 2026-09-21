"use client";
import { useRef, useState, useCallback } from "react";

interface BASliderProps {
  before: string;
  after: string;
  alt: string;
}

export default function BASlider({ before, after, alt }: BASliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-col-resize"
      style={{ aspectRatio: "4/3" }}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => updatePos(e.touches[0].clientX)}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={`${alt} 施工前`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`${alt} 施工後`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 7 L1 4 L1 10 Z" fill="#4a7c59" />
            <path d="M10 7 L13 4 L13 10 Z" fill="#4a7c59" />
          </svg>
        </div>
      </div>

      <span
        className="absolute top-3 left-3 text-xs px-2 py-0.5"
        style={{
          fontFamily: "var(--top1-sans)",
          backgroundColor: "rgba(0,0,0,0.45)",
          color: "white",
        }}
      >
        施工前
      </span>
      <span
        className="absolute top-3 right-3 text-xs px-2 py-0.5"
        style={{
          fontFamily: "var(--top1-sans)",
          backgroundColor: "rgba(74,124,89,0.75)",
          color: "white",
        }}
      >
        施工後
      </span>
    </div>
  );
}
