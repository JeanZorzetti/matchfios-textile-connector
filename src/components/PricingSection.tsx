import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      title: "Plano Vendedor",
      price: "R$ 500",
      period: "/mês",
      features: [
        "Publicação de Propostas Ilimitadas",
        "Acesso ao Hub de Compradores", 
        "Análise de Mercado"
      ],
      ctaText: "Escolher Plano Vendedor",
      highlight: false
    },
    {
      title: "Plano Comprador",
      price: "R$ 100",
      period: "/mês",
      features: [
        "Acesso ao Hub de Fornecedores",
        "Publicação de Propostas de Compra",
        "Histórico de Cotações"
      ],
      ctaText: "Escolher Plano Comprador",
      highlight: true
    }
  ];

  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Planos Simples e Transparentes <br />
            Para Impulsionar o Seu Negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.highlight ? 'border-accent shadow-lg scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-brand-navy mb-4">
                  {plan.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-accent">{plan.price}</span>
                  <span className="text-brand-gray ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-brand-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.highlight ? "cta" : "nav"}
                  className="w-full"
                  onClick={scrollToSignup}
                >
                  {plan.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;