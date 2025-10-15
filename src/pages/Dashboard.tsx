import { DollarSign, TrendingUp, Users, ShoppingCart, ArrowUpRight } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { StatsChart } from "@/components/StatsChart";

const Dashboard = () => {
  const salesData = [
    { name: "Jan", value: 45000 },
    { name: "Fev", value: 52000 },
    { name: "Mar", value: 48000 },
    { name: "Abr", value: 61000 },
    { name: "Mai", value: 58000 },
    { name: "Jun", value: 67000 },
  ];

  const conversionData = [
    { name: "Jan", value: 34 },
    { name: "Fev", value: 38 },
    { name: "Mar", value: 36 },
    { name: "Abr", value: 42 },
    { name: "Mai", value: 45 },
    { name: "Jun", value: 48 },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <main className="px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Visão Geral de Vendas
          </h2>
          <p className="text-muted-foreground">
            Acompanhe o desempenho do seu time em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Receita Total"
            value="R$ 331K"
            change="+12.5% vs mês anterior"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="48%"
            change="+6.7% vs mês anterior"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Novos Clientes"
            value="1,284"
            change="+18.2% vs mês anterior"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Ticket Médio"
            value="R$ 258"
            change="-3.1% vs mês anterior"
            changeType="negative"
            icon={ShoppingCart}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StatsChart 
            title="Receita Mensal (R$)" 
            data={salesData.map(item => ({ name: item.name, value: item.value }))}
          />
          <StatsChart 
            title="Taxa de Conversão (%)" 
            data={conversionData}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Top Vendedores do Mês
            </h3>
            <div className="space-y-4">
              {[
                { name: "Maria Silva", sales: "R$ 45.2K", change: "+24%" },
                { name: "João Santos", sales: "R$ 38.7K", change: "+18%" },
                { name: "Ana Costa", sales: "R$ 35.1K", change: "+15%" },
                { name: "Pedro Lima", sales: "R$ 32.8K", change: "+12%" },
              ].map((seller, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {seller.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{seller.name}</p>
                      <p className="text-sm text-muted-foreground">{seller.sales}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-medium">{seller.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Produtos Mais Vendidos
            </h3>
            <div className="space-y-4">
              {[
                { product: "Plano Premium", units: 342, revenue: "R$ 89.2K" },
                { product: "Plano Básico", units: 521, revenue: "R$ 52.1K" },
                { product: "Plano Enterprise", units: 127, revenue: "R$ 76.2K" },
                { product: "Consultoria", units: 89, revenue: "R$ 44.5K" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                  <div>
                    <p className="font-medium text-foreground">{item.product}</p>
                    <p className="text-sm text-muted-foreground">{item.units} unidades vendidas</p>
                  </div>
                  <span className="text-sm font-semibold text-primary">{item.revenue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
