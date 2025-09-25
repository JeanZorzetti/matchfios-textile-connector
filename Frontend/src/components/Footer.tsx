import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <div className="text-3xl font-bold mb-4">
              Matchfios
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 md:justify-center">
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>

          {/* Social & Copyright */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-white/80 text-sm">
              © 2025 Matchfios. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;