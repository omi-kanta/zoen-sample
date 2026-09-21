export default function Profile() {
  return (
    <section
      id="profile"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs tracking-widest mb-12"
          style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
        >
          代表紹介
        </p>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* 写真 */}
          <div className="w-full md:w-64 shrink-0">
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
                alt="榊 翔麻（ダミー写真）"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p
              className="text-xs mt-2"
              style={{ fontFamily: "var(--t4-mono)", color: "#1C2410", opacity: 0.28 }}
            >
              ※ダミー写真
            </p>
          </div>

          {/* テキスト */}
          <div className="flex-1">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-1"
              style={{ fontFamily: "var(--t4-head)", color: "#1C2410" }}
            >
              榊 翔麻
            </h2>
            <p
              className="text-xs mb-8 tracking-widest"
              style={{ fontFamily: "var(--t4-mono)", color: "#1C2410", opacity: 0.35 }}
            >
              SAKAKI Shoma
            </p>

            <blockquote
              className="text-lg sm:text-2xl font-bold leading-relaxed mb-8"
              style={{
                fontFamily: "var(--t4-head)",
                color: "#1C2410",
                borderLeft: "3px solid #D4820A",
                paddingLeft: "1.25rem",
              }}
            >
              「松を切るとき、10年後の樹形を考えてから鋏を入れます。庭は、毎年の判断の積み重ねでできています。」
            </blockquote>

            <p
              className="text-sm leading-loose mb-8"
              style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.65 }}
            >
              職人として現場に立つようになって15年。剪定には樹木ごとに適切な時期と方法があり、
              切りすぎると木が弱ります。いい仕事は、植物の状態をよく見て、
              今何をするかを判断することから始まります。
            </p>

            <div
              className="flex flex-col gap-1.5 pt-6"
              style={{ borderTop: "1px solid rgba(28,36,16,0.12)" }}
            >
              <p
                className="text-sm"
                style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.5 }}
              >
                造園技能士 一級
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.5 }}
              >
                職人歴 15年 ／ 累計施工 300件以上
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
