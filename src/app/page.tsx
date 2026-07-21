import { CTA } from "./cta";
import { Footer } from "./footer";
import { Features } from "./features";
import { FAQ } from "./faq";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "./pricing";
import { Story } from "./story";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07130A] text-white">
      <Header />
      <Hero />
      <Story />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
