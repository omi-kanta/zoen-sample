const services = [
  {
    num: "01",
    title: "剪定・植栽管理",
    description:
      "松・ツツジ・サツキ・生垣など、樹種ごとの適切な時期と方法で剪定します。形を整えるだけでなく、木が弱らないよう樹勢を見ながら判断します。",
  },
  {
    num: "02",
    title: "庭園設計・施工",
    description:
      "新築・リフォームに合わせた庭づくり。和風・洋風・坪庭など、お客様の暮らしに合ったスタイルをご提案します。石組み・飛び石・植栽まで一貫して対応。",
  },
  {
    num: "03",
    title: "芝生張り・芝刈り管理",
    description:
      "高麗芝・野芝・西洋芝の新規張りから、定期的な芝刈り・施肥まで。芝の状態を見ながら年間を通じて管理します。",
  },
  {
    num: "04",
    title: "草刈り・除草",
    description:
      "雑草が勢いを増す5〜9月を中心に、定期的な草刈りを承ります。除草剤の使用可否もご要望に応じて相談できます。",
  },
  {
    num: "05",
    title: "伐採・撤去",
    description:
      "大きくなりすぎた庭木の伐採から根の撤去まで。台風後の倒木・枝折れにも迅速に対応します。",
  },
  {
    num: "06",
    title: "季節の手入れ",
    description:
      "秋の落ち葉清掃、冬囲い（松・低木の縄がけ）、春の施肥など。季節ごとの庭の管理をまとめてお任せいただけます。",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "var(--top1-serif)" }}
        >
          サービス内容
        </h2>
        <p
          className="text-sm text-gray-500 mb-14"
          style={{ fontFamily: "var(--top1-sans)" }}
        >
          庭に関することなら、一本の木のことでもお気軽にご相談ください。
        </p>

        <div className="flex flex-col divide-y divide-stone-100">
          {services.map((s) => (
            <div
              key={s.num}
              className="py-7 flex flex-col sm:flex-row sm:gap-10"
            >
              <div
                className="text-xs text-green-600 font-semibold mb-2 sm:mb-0 sm:pt-1 shrink-0 w-10"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                {s.num}
              </div>
              <div className="flex-1">
                <h3
                  className="text-base font-bold text-gray-900 mb-2"
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
