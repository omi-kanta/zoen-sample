import { Klee_One, Zen_Kaku_Gothic_New, Yomogi } from "next/font/google";
import Header from "@/components/top3/Header";
import Hero from "@/components/top3/Hero";
import About from "@/components/top3/About";
import SeasonCalendar from "@/components/top3/SeasonCalendar";
import Works from "@/components/top3/Works";
import Strengths from "@/components/top3/Strengths";
import Flow from "@/components/top3/Flow";
import Corporate from "@/components/top3/Corporate";
import Contact from "@/components/top3/Contact";
import Footer from "@/components/top3/Footer";

const kleeOne = Klee_One({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top3-klee",
});

const zenMaru = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top3-zen",
});

const yomogi = Yomogi({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top3-yomogi",
});

export default function Top3Page() {
  return (
    <div
      className={`${kleeOne.variable} ${zenMaru.variable} ${yomogi.variable}`}
      style={{ fontFamily: "var(--top3-zen, sans-serif)", backgroundColor: "#F7F2E8" }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <SeasonCalendar />
        <Works />
        <Strengths />
        <Flow />
        <Corporate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
