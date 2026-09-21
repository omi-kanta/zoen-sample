const plans = [
  { work: "剪定", freq: "年2〜4回", target: "全庭木・生垣" },
  { work: "除草", freq: "月1回（4〜9月）", target: "花壇・通路・境界" },
  { work: "芝刈り", freq: "月1〜2回（5〜10月）", target: "芝生全面" },
  { work: "落ち葉清掃", freq: "週1回（10〜12月）", target: "敷地全域" },
  { work: "施肥", freq: "年2回（春・秋）", target: "植栽全般" },
];

export default function Corporate() {
  return (
    <section
      id="corporate"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#E8E2D4" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs tracking-widest mb-3"
          style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
        >
          法人のお客様へ
        </p>
        <h2
          className="leading-tight mb-4"
          style={{
            fontFamily: "var(--t4-head)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#1C2410",
          }}
        >
          年間管理プラン
        </h2>
        <p
          className="text-sm leading-loose mb-12"
          style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.6 }}
        >
          マンション共用部・ビルのエントランス・商業施設の植栽管理を承ります。<br />
          担当者が変わらない年間契約で、引き継ぎの手間なく安定した緑地管理を実現します。
        </p>

        {/* 管理表 */}
        <div style={{ border: "1px solid rgba(28,36,16,0.15)" }}>
          <div
            className="grid grid-cols-3 px-6 py-3"
            style={{ backgroundColor: "#1C2410" }}
          >
            {["作業内容", "頻度", "対象"].map((h) => (
              <p
                key={h}
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.6)" }}
              >
                {h}
              </p>
            ))}
          </div>
          {plans.map((p, i) => (
            <div
              key={p.work}
              className="grid grid-cols-3 px-6 py-4"
              style={{
                borderTop: "1px solid rgba(28,36,16,0.1)",
                backgroundColor: i % 2 === 0 ? "transparent" : "rgba(28,36,16,0.03)",
              }}
            >
              <p
                className="text-sm font-bold"
                style={{ fontFamily: "var(--t4-body)", color: "#1C2410" }}
              >
                {p.work}
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
              >
                {p.freq}
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.55 }}
              >
                {p.target}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-xs mt-3 mb-10"
          style={{ fontFamily: "var(--t4-mono)", color: "#1C2410", opacity: 0.38 }}
        >
          ※ 頻度・作業範囲はご状況に応じてカスタマイズします。まずはご相談ください。
        </p>

        <a
          href="#contact"
          className="inline-block font-bold text-sm px-10 py-4 transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#D4820A", color: "white", fontFamily: "var(--t4-body)" }}
        >
          法人のご相談はこちら
        </a>
      </div>
    </section>
  );
}
