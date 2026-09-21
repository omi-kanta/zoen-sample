"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "サービス", href: "#services" },
  { label: "施工事例", href: "#works" },
  { label: "施工の流れ", href: "#flow" },
  { label: "法人の方", href: "#corporate" },
  { label: "代表", href: "#profile" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 h-16 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(240,230,200,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "2px solid #1A3D1A" : "2px solid transparent",
      }}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2">
        <span
          className="text-xl font-bold"
          style={{ fontFamily: "var(--top5-reggae)", color: "#1A3D1A" }}
        >
          榊Garden
        </span>
      </a>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm hover:opacity-60 transition-opacity"
            style={{ fontFamily: "var(--top5-kiwi)", color: "#1A3D1A" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="text-sm font-bold px-5 py-2.5 transition-opacity hover:opacity-80"
        style={{
          fontFamily: "var(--top5-reggae)",
          backgroundColor: "#EEC700",
          color: "#1A3D1A",
        }}
      >
        見積を依頼
      </a>
    </header>
  );
}
