const heroPhotos = [
  { src: "/hero/top6/01.jpg", alt: "作業風景1", rotate: "-3deg", bg: "#D8EAC8" },
  { src: "/hero/top6/02.jpg", alt: "作業風景2", rotate: "2.5deg", bg: "#E8DFB8" },
  { src: "/hero/top6/03.jpg", alt: "作業風景3", rotate: "1.2deg", bg: "#D8EAC8" },
  { src: "/hero/top6/04.jpg", alt: "作業風景4", rotate: "-2deg", bg: "#E8DFB8" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "#F7F2E8", paddingTop: "56px" }}
    >
      {/* 背景の柔らかい丸 */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ backgroundColor: "#8DC86A", opacity: 0.12 }}
      />
      <div
        className="absolute bottom-20 -left-16 w-60 h-60 rounded-full pointer-events-none"
        style={{ backgroundColor: "#F2C450", opacity: 0.14 }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-10">

        {/* テキスト */}
        <div className="md:w-[36%] shrink-0 relative z-10">
          <p
            className="text-base mb-5"
            style={{
              fontFamily: "var(--top6-yomogi)",
              color: "#8DC86A",
              transform: "rotate(-1.5deg)",
              display: "inline-block",
            }}
          >
            庭のある暮らし、はじめませんか
          </p>

          <h1
            className="text-4xl sm:text-5xl font-semibold leading-snug mb-6"
            style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
          >
            庭は、365日、<br />
            生きています。
          </h1>

          <p
            className="text-base leading-loose mb-3"
            style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.75 }}
          >
            剪定、植栽、草刈り、落ち葉、冬囲い。<br />
            一年の庭仕事を、ずっとそばで続けます。
          </p>
          <p
            className="text-sm leading-loose mb-10"
            style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.55 }}
          >
            神奈川県・東京都を中心に対応。<br />
            まずは無料でご相談ください。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="text-sm font-medium px-8 py-3 rounded-full transition-opacity hover:opacity-85"
              style={{ fontFamily: "var(--top6-zen)", backgroundColor: "#8DC86A", color: "white" }}
            >
              無料で相談する
            </a>
            <a
              href="#works"
              className="text-sm font-medium px-8 py-3 rounded-full border transition-colors hover:bg-[#C8714A] hover:text-white"
              style={{ fontFamily: "var(--top6-zen)", borderColor: "#C8714A", color: "#C8714A" }}
            >
              施工事例を見る
            </a>
          </div>
        </div>

        {/* 散らばし写真 */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-3 w-full">
            {heroPhotos.map((photo, i) => (
              <div
                key={i}
                className="shadow-lg overflow-hidden"
                style={{
                  transform: `rotate(${photo.rotate})`,
                  backgroundColor: "white",
                  padding: "7px 7px 32px 7px",
                  border: "1px solid #E0D9C8",
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "4/3", backgroundColor: photo.bg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* スクロールヒント */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden
      >
        <span
          className="text-xs"
          style={{ fontFamily: "var(--top6-yomogi)", color: "#5C4033", opacity: 0.4 }}
        >
          ご相談はお気軽に
        </span>
        <div style={{ width: 1, height: 28, backgroundColor: "#5C4033", opacity: 0.25 }} />
      </div>
    </section>
  );
}
