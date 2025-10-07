import { X, ExternalLink, CheckCircle } from "lucide-react";
import { SupportedWallet } from "@/hooks/useWallet";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallets: SupportedWallet[];
  onConnectWallet: (walletId: string) => void;
  isConnecting: boolean;
  error?: string | null;
}

export const WalletModal = ({ 
  isOpen, 
  onClose, 
  wallets, 
  onConnectWallet, 
  isConnecting,
  error 
}: WalletModalProps) => {
  if (!isOpen) return null;

  const installedWallets = wallets.filter(w => w.installed);
  const notInstalledWallets = wallets.filter(w => !w.installed);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Connect Wallet</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              disabled={isConnecting}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-600 dark:text-red-400 text-sm">
              <strong>⚠️ Error:</strong> {error}
            </div>
          )}

          {/* BSC Focus Message */}
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              <strong>🟡 BSC Focused:</strong> DropX specializes in BNB Smart Chain airdrops. 
              For best results, use MetaMask, Trust Wallet, or Binance Chain Wallet.
            </p>
          </div>

          {/* Available Wallets */}
          {installedWallets.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Available Wallets ({installedWallets.length} detected)
              </h3>
              {installedWallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => onConnectWallet(wallet.id)}
                  disabled={isConnecting}
                  className="w-full flex items-center gap-4 p-4 border border-green-500/20 bg-green-500/5 rounded-lg hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="text-2xl">{wallet.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-green-600 dark:text-green-400">{wallet.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {wallet.type === 'evm' ? 'BSC Compatible • Detected' : 'Solana Network • Detected'}
                    </div>
                  </div>
                  <div className="text-sm text-green-500 font-medium flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    {isConnecting ? 'Connecting...' : 'Connect'}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Install Required Wallets */}
          {notInstalledWallets.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Install a Wallet ({notInstalledWallets.length} available)
              </h3>
              <div className="text-sm text-muted-foreground mb-3">
                These wallets are not detected. Install one to connect:
              </div>
              {notInstalledWallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="w-full flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-muted/30 transition-all duration-200"
                >
                  <div className="text-2xl opacity-60">{wallet.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-muted-foreground">{wallet.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {wallet.type === 'evm' ? 'BSC Compatible • Not Installed' : 'Solana Network • Not Installed'}
                    </div>
                  </div>
                  <a
                    href={wallet.installUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90 transition-colors"
                  >
                    Install
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* No Wallets Message */}
          {installedWallets.length === 0 && (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-lg font-semibold mb-2">No Wallets Found</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Install a compatible wallet to connect and discover BSC airdrops.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">Recommended for BSC:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {notInstalledWallets.filter(w => w.type === 'evm').map(wallet => (
                    <a
                      key={wallet.id}
                      href={wallet.installUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors"
                    >
                      {wallet.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security Notice */}
          <div className="mt-6 p-3 bg-muted/30 rounded text-xs text-muted-foreground">
            <strong>🔒 Security:</strong> DropX only reads public blockchain data. 
            We never access your private keys or request sensitive information.
          </div>
        </div>
      </div>
    </div>
  );
};