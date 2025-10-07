import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyReveal } from "@/components/LazyReveal";
import { TrendingUp, Users, Coins, Clock, DollarSign, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Early Users",
    value: "1,250+",
    description: "Beta testers joined",
    trend: "+45% this week"
  },
  {
    icon: Coins,
    title: "Airdrops Tracked",
    value: "85+",
    description: "Active airdrop opportunities",
    trend: "+12 new this month"
  },
  {
    icon: DollarSign,
    title: "Potential Value",
    value: "$2.3M+",
    description: "Total tracked airdrop value",
    trend: "Growing daily"
  },
  {
    icon: Clock,
    title: "Detection Speed",
    value: "<30s",
    description: "Average detection time",
    trend: "Real-time monitoring"
  },
  {
    icon: CheckCircle,
    title: "Platform Uptime",
    value: "99.9%",
    description: "Service reliability",
    trend: "Since launch"
  },
  {
    icon: TrendingUp,
    title: "Supported Chains",
    value: "8+",
    description: "Major blockchain networks",
    trend: "Multi-chain support"
  }
];

const recentActivity = [
  {
    project: "LayerZero (ZRO)",
    amount: "TBD",
    value: "Estimated $500-2000",
    time: "Monitoring",
    users: "track"
  },
  {
    project: "zkSync Era",
    amount: "TBD",
    value: "Estimated $300-1500",
    time: "Monitoring",
    users: "track"
  },
  {
    project: "Arbitrum ARB",
    amount: "Completed",
    value: "$1,200 avg",
    time: "March 2023",
    users: "reference"
  },
  {
    project: "Optimism OP",
    amount: "Completed",
    value: "$680 avg",
    time: "May 2022",
    users: "reference"
  }
];

export const Statistics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container px-4 md:px-6 relative">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Platform <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time metrics showing DropX's growing capabilities and BSC airdrop discovery
            </p>
          </div>
        </LazyReveal>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <LazyReveal key={stat.title} delay={index * 100}>
              <Card className="glass-card border-border hover:border-primary/30 transition-all duration-300 hover:translate-y-[-2px]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs text-green-500 font-medium bg-green-500/10 px-2 py-1 rounded">
                      {stat.trend}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <CardTitle className="text-lg text-foreground">{stat.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            </LazyReveal>
          ))}
        </div>

        {/* Recent Activity Section */}
        <LazyReveal delay={300}>
          <div className="glass-card border-border rounded-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Airdrop Opportunities</h3>
                <p className="text-muted-foreground">Current and past airdrop tracking status</p>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Monitoring
              </div>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Coins className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{activity.project}</div>
                      <div className="text-sm text-muted-foreground">Status: {activity.users}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{activity.amount}</div>
                    <div className="text-sm text-green-500">{activity.value}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button 
                className="px-6 py-2 border border-border rounded-lg hover:border-primary/50 transition-colors font-medium"
                onClick={() => {
                  document.getElementById('supported-tokens')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View All Opportunities
              </button>
            </div>
          </div>
        </LazyReveal>

        {/* Performance Highlights */}
        <LazyReveal delay={400}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card border-border p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="glass-card border-border p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;12s</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div className="glass-card border-border p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
            </div>
          </div>
        </LazyReveal>
      </div>
    </section>
  );
};