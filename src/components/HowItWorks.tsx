import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Search, Bell, Shield } from "lucide-react";
import { LazyReveal } from "@/components/LazyReveal";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect BSC Wallet",
      description: "Connect your BNB Smart Chain wallet address. We'll scan your transaction history and current holdings for airdrop eligibility.",
    },
    {
      icon: Search,
      title: "Scan BSC Activity",
      description: "Our system analyzes your BSC activity across projects to find airdrops you're eligible for.",
    },
    {
      icon: Bell,
      title: "Discover Opportunities",
      description: "Get a detailed report of all BSC airdrops you can claim, with direct links and claiming instructions for each opportunity.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to discover BSC airdrops you're eligible for
            </p>
          </div>
        </LazyReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <LazyReveal key={step.title} delay={index * 100}>
              <Card className="glass-card border-border h-full hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold gradient-text">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
