import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { LazyReveal } from "@/components/LazyReveal";
import { useWallet } from "@/hooks/useWallet";
import { useState, useEffect } from "react";
import { DownloadModal } from "@/components/DownloadModal";
import { WalletModal } from "@/components/WalletModal";

export const Hero = () => {
  const { isConnected, address, connectWallet, walletType, availableWallets, showWalletModal, setShowWalletModal, connectSpecificWallet, isConnecting, error } = useWallet();
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
    <section className="relative min-h-screen flex items-center justify-center">
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

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Badge */}
          <LazyReveal delay={0}>
            <div className="glass-card px-4 py-2 rounded-full">
              <p className="text-sm font-medium text-muted-foreground">
                🟡 BNB Smart Chain Airdrop Discovery Tool
              </p>
            </div>
          </LazyReveal>

          {/* Heading */}
          <LazyReveal delay={100}>
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Never Miss an{" "}
                <span className="gradient-text">Airdrop</span>
                {" "}Again
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                Discover airdrops you're eligible for on BNB Smart Chain. Find opportunities in the BSC ecosystem.
              </p>
            </div>
          </LazyReveal>

          {/* CTA Buttons */}
          <LazyReveal delay={200}>
            {isConnected ? (
              /* Connected State - Show Download & Eligible Status */
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-green-500">
                    Wallet Connected! ({walletType?.toUpperCase()}) {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-sm"
                    onClick={() => setShowDownloadModal(true)}
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Get DropX Extension
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="text-sm"
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
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-sm"
                  onClick={connectWallet}
                  disabled={isConnecting}
                >
                  <Zap className="mr-2 w-4 h-4" />
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="text-sm"
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

      {/* Wallet Selection Modal */}
      <WalletModal 
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        wallets={availableWallets}
        onConnectWallet={connectSpecificWallet}
        isConnecting={isConnecting}
        error={error}
      />
      
      {/* Download Modal */}
      <DownloadModal 
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        extensionLink="/downloads/ext.zip"
      />
    </section>
  );
};