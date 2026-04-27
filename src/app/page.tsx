import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Marketplaces } from "@/components/sections/marketplaces";
import { SocialProof } from "@/components/sections/social-proof";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <Marketplaces />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
