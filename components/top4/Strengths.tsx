const specs = [
  { key: "累計施工件数", value: "300件以上", note: "個人邸・マンション・ビル含む" },
  { key: "代表の職人経験", value: "15年", note: "神奈川県内で修業、横浜市にて独立" },
  { key: "現地調査・お見積り", value: "無料", note: "費用が発生するのは施工の確定から" },
  { key: "施工エリア", value: "神奈川・東京", note: "横浜市・川崎市・東京23区を中心に対応" },
  { key: "自社施工", value: "100%", note: "外注・下請けは使用しない" },
  { key: "緊急対応", value: "翌日以内", note: "台風後の倒木・枝折れ等（要相談）" },
];

export default function Strengths() {
  return (
    <section
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F4EFE4" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Document header */}
        <div
          className="flex items-start justify-between pb-4 mb-0"
          style={{ borderBottom: "1.5px solid #1C2418" }}
        >
          <div>
            <p
              className="text-xs tracking-widest mb-1"
              style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.4 }}
            >
              SPECIFICATION · SK-SPEC-01
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: "var(--top4-mincho)", color: "#1C2418" }}
            >
              施工実績・概要仕様
            </h2>
          </div>
          <p
            className="text-xs tracking-widest mt-1"
            style={{ fontFamily: "var(--top4-mono)", color: "#1C2418", opacity: 0.35 }}
          >
            DATE: 2026.09
          </p>
        </div>

        {/* Spec table */}
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <tbody>
            {specs.map((s, i) => (
              <tr
                key={s.key}
                style={{ borderBottom: "1px solid #D8D2C8" }}
              >
                <td
                  className="py-5 pr-6 w-40 sm:w-52 align-top"
                  style={{
                    fontFamily: "var(--top4-mono)",
                    fontSize: "0.7rem",
                    color: "#1C2418",
                    opacity: 0.5,
                    letterSpacing: "0.04em",
                    verticalAlign: "middle",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} · {s.key}
                </td>
                <td className="py-5 pr-6 align-middle">
                  <span
                    className="text-2xl sm:text-3xl font-bold leading-none"
                    style={{ fontFamily: "var(--top4-dela)", color: "#1C2418" }}
                  >
                    {s.value}
                  </span>
                </td>
                <td
                  className="py-5 align-middle hidden sm:table-cell"
                  style={{
                    fontFamily: "var(--top4-kaku)",
                    fontSize: "0.75rem",
                    color: "#1C2418",
                    opacity: 0.5,
                  }}
                >
                  {s.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
