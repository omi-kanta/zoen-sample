const steps = [
  {
    num: "01",
    title: "お問い合わせ",
    detail:
      "電話またはメールフォームからお気軽に。「こんな状態でも相談できる？」というご連絡も歓迎です。",
  },
  {
    num: "02",
    title: "現地調査（無料）",
    detail:
      "敷地の状態・植栽の種類や高さ・お客様のご要望を確認します。費用の目安もその場でお伝えします。",
  },
  {
    num: "03",
    title: "お見積り・ご提案",
    detail:
      "作業内容と費用を書面でご提案。追加料金が発生する場合は必ず事前にご連絡します。",
  },
  {
    num: "04",
    title: "施工",
    detail:
      "ご都合に合わせて日程を調整します。作業後の剪定くずや廃材はすべて持ち帰ります。",
  },
  {
    num: "05",
    title: "お引き渡し・アフターサポート",
    detail:
      "仕上がりをご確認いただいてから完了。年間管理のご相談もこのタイミングでどうぞ。",
  },
];

export default function Flow() {
  return (
    <section
      id="flow"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs tracking-widest mb-3"
          style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
        >
          施工の流れ
        </p>
        <h2
          className="leading-tight mb-16"
          style={{
            fontFamily: "var(--t4-head)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#1C2410",
          }}
        >
          頼み方はシンプルです。
        </h2>

        <div className="flex flex-col">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex gap-8 py-8"
              style={{ borderTop: "1px solid rgba(28,36,16,0.12)" }}
            >
              <p
                className="shrink-0 w-8 pt-0.5 text-right"
                style={{ fontFamily: "var(--t4-mono)", fontSize: 13, color: "#D4820A" }}
              >
                {s.num}
              </p>
              <div>
                <p
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--t4-head)", color: "#1C2410" }}
                >
                  {s.title}
                </p>
                <p
                  className="text-sm leading-loose"
                  style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.6 }}
                >
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(28,36,16,0.12)" }} />
        </div>
      </div>
    </section>
  );
}
