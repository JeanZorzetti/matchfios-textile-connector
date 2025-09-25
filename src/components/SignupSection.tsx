import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SignupSection = () => {
  const scrollRef = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.type) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Receberá em breve informações sobre o lançamento.",
      });
      
      setFormData({ name: "", email: "", type: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section ref={scrollRef} id="signup" className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-fade-in">
            Faça Parte da Revolução <br />
            na <span className="text-accent animate-float">Indústria Têxtil</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed scroll-fade-in">
            Inscreva-se para receber acesso antecipado e ser o primeiro a saber do nosso lançamento oficial.
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-sm hover-lift hover-glow scroll-fade-in animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-brand-navy text-center">
              Inscrição para o Lançamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="scroll-fade-in">
                <Label htmlFor="name" className="text-brand-gray">
                  O seu nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite o seu nome completo"
                  className="mt-1 transition-all duration-300 focus:scale-105"
                  required
                />
              </div>

              <div className="scroll-fade-in">
                <Label htmlFor="email" className="text-brand-gray">
                  O seu email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Digite o seu email"
                  className="mt-1 transition-all duration-300 focus:scale-105"
                  required
                />
              </div>

              <div className="scroll-fade-in">
                <Label className="text-brand-gray">
                  Eu sou:
                </Label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger className="mt-1 transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supplier">Fornecedor</SelectItem>
                    <SelectItem value="industry">Indústria/Comprador</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                className="w-full btn-modern hover-glow animate-pulse-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processando..." : "Inscrever-me Agora"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignupSection;