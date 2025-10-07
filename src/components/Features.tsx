import { Shield, Bell, Search, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyReveal } from "@/components/LazyReveal";

const features = [
  {
    icon: Search,
    title: "BSC Airdrop Discovery",
    description: "Deep search through BNB Smart Chain ecosystem to find airdrops you're eligible for but haven't claimed yet.",
  },
  {
    icon: Bell,
    title: "Eligibility Alerts",
    description: "Get notified when new BSC projects launch airdrops or when you become eligible for existing opportunities.",
  },
  {
    icon: Shield,
    title: "Secure Wallet Scan",
    description: "We only read public transaction data on BSC. Your private keys and sensitive information remain completely secure.",
  },
  {
    icon: TrendingUp,
    title: "BSC Ecosystem Focus",
    description: "Specialized in BNB Smart Chain projects, DeFi protocols, and emerging BSC opportunities with real value.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="gradient-text">DropX</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive BNB Smart Chain airdrop discovery tool
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
