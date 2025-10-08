import { Button } from "@/components/ui/button";
import { LazyReveal } from "@/components/LazyReveal";
import { Twitter, Download } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "@/components/DownloadModal";

export const CallToAction = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <section className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get <span className="gradient-text">DropX</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download our browser extension to start discovering BSC airdrop opportunities.
              </p>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowDownloadModal(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Extension
              </button>
              
              <a 
                href="https://x.com/bnbDropX" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:bg-primary/10 rounded-lg font-medium transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Follow on X
              </a>
            </div>

            {/* Security Notice */}
            <div className="mt-8 glass-card border-border p-5 rounded-lg max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <h3 className="font-semibold">Completely Safe & Secure</h3>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Our extension only monitors public BSC blockchain data. We never access your private keys or personal information.
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