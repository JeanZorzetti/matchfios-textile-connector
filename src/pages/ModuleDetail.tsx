import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckSquare, Square, Database, Code, Palette, Settings, MessageSquare } from "lucide-react";

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  // Estado para controlar checkboxes e observações
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [observations, setObservations] = useState<Record<string, string>>({});

  // Carregar dados do localStorage
  useEffect(() => {
    const savedChecked = localStorage.getItem(`module-${moduleId}-checked`);
    const savedObservations = localStorage.getItem(`module-${moduleId}-observations`);

    if (savedChecked) {
      setCheckedItems(JSON.parse(savedChecked));
    }
    if (savedObservations) {
      setObservations(JSON.parse(savedObservations));
    }
  }, [moduleId]);

  // Salvar dados no localStorage
  const saveToLocalStorage = (checked: Record<string, boolean>, obs: Record<string, string>) => {
    localStorage.setItem(`module-${moduleId}-checked`, JSON.stringify(checked));
    localStorage.setItem(`module-${moduleId}-observations`, JSON.stringify(obs));
  };

  // Atualizar checkbox
  const toggleCheckbox = (cardId: string, itemIndex: number) => {
    const key = `${cardId}-${itemIndex}`;
    const newChecked = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(newChecked);
    saveToLocalStorage(newChecked, observations);
  };

  // Atualizar observação
  const updateObservation = (cardId: string, itemIndex: number, value: string) => {
    const key = `${cardId}-${itemIndex}`;
    const newObservations = { ...observations, [key]: value };
    setObservations(newObservations);
    saveToLocalStorage(checkedItems, newObservations);
  };

  // Calcular progresso do card
  const getCardProgress = (cardId: string, checklistLength: number) => {
    let completed = 0;
    for (let i = 0; i < checklistLength; i++) {
      if (checkedItems[`${cardId}-${i}`]) {
        completed++;
      }
    }
    return { completed, total: checklistLength, percentage: Math.round((completed / checklistLength) * 100) };
  };

  const moduleData = {
    "1": {
      title: "Módulo 1: Estrutura Central de Usuários e Segurança",
      description: "Fundação da plataforma com autenticação segura e perfis detalhados",
      cards: [
        {
          id: "bd-users-table",
          title: "[BD] Modelagem da Tabela de Usuários",
          badges: ["Banco de Dados", "Fase 1"],
          icon: Database,
          checklist: [
            "Definir campo: id (chave primária)",
            "Definir campo: nome (string)",
            "Definir campo: email (string, único)",
            "Definir campo: senha_hash (string)",
            "Definir campo: cnpj (string, único)",
            "Definir campo: telefone (string)",
            "Definir campo: tipo_perfil ('comprador' ou 'vendedor')",
            "Definir campo: email_verificado (booleano)",
            "Definir campo: data_criacao (timestamp)"
          ]
        },
        {
          id: "backend-register-api",
          title: "[Backend] API de Cadastro e Verificação de Email",
          badges: ["Backend", "Fase 1"],
          icon: Code,
          checklist: [
            "Criar endpoint POST /register",
            "Validar dados recebidos (nome, email, senha, cnpj)",
            "Verificar se email ou CNPJ já existem",
            "Gerar hash seguro para a senha",
            "Salvar novo usuário no banco de dados",
            "Gerar token de verificação de email",
            "Enviar email de boas-vindas com link de verificação"
          ]
        },
        {
          id: "backend-auth-api",
          title: "[Backend] API de Autenticação (Login) e Recuperação de Senha",
          badges: ["Backend", "Fase 1"],
          icon: Code,
          checklist: [
            "Criar endpoint POST /login",
            "Validar email e senha recebidos",
            "Gerar e retornar token JWT em caso de sucesso",
            "Criar endpoint POST /forgot-password",
            "Criar endpoint POST /reset-password",
            "Implementar lógica de envio de link de redefinição"
          ]
        },
        {
          id: "frontend-auth-screens",
          title: "[Frontend] Telas de Cadastro, Login e Recuperação de Senha",
          badges: ["Frontend", "Fase 1"],
          icon: Palette,
          checklist: [
            "Construir formulário de Cadastro com todos os campos",
            "Construir formulário de Login",
            "Construir formulário de \"Esqueci minha senha\"",
            "Implementar validação de campos em tempo real",
            "Integrar formulários com os endpoints da API",
            "Gerenciar estado de autenticação do usuário (salvar token)"
          ]
        },
        {
          id: "user-profile-page",
          title: "[Frontend/Backend] Página de Perfil do Usuário",
          badges: ["Frontend", "Backend", "Fase 2"],
          icon: Settings,
          checklist: [
            "Criar endpoint GET /profile para buscar dados do usuário logado",
            "Criar endpoint PUT /profile para atualizar dados",
            "Construir a tela de perfil para visualizar os dados",
            "Criar formulário para permitir a edição de nome e telefone",
            "Exibir a reputação média do usuário (nota de estrelas)"
          ]
        }
      ]
    },
    "2": {
      title: "Módulo 2: Marketplace e Gestão de Propostas",
      description: "Coração da plataforma onde as transações acontecem",
      cards: [
        {
          id: "bd-proposals-table",
          title: "[BD] Modelagem das Tabelas de Propostas e Categorias",
          badges: ["Banco de Dados", "Fase 1"],
          icon: Database,
          checklist: [
            "Criar tabela 'categorias' (id, nome)",
            "Criar tabela 'propostas' (id, id_usuario, id_categoria, etc.)",
            "Definir todos os campos da tabela 'propostas' (título, tipo, descrição, status)",
            "Popular tabela de categorias com dados iniciais (Fios, Malhas, etc.)"
          ]
        },
        {
          id: "backend-proposals-crud",
          title: "[Backend] APIs para Gerenciamento de Propostas (CRUD)",
          badges: ["Backend", "Fase 1"],
          icon: Code,
          checklist: [
            "Criar endpoint POST /propostas (Criar nova proposta)",
            "Criar endpoint GET /propostas (Listar todas com filtros e paginação)",
            "Criar endpoint GET /propostas/:id (Ver detalhes de uma proposta)",
            "Criar endpoint PUT /propostas/:id (Editar proposta)",
            "Criar endpoint DELETE /propostas/:id (Apagar proposta)"
          ]
        },
        {
          id: "frontend-proposal-form",
          title: "[Frontend] Formulário de Criar/Editar Proposta",
          badges: ["Frontend", "Fase 1"],
          icon: Palette,
          checklist: [
            "Construir o formulário com todos os campos (título, categoria, etc.)",
            "Implementar componente de upload de imagens",
            "Integrar com a API para criar e editar propostas",
            "Carregar categorias da API para preencher o seletor"
          ]
        },
        {
          id: "frontend-proposals-feed",
          title: "[Frontend] Feed de Propostas com Busca e Filtros",
          badges: ["Frontend", "Fase 2"],
          icon: Palette,
          checklist: [
            "Desenvolver o layout de cards para exibir as propostas",
            "Implementar a integração com a API para buscar e listar propostas",
            "Construir a barra de busca por palavra-chave",
            "Construir o painel lateral com os filtros avançados",
            "Implementar a lógica para refazer a chamada da API ao aplicar filtros",
            "Adicionar sistema de paginação"
          ]
        }
      ]
    },
    "3": {
      title: "Módulo 3: Comunicação e Confiança",
      description: "Mecanismos para facilitar negociação segura e construir comunidade confiável",
      cards: [
        {
          id: "bd-chat-tables",
          title: "[BD] Modelagem das Tabelas de Chat e Avaliações",
          badges: ["Banco de Dados", "Fase 2"],
          icon: Database,
          checklist: [
            "Criar tabela 'conversas' (id, id_proposta, id_comprador, id_vendedor)",
            "Criar tabela 'mensagens' (id, id_conversa, id_remetente, texto, timestamp)",
            "Criar tabela 'avaliacoes' (id, id_avaliador, id_avaliado, nota, comentario)"
          ]
        },
        {
          id: "backend-chat-system",
          title: "[Backend] Implementação do Sistema de Chat",
          badges: ["Backend", "Fase 2"],
          icon: Code,
          checklist: [
            "Configurar WebSockets para comunicação em tempo real",
            "Criar API para iniciar uma conversa",
            "Criar API para buscar histórico de mensagens de uma conversa",
            "Desenvolver lógica para emissão de mensagens via WebSocket"
          ]
        },
        {
          id: "frontend-chat-interface",
          title: "[Frontend] Interface do Chat Interno",
          badges: ["Frontend", "Fase 2"],
          icon: Palette,
          checklist: [
            "Construir a janela de chat",
            "Implementar a conexão com o WebSocket",
            "Desenvolver a lógica para enviar e receber mensagens em tempo real",
            "Criar a página de \"Caixa de Entrada\" para listar todas as conversas"
          ]
        },
        {
          id: "rating-system",
          title: "[Frontend/Backend] Sistema de Avaliação e Reputação",
          badges: ["Frontend", "Backend", "Fase 2"],
          icon: Settings,
          checklist: [
            "Criar API para submeter uma avaliação",
            "Implementar lógica no backend para recalcular a nota média do usuário",
            "Construir o modal/formulário no frontend para deixar uma avaliação",
            "Exibir a nota média (estrelas) no perfil público do usuário"
          ]
        }
      ]
    },
    "4": {
      title: "Módulo 4: Monetização e Assinaturas",
      description: "Estrutura que transforma a plataforma em negócio sustentável",
      cards: [
        {
          id: "payment-gateway-integration",
          title: "[Backend] Integração com Gateway de Pagamento",
          badges: ["Backend", "Fase 2"],
          icon: Code,
          checklist: [
            "Escolher e configurar um gateway de pagamento (Stripe, PagSeguro)",
            "Criar planos de assinatura no painel do gateway",
            "Implementar webhooks para receber confirmações de pagamento",
            "Desenvolver lógica para atualizar o status da assinatura do usuário no BD"
          ]
        },
        {
          id: "subscription-pages",
          title: "[Frontend] Páginas de Planos e Gestão de Assinatura",
          badges: ["Frontend", "Fase 2"],
          icon: Palette,
          checklist: [
            "Construir a página de preços com os planos \"Comprador\" e \"Vendedor\"",
            "Integrar o botão de assinar com o checkout do gateway",
            "Criar a página \"Minha Assinatura\" no painel do usuário",
            "Exibir status da assinatura e histórico de faturas"
          ]
        }
      ]
    },
    "5": {
      title: "Módulo 5: Painel Administrativo",
      description: "Central de controle para gerenciar toda a plataforma",
      cards: [
        {
          id: "admin-panel-development",
          title: "[Admin] Desenvolvimento do Painel Administrativo",
          badges: ["Frontend", "Backend", "Fase 2"],
          icon: Settings,
          checklist: [
            "Criar sistema de login seguro para administradores",
            "Desenvolver a tela de gestão de usuários (ver, buscar, banir)",
            "Desenvolver a tela de moderação de propostas (ver, apagar)",
            "Construir o dashboard com as métricas principais (KPIs)"
          ]
        }
      ]
    }
  };

  const currentModule = moduleData[moduleId as keyof typeof moduleData];

  useEffect(() => {
    if (currentModule) {
      document.title = `${currentModule.title} - Backlog Detalhado`;
    }
  }, [currentModule]);

  if (!currentModule) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-2xl font-bold text-brand-navy mb-4">Módulo não encontrado</h1>
            <Button onClick={() => navigate("/escopo")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Escopo
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "banco de dados":
        return "secondary";
      case "backend":
        return "default";
      case "frontend":
        return "outline";
      case "fase 1":
        return "default";
      case "fase 2":
        return "secondary";
      default:
        return "outline";
    }
  };

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
                onClick={() => navigate("/escopo")}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Escopo
              </Button>
            </div>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {currentModule.title}
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                {currentModule.description}
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Backlog Detalhado</h2>
                <p className="text-lg leading-relaxed">
                  Cards organizados e prontos para implementação no seu sistema de gestão de projetos.
                  Cada card contém uma lista detalhada de tarefas específicas para o desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Cards do Backlog
              </h2>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                {currentModule.cards.length} cards organizados para desenvolvimento
              </p>
            </div>

            <div className="grid gap-8">
              {currentModule.cards.map((card, index) => {
                const IconComponent = card.icon;
                const progress = getCardProgress(card.id, card.checklist.length);

                return (
                  <Card key={card.id} className="overflow-hidden hover-lift">
                    <CardHeader className="bg-white border-b">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-navy/10 p-3 rounded-lg">
                          <IconComponent className="w-6 h-6 text-brand-navy" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-3 text-brand-navy flex items-center justify-between">
                            {card.title}
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-normal text-brand-gray">
                                {progress.completed}/{progress.total}
                              </span>
                              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-brand-blue transition-all duration-300"
                                  style={{ width: `${progress.percentage}%` }}
                                />
                              </div>
                              <span className="text-sm font-normal text-brand-gray">
                                {progress.percentage}%
                              </span>
                            </div>
                          </CardTitle>
                          <div className="flex flex-wrap gap-2">
                            {card.badges.map((badge, badgeIndex) => (
                              <Badge
                                key={badgeIndex}
                                variant={getBadgeVariant(badge)}
                                className="text-xs"
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-brand-navy mb-4 flex items-center gap-2">
                        <CheckSquare className="w-5 h-5" />
                        Checklist de Implementação:
                      </h3>
                      <div className="space-y-6">
                        {card.checklist.map((item, itemIndex) => {
                          const key = `${card.id}-${itemIndex}`;
                          const isChecked = checkedItems[key] || false;
                          const observation = observations[key] || '';

                          return (
                            <div key={itemIndex} className="border rounded-lg p-4 bg-gray-50/50">
                              <div className="flex items-start gap-3 mb-3">
                                <Checkbox
                                  id={key}
                                  checked={isChecked}
                                  onCheckedChange={() => toggleCheckbox(card.id, itemIndex)}
                                  className="mt-0.5"
                                />
                                <label
                                  htmlFor={key}
                                  className={`text-sm flex-1 cursor-pointer transition-colors ${
                                    isChecked
                                      ? 'text-brand-navy font-medium line-through'
                                      : 'text-brand-gray hover:text-brand-navy'
                                  }`}
                                >
                                  {item}
                                </label>
                              </div>
                              <div className="ml-7">
                                <div className="flex items-center gap-2 mb-2">
                                  <MessageSquare className="w-4 h-4 text-brand-gray" />
                                  <span className="text-sm font-medium text-brand-gray">
                                    Observações:
                                  </span>
                                </div>
                                <Textarea
                                  placeholder="Adicione observações, links, ou notas sobre esta tarefa..."
                                  value={observation}
                                  onChange={(e) => updateObservation(card.id, itemIndex, e.target.value)}
                                  className="min-h-[80px] text-sm"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-gradient-to-r from-brand-blue/5 to-accent/5 border-brand-blue/20">
                <CardContent className="p-6">
                  {(() => {
                    const totalTasks = currentModule.cards.reduce((total, card) => total + card.checklist.length, 0);
                    let completedTasks = 0;
                    currentModule.cards.forEach(card => {
                      for (let i = 0; i < card.checklist.length; i++) {
                        if (checkedItems[`${card.id}-${i}`]) {
                          completedTasks++;
                        }
                      }
                    });
                    const overallProgress = Math.round((completedTasks / totalTasks) * 100);

                    return (
                      <>
                        <h3 className="font-bold text-brand-navy mb-4">
                          Progresso Geral do Módulo
                        </h3>
                        <div className="flex items-center justify-center gap-4 mb-4">
                          <span className="text-lg font-semibold text-brand-navy">
                            {completedTasks}/{totalTasks} tarefas
                          </span>
                          <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-brand-blue transition-all duration-500"
                              style={{ width: `${overallProgress}%` }}
                            />
                          </div>
                          <span className="text-lg font-semibold text-brand-navy">
                            {overallProgress}%
                          </span>
                        </div>
                        <p className="text-brand-gray">
                          {currentModule.cards.length} cards organizados • Progresso salvo automaticamente
                        </p>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ModuleDetail;