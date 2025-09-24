import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import industryImage from "@/assets/industry-production.jpg";

const IndustriesSection = () => {
  const benefits = [
    "Acesso a um leque diversificado de fornecedores para cada tipo de matéria-prima",
    "Histórico completo de cotações para otimizar as suas compras futuras",
    "Agilidade para encontrar materiais específicos e urgentes",
    "Processo de compra mais transparente, eficiente e baseado em dados"
  ];

  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="for-industries" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Para Indústrias: <br />
              <span className="text-accent">Unifique os Seus Fornecedores</span> e <br />
              Compre Melhor
            </h2>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Centralize todas as suas cotações num único lugar. Compare preços, especificações técnicas 
              e a reputação dos fornecedores de forma rápida, transparente e organizada.
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
              Quero Comprar Melhor
            </Button>
          </div>

          {/* Image */}
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={industryImage} 
                alt="Linha de produção têxtil moderna"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;