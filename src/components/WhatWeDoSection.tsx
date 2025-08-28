import { Card, CardContent } from "./ui/card";
import {
  FileText,
  Scale,
  Search,
  MessageCircle,
  FileSignature,
  Clock,
  ShieldCheck,
  PenLine,
  GraduationCap,
} from "lucide-react";

export function WhatWeDoSection() {
  const services = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Análise e Chat com IA sobre Processos",
      description: [
        "Converse com a IA sobre autos e documentos",
        "Receba insights, explicações e resumos",
        "Acesse histórico de conversas salvas",
      ],
      result: "✅ Tenha respostas em segundos sem ler centenas de páginas.",
    },
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Geração de Petição",
      description: [
        "Redige petições iniciais, contestações e recursos",
        "Segue normas processuais e jurídicas",
        "Sugere ajustes e melhorias de redação",
      ],
      result: "✅ Reduza em até 70% o tempo de elaboração de petições.",
    },
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Identificação de Jurisprudência",
      description: [
        "Pesquisa decisões relevantes em segundos",
        "Cruza jurisprudências por tribunal e tema",
        "Indica probabilidade de êxito",
      ],
      result: "✅ Encontre jurisprudência em minutos, não em horas.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "IA de Atendimento 24h",
      description: [
        "Responde como humano no WhatsApp e site",
        "Esclarece dúvidas iniciais de clientes",
        "Qualifica contatos antes do advogado",
      ],
      result: "✅ Atendimento contínuo sem custo extra de equipe.",
    },
    {
      icon: <FileSignature className="w-6 h-6 text-primary" />,
      title: "Geração de Relatórios Jurídicos",
      description: [
        "Resume processos extensos automaticamente",
        "Cria índice de eventos processuais",
        "Gera relatórios prontos para anexar ou apresentar",
      ],
      result: "✅ Economize horas de leitura com relatórios prontos.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Cálculo de Prescrição",
      description: [
        "Calcula prazos de prescrição de forma automática",
        "Considera causas de interrupção e suspensão",
        "Indica alertas de risco processual",
      ],
      result: "✅ Elimine erros em cálculos de prazos críticos.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Sugestão de Teses de Defesa",
      description: [
        "Analisa documentos e provas do processo",
        "Propõe linhas de defesa estratégicas",
        "Organiza teses por relevância e chance de sucesso",
      ],
      result: "✅ Descubra ângulos de defesa que poderiam passar despercebidos.",
    },
    {
      icon: <PenLine className="w-6 h-6 text-primary" />,
      title: "Criação de Peças Jurídicas",
      description: [
        "Estrutura peças jurídicas a partir de dados do caso",
        "Garante clareza e precisão técnica",
        "Sugere fundamentações legais relevantes",
      ],
      result: "✅ Produza peças completas com menos esforço.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Treinamento de Advogados Júnior",
      description: [
        "Explica fundamentos jurídicos de cada peça",
        "Indica jurisprudências e artigos de lei aplicáveis",
        "Gera quizzes e estudos de caso",
      ],
      result: "✅ Acelere a curva de aprendizado da equipe júnior.",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-white mb-6 font-[DM_Sans] animated-title shimmer-title">
            Automação inteligente para{" "}
            <span className="text-primary font-bold font-[DM_Sans]">
              resultados reais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[DM_Sans]">
            Soluções de IA focadas no contencioso e operações jurídicas do seu escritório.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-lg">{service.title}</h3>
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    {service.description.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-white/80 leading-relaxed text-sm lg:text-base"
                      >
                        ⦁ {item}
                      </p>
                    ))}
                  </div>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {service.result}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
