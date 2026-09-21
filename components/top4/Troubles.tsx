const troubles = [
  {
    q: "木が伸びすぎて、隣家に当たりそう",
    work: "剪定・伐採",
    detail:
      "松・ケヤキ・クスノキなど高木から低木まで対応。隣地や電線への影響が出る前にご相談ください。",
  },
  {
    q: "雑草が毎年繰り返して困っている",
    work: "除草・防草対策",
    detail:
      "手除草に加え、防草シートの施工も承ります。翌年以降の手間を大幅に減らせます。",
  },
  {
    q: "庭を新しく作りたい・作り直したい",
    work: "造園・植栽",
    detail:
      "設計から施工・植え込みまで一括対応。予算や管理のしやすさも含めてご提案します。",
  },
  {
    q: "庭の管理を丸ごと任せたい",
    work: "年間管理契約",
    detail:
      "月次〜季節ごとのスケジュールを立て、担当者が継続して管理します。法人・管理組合も対応。",
  },
  {
    q: "落ち葉が近所に迷惑をかけていないか心配",
    work: "定期清掃・剪定",
    detail:
      "落葉樹の剪定時期に合わせた清掃をセットで実施。近隣への飛散を未然に防ぎます。",
  },
];

export default function Troubles() {
  return (
    <section
      id="troubles"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest mb-3"
          style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
        >
          お悩みから探す
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
          こんなお悩み、<br className="sm:hidden" />ありませんか。
        </h2>

        {/* 2列グリッド。gap-px + 親の薄い背景色でボーダー代わり */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(28,36,16,0.1)" }}
        >
          {troubles.map((t, i) => (
            <div
              key={i}
              className="py-8 px-8"
              style={{ backgroundColor: "#F5F0E8" }}
            >
              <p
                className="text-xs mb-3 tracking-widest"
                style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
              >
                0{i + 1}
              </p>
              <p
                className="text-xl sm:text-2xl font-bold mb-4 leading-snug"
                style={{ fontFamily: "var(--t4-head)", color: "#1C2410" }}
              >
                「{t.q}」
              </p>
              <p
                className="text-sm font-bold mb-2"
                style={{ fontFamily: "var(--t4-body)", color: "#D4820A" }}
              >
                → {t.work}
              </p>
              <p
                className="text-sm leading-loose"
                style={{ fontFamily: "var(--t4-body)", color: "#1C2410", opacity: 0.6 }}
              >
                {t.detail}
              </p>
            </div>
          ))}
          {/* 奇数件の場合、最終行を埋める空セル */}
          {troubles.length % 2 !== 0 && (
            <div style={{ backgroundColor: "#F5F0E8" }} />
          )}
        </div>
      </div>
    </section>
  );
}
