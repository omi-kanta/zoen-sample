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

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePos(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePos(e.clientX);
  };
  const onMouseUp = () => { dragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-col-resize"
      style={{ aspectRatio: "4/3" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {/* Before (下層) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={`${alt} 施工前`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After (上層 — clipPath でスライド) */}
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

      {/* 仕切り線 */}
      <div
        className="absolute top-0 bottom-0 w-px"
        style={{ left: `${pos}%`, backgroundColor: "white", opacity: 0.9 }}
      >
        {/* ハンドル */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "white", boxShadow: "0 1px 6px rgba(0,0,0,0.25)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 7 L1 4 L1 10 Z" fill="#5C4033" />
            <path d="M10 7 L13 4 L13 10 Z" fill="#5C4033" />
          </svg>
        </div>
      </div>

      {/* ラベル */}
      <span
        className="absolute top-3 left-3 text-xs px-2 py-0.5"
        style={{
          fontFamily: "var(--top3-zen)",
          backgroundColor: "rgba(0,0,0,0.45)",
          color: "white",
          borderRadius: "2px",
        }}
      >
        施工前
      </span>
      <span
        className="absolute top-3 right-3 text-xs px-2 py-0.5"
        style={{
          fontFamily: "var(--top3-zen)",
          backgroundColor: "rgba(92,64,51,0.7)",
          color: "white",
          borderRadius: "2px",
        }}
      >
        施工後
      </span>
    </div>
  );
}
