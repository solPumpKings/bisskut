import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LazyReveal } from "@/components/LazyReveal";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    title: "Understanding Airdrop Eligibility Criteria",
    excerpt: "Learn how blockchain projects determine airdrop eligibility and what activities qualify users for token distributions.",
    category: "Education",
    date: "February 18, 2025",
    readTime: "7 min read",
    image: "📚",
    featured: false,
    author: "Education Team"
  },
  {
    title: "Security Best Practices for Airdrop Participation",
    excerpt: "Essential security measures to implement when researching and claiming airdrops in the cryptocurrency space.",
    category: "Security",
    date: "February 28, 2025",
    readTime: "6 min read",
    image: "🔒",
    featured: false,
    author: "Security Team"
  },
  {
    title: "Maximizing Airdrop Opportunities in DeFi",
    excerpt: "Strategies for identifying and qualifying for lucrative decentralized finance airdrop programs.",
    category: "Education",
    date: "March 1, 2025",
    readTime: "12 min read", 
    image: "🎯",
    featured: false,
    author: "Education Team"
  },
  {
    title: "Platform Updates and New Features",
    excerpt: "Recent improvements to our airdrop discovery algorithms and user experience enhancements.",
    category: "Product Update",
    date: "March 8, 2025",
    readTime: "5 min read",
    image: "🚀",
    featured: false,
    author: "Development Team"
  }
];

const categories = [
  { name: "All", count: 12, active: true },
  { name: "Education", count: 5, active: false },
  { name: "Security", count: 3, active: false },
  { name: "Product Updates", count: 4, active: false }
];

export const BlogNews = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [selectedPost, setSelectedPost] = useState(null);
  const allPosts = [...blogPosts];
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 2, allPosts.length));
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
    <section id="blog" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Resources & <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational content and platform updates to help you navigate the airdrop landscape
            </p>
          </div>
        </LazyReveal>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Content Area */}
          <div>
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

            {/* Blog Posts Grid */}
            {!selectedPost ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allPosts.slice(0, visiblePosts).map((post, index) => (
                    <LazyReveal key={post.title} delay={200 + index * 100}>
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
                  <LazyReveal delay={500}>
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
              <div className="max-w-3xl mx-auto">
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
                    <h1 className="text-3xl font-bold leading-tight">{selectedPost.title}</h1>
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
                        This comprehensive guide explores key aspects of {selectedPost.category.toLowerCase()} in the cryptocurrency airdrop space. We'll dive deep into the technical aspects, best practices, and practical applications.
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
                        As the cryptocurrency landscape continues to evolve, staying informed and using the right tools becomes increasingly important. Our platform helps ensure you never miss valuable opportunities while maintaining security best practices.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};