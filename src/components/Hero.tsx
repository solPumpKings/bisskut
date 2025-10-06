import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { LazyReveal } from "@/components/LazyReveal";
import { useWallet } from "@/hooks/useWallet";
import { useState, useEffect } from "react";
import { DownloadModal } from "@/components/DownloadModal";

export const Hero = () => {
  const { isConnected, address, connectWallet } = useWallet();
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [hasCheckedEligibility, setHasCheckedEligibility] = useState(false);

  // Simulate checking eligibility (this would be set from the header's eligibility checker)
  useEffect(() => {
    const checkStatus = localStorage.getItem('eligibilityChecked');
    if (checkStatus === 'true') {
      setHasCheckedEligibility(true);
    }
  }, [isConnected]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Badge */}
          <LazyReveal delay={0}>
            <div className="glass-card px-4 py-2 rounded-full">
              <p className="text-sm font-medium text-muted-foreground">
                🚀 Browser Extension for Airdrop Monitoring
              </p>
            </div>
          </LazyReveal>

          {/* Heading */}
          <LazyReveal delay={100}>
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Never Miss an{" "}
                <span className="gradient-text">Airdrop</span>
                {" "}Again
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Automate your AsterDex airdrop claims with AsterDrop. Secure, fast, and effortless token collection.
              </p>
            </div>
          </LazyReveal>

          {/* CTA Buttons */}
          <LazyReveal delay={200}>
            {isConnected && hasCheckedEligibility ? (
              /* Show eligibility status and download */
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-medium text-green-500">You're Eligible for Airdrops!</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-base"
                    onClick={() => setShowDownloadModal(true)}
                  >
                    <Download className="mr-2" />
                    Download Extension
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="text-base"
                    onClick={() => {
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ) : (
              /* Default CTA buttons */
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-base"
                  onClick={connectWallet}
                >
                  <Zap className="mr-2" />
                  Connect Wallet
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="text-base"
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>
            )}
          </LazyReveal>
        </div>
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
