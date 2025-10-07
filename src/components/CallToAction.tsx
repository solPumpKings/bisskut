import { Button } from "@/components/ui/button";
import { LazyReveal } from "@/components/LazyReveal";
import { Twitter, Download } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "@/components/DownloadModal";

export const CallToAction = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative">
        <LazyReveal>
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                Get <span className="gradient-text">DropX</span> Extension
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Download our browser extension to start discovering BSC airdrop opportunities. Never miss a valuable BSC airdrop again!
              </p>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowDownloadModal(true)}
                className="inline-flex items-center justify-center gap-3 text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Extension
              </button>
              
              <a 
                href="https://x.com/dropx_bsc" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-lg px-8 py-4 border-2 border-border hover:bg-primary/10 rounded-lg font-medium transition-colors"
              >
                <Twitter className="w-5 h-5" />
                Follow on Twitter
              </a>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Always free to use</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">BSC protocols tracked</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">BSC</div>
                <div className="text-sm text-muted-foreground">Specialized focus</div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-12 glass-card border-border p-6 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <h3 className="text-lg font-semibold">Completely Safe & Secure</h3>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Our extension only monitors public BSC blockchain data. We never access your private keys, passwords, or personal information.
              </p>
            </div>
          </div>
        </LazyReveal>
      </div>
      
      {/* Download Modal */}
      <DownloadModal 
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        extensionLink="https://youtube.com"
      />
    </section>
  );
};