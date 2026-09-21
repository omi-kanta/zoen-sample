const reviews = [
  {
    name: "田中 様",
    location: "横浜市・個人邸",
    tag: "松・ツツジの年間管理",
    text: "庭の松が30年もので、ずっと自分で手入れしていたんですが、年齢的に難しくなってきてお願いしました。最初に来たとき「樹形がしっかりしているから大丈夫です」と言ってもらえて安心しました。3年目の今も毎年同じ方が来てくれるので、木の状態を一から説明しなくていいのが助かっています。",
  },
  {
    name: "鈴木 様",
    location: "世田谷区・個人邸",
    tag: "新築に合わせた植栽・庭づくり",
    text: "建物のデザインに合う庭にしたいと伝えたら、石の選び方から低木の配置まで丁寧に説明してもらえました。引き渡し後も相談に来てくれます。",
  },
  {
    name: "山田 様",
    location: "川崎市・マンション管理組合",
    tag: "共用部の定期管理契約",
    text: "前の業者は毎年担当が変わっていたんですが、榊さんは同じ人が来てくれるので引き継ぎの手間がなくなりました。入居者からも好評です。",
  },
];

export default function Testimonials() {
  const [main, ...sub] = reviews;

  return (
    <section className="bg-[#F8F8F5] py-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs text-gray-400 mb-3 tracking-widest"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            お客様の声
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            ご利用いただいた<br className="sm:hidden" />お客様より
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-px bg-stone-200">
          {/* メイン：大きく */}
          <div className="bg-[#F8F8F5] md:w-3/5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p
                className="text-xs text-gray-400 mb-6 tracking-widest"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {main.tag}
              </p>
              <div
                className="text-6xl text-stone-200 font-bold leading-none mb-4 select-none"
                style={{ fontFamily: "var(--top2-sans)" }}
                aria-hidden
              >
                &ldquo;
              </div>
              <p
                className="text-base leading-loose text-gray-700 mb-10"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {main.text}
              </p>
            </div>
            <div style={{ borderTop: "1px solid #d6d3d1" }} className="pt-5">
              <div
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {main.name}
              </div>
              <div
                className="text-xs text-gray-400 mt-0.5"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {main.location}
              </div>
            </div>
          </div>

          {/* サブ：縦に2件 */}
          <div className="md:w-2/5 flex flex-col gap-px bg-stone-200">
            {sub.map((r) => (
              <div key={r.name} className="bg-[#F8F8F5] p-8 flex flex-col justify-between flex-1">
                <div>
                  <p
                    className="text-xs text-gray-400 mb-4 tracking-widest"
                    style={{ fontFamily: "var(--top2-sans)" }}
                  >
                    {r.tag}
                  </p>
                  <p
                    className="text-sm leading-relaxed text-gray-600"
                    style={{ fontFamily: "var(--top2-sans)" }}
                  >
                    {r.text}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid #d6d3d1" }} className="mt-6 pt-4">
                  <div
                    className="text-xs font-bold text-gray-900"
                    style={{ fontFamily: "var(--top2-sans)" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs text-gray-400 mt-0.5"
                    style={{ fontFamily: "var(--top2-sans)" }}
                  >
                    {r.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
