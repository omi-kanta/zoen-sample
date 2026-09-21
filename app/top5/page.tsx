import { Reggae_One, Zen_Maru_Gothic, Kiwi_Maru } from "next/font/google";
import Header from "@/components/top5/Header";
import Hero from "@/components/top5/Hero";
import Services from "@/components/top5/Services";
import Works from "@/components/top5/Works";
import Strengths from "@/components/top5/Strengths";
import Flow from "@/components/top5/Flow";
import Corporate from "@/components/top5/Corporate";
import Profile from "@/components/top5/Profile";
import Contact from "@/components/top5/Contact";
import Footer from "@/components/top5/Footer";

const reggaeOne = Reggae_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top5-reggae",
});

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top5-maru",
});

const kiwiMaru = Kiwi_Maru({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top5-kiwi",
});

export default function Top5Page() {
  return (
    <div
      className={`${reggaeOne.variable} ${zenMaru.variable} ${kiwiMaru.variable}`}
      style={{
        fontFamily: "var(--top5-maru, sans-serif)",
        backgroundColor: "#F0E6C8",
        color: "#1A3D1A",
      }}
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Strengths />
        <Flow />
        <Corporate />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
