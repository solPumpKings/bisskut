import { useState, useEffect } from "react";

// Extend Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any;
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
      // Check if wallet extension is available
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
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
        throw new Error('Please install MetaMask or another Web3 wallet');
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
      
      if (wasConnected && storedAddress && typeof window.ethereum !== 'undefined') {
        try {
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
          } else {
            // Clear invalid stored data
            localStorage.removeItem('walletConnected');
            localStorage.removeItem('walletAddress');
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
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