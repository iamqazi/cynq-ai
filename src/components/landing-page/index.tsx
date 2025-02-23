"use client";
import FutureOfAi from "../future-of-ai";
import About from "../about";
import FAQSection from "../faq";
import HeroSection from "../hero-section";
import Utilities from "../utilities";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import Tokenomics from "../tokenomics";
import BuiltOn from "../built-on";
import BannerAnimation from "../banner-slider";
import MarqueeBanner from "../banner";
import Roadmap from "../roadmap";

export default function LandingPage() {
  return (
    <div>
      <section className="">
        <MarqueeBanner />
        <Navbar />
        <HeroSection />
        <BannerAnimation />
        <About />
        <Utilities />
        <Roadmap />
        {/* <DevelopmentProcess /> */}
        <Tokenomics />
        <FAQSection />
        <BuiltOn />
        <FutureOfAi />
        <Footer />
      </section>
    </div>
  );
}
