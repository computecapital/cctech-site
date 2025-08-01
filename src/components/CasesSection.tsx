"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Scale, Users, Building2, ExternalLink } from "lucide-react";

// Import background images
const advocacyBg = "https://placehold.co/1200x800/171717/FFF?text=Advocacy+BG"; // Placeholder
const commercialBg = "https://placehold.co/1200x800/171717/FFF?text=Commercial+BG"; // Placeholder
const realEstateBg = "https://placehold.co/1200x800/171717/FFF?text=Real+Estate+BG"; // Placeholder

// Import company logo illustrations
const advocacyIllustration = "https://placehold.co/400x300/171717/FFF?text=Advocacy"; // Placeholder
const commercialIllustration = "https://placehold.co/400x300/171717/FFF?text=Commercial"; // Placeholder
const realEstateIllustration = "https://placehold.co/400x300/171717/FFF?text=Real+Estate"; // Placeholder

interface CaseItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  challenge: string;
  solution: string[];
  results: string[];
  quote: string;
  author: string;
  company: string;
  backgroundImage: string;
  illustrationImage: string;
  clientWebsite: string;
  authorAvatar: string;
}

export function CasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cases: CaseItem[] = [
    {
      id: 1,
      icon: <Scale className="w-8 h-8" />,
      title: "IA para Escritórios de Advocacia",
      challenge: "Análise manual de contratos consumia 80% do tempo dos advogados, gerando gargalos na operação e reduzindo a capacidade de atendimento a novos clientes.",
      solution: [
        "• IA para análise automática de cláusulas contratuais",
        "• Identificação de riscos e inconsistências em tempo real",
        "• Geração de resumos executivos automáticos",
        "• Integração com sistema de gestão jurídica existente"
      ],
      results: [
        "• 75% de redução no tempo de análise contratual",
        "• 300% de aumento na capacidade de atendimento",
        "• 95% de precisão na identificação de cláusulas críticas",
        "• ROI de 400% em 6 meses"
      ],
      quote: "A IA transformou nossa operação. Conseguimos focar no que realmente importa: estratégia jurídica e relacionamento com clientes.",
      author: "Dr. Ricardo Mendes",
      company: "Silva & Associados",
      backgroundImage: advocacyBg,
      illustrationImage: advocacyIllustration,
      clientWebsite: "https://silva-associados.com.br",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "IA para Equipes Comerciais",
      challenge: "Time de vendas perdia 60% do tempo em qualificação manual de leads, resultando em baixa conversão e ciclo de vendas longo.",
      solution: [
        "• IA para scoring automático de leads",
        "• Análise preditiva de propensão de compra",
        "• Personalização automática de abordagens",
        "• Integração com CRM e ferramentas de comunicação"
      ],
      results: [
        "• 85% de melhoria na qualificação de leads",
        "• 50% de redução no ciclo de vendas",
        "• 180% de aumento na taxa de conversão",
        "• 250% de crescimento no faturamento"
      ],
      quote: "Nossa equipe agora foca apenas em leads qualificados. A IA fez nosso time de 5 vendedores render como 15.",
      author: "Marina Silva",
      company: "TechSales Pro",
      backgroundImage: commercialBg,
      illustrationImage: commercialIllustration,
      clientWebsite: "https://techsales-pro.com",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      icon: <Building2 className="w-8 h-8" />,
      title: "IA para Vistorias no Setor Imobiliário",
      challenge: "Vistorias manuais demoravam 3 horas por imóvel, com alta margem de erro humano e inconsistência entre avaliadores.",
      solution: [
        "• IA para análise automática de fotos de imóveis",
        "• Detecção de problemas estruturais e acabamentos",
        "• Geração automática de laudos padronizados",
        "• App mobile para coleta de dados em campo"
      ],
      results: [
        "• 70% de redução no tempo de vistoria",
        "• 90% de consistência entre avaliações",
        "• 400% de aumento na capacidade operacional",
        "• Redução de 80% em retrabalhos"
      ],
      quote: "Conseguimos escalar nossa operação sem contratar mais pessoal. A IA garantiu qualidade e velocidade que não imaginávamos.",
      author: "Carlos Pereira",
      company: "Avalia Imóveis",
      backgroundImage: realEstateBg,
      illustrationImage: realEstateIllustration,
      clientWebsite: "https://avalia-imoveis.com.br",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleClientLogoClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentIndex);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) / 100; // Sensitivity
    const newIndex = Math.round(scrollLeft - walk);
    const clampedIndex = Math.max(0, Math.min(cases.length - 1, newIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(currentIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) / 100;
    const newIndex = Math.round(scrollLeft - walk);
    const clampedIndex = Math.max(0, Math.min(cases.length - 1, newIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="cases" className="py-16 lg:py-24 cases-section relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-all duration-700 ease-out">
        {cases.map((caseItem, index) => (
          <div
            key={`bg-${caseItem.id}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${caseItem.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(8px) brightness(0.3) contrast(1.2)',
            }}
          />
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/80 via-[#0E0E10]/90 to-[#0E0E10]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10]/60 via-transparent to-[#0E0E10]/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-white mb-6 animated-title shimmer-title">
            Cases de <span className="gradient-text">sucesso</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Resultados reais de clientes que transformaram seus negócios com nossa IA
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Always visible with enhanced styling */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 group shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(24, 228, 146, 0.1) 0%, rgba(24, 228, 146, 0.05) 100%)',
            }}
          >
            <ChevronLeft className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-white transition-colors drop-shadow-lg" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 group shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(24, 228, 146, 0.1) 0%, rgba(24, 228, 146, 0.05) 100%)',
            }}
          >
            <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-white transition-colors drop-shadow-lg" />
          </button>



          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {cases.map((caseItem, index) => (
                <div key={caseItem.id} className="w-full flex-shrink-0 px-4 lg:px-8">
                  <div className="mx-auto max-w-2xl">
                    {/* Card with increased height for new elements */}
                    <div 
                      className={`glassmorphism-card p-6 lg:p-8 h-[720px] lg:h-[900px] transition-all duration-500 flex flex-col ${
                        index === currentIndex 
                          ? 'scale-100 opacity-100' 
                          : 'scale-95 opacity-60'
                      }`}
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                      }}
                    >
                      {/* Company Logo/Illustration at the top */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <button
                            onClick={() => handleClientLogoClick(caseItem.clientWebsite)}
                            className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center p-4"
                            style={{ 
                              background: 'linear-gradient(135deg, #40d86a 0%, #18e492 100%)'
                            }}
                          >
                            <img
                              src={caseItem.illustrationImage}
                              alt={`Logo ${caseItem.company}`}
                              className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-110"
                            />
                            
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            
                            {/* "Saiba Mais" text with external link icon - inside button on hover */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 whitespace-nowrap">
                              <span className="text-xs font-medium text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                Saiba Mais
                              </span>
                              <ExternalLink className="w-3 h-3 text-white" />
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Header with icon and title - moved down */}
                      <div className="flex items-center gap-4 mb-6 lg:mb-8">
                        <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl">
                          <div className="text-primary">
                            {caseItem.icon}
                          </div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white">
                          {caseItem.title}
                        </h3>
                      </div>

                      {/* Content - grows to fill available space */}
                      <div className="space-y-6 lg:space-y-8 flex-1 overflow-y-auto">
                        {/* Challenge */}
                        <div>
                          <h4 className="text-primary font-semibold mb-2 lg:mb-3 text-base lg:text-lg">Desafio:</h4>
                          <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                            {caseItem.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-primary font-semibold mb-2 lg:mb-3 text-base lg:text-lg">Solução:</h4>
                          <div className="space-y-1 lg:space-y-2">
                            {caseItem.solution.map((item, idx) => (
                              <p key={idx} className="text-white/80 leading-relaxed text-sm lg:text-base">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="text-primary font-semibold mb-2 lg:mb-3 text-base lg:text-lg">Resultados:</h4>
                          <div className="space-y-1 lg:space-y-2">
                            {caseItem.results.map((item, idx) => (
                              <p key={idx} className="text-white/80 leading-relaxed text-sm lg:text-base">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote with author info at the bottom */}
                      <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/20">
                        <blockquote className="text-white italic text-base lg:text-lg leading-relaxed mb-4 font-[DM_Sans]">
                          "{caseItem.quote}"
                        </blockquote>
                        
                        {/* Author info with avatar */}
                        <div className="flex justify-end">
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className="text-primary font-semibold text-sm lg:text-base">
                                {caseItem.author}
                              </div>
                              <div className="text-white/70 text-sm">
                                {caseItem.company}
                              </div>
                            </div>
                            
                            {/* Circular avatar */}
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-primary/30 overflow-hidden bg-white/5 flex-shrink-0">
                              <img
                                src={caseItem.authorAvatar}
                                alt={caseItem.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="lg:hidden text-center mt-8">
          <p className="text-white/40 text-sm">
            Deslize para navegar pelos cases
          </p>
        </div>
      </div>
    </section>
  );
}