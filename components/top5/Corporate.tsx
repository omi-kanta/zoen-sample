"use client";
import { useState } from "react";

const questions = [
  {
    q: "今の庭の状態は？",
    opts: ["まあまあ整っている", "少し気になっている", "かなりひどい状態…"],
  },
  {
    q: "最後に手入れしたのはいつ？",
    opts: ["半年以内", "1〜2年前", "3年以上前（または記憶にない）"],
  },
  {
    q: "お庭の用途・規模は？",
    opts: ["個人宅（小〜中）", "マンション共用部・大型物件", "商業施設・管理組合"],
  },
];

const results = [
  {
    level: "★☆☆",
    label: "まだ余裕あり",
    color: "#5BB346",
    msg: "年間管理プランで、現状をキープしませんか？定期的なお手入れで費用を抑えながら美しい庭を維持できます。",
  },
  {
    level: "★★☆",
    label: "そろそろ手入れどき",
    color: "#EEC700",
    msg: "今年中に一度、現地を見させてください。「このままにしておくといくらかかるか」も含めて正直にお伝えします。",
  },
  {
    level: "★★★",
    label: "急ぎのご相談を！",
    color: "#E8532A",
    msg: "今すぐご連絡ください。まず現地を見に伺います。お見積りは無料、話を聞くだけでも歓迎です。",
  },
];

export default function Corporate() {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const resultIdx = score <= 2 ? 0 : score <= 4 ? 1 : 2;
  const result = results[resultIdx];

  const handleAnswer = (qi: number, ai: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = ai;
      return next;
    });
    setSubmitted(false);
  };

  return (
    <section
      id="corporate"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#1A3D1A" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#EEC700" }}
        >
          法人・管理組合の方へ ／ 3問診断
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#F0E6C8",
            textShadow: "2px 2px 0 rgba(238,199,0,0.3)",
          }}
        >
          あなたの庭の緊急度は？
        </h2>
        <p
          className="text-sm mb-12 leading-relaxed"
          style={{ fontFamily: "var(--top5-maru)", color: "#F0E6C8", opacity: 0.65 }}
        >
          3つの質問に答えるだけ。マンション・ビル・商業施設の植栽管理もお気軽にご相談ください。
        </p>

        {/* Questions */}
        <div className="flex flex-col gap-8 mb-10">
          {questions.map((q, qi) => (
            <div key={qi}>
              <p
                className="text-sm font-bold mb-3"
                style={{ fontFamily: "var(--top5-kiwi)", color: "#EEC700" }}
              >
                Q{qi + 1}. {q.q}
              </p>
              <div className="flex flex-col gap-2">
                {q.opts.map((opt, ai) => {
                  const selected = answers[qi] === ai;
                  return (
                    <button
                      key={ai}
                      onClick={() => handleAnswer(qi, ai)}
                      className="text-left text-sm px-4 py-3 transition-all"
                      style={{
                        fontFamily: "var(--top5-maru)",
                        backgroundColor: selected ? "#EEC700" : "rgba(240,230,200,0.08)",
                        color: selected ? "#1A3D1A" : "#F0E6C8",
                        border: `1.5px solid ${selected ? "#EEC700" : "rgba(240,230,200,0.25)"}`,
                      }}
                    >
                      {ai === 0 ? "a" : ai === 1 ? "b" : "c"}. {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        {!submitted && (
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="w-full py-4 font-bold text-base transition-opacity"
            style={{
              fontFamily: "var(--top5-reggae)",
              backgroundColor: allAnswered ? "#EEC700" : "rgba(238,199,0,0.3)",
              color: "#1A3D1A",
              opacity: allAnswered ? 1 : 0.5,
              cursor: allAnswered ? "pointer" : "not-allowed",
            }}
          >
            診断する
          </button>
        )}

        {/* Result */}
        {submitted && allAnswered && (
          <div
            className="mt-6 p-6 sm:p-8"
            style={{
              backgroundColor: "#F9F5EC",
              border: `3px solid ${result.color}`,
            }}
          >
            <p
              className="text-xs mb-2"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.5 }}
            >
              診断結果
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-3xl"
                style={{ color: result.color }}
              >
                {result.level}
              </span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--top5-reggae)", color: "#1A3D1A" }}
              >
                {result.label}
              </span>
            </div>
            <p
              className="text-sm leading-loose mb-6"
              style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.7 }}
            >
              {result.msg}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 font-bold text-sm transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--top5-reggae)",
                backgroundColor: result.color,
                color: result.color === "#EEC700" ? "#1A3D1A" : "#F0E6C8",
              }}
            >
              相談する（無料）
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
