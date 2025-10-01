import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import { useState } from "react";
import { DownloadModal } from "@/components/DownloadModal";

interface EligibilityCheckerProps {
  walletAddress: string;
}

export const EligibilityChecker = ({ walletAddress }: EligibilityCheckerProps) => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  // Always set eligibility checked flag
  localStorage.setItem('eligibilityChecked', 'true');

  return (
    <div className="space-y-4">
      {/* Simple Status Display */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <span className="text-2xl font-bold text-green-500">Eligible</span>
        </div>
        <Button 
          onClick={() => setShowDownloadModal(true)}
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
      
      <p className="text-center text-sm text-muted-foreground">
        Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
      </p>
      
      {/* Download Modal */}
      <DownloadModal 
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        extensionLink="https://youtube.com"
      />
    </div>
  );
};