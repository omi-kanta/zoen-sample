"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "お問い合わせ",
    body: "電話・メールどちらでも。庭の状況や気になることを、まずはお気軽にお話しください。",
  },
  {
    num: "02",
    title: "無料現地調査",
    body: "実際に庭を拝見し、樹木の状態や作業量を確認します。お見積りは無料です。",
  },
  {
    num: "03",
    title: "お見積り・ご提案",
    body: "作業内容と金額を丁寧にご説明します。納得いただけるまで、何度でもご相談ください。",
  },
  {
    num: "04",
    title: "施工",
    body: "日程を調整し、丁寧に作業します。作業後は必ず現場をきれいにしてお渡しします。",
  },
  {
    num: "05",
    title: "アフターフォロー",
    body: "定期管理のご相談や、次のシーズンへの準備もお任せください。長いお付き合いを大切にしています。",
  },
];

// SVG vine path
const VINE_HEIGHT = 480;
const VINE_PATH = `M 60 0 C 60 60 100 100 60 160 C 20 220 100 260 60 320 C 20 380 100 420 60 ${VINE_HEIGHT}`;
const VINE_LENGTH = 680;

export default function Flow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="flow"
      ref={sectionRef}
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
        >
          施工の流れ
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-14"
          style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
        >
          はじめてでも、<br />安心してご依頼いただけます。
        </h2>

        <div className="flex gap-8 sm:gap-14">
          {/* SVG vine — デスクトップ表示 */}
          <div className="hidden sm:block shrink-0 relative" style={{ width: 80 }}>
            <svg
              width="80"
              height={VINE_HEIGHT}
              viewBox={`0 0 120 ${VINE_HEIGHT}`}
              fill="none"
              aria-hidden
            >
              <path
                d={VINE_PATH}
                stroke="#8DC86A"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: VINE_LENGTH,
                  strokeDashoffset: drawn ? 0 : VINE_LENGTH,
                  transition: drawn ? "stroke-dashoffset 2s ease-out" : "none",
                }}
              />
              {[160, 320, VINE_HEIGHT].map((y, i) => (
                <ellipse
                  key={i}
                  cx={i % 2 === 0 ? 30 : 90}
                  cy={y}
                  rx="10"
                  ry="6"
                  fill="#8DC86A"
                  opacity={drawn ? 0.6 : 0}
                  style={{
                    transition: drawn ? `opacity 0.4s ease-out ${0.8 + i * 0.3}s` : "none",
                    transform: `rotate(${i % 2 === 0 ? -30 : 30}deg)`,
                    transformOrigin: `${i % 2 === 0 ? 30 : 90}px ${y}px`,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* ステップリスト */}
          <div className="flex-1 flex flex-col gap-10">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5">
                {/* モバイル用縦線 */}
                <div className="sm:hidden flex flex-col items-center">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{
                      backgroundColor: "#8DC86A",
                      color: "white",
                      fontFamily: "var(--top6-zen)",
                    }}
                  >
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 mt-2"
                      style={{ width: 1, backgroundColor: "#8DC86A", opacity: 0.3, minHeight: 32 }}
                    />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="text-2xl font-bold leading-none"
                      style={{ fontFamily: "var(--top6-klee)", color: "#8DC86A", opacity: 0.35 }}
                    >
                      {s.num}
                    </span>
                    <h3
                      className="text-base sm:text-lg font-semibold"
                      style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-loose"
                    style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.68 }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
