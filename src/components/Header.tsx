import { Button } from "@/components/ui/button";
import { Menu, Zap, CheckCircle, Wallet, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useWallet } from "@/hooks/useWallet";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { DownloadModal } from "@/components/DownloadModal";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { isConnected, address, isConnecting, connectWallet, disconnectWallet } = useWallet();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

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
    { name: "Supported Tokens", href: "#supported-tokens" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
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
          ? "glass-card border-b border-border/50 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 transform transition-transform hover:scale-105"
            data-testid="link-home"
          >
            <img src="/logo-icon.svg" alt="AsterDrop" className="h-8 md:h-10" />
            <span className="text-xl md:text-2xl font-bold gradient-text">AsterDrop</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 relative group cursor-pointer"
                data-testid={`link-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {!isConnected ? (
              <Button 
                variant="hero" 
                size="sm"
                className="gap-2"
                onClick={connectWallet}
                disabled={isConnecting}
                data-testid="button-connect-wallet"
              >
                <Zap className="w-4 h-4" />
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-2"
                  onClick={() => setShowEligibility(!showEligibility)}
                >
                  <CheckCircle className="w-4 h-4" />
                  Check Eligibility
                </Button>
                <Button 
                  variant="hero" 
                  size="sm"
                  className="gap-2"
                  onClick={() => setShowDownloadModal(true)}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-2 text-green-500"
                  onClick={disconnectWallet}
                >
                  <Wallet className="w-4 h-4" />
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="p-2 hover:bg-primary/10 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-center">
                <Menu size={24} className="text-muted-foreground hover:text-primary" />
              </summary>
              <div className="absolute right-0 top-full mt-2 w-64 glass-card border border-border rounded-lg shadow-lg py-2 z-50 backdrop-blur-md">
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
                      className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                      data-testid={`mobile-link-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="border-t border-border/50 mt-2 pt-2 px-4">
                    {!isConnected ? (
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="w-full gap-2"
                        onClick={connectWallet}
                        disabled={isConnecting}
                        data-testid="mobile-button-connect-wallet"
                      >
                        <Zap className="w-4 h-4" />
                        {isConnecting ? "Connecting..." : "Connect Wallet"}
                      </Button>
                    ) : (
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-2"
                      onClick={() => setShowEligibility(!showEligibility)}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Check Eligibility
                    </Button>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="w-full gap-2"
                      onClick={() => setShowDownloadModal(true)}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full gap-2 text-green-500"
                      onClick={disconnectWallet}
                    >
                      <Wallet className="w-4 h-4" />
                      {address?.slice(0, 6)}...{address?.slice(-4)}
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
      
      {/* Eligibility Checker Modal */}
      {showEligibility && isConnected && address && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Airdrop Eligibility Check</h2>
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
        extensionLink="https://youtube.com"
      />
    </header>
  );
};
