import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LazyReveal } from "@/components/LazyReveal";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "@/components/DownloadModal";

const testimonials = [
  {
    name: "Alex Chen",
    role: "DeFi Enthusiast",
    avatar: "AC",
    image: "",
    rating: 5,
    content: "Finally, a tool that tracks all the airdrop opportunities I keep missing! The interface is clean and the notifications are spot on. Can't wait to see what airdrops it catches.",
    claimed: "Monitoring",
    timeUsing: "12 days"
  },
  {
    name: "Sarah Martinez",
    role: "Crypto Trader", 
    avatar: "SM",
    image: "",
    rating: 5,
    content: "The multi-wallet support is exactly what I needed. Being able to track airdrop eligibility across all my wallets in one place is a game-changer. Great work by the team!",
    claimed: "Setup complete",
    timeUsing: "10 days"
  },
  {
    name: "Michael Thompson",
    role: "Early Adopter",
    avatar: "MT", 
    image: "",
    rating: 5,
    content: "The detection speed is impressive. I'm getting notified about airdrop opportunities faster than any other tool I've used. The free model is awesome too!",
    claimed: "Active tracking",
    timeUsing: "11 days"
  },
  {
    name: "Emily Rodriguez",
    role: "Beta Tester",
    avatar: "ER",
    image: "",
    rating: 4,
    content: "Love the concept and execution so far. The dashboard is intuitive and the real-time monitoring gives me confidence I won't miss opportunities. Excited for future updates!",
    claimed: "Testing",
    timeUsing: "12 days"
  },
  {
    name: "David Kim",
    role: "Community Member",
    avatar: "DK",
    image: "",
    rating: 5,
    content: "As someone new to airdrops, this tool makes everything so much easier to understand and track. The educational content helps me learn while I monitor.",
    claimed: "Learning",
    timeUsing: "10 days"
  },
  {
    name: "Lisa Johnson",
    role: "Discord Moderator",
    avatar: "LJ",
    image: "",
    rating: 5,
    content: "I help others in various crypto communities, and DropX is the first tool I recommend for BSC airdrop discovery. Simple, effective, and completely free!",
    claimed: "Recommending",
    timeUsing: "11 days"
  }
];

const stats = [
  {
    value: "1,250+",
    label: "Beta Users",
    description: "Early adopters testing"
  },
  {
    value: "4.8/5",
    label: "User Rating",
    description: "Based on 180+ reviews"
  },
  {
    value: "85+",
    label: "Tracked Airdrops",
    description: "Current opportunities"
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable monitoring"
  }
];

export const Testimonials = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container px-4 md:px-6 relative">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our <span className="gradient-text">Users Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who trust DropX for their BSC airdrop discovery
            </p>
          </div>
        </LazyReveal>

        {/* Statistics Row */}
        <LazyReveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </LazyReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <LazyReveal key={testimonial.name} delay={200 + index * 100}>
              <Card className="glass-card border-border hover:border-primary/30 transition-all duration-300 hover:translate-y-[-2px] h-full">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{testimonial.claimed}</div>
                      <div className="text-xs text-muted-foreground">Status</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{testimonial.timeUsing}</div>
                      <div className="text-xs text-muted-foreground">Using DropX</div>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* Call to Action */}
        <LazyReveal delay={800}>
          <div className="text-center">
            <div className="glass-card border-border p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
              <p className="text-muted-foreground mb-6">
                Be part of the future of BSC airdrop discovery and never miss an opportunity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowDownloadModal(true)}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get Started Free
                </button>
                <button 
                  className="px-8 py-3 border border-border rounded-lg hover:border-primary/50 transition-colors font-medium"
                  onClick={() => window.open('https://x.com/dropx_bsc', '_blank')}
                >
                  Follow Twitter
                </button>
              </div>
            </div>
          </div>
        </LazyReveal>

        {/* Community Section */}
        <LazyReveal delay={900}>
          <div className="mt-16 text-center">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-4">Join Our Community</h4>
              <button
                onClick={() => window.open('https://x.com/dropx_bsc', '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on Twitter
              </button>
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