"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const COL_COUNT = 24;
const VIEW_W = 1200;
const VIEW_H = 200;
const COL_W = VIEW_W / COL_COUNT;
const MIN_RATIO = 0.12;

let leafId = 0;
type Leaf = { id: number; x: number; tx: number };

export default function Hero() {
  const [ratios, setRatios] = useState<number[]>(() => Array(COL_COUNT).fill(0.8));
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [done, setDone] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const ratiosRef = useRef<number[]>(Array(COL_COUNT).fill(0.8));

  // Randomize heights on mount to avoid SSR mismatch
  useEffect(() => {
    const r = Array.from({ length: COL_COUNT }, () => 0.55 + Math.random() * 0.45);
    setRatios(r);
    ratiosRef.current = r;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xRatio = (e.clientX - rect.left) / rect.width;
    const idx = Math.floor(xRatio * COL_COUNT);
    if (idx < 0 || idx >= COL_COUNT) return;
    if (ratiosRef.current[idx] <= MIN_RATIO) return;

    setRatios((prev) => {
      const next = [...prev];
      next[idx] = Math.max(MIN_RATIO, prev[idx] - 0.06);
      ratiosRef.current = next;
      return next;
    });

    const id = leafId++;
    const x = ((idx + 0.5) / COL_COUNT) * 100;
    const tx = (Math.random() - 0.5) * 60;
    setLeaves((l) => [...l, { id, x, tx }]);
    setTimeout(() => setLeaves((l) => l.filter((lf) => lf.id !== id)), 900);
  }, []);

  useEffect(() => {
    if (!done && ratiosRef.current.every((r) => r <= MIN_RATIO + 0.005)) {
      setDone(true);
    }
  }, [ratios, done]);

  const trimAll = () => {
    const flat = Array(COL_COUNT).fill(MIN_RATIO);
    setRatios(flat);
    ratiosRef.current = flat;
    setDone(true);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F0E6C8" }}
    >
      <style>{`
        @keyframes t5-leaf {
          0%   { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translate(var(--t5-tx), -60px) scale(0.2) rotate(180deg); }
        }
        .t5-leaf-anim { animation: t5-leaf 0.9s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .t5-leaf-anim { display: none; } }
        @keyframes t5-done-pop {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .t5-done-pop { animation: t5-done-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>

      {/* Hedge interaction area */}
      <div className="flex flex-col items-center justify-end pt-28 pb-0 px-4">
        <p
          className="mb-3 text-center text-xs sm:text-sm tracking-wide"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.55 }}
        >
          ← この生垣をなぞってください →
        </p>

        <div className="relative w-full max-w-5xl">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: 200, touchAction: "none", cursor: "crosshair" }}
            onPointerMove={handlePointerMove}
          >
            {/* Ground */}
            <rect
              x={0} y={VIEW_H - 6} width={VIEW_W} height={6}
              fill="#1A3D1A" opacity={0.2} rx={2}
            />
            {ratios.map((r, i) => {
              const h = Math.max(4, r * (VIEW_H - 6));
              const y = VIEW_H - 6 - h;
              const x = i * COL_W + 2;
              const w = COL_W - 4;
              return (
                <g key={i}>
                  <rect x={x} y={y} width={w} height={h} rx={6} fill="#5BB346" />
                  <rect
                    x={x} y={y} width={w} height={Math.min(h * 0.2, 20)}
                    rx={6} fill="rgba(255,255,255,0.22)"
                  />
                </g>
              );
            })}
          </svg>

          {/* Leaf particles */}
          {leaves.map((lf) => (
            <div
              key={lf.id}
              className="t5-leaf-anim"
              style={{
                position: "absolute",
                bottom: 6,
                left: `${lf.x}%`,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#5BB346",
                pointerEvents: "none",
                "--t5-tx": `${lf.tx}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <button
          onClick={trimAll}
          className="mt-4 text-xs px-5 py-2 transition-all hover:opacity-70"
          style={{
            fontFamily: "var(--top5-kiwi)",
            color: "#1A3D1A",
            border: "1.5px solid #1A3D1A",
            backgroundColor: "transparent",
          }}
        >
          ぜんぶ刈る
        </button>
      </div>

      {/* Headline */}
      <div className="flex-1 flex flex-col items-center justify-center py-14 sm:py-20 px-6 text-center">
        {done && (
          <p
            className="t5-done-pop text-sm mb-4"
            style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
          >
            お疲れさまでした！こんな感じで、お庭を整えます。
          </p>
        )}
        <h1
          className="text-5xl sm:text-7xl font-bold leading-tight mb-5"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#1A3D1A",
            textShadow: "3px 3px 0 rgba(232,83,42,0.28)",
          }}
        >
          庭を、整える。
        </h1>
        <p
          className="text-base sm:text-lg mb-10"
          style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.6 }}
        >
          横浜の庭師 · 榊Garden
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 font-bold transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--top5-reggae)",
              backgroundColor: "#EEC700",
              color: "#1A3D1A",
              fontSize: 16,
            }}
          >
            お見積りを依頼する
          </a>
          <a
            href="#services"
            className="inline-block px-8 py-4 font-bold transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--top5-reggae)",
              backgroundColor: "transparent",
              color: "#1A3D1A",
              fontSize: 16,
              border: "2px solid #1A3D1A",
            }}
          >
            どんなことができる？
          </a>
        </div>
      </div>
    </section>
  );
}
