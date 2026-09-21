const services = [
  {
    title: "剪定・刈込",
    desc: "庭木の透かし剪定から生垣の整形、強剪定まで対応。樹齢・樹種に合わせた方法で、木を弱らせずに仕立てます。",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M8 28 C12 22 18 16 26 10" stroke="#8DC86A" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 22 C10 20 12 24 10 27 C8 30 4 28 6 22Z" fill="#8DC86A" opacity="0.7" />
        <path d="M22 8 C24 12 20 15 17 14 C14 13 14 9 22 8Z" fill="#8DC86A" opacity="0.7" />
        <path d="M26 10 L30 6" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 12 L28 8" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "草刈り・除草",
    desc: "雑草を根から丁寧に除去。マルチング材の敷き込みや防草対策まで、雑草が生えにくい環境づくりも提案します。",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M18 30 L18 18" stroke="#5C8A3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 22 C14 18 10 20 11 16 C12 12 18 16 18 20Z" fill="#8DC86A" opacity="0.8" />
        <path d="M18 26 C22 22 26 24 25 20 C24 16 18 20 18 24Z" fill="#A8D882" opacity="0.8" />
        <path d="M12 30 C16 28 20 28 24 30" stroke="#D4C9A8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 30 L28 30" stroke="#C5B8A0" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "植栽・庭づくり",
    desc: "新築の庭づくりから坪庭の設計・施工、既存庭のリフォームまで。お客様の暮らしに合った植物を選んでご提案します。",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M18 30 L18 12" stroke="#5C8A3C" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 18 C12 14 8 16 10 10 C12 4 18 10 18 16Z" fill="#8DC86A" opacity="0.85" />
        <path d="M18 14 C24 10 28 12 26 6 C24 0 18 8 18 13Z" fill="#B8E094" opacity="0.8" />
        <path d="M10 30 C14 28 22 28 26 30" stroke="#C5B8A0" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="18" cy="30" rx="10" ry="3" fill="#D4C9A8" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "施肥・芝管理",
    desc: "春と秋の有機施肥、芝の張り替え・低刈り・目土入れ。芝生を長く美しく保つための定期ケアをまとめてお任せください。",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M18 28 L18 20" stroke="#5C8A3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 20 C16 16 12 16 13 12 C14 8 18 12 18 18Z" fill="#8DC86A" opacity="0.85" />
        <path d="M18 22 C20 18 24 18 23 14 C22 10 18 14 18 20Z" fill="#A8D882" opacity="0.8" />
        <path d="M8 30 L28 30" stroke="#8DC86A" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M6 32 L12 30 L18 32 L24 30 L30 32" stroke="#8DC86A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "落ち葉・清掃",
    desc: "ケヤキ・イチョウ・モミジなど落葉樹の葉を丁寧に回収。石畳・石垣のコケ除去や敷地内の清掃もまとめて対応します。",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M20 8 C28 10 30 20 24 26 C18 32 8 28 8 20 C8 12 14 6 20 8Z" fill="#C8714A" opacity="0.55" />
        <path d="M20 8 L14 26" stroke="#5C4033" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M20 8 C16 14 12 16 10 20" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" />
        <path d="M20 8 C22 14 24 18 24 22" stroke="#5C4033" strokeWidth="0.6" strokeLinecap="round" />
        <path d="M10 32 C14 30 20 30 26 32" stroke="#D4C9A8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "冬囲い・養生",
    desc: "松や低木を縄で縛り、雪の重みによる枝折れを防ぎます。冬前の球根植え付けや、春に向けた庭の計画相談も承ります。",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M18 28 L18 10" stroke="#5C8A3C" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 14 C14 12 10 14 12 10 C14 6 18 10 18 13Z" fill="#8DC86A" opacity="0.7" />
        <path d="M18 19 C22 17 26 19 24 15 C22 11 18 15 18 18Z" fill="#8DC86A" opacity="0.7" />
        <path d="M12 22 C14 20 22 20 24 22" stroke="#C8714A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 25 C13 23 23 23 25 25" stroke="#C8714A" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="18" cy="28" rx="8" ry="2.5" fill="#D4C9A8" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top6-yomogi)", color: "#8DC86A" }}
        >
          サービス
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-3"
          style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
        >
          どんな庭仕事も、<br />お任せください。
        </h2>
        <p
          className="text-sm leading-loose mb-14"
          style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.65 }}
        >
          単発のご依頼から年間管理まで、作業内容に合わせてご提案します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6"
              style={{
                backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.65)" : "rgba(237,247,228,0.55)",
                border: "1px solid #D4C9A8",
                borderRadius: "2px",
              }}
            >
              <div className="mb-4">{s.icon}</div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-loose"
                style={{ fontFamily: "var(--top6-zen)", color: "#5C4033", opacity: 0.68 }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block text-sm font-medium px-10 py-3.5 rounded-full transition-opacity hover:opacity-85"
            style={{ fontFamily: "var(--top6-zen)", backgroundColor: "#8DC86A", color: "white" }}
          >
            どんなことでもご相談ください
          </a>
        </div>
      </div>
    </section>
  );
}
