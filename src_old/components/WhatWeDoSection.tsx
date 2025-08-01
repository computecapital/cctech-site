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
  Workflow 
} from "lucide-react";

export function WhatWeDoSection() {
  const services = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Automação de Briefing",
      description: "bot coleta dados e transforma em briefing integrado ao PM",
      result: "–80% de tempo gasto"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Planejamento de Campanha",
      description: "motor de previsão sugere canais e KPIs",
      result: "15% mais ROAS"
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Criação Dinâmica",
      description: "gera criativos e testa A/B em tempo real",
      result: "+25% de CTR"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Lead Scoring & Routing",
      description: "pontua e distribui leads automaticamente",
      result: "ciclo –32%"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Chatbots de Pré-venda",
      description: "qualificam prospects 24/7",
      result: "+18% em MQL"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Forecast de Receita",
      description: "projeta receita com margem de erro ±5%",
      result: "±5% precisão"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Automação de Relatórios",
      description: "gera dashboards comentados em segundos",
      result: "economia de 6h/analista/semana"
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Detecção de Oportunidades",
      description: "identifica upsell e churn",
      result: "+10% em receita recorrente"
    },
    {
      icon: <Workflow className="w-6 h-6 text-primary" />,
      title: "Otimização de Workflow",
      description: "orquestra tarefas, previne gargalos",
      result: "+20% de entregas"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-white mb-6 font-[DM_Sans] animated-title shimmer-title">
            Automação inteligente para{" "}
            <span className="text-primary font-bold font-[DM_Sans] font-bold">resultados reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[DM_Sans]">
            Do briefing à renovação de contrato, plugamos AI onde gera ROI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
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