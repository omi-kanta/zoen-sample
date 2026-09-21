const navLinks = [
  { label: "サービス", href: "#services" },
  { label: "施工事例", href: "#works" },
  { label: "施工の流れ", href: "#flow" },
  { label: "法人の方", href: "#corporate" },
  { label: "代表", href: "#profile" },
  { label: "見積依頼", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#F4EFE4", borderTop: "1px solid #D8D2C8" }}>
      {/* Drawing info bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-6 sm:px-12 py-3"
        style={{ borderBottom: "1px solid #D8D2C8", backgroundColor: "rgba(28,36,24,0.03)" }}
      >
        <div className="flex items-center gap-6">
          {/* Trim marks */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <line x1="7" y1="0" x2="7" y2="5" stroke="#D8D2C8" strokeWidth="0.75" />
            <line x1="0" y1="7" x2="5" y2="7" stroke="#D8D2C8" strokeWidth="0.75" />
            <line x1="9" y1="7" x2="14" y2="7" stroke="#D8D2C8" strokeWidth="0.75" />
            <line x1="7" y1="9" x2="7" y2="14" stroke="#D8D2C8" strokeWidth="0.75" />
          </svg>
          <span
            className="text-xs tracking-widest"
            style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
          >
            DWG: SK-2026-01
          </span>
          <span
            className="text-xs tracking-widest hidden sm:inline"
            style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
          >
            S=1:100
          </span>
          <span
            className="text-xs tracking-widest hidden sm:inline"
            style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
          >
            DATE: 2026.09
          </span>
        </div>
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
        >
          SHEET 01/01
        </span>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-14 flex flex-col sm:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-7 h-7 flex items-center justify-center text-xs font-medium tracking-wider"
              style={{
                border: "1.5px solid #1C2418",
                fontFamily: "var(--top4-mono)",
                color: "#1C2418",
              }}
            >
              SK
            </div>
            <span
              className="text-base font-semibold"
              style={{ fontFamily: "var(--top4-mincho)", color: "#1C2418" }}
            >
              榊Garden
            </span>
          </div>
          <address
            className="not-italic text-xs leading-7"
            style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.45 }}
          >
            代表：榊 翔麻<br />
            〒000-0000 神奈川県横浜市○○区○○町0-0-0<br />
            TEL: 000-0000-0000<br />
            8:00〜18:00（日・祝除く）
          </address>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 content-start">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm hover:opacity-50 transition-opacity"
              style={{ fontFamily: "var(--top4-kaku)", color: "#1C2418" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        style={{ borderTop: "1px solid #D8D2C8" }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
        >
          © 2026 榊Garden.
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.3 }}
        >
          ※このページはサンプルです。掲載情報はすべて架空のものです。
        </p>
      </div>
    </footer>
  );
}
