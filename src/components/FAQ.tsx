import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LazyReveal } from "@/components/LazyReveal";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is DropX and how does it help with BSC airdrops?",
    answer: "DropX is a specialized BNB Smart Chain airdrop discovery tool that searches your wallet to find airdrops you're eligible for but may have missed. We analyze your BSC transaction history and current holdings to identify unclaimed opportunities."
  },
  {
    question: "Why focus only on BNB Smart Chain instead of multiple blockchains?",
    answer: "By specializing in BSC, we can provide deeper, more accurate analysis of the BNB ecosystem. We understand BSC-specific protocols, DeFi patterns, and airdrop mechanics better than generic multi-chain tools, leading to more discoveries."
  },
  {
    question: "How does DropX find airdrops I'm eligible for?",
    answer: "We analyze your BSC wallet's transaction history, token holdings, DeFi interactions, and participation in various protocols. Our algorithm cross-references this data with hundreds of BSC projects that have conducted or announced airdrops."
  },
  {
    question: "What types of BSC airdrops does DropX discover?",
    answer: "We find various BSC airdrop types including PancakeSwap ecosystem rewards, DeFi protocol distributions, GameFi token airdrops, BSC infrastructure rewards, early user bonuses, and liquidity provider incentives across the BNB Smart Chain."
  },
  {
    question: "Do you access my private keys or funds on BSC?",
    answer: "Never! DropX only reads public BNB Smart Chain transaction data using your wallet address. We never ask for or have access to your private keys, seed phrases, or funds. Your BSC assets remain completely secure."
  },
  {
    question: "How accurate is DropX in finding BSC airdrop eligibility?",
    answer: "Our BSC-focused approach allows for high accuracy. We maintain direct integrations with major BSC protocols and use verified smart contract data. While we aim for 95%+ accuracy, we always recommend verifying on official project sites before claiming."
  },
  {
    question: "Can I check multiple BSC wallets with DropX?",
    answer: "Yes! You can check multiple BNB Smart Chain wallet addresses in one scan. This is useful if you have separate wallets for different BSC activities like DeFi, gaming, or trading."
  },
  {
    question: "What happens if I find airdrops I'm eligible for?",
    answer: "DropX provides detailed claiming instructions for each discovered airdrop, including direct links to official claim pages, step-by-step guides, and deadline information. You claim directly from the project's official interface."
  },
  {
    question: "How often should I check for new BSC airdrops?",
    answer: "New BSC projects launch regularly, so we recommend checking monthly. Major airdrops often have claim periods of 30-90 days, giving you time to claim once discovered. Set reminders to check periodically."
  },
  {
    question: "Does DropX work with BSC DeFi protocols like PancakeSwap?",
    answer: "Absolutely! DropX specializes in BSC DeFi including PancakeSwap, Venus, Alpaca Finance, Belt Finance, and many others. If you've provided liquidity, traded, or participated in BSC DeFi, you may have unclaimed rewards."
  },
  {
    question: "Is DropX free to use for BSC airdrop discovery?",
    answer: "Yes! Basic BSC airdrop discovery is completely free. We believe everyone should be able to find their eligible airdrops without paying fees. Advanced features like detailed analytics may be premium in the future."
  },
  {
    question: "How do I get started with DropX?",
    answer: "Simply enter your BNB Smart Chain wallet address and click 'Search'. We'll immediately scan your BSC activity and provide a detailed report of all airdrops you're eligible for, complete with claiming instructions."
  }
];

export const FAQ = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setQuestion("");
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <section id="faq" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about DropX and BNB Smart Chain airdrop discovery
            </p>
          </div>
        </LazyReveal>

        <div className="max-w-4xl mx-auto">
          <LazyReveal delay={100}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-card border-border px-6 py-2 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </LazyReveal>
        </div>

        {/* Contact Section */}
        <LazyReveal delay={200}>
          <div className="mt-16 text-center">
            <div className="glass-card border-border p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Ask us anything about DropX and BSC airdrop discovery
              </p>
              
              {submitted ? (
                <div className="text-green-500 text-lg font-medium py-4">
                  ✓ Submitted
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question here..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </LazyReveal>
      </div>
    </section>
  );
};