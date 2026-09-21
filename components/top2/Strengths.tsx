const stats = [
  { num: "300", unit: "件以上", label: "累計施工件数", sub: "個人邸・法人" },
  { num: "15", unit: "年", label: "代表の職人経験", sub: "神奈川で修業・独立" },
  { num: "無料", unit: "", label: "現地調査・見積り", sub: "費用は施工から" },
  { num: "100%", unit: "", label: "自社施工", sub: "下請け不使用" },
];

export default function Strengths() {
  return (
    <section className="bg-[#F8F8F5] py-20 sm:py-28 px-6 sm:px-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-[#F8F8F5] px-6 py-8"
            >
              <div
                className={`font-bold text-gray-900 leading-none mb-2 ${
                  i === 0 ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"
                }`}
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.num}
                {s.unit && (
                  <span className="text-base sm:text-lg font-semibold ml-0.5">{s.unit}</span>
                )}
              </div>
              <div
                className="text-sm text-gray-700 font-semibold mb-1"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.label}
              </div>
              <div
                className="text-xs text-gray-400"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
