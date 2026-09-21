const accessories = [
  "剪定バサミ（プロ用）× 1",
  "造園技能士免許（一級）× 1",
  "職人歴15年 × 1",
  "丁寧な説明 × 1（標準付属）",
];

const cautions = [
  "「どうせ高い」と諦める前にご相談ください。まず話を聞くことは無料です。",
  "一度に大きく切りすぎると木が弱ります。適切な判断は任せてください。",
  "松の剪定は時期が重要です。最適なタイミングをご提案します。",
  "本製品は年間管理契約に最適化されています。",
];

export default function Profile() {
  return (
    <section
      id="profile"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F0E6C8" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
        >
          代表について
        </p>

        {/* Manual cover */}
        <div
          className="p-8 sm:p-12 mb-6"
          style={{
            border: "3px solid #1A3D1A",
            backgroundColor: "#F9F5EC",
            position: "relative",
          }}
        >
          {/* Risograph offset */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              border: "3px solid rgba(232,83,42,0.2)",
              transform: "translate(5px, 5px)",
              pointerEvents: "none",
            }}
          />

          {/* Header strip */}
          <div
            className="flex items-center justify-between mb-8 pb-4"
            style={{ borderBottom: "2px solid #1A3D1A" }}
          >
            <p
              className="text-xs tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.45 }}
            >
              型番: SK-SHOMA-01
            </p>
            <p
              className="text-xs tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.45 }}
            >
              榊Garden
            </p>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold mb-1"
            style={{
              fontFamily: "var(--top5-reggae)",
              color: "#1A3D1A",
              textShadow: "3px 3px 0 rgba(232,83,42,0.2)",
            }}
          >
            榊 翔麻
          </h2>
          <p
            className="text-base mb-8"
            style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.5 }}
          >
            SAKAKI Shoma · 取扱説明書
          </p>

          {/* Specs table */}
          <div className="mb-8">
            <p
              className="text-xs font-bold mb-3 tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
            >
              ■ 仕様
            </p>
            <table className="w-full">
              <tbody>
                {[
                  ["品名", "造園職人"],
                  ["型番", "SK-SHOMA-01"],
                  ["稼働年数", "15年（継続稼働中）"],
                  ["対応エリア", "神奈川県横浜市ほか"],
                  ["資格", "造園技能士 一級"],
                  ["累計施工", "300件以上"],
                ].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: "1px solid #D8D2C8" }}>
                    <td
                      className="py-2 pr-6 w-36 text-xs"
                      style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.5 }}
                    >
                      {k}
                    </td>
                    <td
                      className="py-2 text-sm font-bold"
                      style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A" }}
                    >
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Accessories */}
          <div className="mb-8">
            <p
              className="text-xs font-bold mb-3 tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
            >
              ■ 付属品
            </p>
            <ul className="flex flex-col gap-1">
              {accessories.map((item) => (
                <li
                  key={item}
                  className="text-sm flex items-center gap-2"
                  style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.7 }}
                >
                  <span style={{ color: "#5BB346", fontWeight: "bold" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cautions */}
          <div className="mb-8">
            <p
              className="text-xs font-bold mb-3 tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
            >
              ■ 使用上のご注意
            </p>
            <ul className="flex flex-col gap-2">
              {cautions.map((c, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed flex items-start gap-2"
                  style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.65 }}
                >
                  <span style={{ flexShrink: 0 }}>・</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Warranty */}
          <div
            className="p-5"
            style={{ backgroundColor: "#EEC700", border: "2px solid #1A3D1A" }}
          >
            <p
              className="text-xs font-bold mb-2 tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
            >
              ■ 保証について
            </p>
            <p
              className="text-sm leading-loose"
              style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A" }}
            >
              「また来年もお願いしたい」という言葉が一番の動力源です。
              毎年同じ庭に関わり、変化を見届けることが、この仕事の醍醐味だと思っています。
            </p>
            <p
              className="text-xs mt-3 text-right"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.5 }}
            >
              ── 榊 翔麻
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
