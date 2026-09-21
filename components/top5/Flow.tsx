"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: 1,
    label: "ご連絡",
    detail: "お電話かメールで。「どんな状態か分からない」も大歓迎。まず話を聞きます。",
    emoji: "📞",
    event: null,
  },
  {
    num: 2,
    label: "現地調査",
    detail: "庭師が直接伺い、状態を確認。その場でざっくりご説明します。",
    emoji: "🔍",
    event: "松の枯れ枝を発見！→ すぐお伝えします",
  },
  {
    num: 3,
    label: "お見積り",
    detail: "作業内容と費用をご提案。追加料金は発生前に必ずご連絡します。",
    emoji: "📋",
    event: null,
  },
  {
    num: 4,
    label: "日程調整",
    detail: "ご都合に合わせます。急ぎの場合もまずご相談を。",
    emoji: "📅",
    event: "雨の予報… → 1日ずらします！",
  },
  {
    num: 5,
    label: "作業当日",
    detail: "丁寧に、きれいに。剪定くずはすべて持ち帰ります。",
    emoji: "✂️",
    event: null,
  },
  {
    num: 6,
    label: "ゴール！",
    detail: "「また来年も」と言ってもらえることが、一番の喜びです。",
    emoji: "🏆",
    event: "あがり！",
  },
];

type StepProps = {
  step: (typeof steps)[number];
  isActive: boolean;
  isCurrent: boolean;
};

function StepCard({ step, isActive, isCurrent }: StepProps) {
  return (
    <div
      style={{
        border: `2px solid ${isActive ? "#EEC700" : "#1A3D1A"}`,
        backgroundColor: isActive ? "#EEC700" : "#F9F5EC",
        padding: "20px 16px 16px",
        position: "relative",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Step number badge */}
      <div
        style={{
          position: "absolute",
          top: -14,
          left: 14,
          width: 28,
          height: 28,
          backgroundColor: isActive ? "#E8532A" : "#1A3D1A",
          color: "#F0E6C8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--top5-reggae)",
          fontSize: 14,
          transition: "background-color 0.4s ease",
        }}
      >
        {step.num}
      </div>

      {/* Moving piece indicator */}
      {isCurrent && (
        <div
          style={{
            position: "absolute",
            top: -30,
            right: 12,
            fontSize: 20,
            animation: "t5-bounce 0.6s ease infinite alternate",
          }}
        >
          🌱
        </div>
      )}

      <div className="mt-2 mb-1 flex items-center gap-2">
        <span style={{ fontSize: 18 }}>{step.emoji}</span>
        <p
          className="font-bold"
          style={{ fontFamily: "var(--top5-reggae)", fontSize: 16, color: "#1A3D1A" }}
        >
          {step.label}
        </p>
      </div>
      <p
        className="leading-relaxed"
        style={{ fontFamily: "var(--top5-maru)", fontSize: 12, color: "#1A3D1A", opacity: 0.7 }}
      >
        {step.detail}
      </p>
      {step.event && (
        <p
          className="mt-2 text-xs"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
        >
          ⚡ {step.event}
        </p>
      )}
    </div>
  );
}

export default function Flow() {
  const [active, setActive] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          steps.forEach((_, i) => {
            setTimeout(() => setActive(i), i * 550);
          });
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const row1 = steps.slice(0, 3);
  // Row 2 rendered right-to-left (step6, step5, step4) for snake layout
  const row2 = [...steps.slice(3)].reverse();

  return (
    <section
      ref={sectionRef}
      id="flow"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#E8D8A8" }}
    >
      <style>{`
        @keyframes t5-bounce {
          from { transform: translateY(0); }
          to   { transform: translateY(-6px); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
        >
          すごろく形式でわかる
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-14"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#1A3D1A",
            textShadow: "2px 2px 0 rgba(232,83,42,0.2)",
          }}
        >
          施工の流れ
        </h2>

        {/* Desktop snake layout */}
        <div className="hidden md:block">
          {/* Row 1: steps 1→2→3 */}
          <div className="grid grid-cols-3 gap-5 mb-4">
            {row1.map((step) => (
              <StepCard
                key={step.num}
                step={step}
                isActive={active >= step.num - 1}
                isCurrent={active === step.num - 1}
              />
            ))}
          </div>

          {/* Down arrow at right side (column 3) */}
          <div className="flex justify-end pr-4 mb-4">
            <span
              className="text-2xl font-bold"
              style={{ color: active >= 3 ? "#E8532A" : "#1A3D1A", opacity: active >= 3 ? 1 : 0.3, transition: "all 0.4s" }}
            >
              ↓
            </span>
          </div>

          {/* Row 2: steps 6←5←4 (visually: col1=step6, col2=step5, col3=step4) */}
          <div className="grid grid-cols-3 gap-5">
            {row2.map((step) => (
              <StepCard
                key={step.num}
                step={step}
                isActive={active >= step.num - 1}
                isCurrent={active === step.num - 1}
              />
            ))}
          </div>

          {/* Path note */}
          <div className="flex justify-start mt-2">
            <span
              className="text-xs"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.4 }}
            >
              ← 6 → 5 → 4 の順に進みます
            </span>
          </div>
        </div>

        {/* Mobile linear layout */}
        <div className="md:hidden flex flex-col gap-5">
          {steps.map((step) => (
            <StepCard
              key={step.num}
              step={step}
              isActive={active >= step.num - 1}
              isCurrent={active === step.num - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
