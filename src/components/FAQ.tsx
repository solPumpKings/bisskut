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
    question: "What is AsterDrop and how does it work?",
    answer: "AsterDrop is a free airdrop monitoring service that tracks potential airdrops across multiple blockchains. It monitors your wallet addresses for eligibility and sends you notifications when new airdrop opportunities become available."
  },
  {
    question: "Is AsterDrop really free to use?",
    answer: "Yes! AsterDrop is completely free to use. We believe everyone should have access to airdrop opportunities without paying fees. There are no hidden costs or subscription requirements."
  },
  {
    question: "What wallets and blockchains are supported?",
    answer: "AsterDrop supports major blockchains including Ethereum, Arbitrum, Optimism, Polygon, Solana, and more. You can connect multiple wallet addresses and we'll monitor them all for airdrop eligibility."
  },
  {
    question: "Do you have access to my private keys or funds?",
    answer: "Never! AsterDrop only monitors public blockchain data using your wallet addresses. We never ask for or have access to your private keys, seed phrases, or funds. Your assets remain completely under your control."
  },
  {
    question: "What types of airdrops does AsterDrop track?",
    answer: "We track various types of airdrops including protocol launches, governance token distributions, retroactive rewards, testnet incentives, and ecosystem airdrops. Our focus is on legitimate, high-value opportunities."
  },
  {
    question: "How quickly will I be notified about new airdrops?",
    answer: "Our system monitors opportunities in real-time and typically sends notifications within minutes of detecting new airdrop eligibility or announcements. You can customize notification preferences for different types of opportunities."
  },
  {
    question: "Can I customize which airdrops I want to track?",
    answer: "Yes! You can set preferences for different blockchain networks, project types, and minimum estimated values. This helps filter notifications to only the opportunities that interest you most."
  },
  {
    question: "What happens if I miss an airdrop notification?",
    answer: "No worries! Your dashboard maintains a complete history of all detected opportunities, including those you may have missed. Many airdrops have claim periods lasting weeks or months."
  },
  {
    question: "How do I actually claim airdrops once notified?",
    answer: "AsterDrop provides monitoring and notifications. When eligible for an airdrop, you'll receive detailed instructions on how to claim it, including links to official claim pages and step-by-step guides."
  },
  {
    question: "I still have a question that isn't answered here",
    answer: "No problem! You can reach out to our support team through email. We're always happy to help and answer any specific questions about AsterDrop or airdrop opportunities."
  },
  {
    question: "How can I send a custom question or feedback?",
    answer: "You can send us your questions, feedback, or suggestions through our contact form or by reaching out to our support team. We welcome all inquiries and strive to respond promptly to help improve your airdrop monitoring experience."
  },
  {
    question: "Will you add premium features in the future?",
    answer: "We may introduce optional premium features like advanced analytics, API access, or priority support, but core airdrop monitoring will always remain free for everyone."
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
              Everything you need to know about AsterDrop and airdrop monitoring
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
                Ask us anything about AsterDrop
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