import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import SuppliersSection from "@/components/SuppliersSection";
import IndustriesSection from "@/components/IndustriesSection";
import PricingSection from "@/components/PricingSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Matchfios - Plataforma B2B para Indústria Têxtil";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conecte fornecedores e indústrias têxteis numa plataforma inteligente. Hub centralizado de propostas, análise de mercado e negócios mais eficientes.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <SuppliersSection />
        <IndustriesSection />
        <PricingSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
