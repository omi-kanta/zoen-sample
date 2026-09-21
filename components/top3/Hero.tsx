export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "#F7F2E8", paddingTop: "56px" }}
    >
      {/* CSS animation — prefers-reduced-motion 対応 */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .top3-stem {
            stroke-dasharray: 950;
            stroke-dashoffset: 950;
            animation: top3DrawStem 2.2s ease-out forwards;
          }
          .top3-leaf { opacity: 0; animation: top3FadeIn 0.45s ease-out forwards; }
          .top3-leaf-1 { animation-delay: 0.7s; }
          .top3-leaf-2 { animation-delay: 1.1s; }
          .top3-leaf-3 { animation-delay: 1.5s; }
          .top3-leaf-4 { animation-delay: 1.9s; }
          .top3-bloom  { opacity: 0; animation: top3FadeIn 0.5s ease-out 2.3s forwards; }
        }
        @keyframes top3DrawStem { to { stroke-dashoffset: 0; } }
        @keyframes top3FadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .top3-stem { stroke-dasharray: none !important; stroke-dashoffset: 0 !important; }
          .top3-leaf, .top3-bloom { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      {/* 背景の柔らかい丸 */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ backgroundColor: "#8DC86A", opacity: 0.12 }}
      />
      <div
        className="absolute bottom-20 -left-16 w-60 h-60 rounded-full pointer-events-none"
        style={{ backgroundColor: "#F2C450", opacity: 0.14 }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-4">
        {/* テキスト side */}
        <div className="flex-1 relative z-10 max-w-lg">
          <p
            className="text-base mb-5"
            style={{
              fontFamily: "var(--top3-yomogi)",
              color: "#8DC86A",
              transform: "rotate(-1.5deg)",
              display: "inline-block",
            }}
          >
            庭のある暮らし、はじめませんか
          </p>

          <h1
            className="text-4xl sm:text-5xl font-semibold leading-snug mb-6"
            style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
          >
            庭は、365日、<br />
            生きています。
          </h1>

          <p
            className="text-base leading-loose mb-3"
            style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
          >
            剪定、植栽、草刈り、落ち葉、冬囲い。<br />
            一年の庭仕事を、ずっとそばで続けます。
          </p>
          <p
            className="text-sm leading-loose mb-10"
            style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.55 }}
          >
            神奈川県・東京都を中心に対応。<br />
            まずは無料でご相談ください。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="text-sm font-medium px-8 py-3 rounded-full transition-opacity hover:opacity-85"
              style={{ fontFamily: "var(--top3-zen)", backgroundColor: "#8DC86A", color: "white" }}
            >
              無料で相談する
            </a>
            <a
              href="#works"
              className="text-sm font-medium px-8 py-3 rounded-full border transition-colors hover:bg-[#C8714A] hover:text-white"
              style={{ fontFamily: "var(--top3-zen)", borderColor: "#C8714A", color: "#C8714A" }}
            >
              施工事例を見る
            </a>
          </div>
        </div>

        {/* SVG 植物アニメーション */}
        <div className="flex-1 flex justify-center items-center">
          <svg
            viewBox="0 0 280 440"
            className="w-full max-w-[260px] sm:max-w-[300px]"
            fill="none"
            aria-hidden
          >
            {/* 地面 */}
            <ellipse cx="140" cy="428" rx="88" ry="10" fill="#D4C9A8" opacity="0.5" />
            <ellipse cx="140" cy="428" rx="60" ry="6" fill="#C5B8A0" opacity="0.4" />

            {/* 茎（メインアニメーション） */}
            <path
              className="top3-stem"
              d="M140 422 C137 390 130 360 133 328 C136 296 148 270 145 240 C142 210 130 182 134 155 C138 128 148 105 144 78 C140 51 138 34 140 12"
              stroke="#5C8A3C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* 葉 1 左下 */}
            <g className="top3-leaf top3-leaf-1">
              <path
                d="M133 328 C112 312 93 314 98 296 C103 278 128 290 133 316Z"
                fill="#8DC86A"
                opacity="0.9"
              />
              <path
                d="M133 328 C116 315 103 300 99 295"
                stroke="#5C8A3C"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </g>

            {/* 葉 2 右 */}
            <g className="top3-leaf top3-leaf-2">
              <path
                d="M145 268 C167 252 185 258 179 240 C173 222 150 234 145 260Z"
                fill="#A8D882"
                opacity="0.85"
              />
              <path
                d="M145 268 C162 255 177 244 178 241"
                stroke="#5C8A3C"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </g>

            {/* 葉 3 左 */}
            <g className="top3-leaf top3-leaf-3">
              <path
                d="M134 200 C112 183 94 188 100 170 C106 152 128 165 134 193Z"
                fill="#8DC86A"
                opacity="0.9"
              />
              <path
                d="M134 200 C118 188 104 177 100 171"
                stroke="#5C8A3C"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </g>

            {/* 葉 4 右上 */}
            <g className="top3-leaf top3-leaf-4">
              <path
                d="M144 120 C166 103 184 110 178 92 C172 74 150 87 144 114Z"
                fill="#B8E094"
                opacity="0.8"
              />
              <path
                d="M144 120 C160 107 174 97 177 93"
                stroke="#5C8A3C"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </g>

            {/* 花 */}
            <g className="top3-bloom">
              {/* 花びら */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <ellipse
                  key={i}
                  cx="140"
                  cy="12"
                  rx="7"
                  ry="13"
                  fill="#F2C450"
                  opacity="0.85"
                  transform={`rotate(${deg} 140 22)`}
                />
              ))}
              <circle cx="140" cy="22" r="9" fill="#F7E090" />
              <circle cx="140" cy="22" r="5" fill="#F2C450" />
            </g>

            {/* 地面の小花 */}
            <circle cx="76" cy="426" r="4" fill="#C8714A" opacity="0.5" />
            <circle cx="198" cy="424" r="3" fill="#8DC86A" opacity="0.5" />
            <circle cx="228" cy="428" r="2.5" fill="#F2C450" opacity="0.45" />
            <circle cx="56" cy="430" r="2" fill="#8DC86A" opacity="0.35" />
          </svg>
        </div>
      </div>

      {/* スクロールヒント */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden
      >
        <span
          className="text-xs"
          style={{ fontFamily: "var(--top3-yomogi)", color: "#5C4033", opacity: 0.4 }}
        >
          季節をめくる
        </span>
        <div style={{ width: 1, height: 28, backgroundColor: "#5C4033", opacity: 0.25 }} />
      </div>
    </section>
  );
}
