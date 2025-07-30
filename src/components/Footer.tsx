import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import ccLogo from "../assets/Ilustrações.png";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-secondary/40 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={ccLogo} 
                alt="CCTECH Logo" 
                className="h-16 w-auto object-contain"
              />
              <span className="text-white text-xl font-bold">CCTECH</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Criamos agentes de IA customizados que automatizam fluxos comerciais e operacionais para empresas que querem escalar com tecnologia.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-white">Navegação</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                O que fazemos
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Cases
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Fale conosco
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white">Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>contato@cctech.com.br</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">
              © 2025 CCTECH. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}