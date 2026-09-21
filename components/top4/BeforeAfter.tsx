const cases = [
  {
    work: "松の透かし剪定",
    location: "横浜市 K様邸",
    before: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=900&q=80",
    after: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
  },
  {
    work: "雑草の除草・防草対策",
    location: "川崎市 N様邸",
    before: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=900&q=80",
    after: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900&q=80",
  },
  {
    work: "生垣の刈込・庭木の整理",
    location: "横浜市 M様邸",
    before: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=900&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
];

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#E8E2D4" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest mb-3"
          style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
        >
          BEFORE / AFTER
        </p>
        <h2
          className="leading-tight mb-3"
          style={{
            fontFamily: "var(--t4-head)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#1C2410",
          }}
        >
          手入れで、庭は変わる。
        </h2>
        <p
          className="text-sm mb-16"
          style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.55 }}
        >
          左が施工前、右が施工後です。
        </p>

        <div className="flex flex-col gap-16">
          {cases.map((c) => (
            <div key={c.work}>
              <div className="flex items-baseline justify-between mb-3">
                <p
                  className="font-bold text-lg"
                  style={{ fontFamily: "var(--t4-head)", color: "#1C2410" }}
                >
                  {c.work}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--t4-mono)", color: "#1C2410", opacity: 0.4 }}
                >
                  {c.location}
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row"
                style={{ height: "clamp(200px, 34vw, 420px)", gap: 3 }}
              >
                {/* Before */}
                <div className="relative flex-1 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.before}
                    alt={`${c.work} 施工前`}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(12%)" }}
                  />
                  <span
                    className="absolute top-3 left-3 text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "var(--t4-mono)",
                      backgroundColor: "rgba(28,36,16,0.55)",
                      color: "white",
                    }}
                  >
                    BEFORE
                  </span>
                </div>

                {/* After */}
                <div className="relative flex-1 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.after}
                    alt={`${c.work} 施工後`}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "var(--t4-mono)",
                      backgroundColor: "rgba(212,130,10,0.88)",
                      color: "white",
                    }}
                  >
                    AFTER
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
