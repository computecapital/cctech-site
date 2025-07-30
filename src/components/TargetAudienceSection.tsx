import { Card, CardContent } from "./ui/card";
import { 
  Megaphone, 
  Users, 
  Cog, 
  RefreshCw 
} from "lucide-react";

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      title: "Agências de marketing digital",
      description: "liberam o time criativo de tarefas manuais"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Times de vendas e atendimento",
      description: "recebem leads prontos e insights automáticos"
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Empresas com RPA ou CRM",
      description: "evoluem para IA sem refazer a stack"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "Negócios com processos repetitivos",
      description: "automatizam o que é mecânico e escalam talento humano"
    }
  ];

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
            <Card key={index} className="bg-card border-white/10 hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto">
                    {audience.icon}
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-white text-xl">{audience.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
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