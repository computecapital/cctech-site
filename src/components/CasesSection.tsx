"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  Users,
  Building2,
  ExternalLink,
} from "lucide-react";

// // Import background images
// import advocacyBg from "figma:asset/c426f3c88540b4884ec700e45c10ca8c413e0904.png";
// import commercialBg from "figma:asset/fc9ebdf39bd06b31601e9d7b1ced2a26e5a5d0ea.png";
// import realEstateBg from "figma:asset/8fbd8b026f90867f28a2139d3cffe9f5bd157d41.png";

// // Import company logo illustrations
// import advocacyIllustration from "figma:asset/bbd0f7c25aed8708d66aa7d6fd5a19c42e4f6adb.png";
// import commercialIllustration from "figma:asset/d28e180539a507036f51cef2768edb1ee1a0a341.png";
// import realEstateIllustration from "figma:asset/218a11c5397edcfc77b75fa896c5a82c0cc15ade.png";

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
      challenge:
        "Advogados que lidam com processos volumosos perdiam dias analisando documentos, o que atrasava prazos e comprometia a estratégia jurídica.",
      solution: [
        "• IA conversacional especializada em Direito Processual",
        "• Leitura e organização cronológica de processos em minutos",
        "• Respostas em linguagem natural como assistente jurídico on-demand",
        "• Geração de dossiê com resumo dos fatos e cálculo de prescrição",
        "• Sugestão de teses com base em precedentes e banco jurídico proprietário",
        "• Produção automática de petições prontas para protocolo",
      ],
      results: [
        "• Redução da análise de documentos de dias para horas",
        "• Teses mais precisas com base em dados e jurisprudência atualizada",
        "• Economia operacional com menos horas em tarefas repetitivas",
        "• Entrega de petições até 3x mais rápida",
      ],
      quote:
        "Transformamos pilhas de processos em insights acionáveis e petições prontas, para que o advogado foque no que faz diferença: a estratégia de defesa.",
      author: "Dr. Ricardo Mendes",
      company: "Silva & Associados",
      backgroundImage: "/cases-advlabs-bg.webp?url",
      illustrationImage: "/cases-advlabs.webp?url",
      clientWebsite: "https://silva-associados.com.br",
      authorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "IA para Equipes Comerciais",
      challenge:
        "Leads gerados por tráfego pago chegavam fora do horário comercial ou em volumes que sobrecarregavam o time de SDR, esfriando contatos e aumentando o CAC.",
      solution: [
        "• IA de Vendas que atua como SDR 24/7",
        "• Atendimento instantâneo via WhatsApp e chat do site",
        "• Conversa como especialista treinado na metodologia da empresa",
        "• Qualificação em tempo real e apresentação da proposta de valor",
        "• Fechamento de ponta a ponta ou agendamento com vendedor",
        "• Aprendizado contínuo com feedback integrado ao CRM",
      ],
      results: [
        "• Tempo de resposta reduzido de horas para segundos",
        "• Aumento de até 40% na taxa de conversão em mídia paga",
        "• Redução do CAC com qualificação padronizada",
        "• Mais reuniões qualificadas no pipeline para negociações estratégicas",
      ],
      quote:
        "Sua equipe nunca mais perde um lead - a IA responde, qualifica e vende enquanto você dorme.",
      author: "Marina Silva",
      company: "TechSales Pro",
      backgroundImage: "/cases-sorte-bg.webp?url",
      illustrationImage: "/cases-sorte.webp?url",
      clientWebsite: "https://techsales-pro.com",
      authorAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      icon: <Building2 className="w-8 h-8" />,
      title: "IA para Vistorias no Setor Imobiliário",
      challenge:
        "Vistoriadores gastavam horas registrando detalhes de imóveis manualmente, gerando riscos de erro e retrabalho após o expediente.",
      solution: [
        "• IA de Vistoria que transforma fotos em relatórios completos",
        "• Upload único de imagens pelo vistoriador",
        "• Detecção automática de cômodos, riscos e inconformidades",
        "• Geração de descrição técnica-comercial automática",
        "• Relatório formatado (PDF ou Word) em minutos, pronto para envio",
      ],
      results: [
        "• Redução de até 80% no tempo de elaboração de laudos",
        "• Capacidade de vistorias diárias triplicada sem sobrecarga",
        "• Relatórios padronizados que reduzem disputas sobre danos",
        "• Entrega no mesmo dia, acelerando a assinatura de contratos",
      ],
      quote:
        "Você faz as fotos; a IA entrega o laudo completo — rápido, preciso e sem dor de cabeça.",
      author: "Carlos Pereira",
      company: "Avalia Imóveis",
      backgroundImage: "/cases-remax-bg.webp?url",
      illustrationImage: "/cases-remax.webp?url",
      clientWebsite: "https://avalia-imoveis.com.br",
      authorAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
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
    window.open(website, "_blank", "noopener,noreferrer");
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
    <section
      id="cases"
      className="py-16 lg:py-24 cases-section relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-all duration-700 ease-out">
        {cases.map((caseItem, index) => (
          <div
            key={`bg-${caseItem.id}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${caseItem.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(8px) brightness(0.3) contrast(1.2)",
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
            Resultados reais de clientes que transformaram seus negócios com
            nossa IA
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Always visible with enhanced styling */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 group shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(24, 228, 146, 0.1) 0%, rgba(24, 228, 146, 0.05) 100%)",
            }}
          >
            <ChevronLeft className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-white transition-colors drop-shadow-lg" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 group shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(24, 228, 146, 0.1) 0%, rgba(24, 228, 146, 0.05) 100%)",
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
                <div
                  key={caseItem.id}
                  className="w-full flex-shrink-0 px-4 lg:px-8"
                >
                  <div className="mx-auto max-w-2xl">
                    {/* Card with increased height for new elements */}
                    <div
                      className={`text-left glassmorphism-card p-6 lg:p-8 h-[720px] lg:h-[900px] transition-all duration-500 flex flex-col ${
                        index === currentIndex
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-60"
                      }`}
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      {/* Company Logo/Illustration at the top */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <button
                            onClick={() =>
                              handleClientLogoClick(caseItem.clientWebsite)
                            }
                            className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 w-20 h-20 lg:w-30 lg:h-30 flex items-center justify-center p-4"
                            style={{
                              background:
                                "linear-gradient(135deg, #40d86a 0%, #18e492 100%)",
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
                              <span
                                className="text-xs font-medium text-white"
                                style={{ fontFamily: "DM Sans, sans-serif" }}
                              >
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
                          <div className="text-primary">{caseItem.icon}</div>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white">
                          {caseItem.title}
                        </h3>
                      </div>

                      {/* Content - grows to fill available space */}
                      <div className="space-y-6 lg:space-y-5 flex-1 overflow-y-auto">
                        {/* Challenge */}
                        <div>
                          <h4 className="text-primary font-semibold mb-2 lg:mb-2 text-base lg:text-lg">
                            Desafio:
                          </h4>
                          <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                            {caseItem.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-primary font-semibold mb-2 lg:mb-3 text-base lg:text-lg">
                            Solução:
                          </h4>
                          <div className="space-y-1 lg:space-y-1">
                            {caseItem.solution.map((item, idx) => (
                              <p
                                key={idx}
                                className="text-white/80 leading-relaxed text-sm lg:text-base"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="text-primary font-semibold mb-2 lg:mb-3 text-base lg:text-lg">
                            Resultados:
                          </h4>
                          <div className="space-y-1 lg:space-y-1">
                            {caseItem.results.map((item, idx) => (
                              <p
                                key={idx}
                                className="text-white/80 leading-relaxed text-sm lg:text-base"
                              >
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
                    ? "bg-primary scale-125"
                    : "bg-white/30 hover:bg-white/50"
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
