import Image from "next/image";

export default function Corporate() {
  return (
    <section
      id="corporate"
      className="relative h-[65vh] min-h-[420px] flex items-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80&auto=format&fit=crop"
        alt="法人向けサービス"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 px-6 sm:px-12 max-w-3xl">
        <p
          className="text-xs text-white/50 mb-8 tracking-widest"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          法人・管理会社様へ
        </p>
        <h2
          className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          マンション・ビルの<br />
          緑地管理、お任せください
        </h2>
        <p
          className="text-sm text-white/70 leading-relaxed mb-10 max-w-sm"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          商業施設・オフィス・マンションの植栽管理から定期管理契約まで、
          法人様向けにカスタマイズしたプランをご提案します。
          複数施設の一括発注にも対応しています。
        </p>
        <a
          href="#contact"
          className="inline-block text-sm font-bold bg-white text-gray-900 px-10 py-4 hover:bg-stone-100 transition-colors"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          法人でのご相談はこちら
        </a>
      </div>
    </section>
  );
}
