import { Shield, Bell, Search, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyReveal } from "@/components/LazyReveal";

const features = [
  {
    icon: Search,
    title: "BSC Airdrop Discovery",
    description: "Scan the BNB Smart Chain ecosystem to find airdrops you're eligible for based on your wallet activity.",
  },
  {
    icon: Bell,
    title: "Eligibility Alerts",
    description: "Receive notifications when new BSC projects launch airdrops or when you become eligible for opportunities.",
  },
  {
    icon: Shield,
    title: "Secure Wallet Scan",
    description: "We only read public transaction data on BSC. Your private keys and sensitive information remain completely secure.",
  },
  {
    icon: TrendingUp,
    title: "BSC Ecosystem Focus",
    description: "Specialized in BNB Smart Chain projects, DeFi protocols, and emerging opportunities with real value.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="gradient-text">DropX</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The comprehensive BNB Smart Chain airdrop discovery tool
            </p>
          </div>
        </LazyReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <LazyReveal key={index} delay={index * 100}>
              <Card 
                className="glass-card border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
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