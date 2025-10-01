import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyReveal } from "@/components/LazyReveal";
import { Calendar, Clock, ArrowRight, Newspaper, TrendingUp, BookOpen } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    title: "AsterDrop v2.0: Advanced Multi-Chain Support Now Live",
    excerpt: "Experience the future of airdrop automation with our new multi-chain architecture supporting Ethereum, Polygon, and Arbitrum ecosystems.",
    category: "Product Update",
    date: "March 8, 2025",
    readTime: "5 min read",
    image: "🚀",
    featured: true,
    author: "Development Team"
  },
  {
    title: "March 2025 Airdrop Report: $12M+ Claimed Across 50+ Projects",
    excerpt: "Our comprehensive monthly analysis of airdrop trends, successful claims, and upcoming opportunities in the AsterDex ecosystem.",
    category: "Market Analysis",
    date: "March 5, 2025", 
    readTime: "8 min read",
    image: "📊",
    featured: false,
    author: "Research Team"
  },
  {
    title: "How to Maximize Your Airdrop Eligibility: Complete Guide",
    excerpt: "Learn proven strategies to increase your chances of qualifying for lucrative airdrops in the DeFi space with practical examples.",
    category: "Education",
    date: "March 1, 2025",
    readTime: "12 min read", 
    image: "🎯",
    featured: false,
    author: "Education Team"
  },
  {
    title: "Security Best Practices for Automated Airdrop Claiming",
    excerpt: "Essential security measures every user should implement when using automated tools for cryptocurrency operations.",
    category: "Security",
    date: "February 28, 2025",
    readTime: "6 min read",
    image: "🔒",
    featured: false,
    author: "Security Team"
  },
  {
    title: "AsterVault Integration: Enhanced Yield Opportunities",
    excerpt: "Discover how our new partnership with AsterVault creates additional earning opportunities for AsterDrop users.",
    category: "Partnership",
    date: "February 25, 2025",
    readTime: "4 min read",
    image: "🤝",
    featured: false,
    author: "Business Development"
  },
  {
    title: "DeFi Airdrop Trends: What to Expect in Q2 2025",
    excerpt: "Industry insights and predictions for the evolving airdrop landscape in the second quarter of 2025.",
    category: "Industry Insights",
    date: "February 22, 2025",
    readTime: "10 min read",
    image: "🔮",
    featured: false,
    author: "Market Analysis"
  }
];

const additionalPosts = [
  {
    title: "Understanding Airdrop Eligibility Criteria",
    excerpt: "Deep dive into how projects determine airdrop eligibility and strategies to maximize your chances of qualifying for future distributions.",
    category: "Education",
    date: "February 18, 2025",
    readTime: "7 min read",
    image: "📚",
    featured: false,
    author: "Education Team"
  },
  {
    title: "Cross-Chain Airdrop Opportunities in 2025",
    excerpt: "Exploring multi-chain protocols and their airdrop strategies across Ethereum, Solana, Cosmos, and emerging ecosystems.",
    category: "Market Analysis",
    date: "February 15, 2025",
    readTime: "9 min read",
    image: "🌐",
    featured: false,
    author: "Research Team"
  },
  {
    title: "AsterDrop Extension v1.2 Release Notes",
    excerpt: "New features include custom notification settings, improved wallet detection, and enhanced security measures for safer airdrop monitoring.",
    category: "Product Update",
    date: "February 12, 2025",
    readTime: "4 min read",
    image: "🔧",
    featured: false,
    author: "Development Team"
  }
];

const newsUpdates = [
  {
    title: "Real-time Gas Optimization Feature Released",
    description: "Smart gas fee optimization now automatically adjusts for network conditions",
    date: "2 hours ago",
    type: "Feature"
  },
  {
    title: "Partnership with AsterOracle Announced",
    description: "Enhanced price feeds for more accurate airdrop valuations",
    date: "1 day ago", 
    type: "Partnership"
  },
  {
    title: "Mobile App Beta Testing Begins",
    description: "iOS and Android apps now available for beta testers",
    date: "3 days ago",
    type: "Product"
  },
  {
    title: "99.9% Uptime Achieved in February",
    description: "Platform reliability reaches new milestone with industry-leading uptime",
    date: "5 days ago",
    type: "Milestone"
  }
];

const categories = [
  { name: "All", count: 45, active: true },
  { name: "Product Updates", count: 12, active: false },
  { name: "Education", count: 18, active: false },
  { name: "Market Analysis", count: 8, active: false },
  { name: "Security", count: 7, active: false }
];

