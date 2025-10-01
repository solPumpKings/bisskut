import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronUp, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
            
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none space-y-6">
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AsterDrop is designed with privacy in mind. We only collect minimal information necessary to provide our airdrop monitoring service:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Public wallet addresses you choose to monitor</li>
                  <li>Basic usage analytics to improve our service</li>
                  <li>Email address (optional) for notifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">What We Don't Collect</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Private keys or seed phrases</li>
                  <li>Personal identification information</li>
                  <li>Transaction history beyond public blockchain data</li>
                  <li>Browser passwords or sensitive data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the collected information solely to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Monitor airdrop eligibility for your wallet addresses</li>
                  <li>Send notifications about airdrop opportunities</li>
                  <li>Improve our service functionality</li>
                  <li>Provide customer support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data. All communications are encrypted, and we never store sensitive information like private keys.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us through our official Twitter or Discord channels.
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

export default PrivacyPolicy;