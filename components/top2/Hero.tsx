import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=85&auto=format&fit=crop"
        alt="榊Garden ヒーロービジュアル"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 px-6 sm:px-12 pb-16 sm:pb-28 w-full max-w-5xl">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          庭をつくるより、<br />
          庭を育てる。
        </h1>
        <p
          className="text-sm sm:text-base text-white/70 max-w-sm leading-relaxed mb-10"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          剪定・植栽・年間管理。<br />
          神奈川・東京で15年、現場に立ち続けています。
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-bold bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            無料でご相談する
          </a>
          <a
            href="#works"
            className="text-sm text-white/70 hover:text-white transition-colors border-b border-white/30 pb-0.5"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            施工事例を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
