const works = [
  { label: "芝刈り", months: [0,0,0,1,1,1,1,1,1,0,0,0] },
  { label: "剪定・刈込", months: [0,0,1,1,0,1,0,1,1,0,0,0] },
  { label: "除草・草刈り", months: [0,0,1,1,1,1,1,1,1,1,0,0] },
  { label: "施肥", months: [0,1,1,0,0,0,0,0,1,0,0,0] },
  { label: "落ち葉清掃", months: [0,0,0,0,0,0,0,0,1,1,1,1] },
  { label: "冬囲い", months: [0,0,0,0,0,0,0,0,0,0,1,1] },
];

const MONTHS = ["1","2","3","4","5","6","7","8","9","10","11","12"];

const LEVEL: Record<number, { label: string; color: string }> = {
  0: { label: "–", color: "transparent" },
  1: { label: "◎", color: "#8DC86A" },
};

export default function Corporate() {
  return (
    <section
      id="corporate"
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#EDF7E4" }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
        >
          法人・管理組合の方へ
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-4"
          style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
        >
          マンション・ビルの緑地も、<br />
          一年でお任せください。
        </h2>
        <p
          className="text-sm leading-loose mb-12"
          style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.7 }}
        >
          年間管理契約により、計画的かつ安定したコストで
          緑地・植栽の維持管理をお引き受けします。<br />
          見積り・現地調査は無料です。
        </p>

        {/* 年間作業カレンダー */}
        <div className="overflow-x-auto">
          <table
            className="w-full text-sm min-w-[480px]"
            style={{ borderCollapse: "separate", borderSpacing: 0 }}
          >
            <thead>
              <tr>
                <th
                  className="text-left py-3 pr-6 text-xs font-normal"
                  style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.5 }}
                >
                  作業
                </th>
                {MONTHS.map((m) => (
                  <th
                    key={m}
                    className="text-center py-3 px-1 text-xs font-normal"
                    style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.5 }}
                  >
                    {m}月
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {works.map((w, ri) => (
                <tr key={ri} style={{ borderTop: "1px solid #C5D8B5" }}>
                  <td
                    className="py-3 pr-6 text-sm font-semibold whitespace-nowrap"
                    style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
                  >
                    {w.label}
                  </td>
                  {w.months.map((v, ci) => (
                    <td key={ci} className="text-center py-3 px-1">
                      {v > 0 && (
                        <span
                          className="inline-block w-5 h-5 rounded-full"
                          style={{ backgroundColor: LEVEL[v].color }}
                          title={LEVEL[v].label}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <div
            className="flex-1 min-w-[200px] p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              border: "1px solid #C5D8B5",
              borderRadius: "2px",
            }}
          >
            <p
              className="text-xs mb-2"
              style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
            >
              対応規模
            </p>
            <p
              className="text-sm leading-loose"
              style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
            >
              小規模マンション〜大規模複合施設まで対応可能。
              まずはご相談ください。
            </p>
          </div>
          <div
            className="flex-1 min-w-[200px] p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              border: "1px solid #C5D8B5",
              borderRadius: "2px",
            }}
          >
            <p
              className="text-xs mb-2"
              style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
            >
              契約形態
            </p>
            <p
              className="text-sm leading-loose"
              style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
            >
              年間一括・月額・スポット、いずれも承ります。
              管理組合・ビル管理会社様からのご依頼歓迎。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
