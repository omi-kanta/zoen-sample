const navLinks = [
  { label: "コンセプト", href: "#concept" },
  { label: "施工事例", href: "#works" },
  { label: "サービス", href: "#services" },
  { label: "施工の流れ", href: "#flow" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 pt-14 pb-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-gray-900 font-bold text-lg tracking-widest mb-3"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              榊Garden
            </div>
            <address className="not-italic text-xs leading-6 text-gray-500" style={{ fontFamily: "var(--top2-sans)" }}>
              代表：榊 翔麻<br />
              〒000-0000 神奈川県横浜市○○区○○町0-0-0<br />
              TEL：000-0000-0000<br />
              営業：8:00〜18:00（日曜・祝日除く）
            </address>
          </div>

          {/* Nav */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p style={{ fontFamily: "var(--top2-sans)" }}>
            © 2026 榊Garden.
          </p>
          <p style={{ fontFamily: "var(--top2-sans)" }}>
            ※このページはサンプルです。掲載情報はすべて架空のものです。
          </p>
        </div>
      </div>
    </footer>
  );
}
