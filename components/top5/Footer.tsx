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
    <footer style={{ backgroundColor: "#1A3D1A" }}>
      <style>{`
        @keyframes t5-worm {
          0%   { transform: scaleX(1) translateX(0); }
          40%  { transform: scaleX(1.08) translateX(6px); }
          100% { transform: scaleX(1) translateX(0); }
        }
        .t5-worm { animation: t5-worm 2.4s ease-in-out infinite; transform-origin: left center; }
        @media (prefers-reduced-motion: reduce) { .t5-worm { animation: none; } }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-14 flex flex-col sm:flex-row justify-between gap-10">
        {/* Brand + worm */}
        <div className="shrink-0">
          <p
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--top5-reggae)", color: "#F0E6C8" }}
          >
            榊Garden
          </p>
          <address
            className="not-italic text-xs leading-7 mb-6"
            style={{ fontFamily: "var(--top5-kiwi)", color: "#F0E6C8", opacity: 0.45 }}
          >
            代表：榊 翔麻<br />
            〒000-0000 神奈川県横浜市○○区○○町0-0-0<br />
            TEL: 000-0000-0000<br />
            8:00〜18:00（日・祝除く）
          </address>

          {/* Earthworm */}
          <div className="t5-worm" aria-hidden>
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
              {/* Body segments */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <ellipse
                  key={i}
                  cx={10 + i * 18}
                  cy={16 + Math.sin(i * 1.1) * 5}
                  rx={10}
                  ry={7}
                  fill={i % 2 === 0 ? "#E8532A" : "#C94420"}
                  opacity={0.85}
                />
              ))}
              {/* Head */}
              <ellipse cx={118} cy={16 + Math.sin(5 * 1.1) * 5} rx={10} ry={8} fill="#E8532A" />
              {/* Eyes */}
              <circle cx={121} cy={14 + Math.sin(5 * 1.1) * 5} r={2} fill="white" />
              <circle cx={121.5} cy={14 + Math.sin(5 * 1.1) * 5} r={1} fill="#1A3D1A" />
            </svg>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 content-start">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm hover:opacity-50 transition-opacity"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#F0E6C8" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(240,230,200,0.15)" }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#F0E6C8", opacity: 0.35 }}
        >
          © 2026 榊Garden.
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#F0E6C8", opacity: 0.3 }}
        >
          ※このページはサンプルです。掲載情報はすべて架空のものです。
        </p>
      </div>
    </footer>
  );
}
