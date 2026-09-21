export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "var(--top1-serif)" }}
        >
          お問い合わせ
        </h2>
        <p
          className="text-sm text-gray-500 mb-14"
          style={{ fontFamily: "var(--top1-sans)" }}
        >
          現地調査・お見積りは無料です。まずはご連絡ください。
        </p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-16">
          {/* 電話 */}
          <div className="flex-1">
            <p
              className="text-xs text-gray-400 mb-3 tracking-widest"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              お電話でのご相談
            </p>
            <a
              href="tel:0000000000"
              className="text-4xl sm:text-5xl font-bold text-green-800 hover:text-green-600 transition-colors block leading-none mb-3"
              style={{ fontFamily: "var(--top1-serif)" }}
            >
              000-0000-0000
            </a>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              受付時間：8:00〜18:00（日曜・祝日除く）
            </p>
          </div>

          {/* メール */}
          <div className="flex-1">
            <p
              className="text-xs text-gray-400 mb-3 tracking-widest"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              メールでのご相談
            </p>
            <a
              href="mailto:info@sakaki-garden.example"
              className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-bold px-8 py-4 transition-colors mb-3"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              メールで問い合わせる
            </a>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "var(--top1-sans)" }}
            >
              24時間受付・翌営業日に返信
            </p>
          </div>
        </div>

        {/* フォーム */}
        <div style={{ borderTop: "1px solid #e7e3db" }} className="pt-12">
          <h3
            className="text-lg font-bold text-gray-900 mb-8"
            style={{ fontFamily: "var(--top1-serif)" }}
          >
            お問い合わせフォーム
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                className="block text-xs text-gray-500 mb-1.5 tracking-wide"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-stone-200 px-3 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                placeholder="山田 花子"
                style={{ fontFamily: "var(--top1-sans)" }}
              />
            </div>
            <div>
              <label
                className="block text-xs text-gray-500 mb-1.5 tracking-wide"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                電話番号
              </label>
              <input
                type="tel"
                className="w-full border border-stone-200 px-3 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                placeholder="000-0000-0000"
                style={{ fontFamily: "var(--top1-sans)" }}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                className="block text-xs text-gray-500 mb-1.5 tracking-wide"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-stone-200 px-3 py-3 text-sm focus:outline-none focus:border-green-400 bg-white"
                placeholder="example@mail.com"
                style={{ fontFamily: "var(--top1-sans)" }}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                className="block text-xs text-gray-500 mb-1.5 tracking-wide"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                ご相談内容 <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={5}
                className="w-full border border-stone-200 px-3 py-3 text-sm focus:outline-none focus:border-green-400 bg-white resize-none"
                placeholder="庭の広さ・樹木の種類・お困りの状況など、思いつくままお書きください。"
                style={{ fontFamily: "var(--top1-sans)" }}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 text-sm transition-colors"
                style={{ fontFamily: "var(--top1-sans)" }}
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
