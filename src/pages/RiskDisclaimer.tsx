import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronUp, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RiskDisclaimer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            
            <h1 className="text-4xl font-bold mb-8">Risk Disclaimer</h1>
            <div className="prose prose-invert max-w-none space-y-6">
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                <h2 className="text-xl font-bold text-red-400 mb-4">⚠️ Important Risk Warning</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cryptocurrency airdrops and DeFi activities involve significant risks. Please read this disclaimer carefully before using AsterDrop.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cryptocurrency Risks</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Volatility:</strong> Cryptocurrency values can fluctuate dramatically</li>
                  <li><strong>Loss of Funds:</strong> Transactions are irreversible and mistakes can result in permanent loss</li>
                  <li><strong>Regulatory Risk:</strong> Changing regulations may affect token value or legality</li>
                  <li><strong>Technical Risk:</strong> Smart contract bugs or exploits can cause losses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Airdrop-Specific Risks</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Scam Tokens:</strong> Some airdrops may be worthless or malicious</li>
                  <li><strong>Tax Implications:</strong> Airdrop receipts may be taxable events</li>
                  <li><strong>Phishing:</strong> Fake airdrop sites may steal your private keys</li>
                  <li><strong>Network Fees:</strong> Claiming airdrops requires gas fees that may exceed token value</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Security Best Practices</h2>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Never share your private keys or seed phrases</li>
                    <li>Always verify airdrop authenticity before claiming</li>
                    <li>Use hardware wallets for large amounts</li>
                    <li>Research projects before participating</li>
                    <li>Be cautious of "too good to be true" offers</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">AsterDrop Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AsterDrop is a monitoring tool that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Cannot guarantee airdrop eligibility or success</li>
                  <li>May miss some airdrop opportunities</li>
                  <li>Provides information only, not financial advice</li>
                  <li>Cannot prevent scams or malicious tokens</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using AsterDrop, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>You understand the risks involved in cryptocurrency activities</li>
                  <li>You will conduct your own research before making decisions</li>
                  <li>You accept full responsibility for your actions and losses</li>
                  <li>You will comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Recommendation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Only participate in cryptocurrency activities with funds you can afford to lose. Consider consulting with financial professionals before making significant investments.
                </p>
              </div>

              <p className="text-sm text-muted-foreground/70 mt-8">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 border-2 border-primary/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      
      <Footer />
    </div>
  );
};

export default RiskDisclaimer;