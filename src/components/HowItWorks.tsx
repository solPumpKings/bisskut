import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Bot, CheckCircle2, Shield, Zap, Clock } from "lucide-react";
import { LazyReveal } from "@/components/LazyReveal";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Your Wallet",
      description: "Securely link your AsterDex wallet using industry-standard Web3 protocols. Your keys remain safe with you.",
      color: "text-primary",
    },
    {
      icon: Bot,
      title: "Enable Auto-Claiming",
      description: "Set up automated rules for airdrop detection and claiming. Customize your preferences for different token types.",
      color: "text-primary",
    },
    {
      icon: CheckCircle2,
      title: "Sit Back & Relax",
      description: "Our smart contracts monitor and claim eligible airdrops automatically. Tokens are sent directly to your wallet.",
      color: "text-green-500",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Automated claiming happens within seconds of airdrop eligibility",
    },
    {
      icon: Shield,
      title: "Secure & Non-Custodial",
      description: "Your assets remain in your control at all times",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Never miss an airdrop, even while you sleep",
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
              Three simple steps to automate your AsterDex airdrop claims
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
              Why Choose <span className="gradient-text">AsterDrop</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most efficient way to maximize your airdrop rewards
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
                <h4 className="text-xl font-bold">Security First</h4>
                <p className="text-muted-foreground">
                  AsterDrop uses audited smart contracts and never has access to your private keys. 
                  All transactions are signed by your wallet, ensuring complete security and transparency. 
                  Your assets remain in your custody at all times.
                </p>
              </div>
            </div>
          </div>
        </LazyReveal>
      </div>
    </section>
  );
};
