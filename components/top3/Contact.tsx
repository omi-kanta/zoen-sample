"use client";
import { useState } from "react";

const chips = [
  "剪定・刈込をお願いしたい",
  "草刈り・除草をお願いしたい",
  "庭木を植えたい・移植したい",
  "落ち葉・清掃を依頼したい",
  "冬囲いをお願いしたい",
  "年間管理を検討している",
  "法人・管理組合として相談したい",
  "まだ迷っている・話だけ聞きたい",
];

export default function Contact() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-6"
      style={{ backgroundColor: "#F7F2E8" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs mb-3 tracking-widest"
          style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
        >
          お問い合わせ
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug mb-4"
          style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
        >
          まずは、どんなことで<br />
          お困りですか？
        </h2>
        <p
          className="text-sm leading-loose mb-10"
          style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.65 }}
        >
          あてはまるものをひとつお選びください。
        </p>

        {/* チップ選択 */}
        <div className="flex flex-wrap gap-3 mb-10">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(selected === c ? null : c)}
              className="text-sm px-4 py-2 rounded-full transition-all"
              style={{
                fontFamily: "var(--top3-zen)",
                border: `1.5px solid ${selected === c ? "#8DC86A" : "#C5B8A0"}`,
                backgroundColor: selected === c ? "#8DC86A" : "transparent",
                color: selected === c ? "white" : "#5C4033",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* フォーム（選択後に表示） */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: selected ? 800 : 0, opacity: selected ? 1 : 0 }}
        >
          <div
            className="p-8"
            style={{
              backgroundColor: "#FEFBE8",
              border: "1px solid #E8DFB8",
              borderRadius: "2px",
            }}
          >
            <p
              className="text-sm font-semibold mb-6"
              style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
            >
              ご連絡先をお教えください
            </p>
            <form className="flex flex-col gap-5">
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
                >
                  お名前
                </label>
                <input
                  type="text"
                  placeholder="山田 花子"
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--top3-zen)",
                    backgroundColor: "white",
                    border: "1px solid #D4C9A8",
                    color: "#5C4033",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
                >
                  電話番号
                </label>
                <input
                  type="tel"
                  placeholder="000-0000-0000"
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--top3-zen)",
                    backgroundColor: "white",
                    border: "1px solid #D4C9A8",
                    color: "#5C4033",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--top3-zen)",
                    backgroundColor: "white",
                    border: "1px solid #D4C9A8",
                    color: "#5C4033",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.75 }}
                >
                  詳細・ご要望（任意）
                </label>
                <textarea
                  rows={4}
                  placeholder="庭の広さや現状など、なんでもお書きください。"
                  className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                  style={{
                    fontFamily: "var(--top3-zen)",
                    backgroundColor: "white",
                    border: "1px solid #D4C9A8",
                    color: "#5C4033",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-sm font-medium transition-opacity hover:opacity-85"
                style={{
                  fontFamily: "var(--top3-zen)",
                  backgroundColor: "#8DC86A",
                  color: "white",
                }}
              >
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* 電話での相談 */}
        <div className="mt-10 pt-10" style={{ borderTop: "1px solid #D4C9A8" }}>
          <p
            className="text-xs mb-3"
            style={{ fontFamily: "var(--top3-yomogi)", color: "#8DC86A" }}
          >
            お電話でのご相談
          </p>
          <a
            href="tel:0000000000"
            className="text-3xl font-semibold hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--top3-klee)", color: "#5C4033" }}
          >
            000-0000-0000
          </a>
          <p
            className="text-xs mt-2"
            style={{ fontFamily: "var(--top3-zen)", color: "#5C4033", opacity: 0.5 }}
          >
            受付：8:00〜18:00（日曜・祝日除く）
          </p>
        </div>
      </div>
    </section>
  );
}
