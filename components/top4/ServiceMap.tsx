"use client";
import { useState } from "react";

type ZoneId = "approach" | "garden" | "planting" | "parking";

const zones: {
  id: ZoneId;
  label: string;
  rect: { x: number; y: number; w: number; h: number };
  works: string[];
  description: string;
  image: string;
}[] = [
  {
    id: "approach",
    label: "玄関アプローチ",
    rect: { x: 0, y: 0, w: 320, h: 70 },
    works: ["門まわり・玄関植栽", "石畳・飛び石の据え直し", "目隠しフェンス周辺の緑化", "季節の寄せ植え"],
    description:
      "来客の第一印象を決める場所。門まわりの植栽や石畳の据え直しから、防犯を兼ねた目隠し植栽まで対応します。",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "garden",
    label: "主庭・芝",
    rect: { x: 0, y: 70, w: 200, h: 150 },
    works: ["高麗芝・野芝の張り替え", "芝刈り・施肥（月1〜2回）", "庭木の剪定・樹形管理", "石組み・水景の設置"],
    description:
      "一番時間を使うのが主庭です。芝の管理から庭木の樹形づくりまで、年間を通じてお任せいただけます。松・ツツジ・サツキなど和木も得意です。",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "planting",
    label: "植栽帯・生垣",
    rect: { x: 200, y: 70, w: 120, h: 150 },
    works: ["生垣の刈込（ツゲ・レイランド等）", "花壇の植栽・入れ替え", "低木の剪定・整理", "除草・マルチング"],
    description:
      "生垣や花壇の植栽帯は、放置すると隣地へのはみ出しや見苦しさにつながります。年間管理契約で計画的に維持できます。",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "parking",
    label: "駐車場まわり",
    rect: { x: 0, y: 220, w: 320, h: 60 },
    works: ["縁石まわりの除草", "グランドカバー植栽", "コンクリート目地の手入れ", "排水まわりの植栽管理"],
    description:
      "駐車場の縁石まわりや境界沿いの雑草は思いのほか目立ちます。グランドカバーを使った雑草対策もご提案できます。",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop",
  },
];

