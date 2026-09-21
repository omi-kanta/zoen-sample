import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
        alt="榊Garden ヒーロービジュアル"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 pb-16 sm:pb-24">
        <p
          className="text-sm mb-5 tracking-wider"
          style={{ fontFamily: "var(--top1-sans)", color: "#a3c585" }}
        >
          神奈川県・東京都対応 ／ 年間管理承ります
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--top1-serif)", lineHeight: 1.4 }}
        >
          松の剪定から、<br />
          芝張りまで。<br />
          <span className="text-3xl sm:text-4xl font-semibold" style={{ color: "#a3c585" }}>
            横浜の庭師です。
          </span>
        </h1>
        <p
          className="text-sm sm:text-base text-white/75 max-w-md leading-loose mb-10"
          style={{ fontFamily: "var(--top1-sans)" }}
        >
          創業15年。剪定・植栽・草刈りから落ち葉清掃・冬囲いまで、
          庭に関することはなんでもご相談ください。
          現地調査・お見積りは無料です。
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:0000000000"
            className="text-sm font-bold bg-green-700 hover:bg-green-800 text-white px-8 py-4 transition-colors"
            style={{ fontFamily: "var(--top1-sans)" }}
          >
            000-0000-0000 に電話する
          </a>
          <a
            href="#contact"
            className="text-sm font-bold border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 transition-colors"
            style={{ fontFamily: "var(--top1-sans)" }}
          >
            メールで相談する
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 sm:right-12 text-white/50 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/30" />
        <span
          className="text-[10px] tracking-widest"
          style={{ fontFamily: "var(--top1-sans)", writingMode: "vertical-lr" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
