import { Klee_One, Zen_Kaku_Gothic_New, Yomogi } from "next/font/google";
import Header from "@/components/top6/Header";
import Hero from "@/components/top6/Hero";
import Strengths from "@/components/top6/Strengths";
import Services from "@/components/top6/Services";
import Works from "@/components/top6/Works";
import Testimonials from "@/components/top6/Testimonials";
import Flow from "@/components/top6/Flow";
import Corporate from "@/components/top6/Corporate";
import Profile from "@/components/top6/Profile";
import Contact from "@/components/top6/Contact";
import Footer from "@/components/top6/Footer";

const kleeOne = Klee_One({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top6-klee",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top6-zen",
});

const yomogi = Yomogi({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top6-yomogi",
});

export default function Top6Page() {
  return (
    <div
      className={`${kleeOne.variable} ${zenKaku.variable} ${yomogi.variable}`}
      style={{ fontFamily: "var(--top6-zen, sans-serif)", backgroundColor: "#F7F2E8" }}
    >
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Services />
        <Works />
        <Testimonials />
        <Flow />
        <Corporate />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
