"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import ccLogo from "../assets/Ilustrações.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 flex-1">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              SpecFeatures
            </button>
          </nav>

          {/* Logo - Centered */}
          <div className="flex items-center justify-center">
            <img 
              src={ccLogo} 
              alt="CCTECH Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end">
            <nav className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-foreground hover:text-primary transition-colors"
              >
                How to
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </button>
            </nav>
            <Button 
              className="neon-green px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('contact')}
            >
              Começar agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                SpecFeatures
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                How to
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </button>
              <Button 
                className="neon-green px-6 py-2 rounded-lg font-semibold w-fit"
                onClick={() => scrollToSection('contact')}
              >
                Começar agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}