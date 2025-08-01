import { Button } from "./ui/button";

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="neon-green-gradient rounded-3xl p-8 lg:p-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl text-black mb-6 animated-title typewriter-title-dark">
              Pronto para automatizar seu negócio com IA?
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Fale com nosso time e veja como podemos criar sua solução em poucas semanas
            </p>
            <Button 
              size="lg"
              className="bg-black text-white px-8 py-4 text-lg rounded-lg hover:bg-black/90 transition-colors"
              onClick={scrollToContact}
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}