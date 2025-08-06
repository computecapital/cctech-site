import { Button } from "./ui/button";

interface CTASectionProps {
  onOpenContactModal: () => void;
}

export function CTASection({ onOpenContactModal }: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div
          className="rounded-3xl p-8 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, #18E492 0%, #40E0D0 50%, #87CEEB 100%)",
          }}
        >
          <div className="text-center space-y-8">
            <h2
              className="text-3xl lg:text-5xl text-black mb-6 animated-title shimmer-title glow-title font-bold"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Pronto para automatizar seu negócio com IA?
            </h2>
            <p
              className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Fale com nosso time e veja como podemos{" "}
              <span className="font-bold">criar uma solução</span> em poucas
              semanas
            </p>
            <Button
              size="lg"
              className="bg-black text-white px-8 py-4 text-lg rounded-lg hover:bg-black/90 transition-colors"
              onClick={onOpenContactModal}
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
