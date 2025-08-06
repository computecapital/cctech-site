import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { WhatWeDoSection } from "./components/WhatWeDoSection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { CasesSection } from "./components/CasesSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-background w-full">
      {/* <MouseTrailEffect /> a */}
      <Header onOpenContactModal={openContactModal} />
      <main>
        <HeroSection />
        <BenefitsSection />
        <WhatWeDoSection />
        <TargetAudienceSection />
        <CasesSection />
        <CTASection onOpenContactModal={openContactModal} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}