export const BlogNews = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState(null);
  const allPosts = [...blogPosts.slice(1), ...additionalPosts];
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, allPosts.length));
  };
  
  const handleReadMore = (post) => {
    setSelectedPost(post);
    // Scroll to top of blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleBackToList = () => {
    setSelectedPost(null);
  };
  return (
    <section id="blog" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Blog & <span className="gradient-text">News</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights, guides, and developments in the airdrop ecosystem
            </p>
          </div>
        </LazyReveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <LazyReveal delay={100}>
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category, index) => (
                  <Badge
                    key={category.name}
                    variant={category.active ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      category.active ? "bg-primary text-primary-foreground" : "hover:border-primary/50"
                    }`}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>
            </LazyReveal>

            {/* Featured Post */}
            <LazyReveal delay={200}>
              <Card className="glass-card border-border mb-8 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                    <div className="text-6xl">{blogPosts[0].image}</div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                      <Badge variant="outline">
                        {blogPosts[0].category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-3 leading-tight">
                      {blogPosts[0].title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blogPosts[0].date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blogPosts[0].readTime}
                        </div>
                      </div>
                      <button 
                        onClick={() => handleReadMore(blogPosts[0])}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </LazyReveal>

            {/* Blog Posts Grid */}
            {!selectedPost ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allPosts.slice(0, visiblePosts).map((post, index) => (
                    <LazyReveal key={post.title} delay={300 + index * 100}>
                      <Card className="glass-card border-border hover:border-primary/30 transition-all duration-300 hover:translate-y-[-2px] h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-3xl">{post.image}</div>
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg leading-tight line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </div>
                            </div>
                            <button 
                              onClick={() => handleReadMore(post)}
                              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                            >
                              Read →
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </LazyReveal>
                  ))}
                </div>

                {/* Load More */}
                {visiblePosts < allPosts.length && (
                  <LazyReveal delay={700}>
                    <div className="text-center mt-8">
                      <button 
                        onClick={handleLoadMore}
                        className="px-6 py-3 border border-border rounded-lg hover:border-primary/50 transition-colors font-medium"
                      >
                        Load More Articles ({allPosts.length - visiblePosts} remaining)
                      </button>
                    </div>
                  </LazyReveal>
                )}
              </>
            ) : (
              /* Full Article View */
              <div className="max-w-4xl mx-auto">
                <button 
                  onClick={handleBackToList}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
                >
                  ← Back to Articles
                </button>
                
                <article className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">{selectedPost.image}</div>
                    <Badge variant="outline">{selectedPost.category}</Badge>
                    <h1 className="text-4xl font-bold leading-tight">{selectedPost.title}</h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {selectedPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {selectedPost.readTime}
                      </div>
                      <div>By {selectedPost.author}</div>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {selectedPost.excerpt}
                    </p>
                    
                    <div className="mt-8 space-y-6">
                      <h2 className="text-2xl font-bold">Introduction</h2>
                      <p className="leading-relaxed text-muted-foreground">
                        This comprehensive guide explores the latest developments in airdrop strategies and how AsterDrop helps users stay ahead of opportunities. We'll dive deep into the technical aspects, market trends, and practical applications.
                      </p>
                      
                      <h2 className="text-2xl font-bold">Key Insights</h2>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Understanding eligibility criteria across different protocols</li>
                        <li>• Timing strategies for maximum value capture</li>
                        <li>• Risk assessment and security considerations</li>
                        <li>• Future trends and emerging opportunities</li>
                      </ul>
                      
                      <h2 className="text-2xl font-bold">Conclusion</h2>
                      <p className="leading-relaxed text-muted-foreground">
                        As the airdrop landscape continues to evolve, staying informed and using the right tools becomes increasingly important. AsterDrop's monitoring capabilities ensure you never miss valuable opportunities while maintaining security best practices.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent News */}
            <LazyReveal delay={400}>
              <Card className="glass-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Latest News
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {newsUpdates.map((news, index) => (
                    <div key={index} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                      <div className="flex items-start gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {news.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{news.date}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{news.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {news.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </LazyReveal>

            {/* Newsletter Signup */}
            <LazyReveal delay={500}>
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest airdrop insights and platform updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    />
                    <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    No spam. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </LazyReveal>
          </div>
        </div>
      </div>
    </section>
  );
};