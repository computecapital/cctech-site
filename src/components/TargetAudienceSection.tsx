import { Card, CardContent } from "./ui/card";
import { Megaphone, Users, Cog, Scale, ArrowRight } from "lucide-react";

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Megaphone className="w-6 h-6 text-primary" />,
      title: "Agências de marketing digital",
      description: "liberam o time criativo de tarefas manuais",
      blogUrl: "/blog/agencias-marketing-digital-ia",
      image: '/target-audience-marketing-digital.webp?url',
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Times de vendas e atendimento",
      description: "recebem leads prontos e insights automáticos",
      blogUrl: "/blog/times-vendas-atendimento-ia",
      image: '/target-audience-time-vendas.webp?url',
    },
    {
      icon: <Cog className="w-6 h-6 text-primary" />,
      title: "Empresas com RPA ou CRM",
      description: "evoluem para IA sem refazer a stack",
      blogUrl: "/blog/empresas-rpa-crm-evolucao-ia",
      image: '/target-audience-empresas.webp?url',
    },
    {
      icon: <Scale className="w-6 h-6 text-primary" />,
      title: "Escritórios de Advocacia",
      description: "automatizam o que é mecânico e escalam talento humano",
      blogUrl: "/blog/escritorios-advocacia-ia",
      image: '/target-audience-escritorios.webp?url',
    },
  ];

  const handleLearnMore = (blogUrl: string) => {
    // Para desenvolvimento, você pode substituir por window.open(blogUrl, '_blank')
    // Por enquanto, vamos usar um alert para demonstrar a funcionalidade
    window.open(`https://cctech.com.br${blogUrl}`, "_blank");
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-white mb-6 animated-title glow-title">
            Pensado para empresas que querem{" "}
            <span className="text-primary">escalar com tecnologia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="bg-card border-white/10 hover:border-primary/30 transition-colors duration-300 relative group h-full flex flex-col"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex flex-col h-full">
                  {/* Image Frame - Top section */}
                  <div className="w-full h-32 bg-gradient-to-br from-muted/20 to-muted/10 border-b border-white/5 rounded-t-lg overflow-hidden">
                    <img
                      src={audience.image}
                      alt={audience.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content section - grows to fill available space */}
                  <div className="p-8 flex-1 flex flex-col relative">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon - Left side, 24x24px */}
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg flex-shrink-0 mt-1">
                        {audience.icon}
                      </div>

                      {/* Text content */}
                      <div className="space-y-3 flex-1 text-left">
                        <h3 className="text-white text-xl leading-tight">
                          {audience.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-[DM_Sans]">
                          {audience.description}
                        </p>
                      </div>
                    </div>

                    {/* Saiba mais button - Bottom right, aligned across all cards */}
                    <div className="flex justify-end mt-6">
                      <button
                        onClick={() => handleLearnMore(audience.blogUrl)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg transition-all duration-300 ease-out hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 group/btn font-[DM_Sans]"
                      >
                        <span className="text-sm font-medium">Saiba mais</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
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
