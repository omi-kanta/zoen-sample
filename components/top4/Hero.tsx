export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>
      <style>{`
        @keyframes t4n-zoom {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        .t4n-hero-img {
          animation: t4n-zoom 9s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .t4n-hero-img { animation: none; }
        }
      `}</style>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=85&auto=format&fit=crop"
        alt="手入れの行き届いた庭"
        className="t4n-hero-img absolute inset-0 w-full h-full object-cover"
      />

      {/* オーバーレイ：左が濃く右に抜ける */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,28,10,0.75) 0%, rgba(20,28,10,0.42) 50%, rgba(20,28,10,0.14) 100%)",
        }}
      />

      {/* テキスト：左下揃え */}
      <div className="relative h-full flex flex-col justify-end px-8 sm:px-16 pb-24 sm:pb-32">
        <p
          className="mb-5 tracking-widest text-xs"
          style={{ fontFamily: "var(--t4-mono)", color: "rgba(245,240,232,0.6)" }}
        >
          榊Garden ── 横浜の造園・庭師
        </p>
        <h1
          className="leading-tight mb-10"
          style={{
            fontFamily: "var(--t4-head)",
            color: "#F5F0E8",
            fontSize: "clamp(44px, 7.5vw, 88px)",
            fontWeight: 800,
          }}
        >
          庭は、<br />
          手入れで<br className="sm:hidden" />変わる。
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block text-center font-bold transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "#D4820A",
              color: "white",
              fontFamily: "var(--t4-body)",
              padding: "16px 40px",
              fontSize: 16,
            }}
          >
            無料で相談する
          </a>
          <a
            href="tel:0000000000"
            className="inline-block text-center transition-opacity hover:opacity-70"
            style={{
              border: "1.5px solid rgba(245,240,232,0.5)",
              color: "#F5F0E8",
              fontFamily: "var(--t4-mono)",
              padding: "16px 40px",
              fontSize: 16,
            }}
          >
            000-0000-0000
          </a>
        </div>
      </div>
    </section>
  );
}
