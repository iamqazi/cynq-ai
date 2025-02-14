"use client";
import { useEffect, useRef } from "react";
import FAQSection from "../components/faq";
import FutureOfAi from "../components/future-of-ai";
import { SecondaryHero } from "../components/hero-section";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";
import Articles from "../components/article";
import { keyBenefitsArticles } from "../types/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PredictiveAi() {
  // Reference for the paragraph text
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Use GSAP context for clean scoping and cleanup
    const ctx = gsap.context(() => {
      // Get the current text content
      const content = textRef.current?.textContent || "";
      const words = content.split(" ");

      // Clear the current content
      if (textRef.current) {
        textRef.current.textContent = "";

        // Create and append spans for each word
        words.forEach((word, index) => {
          const span = document.createElement("span");
          span.className = "word";
          span.style.color = "#5b5a5a4f";
          span.style.display = "inline-block";
          span.textContent = word;

          textRef.current?.appendChild(span);

          // Add a space after each word (except the last one)
          if (index < words.length - 1) {
            textRef.current?.appendChild(document.createTextNode(" "));
          }
        });

        // Select all word spans and animate them
        const wordSpans = textRef.current.querySelectorAll(".word");

        // Create a timeline for better control
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5, // Smoother scrubbing for better back-and-forth
            toggleActions: "play reverse play reverse", // This makes it reverse when scrolling back
          },
        });

        // Add the color animation to the timeline
        tl.fromTo(
          wordSpans,
          { color: "#5b5a5a4f" },
          { color: "white", stagger: 0.05, duration: 1 }
        );
      }
    }, textRef); // Scope the context to the text ref

    // Clean up the context when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-black">
      <Navbar />
      <SecondaryHero
        text={
          "The CYNQAi Decentralized Predictive AI is a groundbreaking AI-driven forecasting system that provides real-time crypto price predictions, market risk assessments, and investment insights."
        }
        btnText="audit"
        heading="Decentralized /~*{~}Predictive AI<br/>{~}/~*for Crypto Predictions"
      />
      <p
        ref={textRef}
        className="heading-md my-5 text-[33px] leading-[39px] max-w-[1186px] md:px-24 px-5 mx-auto"
      >
        Unlike traditional data oracles that only relay historical and real-time
        data, CYNQAi&apos;s AI-powered prediction engine analyzes on-chain
        transactions, social sentiment, liquidity movements, and technical
        indicators to forecast future price trends and market behaviors.
      </p>
      <Articles
        articles={keyBenefitsArticles}
        heading="Key Benefits of CYNQ Predictive AI"
        benefits={true}
        benefitsText="CYNQ's Decentralized Predictive AI is designed to enhance
            crypto trading, DeFi investment, DAO governance, and NFT markets by
            leveraging machine learning, real-time data processing, and
            blockchain analytics. Below are the core benefits that set CYNQ
            apart as a next-generation AI-powered predictive tool."
      />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
