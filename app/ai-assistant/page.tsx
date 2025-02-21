"use client";
import { useEffect, useRef } from "react";
import FAQSection from "../../components/faq";
import FutureOfAi from "../../components/future-of-ai";
import { SecondaryHero } from "../../components/hero-section";
import Footer from "../../components/shared/footer";
import Navbar from "../../components/shared/navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TradingFeatures from "./section";

// Make sure to register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIAssistant() {
  // Properly type the ref as HTMLParagraphElement
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Use a safer approach with GSAP's context to avoid TS errors with innerHTML
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

        gsap.to(wordSpans, {
          color: "white",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });
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
          "This AI-driven assistant operates 24/7, adapting to market conditions faster than human traders and eliminating emotional biases that often lead to poor trading decisions."
        }
        btnText="audit"
        heading="AI-Powered <br/> /~*{~}Crypto Trading Assistant{~}/~*"
      />
      <p
        ref={textRef}
        className="heading-md my-5 text-[19px] md:text-[25px] leading-[39px] max-w-[1186px] md:px-24 px-5 mx-auto"
      >
        CYNQAi&apos;s AI-Powered Crypto Trading Assistant is a revolutionary
        automated trading system that leverages machine learning, real-time
        market analysis, and AI-driven risk management to execute profitable,
        data-driven trades with precision. Unlike traditional trading bots that
        rely on fixed rules, CYNQAi&apos;s AI adapts to market conditions in
        real-time, ensuring traders maximize gains while minimizing risks.
      </p>
      <TradingFeatures />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
