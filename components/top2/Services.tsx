const services = [
  {
    num: "01",
    title: "庭園設計・施工",
    description:
      "新築・リフォームに合わせた庭づくり。石組み・飛び石・植栽の選定から施工まで一貫して対応します。和風・洋風・坪庭、ご要望に応じてご提案します。",
  },
  {
    num: "02",
    title: "剪定・植栽管理",
    description:
      "松・ツツジ・サツキ・生垣など、樹種と時期を見極めて剪定します。切りすぎず、木が弱らないよう樹勢を見ながら判断するのが職人の腕の見せどころです。",
  },
  {
    num: "03",
    title: "芝生張り・造成",
    description:
      "高麗芝・野芝の新規張りから定期的な芝刈り・施肥まで。排水改善や地盤の均しなど、芝がきれいに育つ土台づくりからお任せください。",
  },
  {
    num: "04",
    title: "伐採・撤去",
    description:
      "大きくなりすぎたケヤキ・クスノキ・コニファーなどの伐採・根の撤去。台風後の倒木・枝折れにも迅速に対応します。",
  },
  {
    num: "05",
    title: "季節の手入れ",
    description:
      "5〜9月の草刈り・除草、秋の落ち葉清掃、冬の松や低木の冬囲い（縄がけ）など。季節ごとの庭の管理をまとめてお任せください。",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F8F5] py-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs text-gray-400 mb-3 tracking-widest"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            サービス内容
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            榊Gardenができること
          </h2>
        </div>

        <div className="divide-y divide-stone-300">
          {services.map((s) => (
            <div
              key={s.num}
              className="py-8 sm:py-10 flex gap-6 sm:gap-10 items-start"
            >
              <span
                className="text-sm font-bold text-gray-300 pt-1 w-8 shrink-0"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {s.num}
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
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
