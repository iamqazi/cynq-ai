"use client";
import { useEffect, useRef } from "react";
import FAQSection from "../../../components/faq";
import FutureOfAi from "../../../components/future-of-ai";
import { SecondaryHero } from "../../../components/hero-section";
import Footer from "../../../components/shared/footer";
import Navbar from "../../../components/shared/navbar";
import Articles from "../../../components/article";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

// Make sure to register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
type articleType = {
  title: string;
  text: string;
};
export default function PredictiveAi() {
  // Reference for the paragraph text
  const textRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("");
  const keyBenefitsArticles: articleType[] = [
    {
      title: t("AI_Powered_Crypto_Price_Forecasting"),
      text: t("AI_Powered_Crypto_Price_Text"),
    },
    {
      title: t("Risk_Market_Trend_Analysis"),
      text: t("Risk_Market_Trend_Text"),
    },
    {
      title: t("On_Chain_Off_Chain_Data_Integration"),
      text: t("On_Chain_Off_Chain_Text"),
    },
    {
      title: t("AI_For_DeFi_DAOs_NFTs"),
      text: t("AI_For_DeFi_DAOs_NFTs_Text"),
    },
  ];
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
        text={t("heroText")}
        btnText={t("btnText")}
        heading={t("heading")}
      />
      <p
        ref={textRef}
        className="heading-md my-5 text-[19px] md:text-[25px] leading-[39px] max-w-[1186px] md:px-24 mb-[100px] px-5 mx-auto"
      >
        {t("description_predict")}
      </p>
      <Articles
        articles={keyBenefitsArticles}
        heading={t("articlesHeading")}
        benefits={true}
        benefitsText={t("benefitsText")}
      />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
