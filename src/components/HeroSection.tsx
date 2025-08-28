import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function HeroSection() {
  const whatsappNumber = "5581999003360";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre a C2 AI Studio.");
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl text-white leading-tight font-[DM_Sans] animated-title split-title">
                {/* Agentes de IA customizados para o seu negócio aumentar a receita e reduzir custos */}
                <span
                  className="word"
                  style={{ "--word-index": 0 } as React.CSSProperties}
                >
                  Agentes
                </span>{" "}
                <span
                  className="word"
                  style={{ "--word-index": 1 } as React.CSSProperties}
                >
                  de
                </span>{" "}
                <span
                  className="word"
                  style={{ "--word-index": 2 } as React.CSSProperties}
                >
                  IA
                </span>{" "}
                <span
                  className="word"
                  style={{ "--word-index": 3 } as React.CSSProperties}
                >
                  customizados
                </span>{" "}
                <span
                  className="word"
                  style={{ "--word-index": 4 } as React.CSSProperties}
                >
                  para
                </span>{" "}
                <span
                  className="word"
                  style={{ "--word-index": 5 } as React.CSSProperties}
                >
                  o
                </span>{" "}
                <span
                  className="word"
                  style={{ "--word-index": 6 } as React.CSSProperties}
                >
                  seu
                </span>{" "}
                <span
                  className="word text-primary font-bold"
                  style={{ "--word-index": 7 } as React.CSSProperties}
                >
                  negócio
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-[DM_Sans]">
                Criamos para você agentes inteligentes que automatizam fluxos comerciais e operacionais no seu escritório de advocacia.
              </p>
            </div>

            <Button
              size="lg"
              className="neon-green px-8 py-4 text-lg rounded-lg hover:opacity-90 transition-opacity font-[DM_Sans]"
              onClick={openWhatsApp}
            >
              Fale com nosso time de vendas
            </Button>
          </div>

          {/* Mockup Carousel */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-12">
              <div className="neon-green-gradient rounded-2xl p-1 overflow-hidden">
                <div className="bg-background rounded-2xl">
                  <Carousel />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  const images = [
    { src: "/banner1.webp", alt: "Painel de IA 1" },
    { src: "/banner2.webp", alt: "Painel de IA 2" },
    { src: "/banner3.webp", alt: "Painel de IA 3" },
  ];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + images.length) % images.length);
    resetInterval();
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div
        className="whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="inline-block w-full align-top">
            <ImageWithFallback src={img.src} alt={img.alt} className="w-full h-auto block" />
          </div>
        ))}
      </div>
      <button
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg"
        onClick={() => go(-1)}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        aria-label="Próximo"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg"
        onClick={() => go(1)}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
