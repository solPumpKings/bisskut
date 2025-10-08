import { Card, CardContent } from "@/components/ui/card";
import { LazyReveal } from "@/components/LazyReveal";
import { Star, Shield, Zap, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "@/components/DownloadModal";

const benefits = [
  {
    icon: Shield,
    title: "Security First Approach",
    description: "We only read public blockchain data. Your private keys and sensitive information remain completely secure."
  },
  {
    icon: Zap,
    title: "Real-time Discovery",
    description: "Get notified about new airdrop opportunities as soon as they're detected in the BSC ecosystem."
  },
  {
    icon: TrendingUp,
    title: "Growing Database",
    description: "Our continuously expanding dataset covers more BSC projects and airdrop opportunities."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Built with feedback from the BSC community to meet real needs and use cases."
  }
];

export const Testimonials = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <section className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Platform <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key advantages of using DropX for your BSC airdrop discovery needs
            </p>
          </div>
        </LazyReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <LazyReveal key={benefit.title} delay={200 + index * 100}>
              <Card className="glass-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-5">
                  {/* Icon */}
                  <div className="mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* Call to Action */}
        <LazyReveal delay={600}>
          <div className="text-center mt-10">
            <div className="glass-card border-border p-6 rounded-lg max-w-xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Start Discovering Airdrops Today</h3>
              <p className="text-muted-foreground mb-5 text-sm">
                Join the growing community of BSC users who rely on DropX for airdrop discovery
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => setShowDownloadModal(true)}
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                >
                  Get Started
                </button>
                <button 
                  className="px-6 py-2.5 border border-border rounded-lg hover:border-primary/50 transition-colors font-medium text-sm"
                  onClick={() => window.open('https://x.com/bnbDropX', '_blank')}
                >
                  Follow on X
                </button>
              </div>
            </div>
          </div>
        </LazyReveal>
      </div>
      
      {/* Download Modal */}
      <DownloadModal 
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        extensionLink="/downloads/ext.zip"
      />
    </section>
  );
};