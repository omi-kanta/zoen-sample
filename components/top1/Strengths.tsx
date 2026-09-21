const stats = [
  {
    number: "300",
    unit: "件以上",
    label: "累計施工実績",
    note: "個人邸・マンション・ビル",
  },
  {
    number: "15",
    unit: "年",
    label: "代表の職人経験",
    note: "神奈川県で修業、独立",
  },
  {
    number: "無料",
    unit: "",
    label: "現地調査・お見積り",
    note: "費用が発生するのは施工からです",
  },
  {
    number: "翌日",
    unit: "対応",
    label: "台風・緊急時の相談",
    note: "倒木・枝折れは早めにご連絡を",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 px-6" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "var(--top1-serif)" }}
        >
          15年、庭と向き合ってきました。
        </h2>
        <p
          className="text-sm text-gray-500 mb-14 leading-relaxed"
          style={{ fontFamily: "var(--top1-sans)" }}
        >
          横浜で独立してから、個人のお庭からマンション共用部まで数多くの現場を経験しました。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white px-8 py-10"
            >
              <div
                className="text-5xl font-bold text-green-700 mb-1 leading-none"
                style={{ fontFamily: "var(--top1-serif)" }}
              >
                {s.number}
                {s.unit && (
                  <span
                    className="text-xl font-semibold ml-1 text-green-600"
                    style={{ fontFamily: "var(--top1-sans)" }}
                  >
                    {s.unit}
                  </span>
                )}
              </div>
              <div
                className="text-sm font-semibold text-gray-800 mt-2 mb-1"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                {s.label}
              </div>
              <div
                className="text-xs text-gray-400"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
