const points = [
  {
    num: "01",
    title: "年間管理が、いちばん得意です。",
    body: "単発の剪定より、季節を通じたお付き合いを大切にしています。植物の変化を知っているからこそ、次の一手が見えてきます。",
  },
  {
    num: "02",
    title: "植物を「切りすぎない」剪定。",
    body: "樹齢・樹種・お客様の好みを踏まえて判断します。弱らせない剪定が、長く美しい庭につながると考えています。",
  },
  {
    num: "03",
    title: "神奈川・東京全域に対応。",
    body: "横浜・川崎・東京23区を中心に、郊外エリアも相談可能です。まずは一度ご連絡ください。",
  },
];

export default function Strengths() {
  return (
    <section
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#EDF7E4" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* 大きな引用 */}
        <div className="mb-16 md:mb-20">
          <p
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-snug"
            style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
          >
            「ずっと、<br className="sm:hidden" />
            ここに来てくれて<br />
            よかった」<br />
            <span
              className="text-base sm:text-lg font-normal"
              style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
            >
              と言ってもらえる庭師でいたい。
            </span>
          </p>
        </div>

        {/* 3つの強み — 非対称レイアウト */}
        <div className="flex flex-col gap-12">
          {points.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-10 ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0">
                <span
                  className="text-6xl font-bold leading-none"
                  style={{ fontFamily: "var(--top6-klee)", color: "#8DC86A", opacity: 0.25 }}
                >
                  {p.num}
                </span>
              </div>
              <div
                className="flex-1 pt-2"
                style={{
                  borderTop: "1px solid #C5D8B5",
                }}
              >
                <h3
                  className="text-lg sm:text-xl font-semibold mb-3 mt-4"
                  style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-loose"
                  style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.72 }}
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
