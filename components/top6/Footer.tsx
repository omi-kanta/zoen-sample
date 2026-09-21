const navGroups = [
  {
    heading: "コンテンツ",
    items: [
      { label: "施工事例", href: "#works" },
      { label: "代表紹介", href: "#profile" },
    ],
  },
  {
    heading: "サービス",
    items: [
      { label: "サービス一覧", href: "#services" },
      { label: "施工の流れ", href: "#flow" },
      { label: "法人・管理組合の方へ", href: "#corporate" },
      { label: "お問い合わせ", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#EDF7E4" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 md:gap-20">
        {/* ブランド */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="22" height="22" viewBox="0 0 26 26" fill="none" aria-hidden>
              <path
                d="M13 24 C13 24 3 17 3 10 C3 5 8 1 13 1 C18 1 23 5 23 10 C23 17 13 24 13 24Z"
                fill="#8DC86A"
                opacity="0.85"
              />
              <path d="M13 24 L13 7" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13 16 C10 13 7 14 7 14" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" />
              <path d="M13 20 C16 17 19 18 19 18" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
            >
              榊Garden
            </span>
          </div>
          <p
            className="text-sm leading-loose mb-6"
            style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.65 }}
          >
            神奈川県・東京都を中心に、<br />
            年間を通じた庭の管理をお引き受けします。<br />
            剪定・植栽・草刈りから冬囲いまで。
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.4 }}
          >
            ※ これはサンプルサイトです。実在の企業・サービスとは関係ありません。
          </p>
        </div>

        {/* ナビ */}
        <div className="flex gap-12 sm:gap-20">
          {navGroups.map((g) => (
            <div key={g.heading}>
              <p
                className="text-xs mb-4 tracking-widest"
                style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
              >
                {g.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm hover:opacity-60 transition-opacity"
                      style={{ fontFamily: "var(--top6-zen)", color: "#5C4033" }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderTop: "1px solid #C5D8B5" }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.4 }}
        >
          © 2026 榊Garden.
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A", opacity: 0.6 }}
        >
          ※サンプルです
        </p>
      </div>
    </footer>
  );
}
