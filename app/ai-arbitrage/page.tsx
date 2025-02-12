import ArbitrageKeyFeature from "../components/Artbitrage-animation";
import FAQSection from "../components/faq";
import FutureOfAi from "../components/future-of-ai";
import { SecondaryHero } from "../components/hero-section";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";

export default function AIArbitrage() {
  return (
    <main className="bg-black">
      <Navbar />
      <SecondaryHero
        text={
          "Eliminate manual monitoring and trade execution delays—let AI detect and act on cross-chain price gaps instantly!"
        }
        btnText="audit"
        heading="AI-Optimized Cross-Chain <br/> /~*{~}Arbitrage Bot{~}/~*"
      />
      <ArbitrageKeyFeature />

      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
