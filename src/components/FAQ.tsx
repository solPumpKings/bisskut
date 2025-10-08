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
    answer: "We analyze your BSC wallet's transaction history, token holdings, DeFi interactions, and participation in various protocols. Our algorithm cross-references this data with BSC projects that have conducted or announced airdrops."
  },
  {
    question: "Do you access my private keys or funds on BSC?",
    answer: "Never! DropX only reads public BNB Smart Chain transaction data using your wallet address. We never ask for or have access to your private keys, seed phrases, or funds. Your BSC assets remain completely secure."
  },
  {
    question: "Is DropX free to use for BSC airdrop discovery?",
    answer: "Yes! Basic BSC airdrop discovery is completely free. We believe everyone should be able to find their eligible airdrops without paying fees."
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
    <section id="faq" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <LazyReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about DropX and BNB Smart Chain airdrop discovery
            </p>
          </div>
        </LazyReveal>

        <div className="max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};