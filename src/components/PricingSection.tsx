import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const scrollRef = useScrollAnimation();

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
    <section ref={scrollRef} id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 scroll-fade-in">
            Planos Simples e Transparentes <br />
            Para Impulsionar o Seu Negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-lift hover-glow scroll-fade-in transition-all duration-500 ${
                plan.highlight ? 'border-accent shadow-lg animate-pulse-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-in">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold animate-float">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-brand-navy mb-4">
                  {plan.title}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-accent animate-scale-in">{plan.price}</span>
                  <span className="text-brand-gray ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 scroll-fade-in" style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}>
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-in">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-brand-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.highlight ? "cta" : "nav"}
                  className="w-full btn-modern hover-glow"
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