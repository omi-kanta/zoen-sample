const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    description:
      "お電話（8:00〜18:00）またはメールフォームから。「どんな木があって、こんなことで困っている」程度で十分です。まずはお気軽にどうぞ。",
  },
  {
    step: "02",
    title: "無料の現地調査",
    description:
      "実際に庭を拝見し、木の状態・作業量・進め方をご説明します。費用が発生するのは施工からです。見積りに納得いただけなければ断っていただいても構いません。",
  },
  {
    step: "03",
    title: "お見積り・ご提案",
    description:
      "作業内容と金額を書面でご提示します。「この木だけ残したい」「予算はこのくらいで」といったご要望にも柔軟に対応します。",
  },
  {
    step: "04",
    title: "施工",
    description:
      "日程を調整して作業に入ります。作業中に気になることがあればいつでもお声がけください。終了後は切り枝・ゴミを含めて片付けてお渡しします。",
  },
  {
    step: "05",
    title: "アフターフォロー",
    description:
      "施工後の定期管理・次のシーズンの作業もお任せください。「あの時の担当者に頼みたい」という方が多く、長くお付き合いいただいているお客様が多いです。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-20 px-6" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "var(--top1-serif)" }}
        >
          施工の流れ
        </h2>
        <p
          className="text-sm text-gray-500 mb-14"
          style={{ fontFamily: "var(--top1-sans)" }}
        >
          はじめてのご依頼でも安心していただけるよう、各ステップを丁寧にご説明します。
        </p>

        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-6">
              {/* 左：番号＋縦線 */}
              <div className="flex flex-col items-center shrink-0 pt-1">
                <span
                  className="text-2xl font-bold text-green-700 leading-none"
                  style={{ fontFamily: "var(--top1-serif)" }}
                >
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 mt-3 mb-0"
                    style={{ width: 1, backgroundColor: "#c5d5b5", minHeight: 48 }}
                  />
                )}
              </div>

              {/* 右：コンテンツ */}
              <div className={`flex-1 ${i < steps.length - 1 ? "pb-12" : ""}`}>
                <h3
                  className="text-base font-bold text-gray-900 mb-2 leading-snug"
                  style={{ fontFamily: "var(--top1-serif)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "var(--top1-sans)" }}
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
