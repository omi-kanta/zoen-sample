"use client";
import { useState } from "react";

const services = [
  {
    num: "01",
    name: "剪定・刈込",
    desc: "松・ツツジ・サツキ・生垣など。樹種に合わせた時期と方法でお手入れします。",
    emoji: "✂️",
  },
  {
    num: "02",
    name: "草刈り・除草",
    desc: "手除草・機械刈りの使い分けで、根まできれいに。防草シートの施工も対応。",
    emoji: "🌾",
  },
  {
    num: "03",
    name: "芝生の管理",
    desc: "野芝・高麗芝の刈り込みと施肥。エアレーション・目土入れも承ります。",
    emoji: "🌱",
  },
  {
    num: "04",
    name: "庭のリフォーム",
    desc: "植栽の入れ替えから石・砂利の敷設まで。ご要望に合わせてご提案します。",
    emoji: "🔨",
  },
  {
    num: "05",
    name: "年間管理契約",
    desc: "担当者固定で安心。季節ごとに計画を立て、庭を継続的に育てます。",
    emoji: "📅",
  },
  {
    num: "06",
    name: "伐採・抜根",
    desc: "大木の伐採から根の撤去まで。隣地への配慮も含め、安全に対応します。",
    emoji: "🌳",
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F0E6C8" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
        >
          道具箱をあけてみてください
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#1A3D1A",
            textShadow: "2px 2px 0 rgba(232,83,42,0.2)",
          }}
        >
          サービス
        </h2>

        {/* Toolbox drawers */}
        <div
          className="flex flex-col gap-1"
          style={{ border: "3px solid #1A3D1A", padding: 8, backgroundColor: "#D4C89A" }}
        >
          {services.map((svc, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={svc.num}
                className="relative"
                style={{ height: 72, overflow: "hidden" }}
              >
                {/* Drawer interior (revealed when open) */}
                <div
                  className="absolute inset-0 flex items-center gap-4 px-5"
                  style={{ backgroundColor: "#EEC700" }}
                >
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{svc.emoji}</span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A" }}
                  >
                    {svc.desc}
                  </p>
                </div>

                {/* Drawer front face */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="absolute inset-0 flex items-center gap-4 px-5 w-full text-left"
                  style={{
                    backgroundColor: "#F0E6C8",
                    border: "2px solid #1A3D1A",
                    transform: isOpen ? "translateX(-100%)" : "translateX(0)",
                    transition: "transform 0.4s cubic-bezier(0.34,1.0,0.64,1)",
                    cursor: "pointer",
                  }}
                >
                  {/* Handle bar */}
                  <div
                    style={{
                      width: 6,
                      height: 36,
                      backgroundColor: "#1A3D1A",
                      borderRadius: 3,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--top5-kiwi)",
                      fontSize: 11,
                      color: "#1A3D1A",
                      opacity: 0.45,
                      flexShrink: 0,
                      width: 24,
                    }}
                  >
                    {svc.num}
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--top5-reggae)", color: "#1A3D1A" }}
                  >
                    {svc.name}
                  </span>
                  <span
                    className="ml-auto text-xs"
                    style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.4 }}
                  >
                    {isOpen ? "閉じる" : "開ける →"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <p
          className="text-xs mt-4"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.45 }}
        >
          ※ 上記以外のご相談もお気軽にどうぞ。まず話を聞くだけでも大丈夫です。
        </p>
      </div>
    </section>
  );
}
