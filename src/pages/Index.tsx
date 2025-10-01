import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Statistics } from "@/components/Statistics";
import { SupportedTokens } from "@/components/SupportedTokens";
import { CallToAction } from "@/components/CallToAction";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BlogNews } from "@/components/BlogNews";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <HowItWorks />
      <SupportedTokens />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <BlogNews />
      <Footer />
    </main>
  );
};

export default Index;
