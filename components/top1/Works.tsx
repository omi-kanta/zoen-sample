const works = [
  {
    tag: "松の透かし剪定",
    location: "横浜市 K様邸",
    area: "約35㎡",
    note: "樹齢40年の黒松。毎年11月に透かし剪定で樹形を整えています。",
    before: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    tag: "生垣・庭木の整形",
    location: "川崎市 N様邸",
    area: "約15m",
    note: "ツツジ・サツキの生垣を年3回管理。道路側からの目線を考えながら刈込んでいます。",
    before: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    tag: "芝生の張り替え",
    location: "横浜市 M様邸",
    area: "約20㎡",
    note: "傷んだ芝を全面撤去・高麗芝で張り替え。翌年から青々と育ちました。",
    before: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-20 px-6" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--top1-serif)" }}
            >
              施工事例
            </h2>
            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              施工前後の変化をご覧ください。
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm text-green-700 hover:text-green-900 underline underline-offset-4 transition-colors shrink-0"
            style={{ fontFamily: "var(--top1-sans)" }}
          >
            事例について問い合わせる
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {works.map((w) => (
            <div
              key={w.tag}
              style={{ backgroundColor: "white", border: "1px solid #e5e0d8" }}
            >
              {/* Before / After images */}
              <div className="flex flex-col sm:flex-row" style={{ height: "clamp(180px, 28vw, 320px)" }}>
                {/* Before */}
                <div className="relative flex-1 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.before}
                    alt={`${w.tag} 施工前`}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(15%)" }}
                  />
                  <span
                    className="absolute top-3 left-3 text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "var(--top1-sans)",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      color: "white",
                    }}
                  >
                    施工前
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="hidden sm:block w-0.5 shrink-0"
                  style={{ backgroundColor: "#e5e0d8" }}
                />
                <div
                  className="sm:hidden h-0.5 shrink-0"
                  style={{ backgroundColor: "#e5e0d8" }}
                />

                {/* After */}
                <div className="relative flex-1 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.after}
                    alt={`${w.tag} 施工後`}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "var(--top1-sans)",
                      backgroundColor: "rgba(74,124,89,0.75)",
                      color: "white",
                    }}
                  >
                    施工後
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p
                  className="text-xs text-green-700 mb-1 tracking-wide"
                  style={{ fontFamily: "var(--top1-sans)" }}
                >
                  {w.tag}
                </p>
                <p
                  className="text-sm font-semibold text-gray-800 mb-1"
                  style={{ fontFamily: "var(--top1-serif)" }}
                >
                  {w.location}
                </p>
                <p
                  className="text-xs text-gray-500 leading-relaxed"
                  style={{ fontFamily: "var(--top1-sans)" }}
                >
                  {w.note}　<span className="text-gray-400">{w.area}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
