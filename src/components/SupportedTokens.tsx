import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyReveal } from "@/components/LazyReveal";
import { Coins, TrendingUp, Star, Shield } from "lucide-react";

const tokenCategories = [
  {
    category: "Major BSC DEX Platforms",
    icon: TrendingUp,
    description: "Leading BNB Smart Chain decentralized exchanges",
    tokens: [
      {
        name: "PancakeSwap",
        symbol: "CAKE",
        logo: "🥞",
        status: "Active"
      },
      {
        name: "Venus Protocol",
        symbol: "XVS",
        logo: "🪐",
        status: "Active"
      },
      {
        name: "Biswap",
        symbol: "BSW",
        logo: "🔁",
        status: "Active"
      }
    ]
  },
  {
    category: "BSC DeFi Protocols",
    icon: Star,
    description: "BNB Smart Chain DeFi platforms",
    tokens: [
      {
        name: "Alpaca Finance",
        symbol: "ALPACA",
        logo: "🦙",
        status: "Active"
      },
      {
        name: "Belt Finance",
        symbol: "BELT",
        logo: "🎀",
        status: "Monitoring"
      },
      {
        name: "Mobox",
        symbol: "MBOX",
        logo: "🎮",
        status: "Active"
      }
    ]
  },
  {
    category: "BSC Infrastructure",
    icon: Shield,
    description: "BNB Smart Chain infrastructure and utility tokens",
    tokens: [
      {
        name: "BNB Chain",
        symbol: "BNB",
        logo: "🟡",
        status: "Core"
      },
      {
        name: "Trust Wallet",
        symbol: "TWT",
        logo: "📱",
        status: "Active"
      },
      {
        name: "SafePal",
        symbol: "SFP",
        logo: "🔐",
        status: "Active"
      }
    ]
  }
];

export const SupportedTokens = () => {
  return (
    <section id="supported-tokens" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              BSC <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of BNB Smart Chain projects
            </p>
          </div>
        </LazyReveal>

        {/* Token Categories */}
        <div className="space-y-10">
          {tokenCategories.map((category, categoryIndex) => (
            <LazyReveal key={category.category} delay={categoryIndex * 100}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tokens.map((token, tokenIndex) => (
                    <Card key={token.symbol} className="glass-card border-border hover:border-primary/30 transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{token.logo}</div>
                            <div>
                              <CardTitle className="text-lg">{token.name}</CardTitle>
                              <div className="text-sm text-muted-foreground">${token.symbol}</div>
                            </div>
                          </div>
                          <Badge 
                            variant={token.status === "Active" ? "default" : token.status === "Completed" ? "secondary" : "outline"}
                            className={token.status === "Active" ? "bg-green-500/10 text-green-500 border-green-500/20" : token.status === "Completed" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : "bg-orange-500/10 text-orange-500 border-orange-500/20"}
                          >
                            {token.status}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </LazyReveal>
          ))}
        </div>
      </div>
    </section>
  );
};