const works = [
  {
    title: "松・モミジの和庭",
    location: "横浜市 K様邸",
    area: "48㎡",
    period: "14日間",
    plants: "黒松・モミジ・竹垣・飛び石",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    title: "洋風植栽リフォーム",
    location: "鎌倉市 T様邸",
    area: "32㎡",
    period: "7日間",
    plants: "シマトネリコ・ヒメシャリンバイ・高麗芝",
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
  },
  {
    title: "マンション共用部の植栽管理",
    location: "川崎市 M様",
    area: "120㎡",
    period: "年間契約（2年目）",
    plants: "ツツジ・サツキ・タマリュウ・芝",
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=900&q=80",
  },
  {
    title: "坪庭づくり",
    location: "港区 Y様邸",
    area: "8㎡",
    period: "5日間",
    plants: "ヒメシャラ・苔・飛び石・砂利",
    src: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=900&q=80",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#1C2410" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest mb-3"
          style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
        >
          施工事例
        </p>
        <h2
          className="leading-tight mb-16"
          style={{
            fontFamily: "var(--t4-head)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#F5F0E8",
          }}
        >
          新しく作った庭
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {works.map((w) => (
            <div key={w.title}>
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: "4/3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.src}
                  alt={w.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="text-xs mb-1"
                style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
              >
                {w.title}
              </p>
              <p
                className="text-sm font-bold mb-2"
                style={{ fontFamily: "var(--t4-body)", color: "#F5F0E8" }}
              >
                {w.location}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {[w.area, w.period, w.plants].map((v, i) => (
                  <p
                    key={i}
                    className="text-xs"
                    style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.38)" }}
                  >
                    {v}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
