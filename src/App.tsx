import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { CasesSection } from "./components/CasesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
// import { MouseTrailEffect } from "./components/MouseTrailEffect";
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* <MouseTrailEffect /> */}
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <WhatWeDoSection />
        <TargetAudienceSection />
        <CasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}