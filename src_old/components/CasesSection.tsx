"use client";

import { useState } from "react";
import { Briefcase, Sparkles, Camera, ChevronDown } from "lucide-react";

export function CasesSection() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  const cases = [
    {
      id: "case1",
      icon: <Briefcase className="w-6 h-6" />,
      title: "IA para Escritórios de Advocacia",
      challenge: "Processos de até 600 páginas consumiam dias de análise, atrasando prazos e encarecendo o trabalho.",
      solution: [
        "• IA lê o processo em minutos e ordena eventos",
        "• Chat jurídico responde em linguagem natural",
        "• Dossiê com resumo, eventos e prescrição automática",
        "• Sugere teses baseadas em precedentes",
        "• Gera petições completas para protocolo"
      ],
      results: [
        "• Análise de dias → horas",
        "• Petições 3 × mais rápidas",
        "• Menos horas operacionais; economia",
        "• Argumentação +precisa com dados e jurisprudência"
      ],
      quote: "Transformamos pilhas de processos em insights acionáveis e petições prontas."
    },
    {
      id: "case2",
      icon: <Sparkles className="w-6 h-6" />,
      title: "IA para Equipes Comerciais",
      challenge: "Leads chegavam fora do horário ou em massa; resposta lenta esfriava contatos e elevava o CAC.",
      solution: [
        "• IA-SDR 24 × 7 no WhatsApp e site",
        "• Qualifica e apresenta valor em tempo real",
        "• Fecha vendas ou agenda reunião no calendário",
        "• Aprende com CRM e feedback do time"
      ],
      results: [
        "• Tempo de resposta: horas → segundos",
        "• +40 % na taxa de conversão de mídia paga",
        "• CAC menor com qualificação padronizada",
        "• Mais reuniões quentes para o time"
      ],
      quote: "Sua equipe nunca mais perde um lead – a IA vende enquanto você dorme."
    },
    {
      id: "case3",
      icon: <Camera className="w-6 h-6" />,
      title: "IA para Vistorias no Setor Imobiliário",
      challenge: "Laudos consumiam horas de digitação e formatação após cada vistoria.",
      solution: [
        "• Upload de fotos; IA detecta cômodos e danos",
        "• Descrição técnica gerada automaticamente",
        "• Relatório PDF/Word formatado em minutos"
      ],
      results: [
        "• Laudos até 80 % mais rápidos",
        "• Vistorias diárias × 3 sem sobrecarga",
        "• Relatórios padronizados → menos disputas",
        "• Documento entregue no mesmo dia"
      ],
      quote: "Você faz as fotos; a IA entrega o laudo completo — rápido, preciso e sem dor de cabeça."
    }
  ];

  return (
    <section id="cases" className="cases-section w-full py-[120px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-extrabold text-white/80 mb-4 animated-title shimmer-title">
            Cases de <span className="gradient-text">sucesso</span>
          </h2>
          <p className="text-[18px] text-white/60 max-w-[720px] mx-auto leading-relaxed">
            Resultados reais de clientes que transformaram seus negócios com nossa IA
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-[1400px] mx-auto">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="glassmorphism-card p-6 min-w-[320px] max-w-[420px] flex-1"
            >
              {/* Header */}
              <button
                onClick={() => toggleCard(caseItem.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#34FFB4]">
                    {caseItem.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-white">
                    {caseItem.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-250 ${
                    openCard === caseItem.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Content */}
              <div 
                className={`case-card-content ${
                  openCard === caseItem.id ? 'expanded' : ''
                }`}
              >
                <div className="pt-6 space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-[#34FFB4] font-semibold mb-2">Desafio:</h4>
                    <p className="text-white/70 text-[14px] leading-relaxed">
                      {caseItem.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-[#34FFB4] font-semibold mb-2">Solução:</h4>
                    <div className="space-y-1">
                      {caseItem.solution.map((item, index) => (
                        <p key={index} className="text-white/70 text-[14px] leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-[#34FFB4] font-semibold mb-2">Resultados:</h4>
                    <div className="space-y-1">
                      {caseItem.results.map((item, index) => (
                        <p key={index} className="text-white/70 text-[14px] leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="pt-4 border-t border-white/10">
                    <blockquote className="text-white italic text-[16px] leading-relaxed">
                      "{caseItem.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}