const seasons = [
  {
    id: "spring",
    label: "春",
    en: "Spring",
    months: "3月〜5月",
    bg: "#EDF7E4",
    accent: "#8DC86A",
    icon: "🌸",
    works: [
      { title: "剪定（花後）", desc: "ツツジ・サツキなど花が終わったら早めに樹形を整えます。" },
      { title: "植栽・移植", desc: "春は根張りのよい季節。新しい木の植え込みに最適です。" },
      { title: "除草・マルチング", desc: "雑草が伸び始める前に手当て。マルチで水分を保持します。" },
      { title: "施肥", desc: "芽吹き前後に有機肥料を施し、夏の生長を促します。" },
    ],
  },
  {
    id: "summer",
    label: "夏",
    en: "Summer",
    months: "6月〜8月",
    bg: "#FFF8E1",
    accent: "#F2C450",
    icon: "☀️",
    works: [
      { title: "生垣の刈込", desc: "成長が著しい季節。レイランド・トキワマンサクなどを整えます。" },
      { title: "草刈り", desc: "月1〜2回のペースで、雑草の勢いに合わせて対応します。" },
      { title: "水やり管理", desc: "猛暑時の樹木への散水サポートも承ります。" },
      { title: "病害虫対応", desc: "発生初期の早期発見・早期対処が大切です。" },
    ],
  },
  {
    id: "autumn",
    label: "秋",
    en: "Autumn",
    months: "9月〜11月",
    bg: "#FDF0E4",
    accent: "#C8714A",
    icon: "🍂",
    works: [
      { title: "落ち葉掃除", desc: "ケヤキ・イチョウ・もみじなど、落葉樹の葉を丁寧に回収します。" },
      { title: "剪定（樹形整理）", desc: "夏に伸びた枝を整え、冬越しの準備をします。" },
      { title: "芝の手入れ", desc: "秋の施肥と低刈りで来春の芝生の出来が決まります。" },
      { title: "球根植え付け", desc: "チューリップ・水仙など春咲き球根を植え込みます。" },
    ],
  },
  {
    id: "winter",
    label: "冬",
    en: "Winter",
    months: "12月〜2月",
    bg: "#EBF0F7",
    accent: "#6B8FB0",
    icon: "❄️",
    works: [
      { title: "冬囲い", desc: "雪の多い年も安心。松や低木を縄で縛り枝折れを防ぎます。" },
      { title: "強剪定", desc: "落葉後は樹形が見えやすく、強めの剪定に最適な時期です。" },
      { title: "コケ・苔清掃", desc: "湿気で繁殖しやすい苔を除去し、石畳や石垣を清潔に保ちます。" },
      { title: "来春の計画相談", desc: "静かなオフシーズンに、次の庭づくりのご相談を承ります。" },
    ],
  },
];

export default function SeasonCalendar() {
  return (
    <section id="seasons" style={{ backgroundColor: "#F7F2E8" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-4">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
        >
          庭の一年
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-2"
          style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
        >
          365日、庭はうごいている。
        </h2>
        <p
          className="text-sm leading-loose mb-12"
          style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.65 }}
        >
          季節ごとの庭仕事を、一年を通じてお任せください。
        </p>
      </div>

      {seasons.map((s) => (
        <div
          key={s.id}
          className="py-14 px-6"
          style={{ backgroundColor: s.bg }}
        >
          <div className="max-w-6xl mx-auto">
            {/* 季節ヘッダー */}
            <div className="flex items-baseline gap-4 mb-8">
              <span
                className="text-5xl sm:text-6xl font-semibold leading-none"
                style={{ fontFamily: "var(--top3-klee)", color: s.accent }}
              >
                {s.label}
              </span>
              <span
                className="text-sm"
                style={{ fontFamily: "var(--top3-yomogi)", color: s.accent, opacity: 0.7 }}
              >
                {s.months}
              </span>
            </div>

            {/* 作業カード群 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {s.works.map((w, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                    borderLeft: `3px solid ${s.accent}`,
                    borderRadius: "2px",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ fontFamily: "var(--top3-zen)", color: "#5C4033" }}
                  >
                    {w.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.65 }}
                  >
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
