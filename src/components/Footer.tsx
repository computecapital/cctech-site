import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-secondary/40 py-16 border-t border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="/cc-tech-header-logo.webp?url"
                  alt="CCTECH Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src="/cc-footer-logo.webp?url"
                  alt="Compute Capital Logo"
                  className="h-12 w-auto object-contain opacity-80"
                />
              </div>
            </div>
            <p
              className="text-left text-muted-foreground leading-relaxed text-sm"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Somos uma empresa pernambucana do grupo Compute Capital, com mais
              de 10 anos de experiência no mercado tech. Criamos agentes de IA
              customizados que automatizam fluxos comerciais e operacionais para
              empresas que querem escalar com tecnologia.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6 text-left">
            <h3
              className="text-white"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Navegação
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("benefits")}
                className="block text-muted-foreground hover:text-primary transition-colors bg-transparent border-none p-0"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-muted-foreground hover:text-primary transition-colors bg-transparent border-none p-0"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                O que fazemos
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="block text-muted-foreground hover:text-primary transition-colors bg-transparent border-none p-0"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-primary transition-colors bg-transparent border-none p-0"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Fale conosco
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-left">
            <h3
              className="text-white"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Contato
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p style={{ fontFamily: "DM Sans, sans-serif" }}>
                contato@compute.capital
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif" }}>
                +55 (81) 99900-3360
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif" }}>Recife, PE</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6 text-left">
            <h3
              className="text-white"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/computecapital/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/compute-capital/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://wa.me/5581999003360"
                target="_blank"
                rel="noopener noreferrer"
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
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              © 2025 Compute Capital. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              {/* <a
                href="#"
                className="hover:text-primary transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Termos de Uso
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
