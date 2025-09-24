import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import supplierImage from "@/assets/supplier-inspection.jpg";

const SuppliersSection = () => {
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
    <section id="for-suppliers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={supplierImage} 
                alt="Profissional inspecionando materiais têxteis"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Para Fornecedores: <br />
              <span className="text-accent">Venda com Inteligência</span> e <br />
              Amplie o Seu Alcance
            </h2>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              As suas propostas alcançam centenas de indústrias que procuram ativamente por matéria-prima. 
              Deixe de depender apenas da sua carteira de contactos e aceda a um mercado mais vasto.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
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
              className="text-lg px-8 py-4 h-auto"
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