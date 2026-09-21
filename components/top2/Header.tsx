"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "コンセプト", href: "#concept" },
  { label: "施工事例", href: "#works" },
  { label: "サービス", href: "#services" },
  { label: "施工の流れ", href: "#flow" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        onDark ? "bg-transparent" : "bg-white border-b border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/top2"
          className={`text-lg font-bold tracking-widest transition-colors ${
            onDark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "var(--top2-sans)" }}
        >
          榊Garden
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:opacity-60 ${
                onDark ? "text-white" : "text-gray-700"
              }`}
              style={{ fontFamily: "var(--top2-sans)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:0000000000"
            className={`text-sm font-bold border px-5 py-2 transition-colors ${
              onDark
                ? "border-white text-white hover:bg-white hover:text-gray-900"
                : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            }`}
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            000-0000-0000
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-[5px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-[1.5px] transition-all duration-300 ${
                  onDark ? "bg-white" : "bg-gray-900"
                } ${
                  i === 0 && open
                    ? "rotate-45 translate-y-[7px]"
                    : i === 1 && open
                    ? "opacity-0"
                    : i === 2 && open
                    ? "-rotate-45 -translate-y-[7px]"
                    : ""
                }`}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-b border-stone-200" : "max-h-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-900 hover:opacity-50 transition-opacity"
              style={{ fontFamily: "var(--top2-sans)" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:0000000000"
            className="text-sm font-bold text-gray-900 pt-4 border-t border-stone-100"
            style={{ fontFamily: "var(--top2-sans)" }}
          >
            000-0000-0000
          </a>
        </div>
      </div>
    </header>
  );
}
