const points = [
  {
    title: "年間管理契約",
    description:
      "月次・季節ごとの定期巡回で、施設の緑を常に整えます。芝刈り・剪定・落ち葉清掃・草刈りなど、年間スケジュールをまとめてお任せください。",
  },
  {
    title: "一括発注・窓口一本化",
    description:
      "複数棟・複数施設の管理を一社でまとめて受けます。担当者を固定しているので、引き継ぎや説明の手間が省けます。",
  },
  {
    title: "緊急時の迅速対応",
    description:
      "台風後の倒木・枝折れ、フェンスへの倒れ込みなど、緊急時のご連絡にも対応します。入居者様やテナントへの二次被害を防ぐため、速やかに動きます。",
  },
];

export default function Corporate() {
  return (
    <section id="corporate" className="py-20 px-6" style={{ backgroundColor: "#f0f4ec" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-14 md:gap-20">
          {/* 左：テキスト */}
          <div className="flex-1">
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--top1-serif)" }}
            >
              法人・管理組合のお客様へ
            </h2>
            <p
              className="text-sm text-gray-600 leading-loose mb-8"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              マンション共用部・ビルのエントランス・商業施設の植栽管理を承ります。
              「毎年業者が変わる」「連絡が取りにくい」といったお悩みに、
              担当者固定・年間契約でお応えします。
              まずは現地を見せていただければ、費用感をお伝えできます。
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-bold px-8 py-4 transition-colors"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              法人のご相談はこちら
            </a>
          </div>

          {/* 右：ポイントリスト */}
          <div className="flex-1 flex flex-col gap-8">
            {points.map((p, i) => (
              <div key={p.title} className="flex gap-5">
                <span
                  className="text-lg font-bold text-green-600 shrink-0 leading-tight pt-0.5"
                  style={{ fontFamily: "var(--top1-serif)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-sm font-bold text-gray-900 mb-1.5"
                    style={{ fontFamily: "var(--top1-serif)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "var(--top1-sans)" }}
                  >
                    {p.description}
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
