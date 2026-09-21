export default function Concept() {
  return (
    <section id="concept" className="bg-[#0D0F0B] text-white py-28 sm:py-40 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs text-white/40 mb-12 tracking-widest"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          わたしたちのこと
        </p>

        <h2
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-14"
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          あなたの庭が、<br />
          <span className="text-[#8BAD7A]">あなたを映す。</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="border-l-2 border-[#8BAD7A] pl-6">
            <p
              className="text-base sm:text-lg leading-loose text-white/80"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              庭は、つくって終わりではない。<br />
              松の透かし方、生垣の刈り高さ、石の据え方——<br />
              細かい判断の積み重ねが、その家らしさをつくる。
            </p>
          </div>
          <div>
            <p
              className="text-sm text-white/50 leading-loose"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              創業15年、神奈川・東京を中心に300件以上の庭に関わってきました。
              新築の庭づくりから、長年手つかずだった庭の整理、
              マンション共用部の年間管理まで。
              一本の木のことでも、まずご相談ください。
            </p>
            <a
              href="#works"
              className="inline-block mt-8 text-sm text-white/50 border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-colors"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              施工事例を見る →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
