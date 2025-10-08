import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyReveal } from "@/components/LazyReveal";
import { TrendingUp, Users, Coins, Shield, Zap, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "BSC Ecosystem Focus",
    description: "Specialized in BNB Smart Chain projects and opportunities",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Read-only access to public blockchain data",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Continuous scanning for new airdrop opportunities",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built for and by the BSC community",
  },
  {
    icon: Coins,
    title: "Multi-chain Support",
    description: "Expanding to support additional networks",
  },
  {
    icon: TrendingUp,
    title: "Growing Dataset",
    description: "Continuously expanding our airdrop database",
  }
];

export const Statistics = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Platform <span className="gradient-text">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key capabilities that make DropX the premier BSC airdrop discovery tool
            </p>
          </div>
        </LazyReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <LazyReveal key={feature.title} delay={index * 100}>
              <Card className="glass-card border-border hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>
      </div>
    </section>
  );
};