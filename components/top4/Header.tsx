"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "施工事例", href: "#works" },
  { label: "お悩みから", href: "#troubles" },
  { label: "施工の流れ", href: "#flow" },
  { label: "法人の方", href: "#corporate" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const solid = scrolled || menuOpen;
  const fg = solid ? "#1C2410" : "#F5F0E8";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 h-16 transition-all duration-300"
        style={{
          backgroundColor: solid ? "#F5F0E8" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(28,36,16,0.1)" : "none",
        }}
      >
        <Link
          href="/"
          style={{ fontFamily: "var(--t4-head)", fontSize: 18, fontWeight: 800, color: fg }}
        >
          榊Garden
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--t4-body)", color: fg }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-bold px-5 py-2.5 transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#D4820A", color: "white", fontFamily: "var(--t4-body)" }}
          >
            相談する
          </a>
        </nav>

        {/* ハンバーガー */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {[
            menuOpen ? "translateY(4.5px) rotate(45deg)" : "none",
            "none",
            menuOpen ? "translateY(-4.5px) rotate(-45deg)" : "none",
          ].map((transform, i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                backgroundColor: fg,
                transition: "transform 0.22s, opacity 0.22s",
                transform,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <div
        className="fixed inset-0 z-40 sm:hidden flex flex-col pt-16"
        style={{
          backgroundColor: "#F5F0E8",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.2s",
        }}
      >
        <nav className="flex flex-col mt-6 px-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-5 text-2xl border-b"
              style={{
                fontFamily: "var(--t4-head)",
                fontWeight: 800,
                color: "#1C2410",
                borderColor: "rgba(28,36,16,0.1)",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="px-6 mt-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-4 font-bold text-white text-base"
            style={{ backgroundColor: "#D4820A", fontFamily: "var(--t4-body)" }}
          >
            無料で相談する
          </a>
        </div>
      </div>
    </>
  );
}
