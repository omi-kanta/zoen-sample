const works = [
  {
    title: "松の透かし剪定",
    category: "剪定",
    area: "横浜市",
    before: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    after: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    rotate: "-1.2deg",
  },
  {
    title: "生垣・庭木の整形",
    category: "植栽管理",
    area: "川崎市",
    before: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    rotate: "1.0deg",
  },
  {
    title: "芝生の張り替え",
    category: "芝生管理",
    area: "世田谷区",
    before: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    rotate: "-0.7deg",
  },
  {
    title: "庭のリフォーム",
    category: "設計・施工",
    area: "港区",
    before: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80",
    after: "https://images.unsplash.com/photo-1490750967868-88df5691cc8c?w=800&q=80",
    rotate: "0.8deg",
  },
  {
    title: "雑草・落ち葉の清掃",
    category: "清掃",
    area: "品川区",
    before: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
    after: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    rotate: "-0.5deg",
  },
  {
    title: "坪庭づくり",
    category: "設計・植栽",
    area: "横浜市",
    before: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    rotate: "1.3deg",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
        >
          施工事例
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-2"
          style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
        >
          Before / After
        </h2>
        <p
          className="text-sm leading-loose mb-14"
          style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.65 }}
        >
          施工前後の変化をご覧ください。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-10 md:gap-y-14">
          {works.map((w, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-sm"
              style={{
                transform: `rotate(${w.rotate})`,
                backgroundColor: "white",
                border: "1px solid #E8DFB8",
                borderRadius: "2px",
              }}
            >
              {/* ボタニカルラベル風ヘッダー */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ borderBottom: "1px solid #E8DFB8" }}
              >
                <span
                  className="text-xs tracking-widest"
                  style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
                >
                  {w.category}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.5 }}
                >
                  {w.area}
                </span>
              </div>

              {/* Before / After 左右並列 */}
              <div className="flex" style={{ height: 200 }}>
                {/* Before */}
                <div className="relative flex-1 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.before}
                    alt={`${w.title} 施工前`}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(20%)" }}
                  />
                  <span
                    className="absolute bottom-2 left-2 text-xs px-1.5 py-0.5"
                    style={{
                      fontFamily: "var(--top3-zen)",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      color: "white",
                      borderRadius: "2px",
                    }}
                  >
                    施工前
                  </span>
                </div>

                {/* Divider */}
                <div style={{ width: 1, backgroundColor: "#E8DFB8", flexShrink: 0 }} />

                {/* After */}
                <div className="relative flex-1 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.after}
                    alt={`${w.title} 施工後`}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className="absolute bottom-2 left-2 text-xs px-1.5 py-0.5"
                    style={{
                      fontFamily: "var(--top3-zen)",
                      backgroundColor: "rgba(92,64,51,0.7)",
                      color: "white",
                      borderRadius: "2px",
                    }}
                  >
                    施工後
                  </span>
                </div>
              </div>

              {/* フッター */}
              <div className="px-4 py-3">
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
                >
                  {w.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
