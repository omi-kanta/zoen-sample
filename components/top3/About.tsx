export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
        {/* テキスト側 */}
        <div className="flex-1">
          <p
            className="text-xs mb-6 tracking-widest"
            style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
          >
            代表より
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold leading-loose mb-8"
            style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
          >
            庭は、つくって<br />終わりではない。
          </h2>
          <p
            className="text-sm leading-loose"
            style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
          >
            植物は毎年、季節を重ねるたびに姿を変えます。
            だからこそ、一度きりのお付き合いではなく、
            年間を通じて庭と向き合い、
            お客様の暮らしに寄り添い続けることを大切にしています。
          </p>
        </div>

        {/* メモカード */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="relative w-full max-w-sm p-8 shadow-md"
            style={{
              backgroundColor: "#FEFBE8",
              transform: "rotate(-2deg)",
              borderRadius: "2px",
              border: "1px solid #E8DFB8",
            }}
          >
            {/* 罫線 */}
            <div className="absolute inset-x-8 top-16 bottom-16 flex flex-col gap-7 pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  style={{ height: 1, backgroundColor: "#D4C9A8", opacity: 0.5 }}
                />
              ))}
            </div>

            <blockquote
              className="relative text-sm leading-loose mb-8"
              style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
            >
              「剪定は、切るより残す判断の方が難しい。どんな樹形を残したいか、
              お客様と話しながら決めるのが、いちばん大事な時間だと思っています」
            </blockquote>

            <p
              className="relative text-right text-base"
              style={{
                fontFamily: "var(--top3-yomogi)",
                color: "#8DC86A",
                transform: "rotate(1deg)",
                display: "inline-block",
                width: "100%",
              }}
            >
              榊Garden 代表　榊 翔麻
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
