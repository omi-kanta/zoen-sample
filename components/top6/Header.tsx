"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "施工事例", href: "#works" },
  { label: "施工の流れ", href: "#flow" },
  { label: "法人の方", href: "#corporate" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(247,242,232,0.92)",
        backdropFilter: "blur(8px)",
        borderColor: "#D4C9A8",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/top6" className="flex items-center gap-2">
          {/* 葉っぱSVGロゴ */}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
            <path
              d="M13 24 C13 24 3 17 3 10 C3 5 8 1 13 1 C18 1 23 5 23 10 C23 17 13 24 13 24Z"
              fill="#8DC86A"
              opacity="0.85"
            />
            <path d="M13 24 L13 7" stroke="#5C4033" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13 16 C10 13 7 14 7 14" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" />
            <path d="M13 20 C16 17 19 18 19 18" stroke="#5C4033" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--top6-klee)", color: "#5C4033" }}
          >
            榊Garden
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-opacity hover:opacity-60"
              style={{ fontFamily: "var(--top6-zen)", color: "#5C4033" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2 rounded-full transition-opacity hover:opacity-85"
            style={{ fontFamily: "var(--top6-zen)", backgroundColor: "#8DC86A", color: "white" }}
          >
            無料相談
          </a>
        </nav>

        <button
          className="md:hidden p-2 -mr-1"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className="block h-px transition-all duration-300"
              style={{
                backgroundColor: "#5C4033",
                transform: open ? "rotate(45deg) translate(0, 5px)" : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{ backgroundColor: "#5C4033", opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                backgroundColor: "#5C4033",
                transform: open ? "rotate(-45deg) translate(0, -5px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}
        style={{ backgroundColor: "#F7F2E8", borderTop: open ? "1px solid #D4C9A8" : "none" }}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base"
              style={{ fontFamily: "var(--top6-zen)", color: "#5C4033" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2 rounded-full text-center mt-1"
            style={{ fontFamily: "var(--top6-zen)", backgroundColor: "#8DC86A", color: "white" }}
            onClick={() => setOpen(false)}
          >
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
}
