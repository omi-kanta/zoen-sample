const reviews = [
  {
    name: "田中 様",
    location: "横浜市・個人邸",
    tag: "松・ツツジの定期剪定",
    text: "うちの松は樹齢40年近くになるんですが、他の業者さんには「難しい」と断られたことがあって。榊さんに来ていただいてから3年、毎年すっきりとした形に仕上げてくれています。作業後の掃除も丁寧で、ご近所さんからも声をかけていただくようになりました。",
  },
  {
    name: "鈴木 様",
    location: "世田谷区・個人邸",
    tag: "庭全体のリフォーム",
    text: "新築のタイミングで庭を一から作ってもらいました。芝のことも低木の選び方も、こちらの希望を全部聞いてくれたうえで提案してもらえて、とても満足しています。",
  },
  {
    name: "山田 様",
    location: "川崎市・マンション管理組合",
    tag: "共用部の年間管理",
    text: "定期訪問のたびに状態を報告してくれるので、管理組合としても助かっています。急な依頼にも快く対応してくれました。",
  },
];

export default function Testimonials() {
  const [featured, ...rest] = reviews;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "var(--top1-serif)" }}
        >
          ご依頼いただいた方から
        </h2>
        <p
          className="text-sm text-gray-400 mb-12"
          style={{ fontFamily: "var(--top1-sans)" }}
        >
          ※掲載は了解を得たお客様のみです。
        </p>

        <div className="flex flex-col gap-10">
          {/* メインレビュー */}
          <div className="border-l-4 border-green-600 pl-6 py-2">
            <p
              className="text-xs text-green-700 mb-4 tracking-wide"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              {featured.tag}
            </p>
            <blockquote
              className="text-base sm:text-lg text-gray-800 leading-relaxed mb-5"
              style={{ fontFamily: "var(--top1-serif)" }}
            >
              「{featured.text}」
            </blockquote>
            <div
              className="text-sm text-gray-500"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              {featured.name}　{featured.location}
            </div>
          </div>

          {/* サブレビュー2件 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-stone-100">
            {rest.map((r) => (
              <div key={r.name}>
                <p
                  className="text-xs text-green-700 mb-3 tracking-wide"
                  style={{ fontFamily: "var(--top1-sans)" }}
                >
                  {r.tag}
                </p>
                <blockquote
                  className="text-sm text-gray-700 leading-relaxed mb-4"
                  style={{ fontFamily: "var(--top1-serif)" }}
                >
                  「{r.text}」
                </blockquote>
                <div
                  className="text-xs text-gray-400"
                  style={{ fontFamily: "var(--top1-sans)" }}
                >
                  {r.name}　{r.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
