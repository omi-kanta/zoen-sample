const fields = [
  { id: "name", label: "お名前", type: "text", placeholder: "山田 花子", span: false },
  { id: "phone", label: "電話番号", type: "tel", placeholder: "000-0000-0000", span: false },
  { id: "email", label: "メールアドレス", type: "email", placeholder: "example@mail.com", span: true },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F8F8F5] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs text-gray-400 mb-3 tracking-widest"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            お問い合わせ
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            お気軽にご相談ください
          </h2>
          <p
            className="text-sm text-gray-500"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            現地調査・お見積りは無料です。まずはお気軽にご連絡ください。
          </p>
        </div>

        {/* Phone */}
        <div className="mb-12 pb-12 border-b border-stone-300">
          <p
            className="text-xs text-gray-400 mb-3 tracking-widest"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            お電話でのご相談
          </p>
          <a
            href="tel:0000000000"
            className="text-4xl sm:text-5xl font-bold text-gray-900 hover:text-[#6B8F5E] transition-colors block leading-none"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            000-0000-0000
          </a>
          <p
            className="text-xs text-gray-400 mt-3"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            受付時間：8:00〜18:00（日曜・祝日除く）
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map((f) => (
            <div key={f.id} className={f.span ? "sm:col-span-2" : ""}>
              <label
                className="block text-sm text-gray-700 mb-2"
                style={{ fontFamily: "var(--top2-sans)" }}
              >
                {f.label}
              </label>
              <input
                type={f.type}
                className="w-full bg-white border border-stone-300 text-gray-900 px-4 py-3 text-sm focus:outline-none focus:border-gray-600 placeholder:text-gray-300"
                placeholder={f.placeholder}
                style={{ fontFamily: "var(--top2-sans)" }}
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label
              className="block text-sm text-gray-700 mb-2"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              ご相談内容
            </label>
            <textarea
              rows={5}
              className="w-full bg-white border border-stone-300 text-gray-900 px-4 py-3 text-sm focus:outline-none focus:border-gray-600 placeholder:text-gray-300 resize-none"
              placeholder="ご希望の内容・お庭の状況などをお気軽にご記入ください。"
              style={{ fontFamily: "var(--top2-sans)" }}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-bold text-sm py-4 hover:bg-[#6B8F5E] transition-colors"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
