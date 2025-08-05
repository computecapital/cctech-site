import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl text-white leading-tight font-[DM_Sans] animated-title split-title">
                <span className="word" style={{'--word-index': 0} as React.CSSProperties}>Agentes</span>{" "}
                <span className="word" style={{'--word-index': 1} as React.CSSProperties}>de</span>{" "}
                <span className="word" style={{'--word-index': 2} as React.CSSProperties}>IA</span>{" "}
                <span className="word" style={{'--word-index': 3} as React.CSSProperties}>customizados</span>{" "}
                <span className="word" style={{'--word-index': 4} as React.CSSProperties}>para</span>{" "}
                <span className="word" style={{'--word-index': 5} as React.CSSProperties}>o</span>{" "}
                <span className="word" style={{'--word-index': 6} as React.CSSProperties}>seu</span>{" "}
                <span className="word text-primary font-bold" style={{'--word-index': 7} as React.CSSProperties}>negócio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-[DM_Sans]">
                Criamos para você agentes inteligentes que automatizam fluxos comerciais e operacionais na sua agência de marketing
              </p>
            </div>
            
            <Button 
              size="lg"
              className="neon-green px-8 py-4 text-lg rounded-lg hover:opacity-90 transition-opacity font-[DM_Sans]"
              onClick={scrollToContact}
            >
              Fale com nosso time de vendas
            </Button>
          </div>

          {/* Mockup Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12">
              <div className="neon-green-gradient rounded-2xl p-1">
                <div className="bg-background rounded-2xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
                    alt="AI Dashboard Mockup"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}