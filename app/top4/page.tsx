import { Shippori_Mincho, Zen_Kaku_Gothic_New, DM_Mono } from "next/font/google";
import Header from "@/components/top4/Header";
import Hero from "@/components/top4/Hero";
import BeforeAfter from "@/components/top4/BeforeAfter";
import Troubles from "@/components/top4/Troubles";
import Works from "@/components/top4/Works";
import Flow from "@/components/top4/Flow";
import Corporate from "@/components/top4/Corporate";
import Profile from "@/components/top4/Profile";
import Contact from "@/components/top4/Contact";

const shipporiB1 = Shippori_Mincho({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--t4-head",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--t4-body",
});

const dmMono = DM_Mono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--t4-mono",
});

export default function Top4Page() {
  return (
    <div
      className={`${shipporiB1.variable} ${zenKaku.variable} ${dmMono.variable}`}
      style={{ fontFamily: "var(--t4-body)", backgroundColor: "#F5F0E8", color: "#1C2410" }}
    >
      <Header />
      {/* pb-20 sm:pb-0 でモバイル固定CTAとの重なりを回避 */}
      <main className="pb-20 sm:pb-0">
        <Hero />
        <BeforeAfter />
        <Troubles />
        <Works />
        <Flow />
        <Corporate />
        <Profile />
        <Contact />
      </main>

      {/* モバイル固定CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden"
        style={{ backgroundColor: "#D4820A" }}
      >
        <a
          href="#contact"
          className="block text-center py-4 font-bold text-white text-base"
          style={{ fontFamily: "var(--t4-body)" }}
        >
          無料で相談する
        </a>
      </div>
    </div>
  );
}
