import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SignupSection = () => {
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
    <section id="signup" className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Faça Parte da Revolução <br />
            na <span className="text-accent">Indústria Têxtil</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Inscreva-se para receber acesso antecipado e ser o primeiro a saber do nosso lançamento oficial.
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-brand-navy text-center">
              Inscrição para o Lançamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-brand-gray">
                  O seu nome
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite o seu nome completo"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-brand-gray">
                  O seu email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Digite o seu email"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label className="text-brand-gray">
                  Eu sou:
                </Label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger className="mt-1">
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
                className="w-full"
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