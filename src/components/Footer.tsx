import { Twitter, Shield, Info, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold gradient-text">DropX</h3>
            <p className="text-sm text-muted-foreground">
              BSC airdrop discovery tool that searches your wallet for airdrops you're eligible for.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              <a 
                href="https://x.com/bnbDropX" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-all"
                aria-label="Follow DropX on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-sm">About</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#features" 
                  className="hover:text-primary transition-colors inline-block" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="hover:text-primary transition-colors inline-block" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#supported-tokens" 
                  className="hover:text-primary transition-colors inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('supported-tokens')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Supported Tokens
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="hover:text-primary transition-colors inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-sm">Security</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <div className="text-muted-foreground/80">
                  BSC wallet scanning only
                </div>
              </li>
              <li>
                <div className="text-muted-foreground/80">
                  Public BSC data only
                </div>
              </li>
              <li>
                <div className="text-muted-foreground/80">
                  No private key access
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-sm">Legal</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-primary transition-colors inline-block">
                  Risk Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 DropX. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 text-center md:text-right">
            BSC Airdrop Discovery Tool
          </p>
        </div>
      </div>
    </footer>
  );
};