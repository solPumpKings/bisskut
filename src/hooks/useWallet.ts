import { useState, useEffect } from "react";

// Extend Window interface to include ethereum and solana
declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
    phantom?: any;
  }
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  isConnecting: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    isConnecting: false,
    error: null,
  });

  const connectWallet = async () => {
    setWallet(prev => ({ ...prev, isConnecting: true, error: null }));
    
    try {
      // Check if Phantom wallet is available
      if (typeof window.solana !== 'undefined' && window.solana.isPhantom) {
        // Use Phantom wallet for Solana
        const response = await window.solana.connect();
        
        if (response.publicKey) {
          setWallet({
            isConnected: true,
            address: response.publicKey.toString(),
            isConnecting: false,
            error: null,
          });
          
          // Store connection status
          localStorage.setItem('walletConnected', 'true');
          localStorage.setItem('walletAddress', response.publicKey.toString());
        }
      } else if (typeof window.ethereum !== 'undefined') {
        // Fallback to MetaMask for Ethereum
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts.length > 0) {
          setWallet({
            isConnected: true,
            address: accounts[0],
            isConnecting: false,
            error: null,
          });
          
          // Store connection status
          localStorage.setItem('walletConnected', 'true');
          localStorage.setItem('walletAddress', accounts[0]);
        }
      } else {
        throw new Error('Please install Phantom wallet');
      }
    } catch (error: any) {
      setWallet(prev => ({
        ...prev,
        isConnecting: false,
        error: error.message || 'Failed to connect wallet',
      }));
    }
  };

  const disconnectWallet = () => {
    setWallet({
      isConnected: false,
      address: null,
      isConnecting: false,
      error: null,
    });
    
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
  };

  // Check for existing connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      const wasConnected = localStorage.getItem('walletConnected') === 'true';
      const storedAddress = localStorage.getItem('walletAddress');
      
      if (wasConnected && storedAddress) {
        try {
          // Check Phantom first
          if (typeof window.solana !== 'undefined' && window.solana.isPhantom) {
            const response = await window.solana.connect({ onlyIfTrusted: true });
            if (response.publicKey && response.publicKey.toString() === storedAddress) {
              setWallet({
                isConnected: true,
                address: response.publicKey.toString(),
                isConnecting: false,
                error: null,
              });
              return;
            }
          }
          
          // Fallback to MetaMask
          if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({
              method: 'eth_accounts',
            });
            
            if (accounts.length > 0 && accounts[0] === storedAddress) {
              setWallet({
                isConnected: true,
                address: accounts[0],
                isConnecting: false,
                error: null,
              });
              return;
            }
          }
          
          // Clear invalid stored data
          localStorage.removeItem('walletConnected');
          localStorage.removeItem('walletAddress');
        } catch (error) {
          console.error('Error checking wallet connection:', error);
          // Clear invalid stored data
          localStorage.removeItem('walletConnected');
          localStorage.removeItem('walletAddress');
        }
      }
    };

    checkConnection();
  }, []);

  return {
    ...wallet,
    connectWallet,
    disconnectWallet,
  };
};