import { Button } from "@/components/ui/button";
import { Menu, Zap, CheckCircle, Wallet, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useWallet } from "@/hooks/useWallet";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { DownloadModal } from "@/components/DownloadModal";
import { WalletModal } from "@/components/WalletModal";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { isConnected, address, isConnecting, connectWallet, disconnectWallet, error, walletType, availableWallets, showWalletModal, setShowWalletModal, connectSpecificWallet } = useWallet();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Show error message if wallet connection fails
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Tokens", href: "#supported-tokens" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isHomePage) {
      // On homepage, scroll to section
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage with hash
      navigate('/' + href);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-sm border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2"
          >
            <span className="text-lg font-bold gradient-text">DropX</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {!isConnected ? (
              <Button 
                variant="hero" 
                size="sm"
                className="gap-1.5 text-sm"
                onClick={connectWallet}
                disabled={isConnecting}
              >
                <Zap className="w-3.5 h-3.5" />
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button 
                  variant="hero" 
                  size="sm"
                  className="gap-1.5 text-sm"
                  onClick={() => setShowDownloadModal(true)}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-1.5 text-green-500"
                  onClick={disconnectWallet}
                >
                  <Wallet className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">{walletType?.toUpperCase()}</span>
                  {address?.slice(0, 4)}...{address?.slice(-3)}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="p-2 hover:bg-primary/10 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-center">
                <Menu size={20} className="text-muted-foreground" />
              </summary>
              <div className="absolute right-0 top-full mt-1 w-48 border border-border rounded-lg shadow-lg py-1 z-50 bg-background">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        // Close the details element when link is clicked
                        const details = e.currentTarget.closest('details');
                        if (details) details.open = false;
                      }}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="border-t border-border/50 mt-1 pt-1 px-4">
                    {!isConnected ? (
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="w-full gap-1.5 text-sm my-1"
                        onClick={connectWallet}
                        disabled={isConnecting}
                      >
                        <Zap className="w-3.5 h-3.5" />
                        {isConnecting ? "Connecting..." : "Connect Wallet"}
                      </Button>
                    ) : (
                  <div className="space-y-1.5 py-1.5">
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="w-full gap-1.5 text-sm"
                      onClick={() => setShowDownloadModal(true)}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full gap-1.5 text-green-500"
                      onClick={disconnectWallet}
                    >
                      <Wallet className="w-3.5 h-3.5" />
                      {walletType?.toUpperCase()} {address?.slice(0, 4)}...{address?.slice(-3)}
                    </Button>
                  </div>
                    )}
                  </div>
                </nav>
              </div>
            </details>
          </div>
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
      
      {/* Eligibility Checker Modal */}
      {showEligibility && isConnected && address && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">BSC Airdrop Eligibility Check</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowEligibility(false)}
                >
                  ✕
                </Button>
              </div>
              <EligibilityChecker walletAddress={address} />
            </div>
          </div>
        </div>
      )}
      
      {/* Download Modal */}
      <DownloadModal 
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        extensionLink="/downloads/ext.zip"
      />
    </header>
  );
};