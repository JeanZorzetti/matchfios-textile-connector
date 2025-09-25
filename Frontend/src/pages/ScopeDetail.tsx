import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, Users, Database, MessageSquare, CreditCard, Shield, ChevronRight } from "lucide-react";

const ScopeDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Escopo de Desenvolvimento - Plataforma Matchfios v1.0";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Escopo detalhado de desenvolvimento da Plataforma Matchfios v1.0 - SaaS B2B para conectar fornecedores e indústrias têxteis.');
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToModule = (moduleId: string) => {
    navigate(`/escopo/modulo/${moduleId}`);
  };

  const phases = [
    {
      name: "Fase 1 - Fundação",
      duration: "3 meses",
      modules: ["Módulo 1", "Módulo 2"],
      description: "Plataforma funcional com cadastro, criação e visualização de propostas"
    },
    {
      name: "Fase 2 - Comercialização",
      duration: "2-3 meses",
      modules: ["Módulo 4", "Busca Avançada"],
      description: "Sistema de cobrança automática e experiência otimizada de busca"
    },
    {
      name: "Fase 3 - Comunidade",
      duration: "2-3 meses",
      modules: ["Módulo 3", "Módulo 5"],
      description: "Sistema de chat, reputação e painel administrativo"
    }
  ];

  const modules = [
    {
      id: "1",
      title: "Módulo 1: Estrutura Central de Usuários e Segurança",
      icon: Shield,
      description: "Fundação da plataforma com autenticação segura e perfis detalhados",
      features: [
        "Sistema de Autenticação e Perfis",
        "Cadastro Unificado com validação de email",
        "Login Seguro com proteção contra ataques",
        "Recuperação de Senha completa",
        "Perfil Público e Privado detalhado",
        "Sistema de Reputação (1-5 estrelas)"
      ]
    },
    {
      id: "2",
      title: "Módulo 2: Marketplace e Gestão de Propostas",
      icon: Database,
      description: "Coração da plataforma onde as transações acontecem",
      features: [
        "Formulário Inteligente de Proposta",
        "Categorização de matéria-prima",
        "Upload de até 3 imagens por produto",
        "Gerenciamento completo de propostas",
        "Feed de Oportunidades (Página Principal)",
        "Sistema de Filtros Avançados",
        "Busca por palavra-chave"
      ]
    },
    {
      id: "3",
      title: "Módulo 3: Comunicação e Confiança",
      icon: MessageSquare,
      description: "Mecanismos para facilitar negociação segura e construir comunidade confiável",
      features: [
        "Sistema de Mensagens Internas (Chat)",
        "Chat contextual vinculado às propostas",
        "Caixa de entrada centralizada",
        "Notificações por Email",
        "Sistema de Avaliação mútua",
        "Comentários opcionais nas avaliações"
      ]
    },
    {
      id: "4",
      title: "Módulo 4: Monetização e Assinaturas",
      icon: CreditCard,
      description: "Estrutura que transforma a plataforma em negócio sustentável",
      features: [
        "Integração com Gateway de Pagamento",
        "Gestão de Planos e Acesso",
        "Controle automático de permissões",
        "Período de Teste (Trial)",
        "Portal do Assinante completo",
        "Histórico de faturas e pagamentos"
      ]
    },
    {
      id: "5",
      title: "Módulo 5: Painel Administrativo",
      icon: Users,
      description: "Central de controle para gerenciar toda a plataforma",
      features: [
        "Dashboard de Métricas completo",
        "Indicadores de saúde da plataforma",
        "Gestão completa de usuários",
        "Moderação de conteúdo",
        "Controle de assinaturas",
        "Ferramentas de banimento e edição"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy to-brand-navy/80 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </div>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Escopo de Desenvolvimento Detalhado
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Plataforma Matchfios v1.0
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Objetivo do Projeto</h2>
                <p className="text-lg leading-relaxed">
                  Desenvolver uma plataforma web B2B (Software as a Service) que conecte fornecedores de
                  matéria-prima têxtil com indústrias (compradores), centralizando a publicação e negociação
                  de propostas de compra e venda. A versão 1.0 visa ser uma ferramenta comercialmente viável,
                  segura e escalável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-white border-b sticky top-20 z-40">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex gap-6 overflow-x-auto">
              <button
                onClick={() => scrollToSection('modulos')}
                className="nav-link text-brand-gray whitespace-nowrap"
              >
                Módulos
              </button>
              <button
                onClick={() => scrollToSection('fases')}
                className="nav-link text-brand-gray whitespace-nowrap"
              >
                Fases de Desenvolvimento
              </button>
            </nav>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modulos" className="py-16 bg-brand-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Módulos da Plataforma
              </h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Cinco módulos principais que compõem a arquitetura completa da plataforma Matchfios
              </p>
            </div>

            <div className="space-y-8">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card
                    key={module.id}
                    className="overflow-hidden hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-brand-blue"
                    onClick={() => navigateToModule(module.id)}
                  >
                    <CardHeader className="bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-lg">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 flex items-center justify-between">
                            {module.title}
                            <ChevronRight className="w-5 h-5 text-white/70" />
                          </CardTitle>
                          <CardDescription className="text-blue-100">
                            {module.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-brand-gray">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-brand-blue font-medium flex items-center gap-2">
                          <span>Clique para ver os cards detalhados do backlog</span>
                          <ChevronRight className="w-4 h-4" />
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Phases */}
        <section id="fases" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Roteiro de Desenvolvimento
              </h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                Execução faseada para permitir validação e otimização de fluxo de caixa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {phases.map((phase, index) => (
                <Card key={index} className="relative overflow-hidden hover-lift">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-accent"></div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue">
                        {phase.name.split(' - ')[0]}
                      </Badge>
                      <div className="flex items-center gap-1 text-brand-gray">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{phase.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-brand-navy">
                      {phase.name.split(' - ')[1]}
                    </CardTitle>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-brand-gray mb-3">Módulos inclusos:</p>
                      {phase.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span className="text-sm text-brand-gray">{module}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-brand-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Estratégia de Execução</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">Validação Contínua</h4>
                  <p className="text-sm text-brand-gray">
                    Cada fase permite validar o interesse do mercado e ajustar funcionalidades
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <CreditCard className="w-8 h-8 text-brand-blue mx-auto" />
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">Fluxo de Caixa</h4>
                  <p className="text-sm text-brand-gray">
                    Monetização gradual permite reinvestimento no desenvolvimento
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <Users className="w-8 h-8 text-accent mx-auto" />
                  </div>
                  <h4 className="font-semibold text-brand-navy mb-2">Base de Usuários</h4>
                  <p className="text-sm text-brand-gray">
                    Construção progressiva de uma comunidade engajada e ativa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScopeDetail;