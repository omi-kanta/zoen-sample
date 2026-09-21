export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-20 sm:py-28 px-6 sm:px-12"
        style={{ backgroundColor: "#1C2410" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-widest mb-3"
            style={{ fontFamily: "var(--t4-mono)", color: "#D4820A" }}
          >
            お問い合わせ
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
            まず、相談してみてください。
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* 電話 */}
            <div className="shrink-0">
              <p
                className="text-xs mb-3"
                style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.38)" }}
              >
                お電話でのご相談
              </p>
              <a
                href="tel:0000000000"
                className="block font-bold transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--t4-head)",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "#F5F0E8",
                }}
              >
                000-0000-0000
              </a>
              <p
                className="text-xs mt-2"
                style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.32)" }}
              >
                受付：8:00〜18:00（日・祝除く）
              </p>
            </div>

            {/* フォーム */}
            <form className="flex-1 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.45)" }}
                  >
                    お名前 *
                  </label>
                  <input
                    type="text"
                    placeholder="榊 翔麻"
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{
                      fontFamily: "var(--t4-body)",
                      backgroundColor: "rgba(245,240,232,0.06)",
                      border: "1px solid rgba(245,240,232,0.18)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.45)" }}
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    placeholder="000-0000-0000"
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{
                      fontFamily: "var(--t4-body)",
                      backgroundColor: "rgba(245,240,232,0.06)",
                      border: "1px solid rgba(245,240,232,0.18)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.45)" }}
                >
                  メールアドレス *
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--t4-body)",
                    backgroundColor: "rgba(245,240,232,0.06)",
                    border: "1px solid rgba(245,240,232,0.18)",
                    color: "#F5F0E8",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.45)" }}
                >
                  ご相談内容
                </label>
                <textarea
                  rows={4}
                  placeholder="「松が伸びすぎた」「庭全体を整えたい」など、お気軽に。"
                  className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                  style={{
                    fontFamily: "var(--t4-body)",
                    backgroundColor: "rgba(245,240,232,0.06)",
                    border: "1px solid rgba(245,240,232,0.18)",
                    color: "#F5F0E8",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-bold text-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#D4820A", color: "white", fontFamily: "var(--t4-body)" }}
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ backgroundColor: "#141C0A" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="font-bold text-base mb-2"
              style={{ fontFamily: "var(--t4-head)", color: "#F5F0E8" }}
            >
              榊Garden
            </p>
            <address
              className="not-italic text-xs leading-7"
              style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.32)" }}
            >
              代表：榊 翔麻　〒000-0000 神奈川県横浜市○○区○○町0-0-0<br />
              TEL: 000-0000-0000　8:00〜18:00（日・祝除く）
            </address>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1">
            <p
              className="text-xs"
              style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.22)" }}
            >
              © 2026 榊Garden.
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.18)" }}
            >
              ※このページはサンプルです。掲載情報はすべて架空のものです。
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
