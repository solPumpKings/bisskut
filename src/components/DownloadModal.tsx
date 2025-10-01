import { useState } from "react";
import { X, Download, CheckCircle, ExternalLink, Copy } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  extensionLink?: string;
}

export const DownloadModal = ({ isOpen, onClose, extensionLink = "https://youtube.com" }: DownloadModalProps) => {
  const [accepted, setAccepted] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    if (!accepted) return;
    
    setDownloading(true);
    setProgress(0);
    
    // Simulate 30-second download
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCompleted(true);
          return 100;
        }
        return prev + 3.33; // 100% in 30 seconds
      });
    }, 1000);
  };

  const handleClose = () => {
    setAccepted(false);
    setDownloading(false);
    setProgress(0);
    setCompleted(false);
    setCopied(false);
    onClose();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(extensionLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openWebStore = () => {
    window.open(extensionLink, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Download AsterDrop Extension</h2>
            <button 
              onClick={handleClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {completed ? (
            /* Success State */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-green-500">Download Complete!</h3>
                <p className="text-muted-foreground">
                  Your download is ready! Click the button below to access the extension.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={openWebStore}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Link
                </button>
                <button 
                  onClick={handleClose}
                  className="px-6 py-3 border border-border rounded-lg hover:border-primary/50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          ) : downloading ? (
            /* Downloading State */
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Downloading...</h3>
                  <p className="text-muted-foreground">
                    Preparing your AsterDrop extension
                  </p>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </div>
              </div>
            </div>
          ) : (
            /* Terms and Conditions */
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Terms & Conditions</h3>
                <div className="bg-muted/30 rounded-lg p-4 space-y-3 text-sm text-muted-foreground max-h-48 overflow-y-auto">
                  <p><strong>1. License Agreement:</strong> By downloading AsterDrop, you agree to use this extension for personal, non-commercial purposes only.</p>
                  
                  <p><strong>2. Privacy & Security:</strong> AsterDrop only monitors public blockchain data and never accesses your private keys, passwords, or personal information.</p>
                  
                  <p><strong>3. No Liability:</strong> AsterDrop is provided "as-is" without warranties. We are not responsible for any missed airdrops or technical issues.</p>
                  
                  <p><strong>4. Browser Permissions:</strong> The extension requires permissions to monitor blockchain networks and display notifications.</p>
                  
                  <p><strong>5. Updates:</strong> Automatic updates may be installed to improve functionality and security.</p>
                  
                  <p><strong>6. Termination:</strong> You may uninstall the extension at any time. These terms remain valid until termination.</p>
                  
                  <p><strong>7. Support:</strong> For technical support, contact us at support@asterdrop.com</p>
                </div>
              </div>

              {/* Acceptance Checkbox */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="accept-terms"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <label htmlFor="accept-terms" className="text-sm text-muted-foreground">
                  I agree to the Terms & Conditions and Privacy Policy. I understand that AsterDrop is a free tool for monitoring airdrop opportunities.
                </label>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={!accepted}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  accepted 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                <Download className="w-5 h-5" />
                Download Extension
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};