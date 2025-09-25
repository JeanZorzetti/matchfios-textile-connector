import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand-navy">
            Matchfios
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('what-is')}
              className="nav-link text-brand-gray"
            >
              O Que É?
            </button>
            <button 
              onClick={() => scrollToSection('for-suppliers')}
              className="nav-link text-brand-gray"
            >
              Para Fornecedores
            </button>
            <button 
              onClick={() => scrollToSection('for-industries')}
              className="nav-link text-brand-gray"
            >
              Para Indústrias
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="nav-link text-brand-gray"
            >
              Planos
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="nav"
            onClick={() => scrollToSection('signup')}
            className="btn-modern hover-glow"
          >
            Cadastre-se
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;