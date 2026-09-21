import Link from "next/link";

const designs = [
  {
    href: "/top1",
    label: "案1",
    description: "ナチュラル・落ち着いた雰囲気",
  },
  {
    href: "/top2",
    label: "案2",
    description: "モダン・スタイリッシュな雰囲気",
  },
  {
    href: "/top3",
    label: "案3",
    description: "伝統・和風テイストの雰囲気",
  },
  {
    href: "/top4",
    label: "案4",
    description: "手入れで変わる庭・写真と言葉で見せる",
  },
  {
    href: "/top5",
    label: "案5",
    description: "おもちゃ箱・リソグラフテイスト",
  },
  {
    href: "/top6",
    label: "案6",
    description: "案3ベース・季節軸なし＋口コミ＋代表紹介",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen p-8 sm:p-16">
      <h1 className="text-2xl font-bold mb-2">造園サイト デザイン案</h1>
      <p className="text-gray-600 mb-10">5つのデザイン案を比較してください。</p>

      <div className="grid gap-6 sm:grid-cols-3">
        {designs.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="block border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-lg font-semibold mb-2">{d.label}</div>
            <p className="text-gray-500 text-sm">{d.description}</p>
            <span className="mt-4 inline-block text-sm text-blue-600 underline">
              見る →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
