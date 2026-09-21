export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* ブランド・住所 */}
          <div>
            <div
              className="text-xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--top1-serif)" }}
            >
              榊Garden
            </div>
            <address
              className="not-italic text-sm leading-7 text-gray-500"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              代表：榊 翔麻<br />
              〒000-0000<br />
              神奈川県横浜市○○区○○町0-0-0<br />
              TEL：000-0000-0000<br />
              受付：8:00〜18:00（日・祝除く）
            </address>
          </div>

          {/* サービスナビ */}
          <div>
            <h4
              className="text-xs tracking-widest text-gray-400 mb-4"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              サービス
            </h4>
            <ul
              className="space-y-2.5 text-sm text-gray-600"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              {[
                "剪定・植栽管理",
                "庭園設計・施工",
                "芝生張り・芝刈り管理",
                "草刈り・除草",
                "伐採・撤去",
                "法人向け年間管理",
              ].map((label) => (
                <li key={label}>
                  <a href="#services" className="hover:text-green-700 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* サイトナビ */}
          <div>
            <h4
              className="text-xs tracking-widest text-gray-400 mb-4"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              メニュー
            </h4>
            <ul
              className="space-y-2.5 text-sm text-gray-600"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              {[
                { label: "施工実績・強み", href: "#strengths" },
                { label: "お客様の声", href: "#testimonials" },
                { label: "施工事例", href: "#works" },
                { label: "施工の流れ", href: "#flow" },
                { label: "法人のお客様へ", href: "#corporate" },
                { label: "お問い合わせ", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-green-700 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-400"
          style={{ borderTop: "1px solid #e7e3db", fontFamily: "var(--top1-sans)" }}
        >
          <p>© 2026 榊Garden.</p>
          <p>※このページはサンプルです。掲載の情報・電話番号・住所はすべて架空のものです。</p>
        </div>
      </div>
    </footer>
  );
}
