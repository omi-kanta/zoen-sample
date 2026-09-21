const reviews = [
  {
    nickname: "M.K. さん（50代・女性）",
    work: "庭木の剪定",
    text: "作業の速さ人柄の良さ職人さんだから当たり前なのかも知れませんが今回は剪定だけの依頼でしたが庭の色々な事の質問にも丁寧に答えていただき好感が持てました 次回？家の周りの整備なども機会があったらお願いしたいと思いました。",
    rotate: "-1.5deg",
    bg: "#FEFBE8",
    accentColor: "#C8714A",
    borderStyle: "top" as const,
  },
  {
    nickname: "T.S. さん・Y.S. さん（30代・ご夫婦）",
    work: "剪定・伐採・草刈り",
    text: "どんぐりの木の剪定をしていただきました。 仕事も丁寧スピーディーでお人柄も良く、安心してお任せすることができました。 木がスッキリして気持ち良く新年が迎えられそうです。 どうもありがとうございました！",
    rotate: "1.2deg",
    bg: "#FFFFFF",
    accentColor: "#8DC86A",
    borderStyle: "left" as const,
  },
  {
    nickname: "H.T. さん（40代・男性）",
    work: "防草シート敷き",
    text: "チャットのやり取りも早く、施工までの段取りもスムーズにしていただけました。 良心的な価格で、親切、丁寧に対応していただき満足しています。 また機会があれば是非お願いしたいです。",
    rotate: "0deg",
    bg: "#EDF7E4",
    accentColor: "#8DC86A",
    borderStyle: "none" as const,
  },
  {
    nickname: "H.T. さん（40代・男性）",
    work: "実家の除草・庭手入れ",
    text: "榊Gardenさんにお願いして良かったです！荒れ果てた庭でしたが、きれいに芝をびっちり敷き詰めてくださり、最後の念入りなお掃除や水やりまでしていただき、仕上がりに大変満足しています。今後のお手入れなども詳しく説明いただきました。優しくて気持ちの良い方々で、愛犬も喜んでいました。ありがとうございました。。",
    rotate: "-0.8deg",
    bg: "#FFFFFF",
    accentColor: "#C8714A",
    borderStyle: "bottom" as const,
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
        >
          お客様の声
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-14"
          style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
        >
          ご依頼いただいた方から。
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-7 shadow-sm"
              style={{
                backgroundColor: r.bg,
                transform: `rotate(${r.rotate})`,
                border: "1px solid #E8DFB8",
                borderRadius: "2px",
                borderLeft:
                  r.borderStyle === "left"
                    ? `3px solid ${r.accentColor}`
                    : "1px solid #E8DFB8",
                borderTop:
                  r.borderStyle === "top"
                    ? `3px solid ${r.accentColor}`
                    : "1px solid #E8DFB8",
                borderBottom:
                  r.borderStyle === "bottom"
                    ? `3px solid ${r.accentColor}`
                    : "1px solid #E8DFB8",
              }}
            >
              <p
                className="text-xs mb-4 tracking-wide"
                style={{ fontFamily: "var(--top6-yomogi)", color: r.accentColor }}
              >
                {r.work}
              </p>
              <p
                className="text-sm leading-loose mb-5"
                style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.78 }}
              >
                {r.text}
              </p>
              <p
                className="text-xs text-right"
                style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.45 }}
              >
                {r.nickname}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
