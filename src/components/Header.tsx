"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
const ccLogo = "https://placehold.co/120x50/171717/FFF?text=Logo"; // Placeholder

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Benefícios", id: "benefits" },
    { label: "O que fazemos", id: "features" },
    { label: "Para quem é", id: "target" },
    { label: "Cases", id: "cases" },
    { label: "Contato", id: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Menu Button */}
          <div className="flex items-center">
            <button
              className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                {isMenuOpen ? (
                  <X 
                    size={20} 
                    className="text-foreground group-hover:text-primary transition-colors absolute inset-0" 
                  />
                ) : (
                  <Menu 
                    size={20} 
                    className="text-foreground group-hover:text-primary transition-colors absolute inset-0" 
                  />
                )}
              </div>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center">
            <img 
              src={ccLogo} 
              alt="CCTECH Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex items-center">
            <Button 
              className="neon-green px-6 py-3 h-12 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('contact')}
            >
              Começar agora
            </Button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="mt-6 pb-6 border-t border-white/10 pt-6">
            <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center justify-center p-4 rounded-lg border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
            
            {/* Mobile CTA Button in menu */}
            <div className="flex justify-center mt-6 md:hidden">
              <Button 
                className="neon-green px-8 py-3 rounded-lg font-semibold w-full max-w-xs"
                onClick={() => scrollToSection('contact')}
              >
                Começar agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}