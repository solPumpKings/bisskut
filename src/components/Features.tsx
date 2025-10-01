import { Shield, Zap, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyReveal } from "@/components/LazyReveal";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Automated claiming process that works 24/7, ensuring you never miss a single airdrop opportunity.",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Non-custodial solution with bank-grade security. Your keys, your tokens, always.",
  },
  {
    icon: Clock,
    title: "Set & Forget",
    description: "Configure once and let AsterDrop handle all future claims automatically.",
  },
  {
    icon: TrendingUp,
    title: "Maximize Returns",
    description: "Claim airdrops at optimal times to maximize your token returns and rewards.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="gradient-text">AsterDrop</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most advanced airdrop automation tool built for the AsterDex ecosystem
            </p>
          </div>
        </LazyReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <LazyReveal key={index} delay={index * 100}>
              <Card 
                className="glass-card border-border hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px] h-full"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
