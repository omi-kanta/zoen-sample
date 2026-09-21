const steps = [
  {
    num: "01",
    title: "お問い合わせ",
    description:
      "お電話（8:00〜18:00）またはメールフォームから。「こんな木があって困っている」程度で大丈夫です。まずはお気軽にどうぞ。",
  },
  {
    num: "02",
    title: "無料の現地調査",
    description:
      "実際に庭を拝見し、木の状態・作業の範囲・進め方をご説明します。この段階では費用は一切かかりません。",
  },
  {
    num: "03",
    title: "お見積り・ご提案",
    description:
      "作業内容と金額を書面でご提示します。「この部分だけ残したい」「予算を抑えたい」など、ご要望に合わせて調整します。",
  },
  {
    num: "04",
    title: "施工",
    description:
      "日程を調整して作業に入ります。終了後は切り枝・ゴミを含めて片付けてからお渡しします。",
  },
  {
    num: "05",
    title: "アフターフォロー",
    description:
      "次のシーズンの定期管理・相談も引き続きお受けします。担当者が変わらないので、毎回一から説明する必要がありません。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-white py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs text-gray-400 mb-3 tracking-widest"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            ご依頼の流れ
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            はじめてでも、<br className="sm:hidden" />安心して進められます
          </h2>
        </div>

        {/* Desktop: horizontal 5列 */}
        <div className="hidden md:grid md:grid-cols-5 gap-px bg-stone-100">
          {steps.map((s) => (
            <div key={s.num} className="bg-white pr-6 pt-6 pb-8">
              <span
                className="block text-3xl font-bold text-stone-200 leading-none mb-5"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.num}
              </span>
              <h3
                className="text-sm font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-xs text-gray-400 leading-relaxed"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex gap-6 ${i < steps.length - 1 ? "pb-10" : ""}`}
            >
              <span
                className="text-2xl font-bold text-stone-200 leading-none shrink-0 pt-0.5 w-8"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.num}
              </span>
              <div style={{ borderTop: "1px solid #e7e5e4" }} className="flex-1 pt-1">
                <h3
                  className="text-sm font-bold text-gray-900 mb-2 mt-1"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-xs text-gray-400 leading-relaxed"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
