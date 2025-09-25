import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on homepage, navigate to homepage first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigateToEscopo = () => {
    navigate('/escopo');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-brand-navy hover:text-brand-blue transition-colors cursor-pointer"
          >
            Matchfios
          </button>

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
            <button
              onClick={navigateToEscopo}
              className="nav-link text-brand-gray"
            >
              Escopo
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