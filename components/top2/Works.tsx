const works = [
  {
    tag: "松の透かし剪定",
    location: "横浜市 K様邸",
    before: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    note: "樹齢40年の黒松。毎年11月に透かし剪定。",
  },
  {
    tag: "生垣・庭木の整形",
    location: "川崎市 N様邸",
    before: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    note: "ツツジ・サツキ生垣の年3回管理。",
  },
  {
    tag: "芝生の張り替え",
    location: "横浜市 M様邸",
    before: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    note: "傷んだ芝を全面撤去し高麗芝で張り替え。",
  },
  {
    tag: "庭のリフォーム",
    location: "港区 Y様邸",
    before: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
    after: "https://images.unsplash.com/photo-1490750967868-88df5691cc8c?w=800&q=80",
    note: "既存の庭木を活かしながら全体を再設計。",
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-white">
      <div className="px-6 sm:px-12 pt-20 pb-10">
        <p
          className="text-xs text-gray-400 mb-3 tracking-widest"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          施工事例
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          Before / After
        </h2>
        <p
          className="text-sm text-gray-400 mt-4"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          個人邸の剪定から、マンション共用部の年間管理まで。
        </p>
      </div>

      <div className="flex flex-col gap-px bg-stone-200">
        {works.map((w) => (
          <div key={w.tag} className="bg-white">
            {/* Before / After image split */}
            <div className="flex flex-col sm:flex-row" style={{ height: "clamp(220px, 30vw, 380px)" }}>
              {/* Before */}
              <div className="relative flex-1 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.before}
                  alt={`${w.tag} 施工前`}
                  className="w-full h-full object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span
                  className="absolute top-3 left-4 text-xs font-bold tracking-widest text-white"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  BEFORE
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:flex items-center justify-center w-10 shrink-0 bg-gray-900 relative z-10">
                <svg
                  width="16" height="24" viewBox="0 0 16 24" fill="none"
                  className="text-white"
                >
                  <path d="M2 12 L14 12 M9 6 L14 12 L9 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="sm:hidden flex items-center justify-center h-8 bg-gray-900">
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                  <path d="M12 2 L12 12 M6 7 L12 12 L18 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* After */}
              <div className="relative flex-1 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.after}
                  alt={`${w.tag} 施工後`}
                  className="w-full h-full object-cover"
                />
                <span
                  className="absolute top-3 left-4 text-xs font-bold tracking-widest text-white"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  AFTER
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4">
              <div>
                <p
                  className="text-xs text-gray-400 mb-0.5"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  {w.tag}
                </p>
                <p
                  className="text-sm font-bold text-gray-800"
                  style={{ fontFamily: "var(--top2-sans)" }}
                >
                  {w.location}
                </p>
              </div>
              <p
                className="text-xs text-gray-400 hidden sm:block max-w-[40%] text-right leading-relaxed"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {w.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 sm:px-12 py-10">
        <a
          href="#contact"
          className="text-sm font-bold border border-gray-900 text-gray-900 px-10 py-3 hover:bg-gray-900 hover:text-white transition-colors inline-block"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          施工事例についてお問い合わせ
        </a>
      </div>
    </section>
  );
}
