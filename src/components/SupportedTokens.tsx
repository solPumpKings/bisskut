import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyReveal } from "@/components/LazyReveal";
import { Coins, Star, TrendingUp, Shield, Clock } from "lucide-react";

const tokenCategories = [
  {
    category: "Layer 2 & Scaling",
    icon: TrendingUp,
    description: "Layer 2 solutions and scaling platforms with potential airdrops",
    tokens: [
      {
        name: "zkSync Era",
        symbol: "ZK",
        logo: "⚡",
        status: "Monitoring",
        lastAirdrop: "TBD",
        totalClaimed: "Pending",
        claimCount: "Tracking"
      },
      {
        name: "LayerZero",
        symbol: "ZRO",
        logo: "🔗",
        status: "Monitoring",
        lastAirdrop: "TBD",
        totalClaimed: "Pending",
        claimCount: "Tracking"
      },
      {
        name: "Polygon zkEVM",
        symbol: "POL",
        logo: "🔷",
        status: "Monitoring",
        lastAirdrop: "TBD",
        totalClaimed: "Pending",
        claimCount: "Tracking"
      }
    ]
  },
  {
    category: "DeFi Protocols",
    icon: Star,
    description: "Decentralized finance protocols with potential token distributions",
    tokens: [
      {
        name: "Hyperliquid",
        symbol: "HYPE",
        logo: "💧",
        status: "Monitoring",
        lastAirdrop: "TBD",
        totalClaimed: "Pending",
        claimCount: "Tracking"
      },
      {
        name: "Ambient Finance",
        symbol: "AMB",
        logo: "🌊",
        status: "Monitoring",
        lastAirdrop: "TBD",
        totalClaimed: "Pending",
        claimCount: "Tracking"
      }
    ]
  },
  {
    category: "Completed Airdrops",
    icon: Shield,
    description: "Reference examples of past successful airdrops",
    tokens: [
      {
        name: "Arbitrum",
        symbol: "ARB",
        logo: "🔵",
        status: "Completed",
        lastAirdrop: "March 2023",
        totalClaimed: "$1,200 avg",
        claimCount: "Reference"
      },
      {
        name: "Optimism",
        symbol: "OP",
        logo: "🔴",
        status: "Completed",
        lastAirdrop: "May 2022",
        totalClaimed: "$680 avg",
        claimCount: "Reference"
      }
    ]
  }
];

const upcomingAirdrops = [
  {
    name: "Meteora Protocol",
    symbol: "MET",
    logo: "☄️",
    launchDate: "TBD 2025",
    estimatedValue: "$500 - $2,000",
    eligibility: "Solana DeFi users, Liquidity providers"
  },
  {
    name: "Monad Testnet",
    symbol: "MON",
    logo: "🚀",
    launchDate: "Q2 2025",
    estimatedValue: "$300 - $1,500",
    eligibility: "Testnet participants, Validators"
  },
  {
    name: "Abstract Chain",
    symbol: "ABS",
    logo: "🎨",
    launchDate: "TBD 2025",
    estimatedValue: "$200 - $800",
    eligibility: "Early users, NFT creators"
  }
];

export const SupportedTokens = () => {
  return (
    <section id="supported-tokens" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Supported <span className="gradient-text">Tokens</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete coverage of major blockchain ecosystems with 85+ tracked opportunities
            </p>
          </div>
        </LazyReveal>

        {/* Token Categories */}
        <div className="space-y-12">
          {tokenCategories.map((category, categoryIndex) => (
            <LazyReveal key={category.category} delay={categoryIndex * 100}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
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
                            variant={token.status === "Monitoring" ? "default" : token.status === "Completed" ? "secondary" : "outline"}
                            className={token.status === "Monitoring" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : token.status === "Completed" ? "bg-green-500/10 text-green-500 border-green-500/20" : ""}
                          >
                            {token.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Status:</span>
                          <span className="font-medium">{token.lastAirdrop}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Potential Value:</span>
                          <span className="font-medium text-blue-500">{token.totalClaimed}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tracking:</span>
                          <span className="font-medium">{token.claimCount}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </LazyReveal>
          ))}
        </div>

        {/* Upcoming Airdrops */}
        <LazyReveal delay={400}>
          <div className="mt-20">
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Upcoming <span className="gradient-text">Airdrops</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get ready for the next wave of airdrop opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingAirdrops.map((airdrop, index) => (
                <Card key={airdrop.symbol} className="glass-card border-border hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-3xl">{airdrop.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{airdrop.name}</CardTitle>
                        <div className="text-sm text-muted-foreground">${airdrop.symbol}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      Coming Soon
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Launch Date</div>
                      <div className="font-medium">{airdrop.launchDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Estimated Value</div>
                      <div className="font-medium text-green-500">{airdrop.estimatedValue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Eligibility</div>
                      <div className="text-sm font-medium">{airdrop.eligibility}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </LazyReveal>

        {/* Call to Action */}
        <LazyReveal delay={500}>
          <div className="mt-16 text-center">
            <div className="glass-card border-border p-8 rounded-lg max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Never Miss an Opportunity</h4>
              <p className="text-muted-foreground mb-6">
                Connect your wallet now to start monitoring airdrop opportunities across all supported blockchains
              </p>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Connect Wallet & Start Monitoring
              </button>
            </div>
          </div>
        </LazyReveal>
      </div>
    </section>
  );
};