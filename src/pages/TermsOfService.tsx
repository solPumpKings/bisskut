import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronUp, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
            
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-invert max-w-none space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using AsterDrop, you agree to these Terms of Service. If you do not agree, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Service Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AsterDrop is a browser extension that monitors public blockchain data to identify airdrop opportunities for your wallet addresses. Our service:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Monitors public blockchain transactions</li>
                  <li>Identifies potential airdrop eligibility</li>
                  <li>Provides notifications about opportunities</li>
                  <li>Offers educational content about airdrops</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate wallet addresses for monitoring</li>
                  <li>Keep your private keys and seed phrases secure</li>
                  <li>Verify all airdrop claims independently</li>
                  <li>Use the service in compliance with applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Important:</strong> AsterDrop is a monitoring tool only. We do not:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                    <li>Guarantee airdrop eligibility or success</li>
                    <li>Provide financial or investment advice</li>
                    <li>Control or influence airdrop distributions</li>
                    <li>Take responsibility for failed or missed claims</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AsterDrop is provided "as is" without warranties. We are not liable for any losses, damages, or missed opportunities related to airdrop claims.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Maintenance windows and technical issues may temporarily affect availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms occasionally. Continued use of AsterDrop constitutes acceptance of any changes.
                </p>
              </section>

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

export default TermsOfService;