import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Story } from "./story";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07130A] text-white">
      <Header />
      <Hero />
      <Story />
    </main>
  );
}
