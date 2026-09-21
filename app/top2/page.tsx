import { Inter, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/top2/Header";
import Hero from "@/components/top2/Hero";
import GridNav from "@/components/top2/GridNav";
import Concept from "@/components/top2/Concept";
import Works from "@/components/top2/Works";
import Services from "@/components/top2/Services";
import Strengths from "@/components/top2/Strengths";
import Flow from "@/components/top2/Flow";
import Testimonials from "@/components/top2/Testimonials";
import Corporate from "@/components/top2/Corporate";
import Contact from "@/components/top2/Contact";
import Footer from "@/components/top2/Footer";

const inter = Inter({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--top2-inter",
});

const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--top2-sans",
});

export default function Top2Page() {
  return (
    <div
      className={`${inter.variable} ${notoSans.variable}`}
      style={{ fontFamily: "var(--top2-sans, sans-serif)" }}
    >
      <Header />
      <main>
        <Hero />
        <GridNav />
        <Concept />
        <Works />
        <Services />
        <Strengths />
        <Flow />
        <Testimonials />
        <Corporate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
