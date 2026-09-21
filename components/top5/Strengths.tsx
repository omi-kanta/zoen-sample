const stats = [
  {
    value: "300",
    unit: "件+",
    label: "累計施工実績",
    note: "横浜市を中心に、神奈川県全域で対応",
  },
  {
    value: "15",
    unit: "年",
    label: "職人歴",
    note: "一から学んだ技術と、現場で積んだ経験",
  },
  {
    value: "翌週",
    unit: "",
    label: "最短対応",
    note: "お急ぎの場合もまずご相談ください",
  },
];

const points = [
  {
    title: "見積りは無料・明朗会計",
    body: "現地を見てからの正直なご提案です。追加料金が発生する場合は必ず事前にお伝えします。",
  },
  {
    title: "剪定くずはすべて持ち帰り",
    body: "作業後の後片付けも含めてご依頼ください。近隣への配慮も徹底します。",
  },
  {
    title: "担当者が変わりません",
    body: "年間管理のお客様は、毎年同じ職人が伺います。庭の状態を引き継ぎながら継続的に管理。",
  },
];

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F0E6C8" }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
        >
          なぜ榊Gardenなのか
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-14"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#1A3D1A",
            textShadow: "2px 2px 0 rgba(232,83,42,0.2)",
          }}
        >
          強み
        </h2>

        {/* Big stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-5 sm:p-8"
              style={{
                backgroundColor: i === 1 ? "#EEC700" : "#F9F5EC",
                border: `3px solid #1A3D1A`,
                position: "relative",
              }}
            >
              {/* Risograph offset layer */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  border: "3px solid rgba(232,83,42,0.25)",
                  transform: "translate(4px, 4px)",
                  pointerEvents: "none",
                }}
              />
              <div
                className="text-4xl sm:text-6xl font-bold leading-none"
                style={{
                  fontFamily: "var(--top5-reggae)",
                  color: "#1A3D1A",
                }}
              >
                {s.value}
                <span className="text-2xl sm:text-3xl">{s.unit}</span>
              </div>
              <p
                className="text-sm font-bold mt-2 mb-1"
                style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
              >
                {s.label}
              </p>
              <p
                className="text-xs hidden sm:block leading-relaxed"
                style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.6 }}
              >
                {s.note}
              </p>
            </div>
          ))}
        </div>

        {/* Points */}
        <div className="flex flex-col gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="flex items-start gap-5 p-6"
              style={{
                backgroundColor: "#F9F5EC",
                border: "2px solid #1A3D1A",
              }}
            >
              <span
                className="text-3xl font-bold shrink-0 leading-none mt-0.5"
                style={{ fontFamily: "var(--top5-reggae)", color: "#EEC700", WebkitTextStroke: "1.5px #1A3D1A" }}
              >
                0{i + 1}
              </span>
              <div>
                <p
                  className="font-bold text-base mb-1"
                  style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
                >
                  {p.title}
                </p>
                <p
                  className="text-sm leading-loose"
                  style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.65 }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
