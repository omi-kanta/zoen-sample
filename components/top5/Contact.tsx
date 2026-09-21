"use client";
import { useState } from "react";

const PALETTE = [
  { id: "tree", label: "高木", emoji: "🌳", color: "#1A3D1A" },
  { id: "shrub", label: "低木", emoji: "🌿", color: "#5BB346" },
  { id: "flower", label: "花壇", emoji: "🌸", color: "#E8532A" },
  { id: "stone", label: "飛び石", emoji: "🪨", color: "#8B7355" },
  { id: "erase", label: "消す", emoji: "✕", color: "#999" },
] as const;

type PaletteId = (typeof PALETTE)[number]["id"];

const GRID_COLS = 6;
const GRID_ROWS = 4;

type Cell = string | null;

function emptyGrid(): Cell[][] {
  return Array(GRID_ROWS)
    .fill(null)
    .map(() => Array(GRID_COLS).fill(null));
}

export default function Contact() {
  const [selected, setSelected] = useState<PaletteId | null>(null);
  const [grid, setGrid] = useState<Cell[][]>(emptyGrid);
  const [showForm, setShowForm] = useState(false);

  const placedItems = PALETTE.filter(
    (p) => p.id !== "erase" && grid.some((row) => row.includes(p.id))
  );

  const handleCell = (r: number, c: number) => {
    if (!selected) return;
    setGrid((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = selected === "erase" ? null : next[r][c] === selected ? null : selected;
      return next;
    });
  };

  const reset = () => {
    setGrid(emptyGrid());
    setShowForm(false);
  };

  const placedSummary = placedItems.map((p) => `${p.emoji} ${p.label}`).join("、");

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-6 sm:px-12"
      style={{ backgroundColor: "#F0E6C8" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs mb-2 tracking-widest"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#E8532A" }}
        >
          まず、絵を描いてみてください
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{
            fontFamily: "var(--top5-reggae)",
            color: "#1A3D1A",
            textShadow: "2px 2px 0 rgba(232,83,42,0.2)",
          }}
        >
          どんな庭にしたい？
        </h2>
        <p
          className="text-sm mb-10 leading-relaxed"
          style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A", opacity: 0.6 }}
        >
          気になるアイテムをグリッドに配置したら、そのままお見積り依頼ができます。
          「まだ迷っている」も大歓迎です。
        </p>

        {/* Palette */}
        <div className="flex flex-wrap gap-2 mb-4">
          {PALETTE.map((item) => {
            const isActive = selected === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(isActive ? null : item.id)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all"
                style={{
                  fontFamily: "var(--top5-kiwi)",
                  backgroundColor: isActive ? item.color : "transparent",
                  color: isActive ? "#F0E6C8" : "#1A3D1A",
                  border: `2px solid ${isActive ? item.color : "#1A3D1A"}`,
                }}
              >
                <span>{item.emoji}</span>
                {item.label}
              </button>
            );
          })}
          <button
            onClick={reset}
            className="px-4 py-2 text-sm transition-opacity hover:opacity-60"
            style={{
              fontFamily: "var(--top5-kiwi)",
              color: "#1A3D1A",
              border: "2px dashed #1A3D1A",
            }}
          >
            リセット
          </button>
        </div>

        {/* Garden grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gap: 3,
            border: "3px solid #1A3D1A",
            backgroundColor: "#1A3D1A",
            padding: 3,
            cursor: selected ? "crosshair" : "default",
          }}
        >
          {grid.map((row, r) =>
            row.map((cell, c) => {
              const item = PALETTE.find((p) => p.id === cell);
              return (
                <button
                  key={`${r}-${c}`}
                  onClick={() => handleCell(r, c)}
                  className="flex items-center justify-center transition-all"
                  style={{
                    aspectRatio: "1",
                    backgroundColor: cell
                      ? `${PALETTE.find((p) => p.id === cell)?.color}22`
                      : "#F9F5EC",
                    fontSize: 20,
                  }}
                  aria-label={item ? item.label : `セル ${r + 1}-${c + 1}`}
                >
                  {item?.emoji ?? ""}
                </button>
              );
            })
          )}
        </div>

        <p
          className="text-xs mt-2 mb-8"
          style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.4 }}
        >
          {selected
            ? `${PALETTE.find((p) => p.id === selected)?.emoji} ${PALETTE.find((p) => p.id === selected)?.label} を配置中`
            : "アイテムを選んでからグリッドをタップ"}
        </p>

        {/* Summary + call to action */}
        {placedItems.length > 0 && !showForm && (
          <div
            className="mb-8 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: "#EEC700", border: "2px solid #1A3D1A" }}
          >
            <div>
              <p
                className="text-xs mb-1"
                style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.55 }}
              >
                配置したもの
              </p>
              <p
                className="text-sm font-bold"
                style={{ fontFamily: "var(--top5-maru)", color: "#1A3D1A" }}
              >
                {placedSummary}
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="shrink-0 px-6 py-3 font-bold text-sm transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--top5-reggae)",
                backgroundColor: "#1A3D1A",
                color: "#F0E6C8",
              }}
            >
              この庭を相談する →
            </button>
          </div>
        )}

        {/* Contact form */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: showForm ? 900 : 0, opacity: showForm ? 1 : 0 }}
        >
          <div
            className="p-6 sm:p-8"
            style={{
              border: "2px solid #1A3D1A",
              backgroundColor: "#F9F5EC",
            }}
          >
            <p
              className="text-xs mb-6 tracking-widest"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.5 }}
            >
              お問い合わせフォーム
            </p>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.6 }}
                  >
                    お名前 *
                  </label>
                  <input
                    type="text"
                    placeholder="榊 翔麻"
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{
                      fontFamily: "var(--top5-maru)",
                      border: "2px solid #1A3D1A",
                      backgroundColor: "white",
                      color: "#1A3D1A",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs mb-1.5"
                    style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.6 }}
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    placeholder="000-0000-0000"
                    className="w-full px-4 py-3 text-sm focus:outline-none"
                    style={{
                      fontFamily: "var(--top5-maru)",
                      border: "2px solid #1A3D1A",
                      backgroundColor: "white",
                      color: "#1A3D1A",
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.6 }}
                >
                  メールアドレス *
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--top5-maru)",
                    border: "2px solid #1A3D1A",
                    backgroundColor: "white",
                    color: "#1A3D1A",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.6 }}
                >
                  ご要望・ご相談内容
                </label>
                <textarea
                  rows={4}
                  defaultValue={
                    placedItems.length > 0
                      ? `配置したもの: ${placedSummary}\n\n（ここに詳細をご記入ください）`
                      : ""
                  }
                  className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                  style={{
                    fontFamily: "var(--top5-maru)",
                    border: "2px solid #1A3D1A",
                    backgroundColor: "white",
                    color: "#1A3D1A",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-base font-bold transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--top5-reggae)",
                  backgroundColor: "#EEC700",
                  color: "#1A3D1A",
                }}
              >
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* Phone */}
        {!showForm && (
          <div className="mt-12 pt-8" style={{ borderTop: "2px solid #1A3D1A" }}>
            <p
              className="text-xs mb-3"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.45 }}
            >
              お電話でのご相談
            </p>
            <a
              href="tel:0000000000"
              className="text-4xl sm:text-5xl font-bold transition-opacity hover:opacity-60"
              style={{ fontFamily: "var(--top5-reggae)", color: "#1A3D1A" }}
            >
              000-0000-0000
            </a>
            <p
              className="text-xs mt-2"
              style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A", opacity: 0.4 }}
            >
              受付: 8:00〜18:00（日曜・祝日除く）
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
