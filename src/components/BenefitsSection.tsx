"use client";

import { Card, CardContent } from "./ui/card";
import {
  TrendingUp,
  DollarSign,
  Zap,
  Settings,
  Clock,
  MessageSquare,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Aumento de receita",
      description: "Agentes 24/7 aceleram vendas, eliminam gargalos e mostram retorno já no primeiro mês, custando muito menos.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Redução de custos",
      description: "Substitua equipes caras por agentes inteligentes que gerenciam CRM, suporte e prospecção com eficiência superior e custo mínimo.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Implementação veloz",
      description: "Discovery, MVP e roll-out ágil; da primeira call à operação completa em poucas semanas.",
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Personalização completa",
      description: "Projetamos agentes sob medida após entender suas dores, refletindo seus fluxos, linguagem e metas de negócio.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Atendimento 24h",
      description: "Equipe comercial online 24h para esclarecer dúvidas, iniciar projetos e oferecer suporte consultivo sempre que precisar.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Suporte técnico e humano",
      description: "Grupo dedicado em WhatsApp ou Telegram garante respostas rápidas, melhorias contínuas e alinhamento constante ao seu negócio.",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section id="benefits" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-white mb-6 animated-title gradient-title">
            Tenha a IA trabalhando{" "}
            <span className="text-primary">ininterruptamente</span> para sua
            empresa
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Turbine a produtividade do seu time de vendas – IA para destravar o
            comercial da sua agência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card border-white/10 hover:border-primary/30 transition-colors duration-300 mouse-glow-card"
              onMouseMove={handleMouseMove}
            >
              <CardContent className="p-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-[rgba(255,255,255,1)] font-[DM_Sans] font-bold text-[20px] not-italic">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-[DM_Sans]">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
