import Image from "next/image";

const categories = [
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop",
    alt: "庭園設計・施工",
    label: "庭園設計・施工",
    href: "#services",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    alt: "剪定・植栽管理",
    label: "剪定・植栽管理",
    href: "#services",
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop",
    alt: "芝生・造成工事",
    label: "芝生・造成工事",
    href: "#services",
  },
  {
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80&auto=format&fit=crop",
    alt: "法人・定期管理",
    label: "法人・定期管理",
    href: "#corporate",
  },
];

export default function GridNav() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {categories.map((cat) => (
        <a
          key={cat.label}
          href={cat.href}
          className="relative group overflow-hidden aspect-square md:aspect-[3/4]"
        >
          <Image
            src={cat.src}
            alt={cat.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <span
              className="text-sm sm:text-base font-bold leading-snug"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              {cat.label}
            </span>
            <span
              className="mt-4 text-xs border-b border-white/60 pb-px transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              詳しく見る
            </span>
          </div>
        </a>
      ))}
    </section>
  );
}
