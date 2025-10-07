import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LazyReveal } from "@/components/LazyReveal";
import { Check, Zap, Crown, Star, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Complete airdrop automation for everyone",
    icon: Zap,
    popular: true,
    features: [
      "Unlimited airdrop monitoring",
      "Real-time notifications",
      "Multi-wallet support",
      "All supported blockchains",
      "Community support",
      "Basic analytics dashboard",
      "Email & Discord alerts",
      "Mobile app access"
    ],
    limitations: [
      "Community-driven support only"
    ],
    cta: "Get Started Free",
    highlight: true
  },
  {
    name: "Pro",
    price: "Coming Soon",
    period: "",
    description: "Advanced features for power users (planned)",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Free plan",
      "Priority notifications",
      "Advanced analytics",
      "API access",
      "Custom webhook integration",
      "Portfolio tracking",
      "Tax reporting tools",
      "Priority support",
      "Custom notification rules"
    ],
    limitations: [],
    cta: "Join Waitlist",
    highlight: false
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    period: "",
    description: "Custom solutions for institutions (planned)",
    icon: Star,
    popular: false,
    features: [
      "Everything in Pro plan",
      "Dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantees",
      "White-label solution",
      "Advanced reporting",
      "Multi-team management",
      "Custom feature development"
    ],
    limitations: [],
    cta: "Contact Us",
    highlight: false
  }
];

const addOnFeatures = [
  {
    name: "Premium Alerts",
    price: "Coming Soon",
    period: "",
    description: "Instant push notifications and SMS alerts for high-value airdrops"
  },
  {
    name: "Advanced Analytics",
    price: "Coming Soon",
    period: "", 
    description: "Detailed portfolio tracking and airdrop performance analytics"
  },
  {
    name: "API Access",
    price: "Coming Soon",
    period: "",
    description: "Integrate airdrop data into your own applications and tools"
  }
];

export const PricingPlans = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Free <span className="gradient-text">Forever</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              DropX is completely free to use. No hidden fees, no subscriptions.
            </p>
          </div>
        </LazyReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <LazyReveal key={plan.name} delay={index * 100}>
              <Card 
                className={`glass-card relative transition-all duration-300 hover:translate-y-[-4px] ${
                  plan.highlight 
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Features Included
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Limitations
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                            </div>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      plan.highlight 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* Add-on Features */}
        <LazyReveal delay={400}>
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              Future <span className="gradient-text">Features</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planned enhancements to make DropX even better
            </p>
          </div>
        </LazyReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {addOnFeatures.map((addon, index) => (
            <LazyReveal key={addon.name} delay={500 + index * 100}>
              <Card className="glass-card border-border hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{addon.price}</div>
                      <div className="text-xs text-muted-foreground">/{addon.period}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Join Waitlist
                  </Button>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* FAQ Section */}
        <LazyReveal delay={600}>
          <div className="glass-card border-border p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Pricing FAQ</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Is DropX really free?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! DropX is completely free to use. We believe BSC airdrop discovery should be accessible to everyone.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Will there be paid features?</h4>
                  <p className="text-sm text-muted-foreground">
                    We may introduce optional premium features in the future, but core airdrop monitoring will always be free.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How does DropX make money?</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently, we're focused on building the best product. Monetization will come through optional premium services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What about data privacy?</h4>
                  <p className="text-sm text-muted-foreground">
                    We only monitor public blockchain data and never access your private keys or personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LazyReveal>
      </div>
    </section>
  );
};