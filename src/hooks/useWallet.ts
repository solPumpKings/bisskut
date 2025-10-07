import { useState, useEffect } from "react";

// Extend Window interface to include various wallet providers
declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
    phantom?: any;
    coinbaseWalletExtension?: any;
    trustWallet?: any;
    binanceChain?: any;
    okexchain?: any;
  }
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  isConnecting: boolean;
  error: string | null;
  walletType: string | null;
}

export type SupportedWallet = {
  id: string;
  name: string;
  icon: string;
  installed: boolean;
  installUrl: string;
  type: 'evm' | 'solana';
};

const SUPPORTED_WALLETS: SupportedWallet[] = [
  {
    id: 'phantom',
    name: 'Phantom',
    icon: '👻',
    installed: false,
    installUrl: 'https://phantom.app/',
    type: 'solana'
  },
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    installed: false,
    installUrl: 'https://metamask.io/',
    type: 'evm'
  },
  {
    id: 'trustwallet',
    name: 'Trust Wallet',
    icon: '🛡️',
    installed: false,
    installUrl: 'https://trustwallet.com/',
    type: 'evm'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🔵',
    installed: false,
    installUrl: 'https://www.coinbase.com/wallet',
    type: 'evm'
  },
  {
    id: 'binance',
    name: 'Binance Chain Wallet',
    icon: '🟡',
    installed: false,
    installUrl: 'https://www.binance.org/en',
    type: 'evm'
  }
];

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    isConnecting: false,
    error: null,
    walletType: null,
  });

  const [availableWallets, setAvailableWallets] = useState<SupportedWallet[]>([]);
  const [showWalletModal, setShowWalletModal] = useState(false);

  // Check which wallets are installed
  const checkInstalledWallets = () => {
    const wallets = SUPPORTED_WALLETS.map(wallet => {
      let installed = false;
      
      switch (wallet.id) {
        case 'phantom':
          installed = typeof window.solana !== 'undefined' && window.solana.isPhantom;
          break;
        case 'metamask':
          installed = typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask && !window.ethereum.isTrust && !window.ethereum.isCoinbaseWallet;
          break;
        case 'trustwallet':
          installed = typeof window.ethereum !== 'undefined' && window.ethereum.isTrust;
          break;
        case 'coinbase':
          installed = typeof window.ethereum !== 'undefined' && (window.ethereum.isCoinbaseWallet || window.coinbaseWalletExtension);
          break;
        case 'binance':
          installed = typeof window.binanceChain !== 'undefined';
          break;
        default:
          installed = false;
      }
      
      return { ...wallet, installed };
    });
    
    setAvailableWallets(wallets);
    return wallets;
  };

  const connectSpecificWallet = async (walletId: string) => {
    setWallet(prev => ({ ...prev, isConnecting: true, error: null }));
    
    try {
      let address = '';
      let walletType = walletId;
      
      switch (walletId) {
        case 'phantom':
          if (typeof window.solana !== 'undefined' && window.solana.isPhantom) {
            const response = await window.solana.connect();
            if (response.publicKey) {
              address = response.publicKey.toString();
            }
          } else {
            throw new Error('Phantom wallet not installed');
          }
          break;
          
        case 'metamask':
          if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
            // Switch to BSC network for BSC-focused app
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x38' }], // BSC Mainnet
              });
            } catch (switchError: any) {
              // If BSC network is not added, add it
              if (switchError.code === 4902) {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: '0x38',
                    chainName: 'BNB Smart Chain',
                    nativeCurrency: {
                      name: 'BNB',
                      symbol: 'BNB',
                      decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com/']
                  }]
                });
              }
            }
            
            const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts',
            });
            
            if (accounts.length > 0) {
              address = accounts[0];
            }
          } else {
            throw new Error('MetaMask not installed');
          }
          break;
          
        case 'trustwallet':
          if (typeof window.ethereum !== 'undefined' && window.ethereum.isTrust) {
            const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts',
            });
            
            if (accounts.length > 0) {
              address = accounts[0];
            }
          } else {
            throw new Error('Trust Wallet not installed');
          }
          break;
          
        case 'coinbase':
          if (typeof window.ethereum !== 'undefined' && (window.ethereum.isCoinbaseWallet || window.coinbaseWalletExtension)) {
            const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts',
            });
            
            if (accounts.length > 0) {
              address = accounts[0];
            }
          } else {
            throw new Error('Coinbase Wallet not installed');
          }
          break;
          
        case 'binance':
          if (typeof window.binanceChain !== 'undefined') {
            const accounts = await window.binanceChain.request({
              method: 'eth_requestAccounts',
            });
            
            if (accounts.length > 0) {
              address = accounts[0];
            }
          } else {
            throw new Error('Binance Chain Wallet not installed');
          }
          break;
          
        default:
          throw new Error('Unsupported wallet');
      }
      
      if (address) {
        setWallet({
          isConnected: true,
          address,
          isConnecting: false,
          error: null,
          walletType,
        });
        
        // Store connection status
        localStorage.setItem('walletConnected', 'true');
        localStorage.setItem('walletAddress', address);
        localStorage.setItem('walletType', walletType);
        setShowWalletModal(false);
      }
    } catch (error: any) {
      setWallet(prev => ({
        ...prev,
        isConnecting: false,
        error: error.message || 'Failed to connect wallet',
      }));
    }
  };

  const connectWallet = async () => {
    // Clear any previous errors
    setWallet(prev => ({ ...prev, error: null }));
    
    const wallets = checkInstalledWallets();
    const installedWallets = wallets.filter(w => w.installed);
    
    if (installedWallets.length === 0) {
      setWallet(prev => ({
        ...prev,
        error: 'No compatible wallets found. Please install a supported wallet.'
      }));
    }
    
    // Always show wallet selection modal - let user choose
    setShowWalletModal(true);
  };

  const disconnectWallet = () => {
    setWallet({
      isConnected: false,
      address: null,
      isConnecting: false,
      error: null,
      walletType: null,
    });
    
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletType');
  };

  // Check for existing connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      const wasConnected = localStorage.getItem('walletConnected') === 'true';
      const storedAddress = localStorage.getItem('walletAddress');
      const storedWalletType = localStorage.getItem('walletType');
      
      if (wasConnected && storedAddress && storedWalletType) {
        try {
          let isStillConnected = false;
          
          switch (storedWalletType) {
            case 'phantom':
              if (typeof window.solana !== 'undefined' && window.solana.isPhantom) {
                const response = await window.solana.connect({ onlyIfTrusted: true });
                if (response.publicKey && response.publicKey.toString() === storedAddress) {
                  isStillConnected = true;
                }
              }
              break;
              
            case 'metamask':
            case 'trustwallet':
            case 'coinbase':
              if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({
                  method: 'eth_accounts',
                });
                
                if (accounts.length > 0 && accounts[0] === storedAddress) {
                  isStillConnected = true;
                }
              }
              break;
              
            case 'binance':
              if (typeof window.binanceChain !== 'undefined') {
                const accounts = await window.binanceChain.request({
                  method: 'eth_accounts',
                });
                
                if (accounts.length > 0 && accounts[0] === storedAddress) {
                  isStillConnected = true;
                }
              }
              break;
          }
          
          if (isStillConnected) {
            setWallet({
              isConnected: true,
              address: storedAddress,
              isConnecting: false,
              error: null,
              walletType: storedWalletType,
            });
          } else {
            // Clear invalid stored data
            localStorage.removeItem('walletConnected');
            localStorage.removeItem('walletAddress');
            localStorage.removeItem('walletType');
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
          // Clear invalid stored data
          localStorage.removeItem('walletConnected');
          localStorage.removeItem('walletAddress');
          localStorage.removeItem('walletType');
        }
      }
    };

    checkConnection();
    checkInstalledWallets();
  }, []);

  return {
    ...wallet,
    connectWallet,
    connectSpecificWallet,
    disconnectWallet,
    availableWallets,
    showWalletModal,
    setShowWalletModal,
    checkInstalledWallets,
  };
};