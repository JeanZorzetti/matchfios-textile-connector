import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import supplierImage from "@/assets/supplier-inspection.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SuppliersSection = () => {
  const scrollRef = useScrollAnimation();

  const benefits = [
    "Visibilidade imediata para um grande número de compradores qualificados",
    "Acesso a dados de mercado para precificar de forma mais competitiva",
    "Redução da dependência de intermediários e representantes", 
    "Histórico centralizado de todas as suas negociações"
  ];

  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={scrollRef} id="for-suppliers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 scroll-slide-left">
            <div className="relative overflow-hidden rounded-lg shadow-2xl hover-lift">
              <img 
                src={supplierImage} 
                alt="Profissional inspecionando materiais têxteis"
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 scroll-slide-right">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Para Fornecedores: <br />
              <span className="text-accent animate-float">Venda com Inteligência</span> e <br />
              Amplie o Seu Alcance
            </h2>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              As suas propostas alcançam centenas de indústrias que procuram ativamente por matéria-prima. 
              Deixe de depender apenas da sua carteira de contactos e aceda a um mercado mais vasto.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 scroll-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mt-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 animate-scale-in">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-brand-gray leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <Button 
              variant="cta" 
              size="lg"
              onClick={scrollToSignup}
              className="text-lg px-8 py-4 h-auto btn-modern hover-glow animate-pulse-glow"
            >
              Quero Vender Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuppliersSection;