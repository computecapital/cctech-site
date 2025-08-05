import { Card, CardContent } from "./ui/card";
import {
  FileText,
  Target,
  Palette,
  Users,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Eye,
  Workflow,
} from "lucide-react";

export function WhatWeDoSection() {
  const services = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Automação de Briefing",
      description: [
        "Coleta respostas do cliente",
        "Gera briefing estruturado",
        "Integra-se ao seu PM",
      ],
      result: "Economize 80% do tempo e inicie seu projeto rapidamente.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Planejamento de Campanha",
      description: [
        "Analisa histórico da marca",
        "Cruza tendências de mercado",
        "Sugere canais, verba e KPIs",
      ],
      result: "Planos 3x mais rápidos e ROAS 15% maior.",
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Criação Dinâmica",
      description: [
        "Gera variações de texto, imagem e vídeo",
        "Executa testes A/B contínuos",
        "Aprende em tempo real",
      ],
      result: "CTR sobe 25% sem horas extras de design.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Lead Scoring & Routing",
      description: [
        "Pontua leads em segundos",
        "Identifica o vendedor ideal",
        "Envia via CRM",
      ],
      result: "Ciclo de vendas com foco nos leads quentes.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Chatbots de Pré-venda",
      description: [
        "Respondem como humanos, 24/7",
        "Capturam briefing inicial",
        "Qualificam prospects",
      ],
      result: "Conversão em MQL +18% sem equipe extra.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Forecast de Receita",
      description: [
        "Projeta receita por carteira",
        "Considera sazonalidade e funil",
        "Erro médio ±5 %",
      ],
      result: "Orçamentos guiados por previsões quase sem erro.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Automação de Relatórios",
      description: [
        "Coleta métricas de várias fontes",
        "Interpreta variações",
        "Gera dashboards e PDFs",
      ],
      result: "Poupa 6h por analista/semana e antecipa relatórios.",
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Detecção de Oportunidades",
      description: [
        "Monitora base de clientes",
        "Sinaliza upsell, cross-sell e churn",
        "Alerta em tempo real",
      ],
      result: "Reduza o churn precoce com eficiência.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Otimização de Workflow",
      description: [
        "Prioriza tarefas e prazos",
        "Prevê gargalos",
        "Integra Slack/Teams",
      ],
      result: "Times criativos produzem mais, sem horas extras.",
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
            Do briefing à renovação de contrato, plugamos AI onde gera ROI.
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