export default function ServiceMap() {
  const [active, setActive] = useState<ZoneId>("garden");
  const activeZone = zones.find((z) => z.id === active)!;

  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F4EFE4" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p
              className="text-xs mb-2 tracking-widest"
              style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.4 }}
            >
              ZONE MAP · SK-SV-01
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--top4-mincho)", color: "#1C2418" }}
            >
              庭の区画から<br className="sm:hidden" />サービスを選ぶ
            </h2>
          </div>
          <p
            className="hidden sm:block text-xs tracking-widest"
            style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
          >
            S=1:200
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ── SVG Zone Map ── */}
          <div className="lg:w-2/5 shrink-0">
            <svg
              viewBox="0 0 320 280"
              className="w-full max-w-sm mx-auto lg:mx-0"
              fill="none"
              aria-label="庭の区画図"
              style={{ display: "block", cursor: "pointer" }}
            >
              {/* Plot boundary */}
              <rect x="0" y="0" width="320" height="280"
                stroke="#1C2418" strokeWidth="1.5" fill="none"
              />

              {zones.map((z) => (
                <g
                  key={z.id}
                  onClick={() => setActive(z.id)}
                  role="button"
                  aria-pressed={active === z.id}
                  aria-label={z.label}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    x={z.rect.x} y={z.rect.y}
                    width={z.rect.w} height={z.rect.h}
                    fill={
                      active === z.id
                        ? "rgba(232,160,32,0.22)"
                        : "rgba(28,36,24,0.02)"
                    }
                    stroke={active === z.id ? "#E8A020" : "#1C2418"}
                    strokeWidth={active === z.id ? 1.5 : 0.5}
                    style={{ transition: "fill 0.2s, stroke 0.2s" }}
                  />
                  <text
                    x={z.rect.x + z.rect.w / 2}
                    y={z.rect.y + z.rect.h / 2 + 4}
                    textAnchor="middle"
                    fontSize="10"
                    style={{
                      fontFamily: "var(--top4-kaku)",
                      fill: active === z.id ? "#1C2418" : "#1C2418",
                      opacity: active === z.id ? 0.85 : 0.45,
                      transition: "opacity 0.2s",
                      userSelect: "none",
                    }}
                  >
                    {z.label}
                  </text>
                </g>
              ))}

              {/* Internal grid detail lines */}
              {/* Trees in main garden */}
              {active === "garden" && (
                <>
                  <circle cx="80" cy="130" r="14" stroke="#E8A020" strokeWidth="0.75" fill="rgba(232,160,32,0.1)" />
                  <line x1="70" y1="130" x2="90" y2="130" stroke="#E8A020" strokeWidth="0.5" />
                  <line x1="80" y1="120" x2="80" y2="140" stroke="#E8A020" strokeWidth="0.5" />
                  <circle cx="140" cy="160" r="10" stroke="#E8A020" strokeWidth="0.75" fill="rgba(232,160,32,0.1)" />
                  <line x1="133" y1="160" x2="147" y2="160" stroke="#E8A020" strokeWidth="0.5" />
                  <line x1="140" y1="153" x2="140" y2="167" stroke="#E8A020" strokeWidth="0.5" />
                </>
              )}

              {/* Dimension ticks */}
              <line x1="0" y1="70" x2="5" y2="70" stroke="#1C2418" strokeWidth="0.5" opacity="0.3" />
              <line x1="0" y1="220" x2="5" y2="220" stroke="#1C2418" strokeWidth="0.5" opacity="0.3" />
              <line x1="200" y1="0" x2="200" y2="5" stroke="#1C2418" strokeWidth="0.5" opacity="0.3" />

              {/* North arrow */}
              <g>
                <line x1="305" y1="20" x2="305" y2="8" stroke="#1C2418" strokeWidth="0.75" opacity="0.4" />
                <polygon points="305,5 302,14 308,14" fill="#1C2418" opacity="0.4" />
                <text x="305" y="28" textAnchor="middle" fontSize="7"
                  style={{ fontFamily: "var(--top4-mono)", fill: "#1C2418", opacity: 0.4 }}
                >N</text>
              </g>
            </svg>

            {/* Zone tab buttons (mobile supplement) */}
            <div className="flex flex-wrap gap-2 mt-4 lg:hidden">
              {zones.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setActive(z.id)}
                  className="text-xs px-3 py-1.5 transition-all"
                  style={{
                    fontFamily: "var(--top4-kaku)",
                    backgroundColor: active === z.id ? "#E8A020" : "transparent",
                    color: "#1C2418",
                    border: `1px solid ${active === z.id ? "#E8A020" : "#D8D2C8"}`,
                  }}
                >
                  {z.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Zone detail panel ── */}
          <div className="flex-1 flex flex-col">
            <div
              className="p-1 mb-0"
              style={{ borderTop: "2px solid #E8A020" }}
            />
            <div className="pt-5 flex-1 flex flex-col">
              <p
                className="text-xs mb-3 tracking-widest"
                style={{ fontFamily: "var(--top4-mono)", color: "#E8A020" }}
              >
                ZONE · {activeZone.label}
              </p>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "var(--top4-mincho)", color: "#1C2418" }}
              >
                {activeZone.label}
              </h3>
              <p
                className="text-sm leading-loose mb-6"
                style={{ fontFamily: "var(--top4-kaku)", color: "#1C2418", opacity: 0.7 }}
              >
                {activeZone.description}
              </p>

              <div className="mb-6">
                <p
                  className="text-xs mb-3 tracking-widest"
                  style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.4 }}
                >
                  WORKS
                </p>
                <ul className="flex flex-col divide-y" style={{ borderColor: "#D8D2C8" }}>
                  {activeZone.works.map((w, i) => (
                    <li
                      key={i}
                      className="py-2.5 text-sm flex items-center gap-3"
                      style={{ fontFamily: "var(--top4-kaku)", color: "#1C2418" }}
                    >
                      <span
                        className="text-xs shrink-0 w-5"
                        style={{ fontFamily: "var(--top4-mono)", color: "#E8A020" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden mt-auto" style={{ aspectRatio: "16/7" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeZone.image}
                  alt={activeZone.label}
                  className="w-full h-full object-cover"
                  style={{ transition: "opacity 0.3s" }}
                />
                <div
                  className="absolute top-2 left-2 px-2 py-1"
                  style={{ backgroundColor: "rgba(244,239,228,0.85)" }}
                >
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.6 }}
                  >
                    施工写真
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
