import { Network, TrendingUp, Zap } from "lucide-react";

const WhatIsSection = () => {
  const features = [
    {
      icon: Network,
      title: "Hub Centralizado",
      description: "Todas as propostas de compra e venda num só lugar. Tenha uma visão completa do mercado em tempo real."
    },
    {
      icon: TrendingUp,
      title: "Inteligência de Mercado",
      description: "Aceda a dados e históricos que antes morriam com representantes. Tome decisões baseadas em informações concretas."
    },
    {
      icon: Zap,
      title: "Negócios Mais Rápidos",
      description: "Encontre o parceiro ideal em minutos, não em semanas. Otimize o seu tempo e feche mais negócios com eficiência."
    }
  ];

  return (
    <section id="what-is" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Chega de Informações Perdidas e <br />
            Processos Descentralizados
          </h2>
          <p className="text-xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
            O mercado têxtil opera com base em contactos dispersos e negociações que se perdem em emails e telefonemas. 
            A Matchfios nasceu para centralizar, organizar e potenciar os seus negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;