"use client";
import { useState } from "react";

const works = [
  {
    no: "No.01",
    title: "松の透かし剪定",
    location: "横浜市 K様邸",
    beforeImg: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&q=80",
    afterImg: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80",
    specs: [
      ["樹種", "黒松・赤松"],
      ["作業日数", "1日"],
      ["施工年", "2026年5月"],
      ["管理頻度", "年2回"],
    ],
    comment: "40年もの松。毎年の積み重ねが、樹形をつくっています。",
  },
  {
    no: "No.02",
    title: "生垣・庭木の整形",
    location: "川崎市 N様邸",
    beforeImg: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=500&q=80",
    afterImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    specs: [
      ["樹種", "ツツジ・サツキ"],
      ["延長", "約15m"],
      ["施工年", "2026年4月"],
      ["管理頻度", "年3回"],
    ],
    comment: "道路側からの目線を意識しながら、揃えすぎない自然な形に。",
  },
  {
    no: "No.03",
    title: "芝生の張り替え",
    location: "横浜市 M様邸",
    beforeImg: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500&q=80",
    afterImg: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&q=80",
    specs: [
      ["面積", "約20㎡"],
      ["芝種", "高麗芝"],
      ["作業日数", "2日"],
      ["施工年", "2025年5月"],
    ],
    comment: "傷んだ芝を全面張り替え。初夏に青々と育ってきました。",
  },
  {
    no: "No.04",
    title: "庭のリフォーム",
    location: "港区 Y様邸",
    beforeImg: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500&q=80",
    afterImg: "https://images.unsplash.com/photo-1490750967868-88df5691cc8c?w=500&q=80",
    specs: [
      ["面積", "約65㎡"],
      ["作業日数", "21日間"],
      ["施工年", "2025年10月"],
      ["内容", "植え替え・石敷き"],
    ],
    comment: "「もう少し手間が省けたら」というご要望から始まったリノベーション。",
  },
];

export default function Works() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section
      id="works"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#1A3D1A" }}
    >
      <style>{`
        .t5-card-wrap { perspective: 900px; }
        .t5-card { transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
        .t5-card.t5-flipped { transform: rotateY(180deg); }
        .t5-card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .t5-card-back { transform: rotateY(180deg); }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#EEC700" }}
        >
          カードをタップで施工前後を確認
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#F0E6C8",
            textShadow: "2px 2px 0 rgba(238,199,0,0.35)",
          }}
        >
          施工事例
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {works.map((w, i) => (
            <div key={w.no} className="t5-card-wrap" style={{ height: 360 }}>
              <div
                className={`t5-card relative w-full h-full cursor-pointer${flipped.has(i) ? " t5-flipped" : ""}`}
                onClick={() => toggle(i)}
                role="button"
                aria-label={`${w.title} の施工前後を見る`}
              >
                {/* Front: 施工後 */}
                <div className="t5-card-face absolute inset-0">
                  <div className="relative w-full h-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.afterImg}
                      alt={`${w.title} 施工後`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(26,61,26,0.88) 0%, transparent 45%)" }}
                    />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span
                        className="px-2 py-1 text-xs font-bold"
                        style={{
                          fontFamily: "var(--top5-kiwi)",
                          backgroundColor: "#EEC700",
                          color: "#1A3D1A",
                        }}
                      >
                        {w.no}
                      </span>
                      <span
                        className="px-2 py-1 text-xs font-bold"
                        style={{
                          fontFamily: "var(--top5-kiwi)",
                          backgroundColor: "#5BB346",
                          color: "white",
                        }}
                      >
                        施工後
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p
                        className="text-2xl font-bold text-white mb-1"
                        style={{ fontFamily: "var(--top5-reggae)" }}
                      >
                        {w.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "var(--top5-kiwi)", color: "rgba(255,255,255,0.7)" }}
                      >
                        {w.location}
                      </p>
                    </div>
                    <p
                      className="absolute top-3 right-3 text-xs"
                      style={{ fontFamily: "var(--top5-kiwi)", color: "rgba(255,255,255,0.55)" }}
                    >
                      タップで施工前 →
                    </p>
                  </div>
                </div>

                {/* Back: 施工前 + specs */}
                <div
                  className="t5-card-face t5-card-back absolute inset-0 flex flex-col"
                  style={{ backgroundColor: "#F9F5EC", border: "3px solid #1A3D1A" }}
                >
                  {/* Before image strip */}
                  <div className="relative flex-shrink-0" style={{ height: 140 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.beforeImg}
                      alt={`${w.title} 施工前`}
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(25%)" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, rgba(26,61,26,0.25), transparent)" }}
                    />
                    <span
                      className="absolute top-2 left-2 px-2 py-0.5 text-xs font-bold"
                      style={{
                        fontFamily: "var(--top5-kiwi)",
                        backgroundColor: "rgba(28,36,24,0.65)",
                        color: "white",
                      }}
                    >
                      施工前
                    </span>
                    <p
                      className="absolute top-2 right-2 text-xs"
                      style={{ fontFamily: "var(--top5-kiwi)", color: "rgba(255,255,255,0.55)" }}
                    >
                      ← タップで戻る
                    </p>
                    {/* Down arrow */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: "#EEC700", border: "2px solid #1A3D1A" }}
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M6 10 L0 0 L12 0 Z" fill="#1A3D1A" />
                      </svg>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex-1 p-5 pt-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p
                          className="text-base font-bold"
                          style={{ fontFamily: "var(--top5-reggae)", color: "#1A3D1A" }}
                        >
                          {w.title}
                        </p>
                        <span
                          className="text-xs px-2 py-0.5"
                          style={{
                            fontFamily: "var(--top5-kiwi)",
                            backgroundColor: "#EEC700",
                            color: "#1A3D1A",
                          }}
                        >
                          {w.no}
                        </span>
                      </div>
                      <table className="w-full text-sm mb-3">
                        <tbody>
                          {w.specs.map(([k, v]) => (
                            <tr key={k} style={{ borderBottom: "1px solid #D8D2C8" }}>
                              <td
                                className="py-1 pr-3 text-xs w-24"
                                style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.5 }}
                              >
                                {k}
                              </td>
                              <td
                                className="py-1 font-bold text-xs"
                                style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A" }}
                              >
                                {v}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p
                      className="text-xs leading-relaxed italic"
                      style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.6 }}
                    >
                      「{w.comment}」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
