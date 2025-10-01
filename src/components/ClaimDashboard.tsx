import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Coins, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { LazyReveal } from "@/components/LazyReveal";

const mockAirdrops = [
  {
    id: 1,
    name: "AsterDex Season 1",
    amount: "2,450 ASTR",
    value: "$245.00",
    status: "ready",
    date: "Available Now",
  },
  {
    id: 2,
    name: "Liquidity Provider Rewards",
    amount: "1,230 ASTR",
    value: "$123.00",
    status: "ready",
    date: "Available Now",
  },
  {
    id: 3,
    name: "Early Adopter Bonus",
    amount: "5,000 ASTR",
    value: "$500.00",
    status: "claimed",
    date: "Claimed 2 days ago",
  },
  {
    id: 4,
    name: "Trading Competition Prize",
    amount: "750 ASTR",
    value: "$75.00",
    status: "pending",
    date: "Available in 3 days",
  },
];

export const ClaimDashboard = () => {
  const [claiming, setClaiming] = useState<number | null>(null);

  const handleClaim = async (airdropId: number) => {
    setClaiming(airdropId);
    
    // Simulate claiming process
    setTimeout(() => {
      toast.success("Airdrop claimed successfully!", {
        description: "Tokens have been sent to your wallet.",
      });
      setClaiming(null);
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-primary/20 text-primary border-primary/50">Ready to Claim</Badge>;
      case "claimed":
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/50">Claimed</Badge>;
      case "pending":
        return <Badge className="bg-muted text-muted-foreground border-border">Pending</Badge>;
      default:
        return null;
    }
  };

  const totalReady = mockAirdrops.filter(a => a.status === "ready");
  const totalValue = totalReady.reduce((sum, a) => {
    return sum + parseFloat(a.value.replace("$", "").replace(",", ""));
  }, 0);

  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your <span className="gradient-text">Airdrop Dashboard</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track and claim your AsterDex airdrops in one place
            </p>
          </div>
        </LazyReveal>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <LazyReveal delay={0}>
            <Card className="glass-card border-border h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available to Claim</CardTitle>
                <Coins className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold gradient-text">${totalValue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                  {totalReady.length} airdrop{totalReady.length !== 1 ? 's' : ''} ready
                </p>
              </CardContent>
            </Card>
          </LazyReveal>

          <LazyReveal delay={100}>
            <Card className="glass-card border-border h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Claimed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$500.00</div>
                <p className="text-xs text-muted-foreground">
                  1 airdrop claimed
                </p>
              </CardContent>
            </Card>
          </LazyReveal>

          <LazyReveal delay={200}>
            <Card className="glass-card border-border h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100%</div>
                <p className="text-xs text-muted-foreground">
                  All claims successful
                </p>
              </CardContent>
            </Card>
          </LazyReveal>
        </div>

        {/* Airdrops List */}
        <div className="space-y-4">
          {mockAirdrops.map((airdrop, index) => (
            <LazyReveal key={airdrop.id} delay={index * 100}>
              <Card className="glass-card border-border hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{airdrop.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {airdrop.date}
                    </CardDescription>
                  </div>
                  {getStatusBadge(airdrop.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold gradient-text">{airdrop.amount}</p>
                    <p className="text-sm text-muted-foreground">≈ {airdrop.value}</p>
                  </div>
                  {airdrop.status === "ready" && (
                    <Button 
                      variant="hero"
                      onClick={() => handleClaim(airdrop.id)}
                      disabled={claiming === airdrop.id}
                    >
                      {claiming === airdrop.id ? "Claiming..." : "Claim Now"}
                    </Button>
                  )}
                  {airdrop.status === "claimed" && (
                    <Button variant="ghost" disabled>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Claimed
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            </LazyReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
