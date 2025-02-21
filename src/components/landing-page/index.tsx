"use client";
import { useEffect, useState } from "react";
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
import Image from "next/image";
import MarqueeBanner from "../banner";
import Roadmap from "../roadmap";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (gifLoaded) setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [gifLoaded]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Image
          src={"/optimize.gif"}
          alt="Loading..."
          width={500}
          height={500}
          priority
          onLoadingComplete={() => setGifLoaded(true)}
        />
      </div>
    );
  }

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
