import { ArrowRight, BarChart3, TrendingUp, Zap, Shield, Users, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Analytics em Tempo Real</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transforme Dados em
                <span className="text-primary"> Resultados</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Plataforma completa de analytics de vendas que ajuda seu time a vender mais com inteligência artificial e insights em tempo real.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-glow text-lg px-8"
                >
                  <Link to="/dashboard">
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 border-2 hover:bg-secondary"
                >
                  Ver Demonstração
                </Button>
              </div>
              
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">4.9/5 de 2.4k avaliações</p>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10k+</p>
                  <p className="text-sm text-muted-foreground">Empresas confiam</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20"></div>
              <div className="relative bg-card p-8 rounded-2xl shadow-elegant border border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Receita Hoje</p>
                      <p className="text-3xl font-bold text-primary">R$ 47.2K</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-primary" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Conversão</p>
                      <p className="text-2xl font-bold text-foreground">48.2%</p>
                      <p className="text-xs text-primary">+12.5%</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Vendas</p>
                      <p className="text-2xl font-bold text-foreground">342</p>
                      <p className="text-xs text-primary">+8.3%</p>
                    </div>
                  </div>
                  
                  <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-end p-4 gap-2">
                    {[40, 65, 55, 80, 70, 90, 85].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-primary rounded-t transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tudo que você precisa para vender mais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas poderosas que transformam a forma como sua equipe trabalha
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Analytics Avançado",
                description: "Dashboards interativos com métricas em tempo real para acompanhar cada detalhe do seu negócio."
              },
              {
                icon: TrendingUp,
                title: "Previsões Inteligentes",
                description: "IA que analisa padrões e prevê tendências para você se antecipar ao mercado."
              },
              {
                icon: Users,
                title: "Gestão de Equipe",
                description: "Acompanhe a performance individual e coletiva com rankings e metas personalizadas."
              },
              {
                icon: Zap,
                title: "Integração Rápida",
                description: "Conecte com suas ferramentas favoritas em minutos. CRM, WhatsApp, e-mail e muito mais."
              },
              {
                icon: Shield,
                title: "Segurança Total",
                description: "Seus dados protegidos com criptografia de ponta e conformidade com LGPD."
              },
              {
                icon: CheckCircle2,
                title: "Relatórios Automáticos",
                description: "Receba insights automáticos por e-mail e WhatsApp sem precisar fazer nada."
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-elegant transition-smooth bg-gradient-card border-border hover-scale cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAxNmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAgMTZjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "10k+", label: "Empresas Ativas" },
              { value: "R$ 2.5B", label: "Em Vendas Rastreadas" },
              { value: "48%", label: "Aumento Médio" },
              { value: "99.9%", label: "Uptime Garantido" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <p className="text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece a usar em 3 passos simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Conecte suas Ferramentas",
                description: "Integre seu CRM, planilhas e sistemas em poucos cliques."
              },
              {
                step: "02",
                title: "Configure seus KPIs",
                description: "Defina as métricas importantes para o seu negócio."
              },
              {
                step: "03",
                title: "Acompanhe e Cresça",
                description: "Receba insights automáticos e veja suas vendas crescerem."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-12 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <Card className="p-12 md:p-16 bg-gradient-primary shadow-elegant text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para Transformar suas Vendas?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já aumentaram suas vendas com AdTrace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 shadow-lg"
              >
                <Link to="/dashboard">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Falar com Especialista
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-6">
              ✓ Teste grátis por 14 dias  ✓ Sem cartão de crédito  ✓ Cancele quando quiser
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-background mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Features</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Preços</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Sobre</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Blog</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Central de Ajuda</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Contato</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Privacidade</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">Termos</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-smooth">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center">
            <p className="text-background/70">© 2025 AdTrace. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
