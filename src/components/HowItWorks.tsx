import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Search, Bell, Shield, Zap, TrendingUp } from "lucide-react";
import { LazyReveal } from "@/components/LazyReveal";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect BSC Wallet",
      description: "Connect your BNB Smart Chain wallet address. We'll scan your transaction history and current holdings for airdrop eligibility.",
      color: "text-primary",
    },
    {
      icon: Search,
      title: "Deep BSC Scan",
      description: "Our system analyzes your BSC activity across hundreds of projects to find airdrops you're eligible for but may have missed.",
      color: "text-primary",
    },
    {
      icon: Bell,
      title: "Discover & Claim",
      description: "Get a detailed report of all BSC airdrops you can claim, with direct links and claiming instructions for each opportunity.",
      color: "text-green-500",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Instant BSC Scanning",
      description: "Complete wallet analysis in seconds across BSC ecosystem",
    },
    {
      icon: Shield,
      title: "Read-Only Access",
      description: "We only read public BSC transaction data, never your keys",
    },
    {
      icon: TrendingUp,
      title: "BSC Expertise",
      description: "Specialized knowledge of BNB Smart Chain airdrop patterns",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to discover BSC airdrops you're eligible for
            </p>
          </div>
        </LazyReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <LazyReveal key={step.title} delay={index * 100}>
              <Card className="glass-card border-border h-full hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold gradient-text">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* Benefits Section */}
        <LazyReveal>
          <div className="text-center space-y-4 mb-12 mt-20">
            <h3 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="gradient-text">DropX</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most efficient way to discover BSC airdrop opportunities
            </p>
          </div>
        </LazyReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <LazyReveal key={benefit.title} delay={index * 100}>
              <Card 
                className="glass-card border-border h-full hover:border-primary/30 transition-all duration-300"
                data-testid={`card-benefit-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* Security Notice */}
        <LazyReveal delay={200}>
          <div className="mt-16 glass-card border-border p-6 md:p-8 rounded-lg" id="security">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">BSC Security & Privacy</h4>
                <p className="text-muted-foreground">
                  DropX only reads public BNB Smart Chain transaction data and never accesses your private keys or funds. 
                  We use industry-standard security practices to analyze your BSC activity while keeping your wallet completely secure.
                </p>
              </div>
            </div>
          </div>
        </LazyReveal>
      </div>
    </section>
  );
};
