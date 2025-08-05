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
      description: "Bot de coleta inteligente que transforma respostas de cliente em briefing estruturado, já integrado ao seu PM favorito.",
      result: "-80% do tempo gasto em entrevistas e formatação; projetos começam dias antes.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Planejamento de Campanha",
      description: "Motor de previsão que cruza histórico da marca, tendências de mercado e dados de mídia para sugerir canais, verba e KPIs ideais.",
      result: "Planos 3x mais rápidos e com até 15% melhor ROAS médio verificado.",
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Criação Dinâmica",
      description: "Pipeline que gera variantes de criativos (texto, imagem, vídeo) e faz teste A/B contínuo, aprendendo com resultados em tempo real.",
      result: "Melhora de 25% no CTR médio sem aumentar horas de design.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Lead Scoring & Routing",
      description: "Modelo preditivo que pontua leads em tempo real e distribui automaticamente para o vendedor certo, via CRM.",
      result: "Ciclo de vendas reduzido em 32%; mais foco nos leads quentes.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Chatbots de Pré-venda",
      description: "Assistentes treinados com dados do cliente que respondem dúvidas, capturam briefing inicial e qualificam prospects 24/7.",
      result: "Conversão de visitantes em MQL sobe 18%; atendimento 24h sem headcount extra.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Forecast de Receita",
      description: "Algoritmo que projeta receita por carteira e campanha, usando dados de mídia, sazonalidade e funil de vendas.",
      result: "Decisões de orçamento sustentadas por previsões com ±5% de erro.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Automação de Relatórios",
      description: "Sistema que coleta métricas de múltiplas fontes, interpreta variações e gera dashboards e PDFs comentados em segundos.",
      result: "Economiza em média 6h/analista/semana; relatórios prontos antes da reunião.",
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Detecção de Oportunidades",
      description: "Análise contínua de base de clientes e mercado para sinalizar upsell, cross-sell ou risco de churn.",
      result: "Incremento de 10-12% em receita recorrente; churn precoce cai 20%.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Otimização de Workflow",
      description: "Orquestrador de tarefas que prioriza jobs, prevê gargalos e ajusta prazos dinamicamente, integrado ao Slack/Teams.",
      result: "Times criativos entregam 20% mais jobs sem horas extras.",
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-lg">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
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
