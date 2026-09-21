export default function Profile() {
  return (
    <section
      id="profile"
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs mb-12 tracking-widest"
          style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
        >
          代表紹介
        </p>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* 写真 */}
          <div className="w-full md:w-56 shrink-0">
            <div
              className="overflow-hidden shadow-sm"
              style={{
                aspectRatio: "3/4",
                border: "1px solid #D4C9A8",
                borderRadius: "2px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile/top6/photo.jpg"
                alt="榊 翔麻"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* テキスト */}
          <div className="flex-1">
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-1"
              style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
            >
              榊 翔麻
            </h2>
            <p
              className="text-sm mb-8 tracking-widest"
              style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
            >
              代表・造園技能士 一級
            </p>

            {/* 代表のことば */}
            <div
              className="mb-8 p-6 shadow-sm"
              style={{
                backgroundColor: "#FEFBE8",
                border: "1px solid #E8DFB8",
                borderRadius: "2px",
                transform: "rotate(-0.8deg)",
              }}
            >
              <p
                className="text-sm leading-loose"
                style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
              >
                「剪定は、切るより残す判断の方が難しい。どんな樹形を残したいか、
                お客様と話しながら決めるのが、いちばん大事な時間だと思っています」
              </p>
              <p
                className="text-right text-xs mt-3"
                style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
              >
                ― 榊 翔麻
              </p>
            </div>

            {/* 経歴 */}
            <div className="mb-6">
              <p
                className="text-xs mb-2 tracking-widest"
                style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
              >
                経歴
              </p>
              <p
                className="text-sm leading-loose"
                style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.72 }}
              >
                業界経験10年！樹木の状態やお庭の雰囲気に合わせて丁寧に剪定いたします。複数本まとめてご依頼の場合は、1本ごとの料金ではなく作業時間を基準にお見積りするのでお得にご案内可能です！分からない場合、お写真送付していただければ概算でお見積もりさせていただきます。
作業後の清掃・ゴミ回収までお任せください
              </p>
            </div>

            {/* 得意な作業 */}
            <div className="mb-6">
              <p
                className="text-xs mb-2 tracking-widest"
                style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
              >
                得意な作業
              </p>
              <p
                className="text-sm leading-loose"
                style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.72 }}
              >
                松・モミジ・ツバキなど繊細な樹形の剪定、生垣の整形、
                新規植栽の設計・施工、落葉樹の強剪定
              </p>
            </div>

            {/* 大事にしていること */}
            <div
              className="pt-6"
              style={{ borderTop: "1px solid rgba(92,64,51,0.1)" }}
            >
              <p
                className="text-xs mb-2 tracking-widest"
                style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
              >
                大事にしていること
              </p>
              <p
                className="text-sm leading-loose"
                style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.72 }}
              >
                庭の見どころは、作業した翌日だけではありません。半年後・一年後に
                「あのとき整えてよかった」と感じてもらえる仕事をしたいと思っています。
                そのためにも、一度きりではなく長いお付き合いを大切にしています。
              </p>
            </div>
          </div>
        </div>

        <p
          className="mt-12 text-xs"
          style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.3 }}
        >
          ※内容はサンプルです（実際の内容は後日差し替え）
        </p>
      </div>
    </section>
  );
}
