import { Instagram, Linkedin, MessageCircle } from "lucide-react";
const ccLogo = "https://placehold.co/120x50/171717/FFF?text=Logo"; // Placeholder
const computeCapitalLogo = "https://placehold.co/150x30/171717/FFF?text=Compute+Capital"; // Placeholder

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/40 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src={ccLogo} 
                  alt="CCTECH Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-start">
                <img 
                  src={computeCapitalLogo} 
                  alt="Compute Capital Logo" 
                  className="h-12 w-auto object-contain opacity-80"
                />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Somos uma empresa pernambucana do grupo Compute Capital, com mais de 10 anos de experiência no mercado tech. Criamos agentes de IA customizados que automatizam fluxos comerciais e operacionais para empresas que querem escalar com tecnologia.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Navegação</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                O que fazemos
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Cases
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Fale conosco
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>contato@cctech.com.br</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>+55 (81) 99999-9999</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Recife, PE</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Redes Sociais</h3>
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
            <p className="text-muted-foreground" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              © 2025 CCTECH. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}