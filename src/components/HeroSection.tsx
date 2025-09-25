import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-textile-factory.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const scrollRef = useScrollAnimation();

  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={scrollRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-navy/80 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Indústria têxtil moderna" 
          className="w-full h-full object-cover opacity-20 animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 to-brand-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight scroll-fade-in">
            A Plataforma B2B que 
            <span className="block text-accent animate-float"> Conecta a Indústria Têxtil</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed scroll-fade-in">
            Unificamos fornecedores de matéria-prima e indústrias num hub de propostas inteligente. 
            Encontre as melhores oportunidades de compra e venda do setor.
          </p>

          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToSignup}
            className="text-lg px-8 py-4 h-auto btn-modern hover-glow animate-bounce-in scroll-fade-in"
          >
            Inscreva-se para o Lançamento
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;