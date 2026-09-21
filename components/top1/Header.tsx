"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "強み", href: "#strengths" },
  { label: "施工事例", href: "#works" },
  { label: "サービス", href: "#services" },
  { label: "施工の流れ", href: "#flow" },
  { label: "法人のお客様へ", href: "#corporate" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/top1"
          className="text-xl font-bold text-green-800"
          style={{ fontFamily: "var(--top1-serif)" }}
        >
          榊Garden
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-green-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Phone (desktop) */}
        <a
          href="tel:0000000000"
          className="hidden lg:flex items-center gap-2 text-green-800 font-bold text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          000-0000-0000
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 text-base hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:0000000000"
            className="text-green-800 font-bold text-base flex items-center gap-2 pt-2 border-t border-stone-100"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            000-0000-0000
          </a>
        </div>
      </div>
    </header>
  );
}
