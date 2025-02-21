"use client";
import { useEffect, useRef } from "react";
import FAQSection from "../../../components/faq";
import FutureOfAi from "../../../components/future-of-ai";
import { SecondaryHero } from "../../../components/hero-section";
import Footer from "../../../components/shared/footer";
import Navbar from "../../../components/shared/navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TradingFeatures from "./section";
import { useTranslations } from "next-intl";

// Make sure to register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIAssistant() {
  // Properly type the ref as HTMLParagraphElement
  const textRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("");

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
        text={t("heroText_assistant")}
        btnText={t("auditButton")}
        heading={t("heroHeading")}
      />
      <p
        ref={textRef}
        className="heading-md my-5 text-[19px] md:text-[25px] leading-[39px] max-w-[1186px] md:px-24 px-5 mx-auto"
      >
        {t("description_assistant")}
      </p>
      <TradingFeatures />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
