"use client";
import { useEffect, useState } from "react";
import FutureOfAi from "../components/future-of-ai";
import About from "../components/about";
import FAQSection from "../components/faq";
import HeroSection from "../components/hero-section";
import Utilities from "../components/utilities";
import Footer from "../components/shared/footer";
import DevelopmentProcess from "../components/roadmap-animation";
import Navbar from "../components/shared/navbar";
import BuiltOn from "../components/built-on";
import BannerAnimation from "../components/banner-slider";
import Image from "next/image";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    // Ensure the GIF has enough time to load (9 seconds)
    const timer = setTimeout(() => {
      if (gifLoaded) setLoading(false);
    }, 10000);

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
      <section className="max-w-[1440px] mx-auto">
        <Navbar />
        <HeroSection />
        <BannerAnimation />
        <About />
        <DevelopmentProcess />
        <Utilities />
        <FAQSection />
        <BuiltOn />
        <FutureOfAi />
        <Footer />
      </section>
    </div>
  );
}
