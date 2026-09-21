import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/top1/Header";
import Hero from "@/components/top1/Hero";
import Strengths from "@/components/top1/Strengths";
import Testimonials from "@/components/top1/Testimonials";
import Works from "@/components/top1/Works";
import Services from "@/components/top1/Services";
import Flow from "@/components/top1/Flow";
import Corporate from "@/components/top1/Corporate";
import Contact from "@/components/top1/Contact";
import Footer from "@/components/top1/Footer";

const serifFont = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top1-serif",
});

const sansFont = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top1-sans",
});

export default function Top1Page() {
  return (
    <div
      className={`${serifFont.variable} ${sansFont.variable}`}
      style={{ fontFamily: "var(--top1-sans, sans-serif)" }}
    >
      <Header />
      <main className="pt-16">
        <Hero />
        <Strengths />
        <Testimonials />
        <Works />
        <Services />
        <Flow />
        <Corporate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
