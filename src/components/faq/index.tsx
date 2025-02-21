"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: string;
  question: string;
  ans: string;
}

const FAQSection: React.FC = () => {
  const [openedFaq, setOpenedFaq] = useState<string>("");
  const faqRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("faqs");
  const FAQsArray: FAQItem[] = [
    {
      id: "9199",
      question: t("0.question"),
      ans: t("0.ans"),
    },
    {
      id: "9198",
      question: t("1.question"),
      ans: t("1.ans"),
    },
    {
      id: "9197",
      question: t("2.question"),
      ans: t("2.ans"),
    },
    {
      id: "9196",
      question: t("3.question"),
      ans: t("3.ans"),
    },
    {
      id: "9195",
      question: t("4.question"),
      ans: t("4.ans"),
    },
    {
      id: "9190",
      question: t("5.question"),
      ans: t("5.ans"),
    },
  ];

  useEffect(() => {
    if (!faqRef.current) return;

    // Select all the FAQ items within our section
    const faqItems = faqRef.current.querySelectorAll(".faq-item");

    // Animate each item from opacity 0 and y offset to full opacity and original position
    gsap.fromTo(
      faqItems,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section
      ref={faqRef}
      className="mx-auto max-w-[800px] sm:py-14 py-8 px-2 sm:px-5 text-white relative z-0"
      aria-label="Frequently Asked Questions"
    >
      <Image
        src="/faqGrid.png"
        alt="background image"
        width={800}
        height={640}
        className="absolute z-[0] top-0 left-0 -translate-y-[40%] opacity-50"
      />
      {/* Section Title */}
      <h1 className="faq-item lg:text-5xl md:text-4xl text-3xl font-medium text-center text-white ">
        FAQ
      </h1>
      {/* FAQ Items */}
      <div className="faq-item flex flex-col sm:px-10 px-5 gap-3 my-5 md:my-10">
        {FAQsArray.map((FAQ) => (
          <Question
            key={FAQ.id}
            {...FAQ}
            openedFaq={openedFaq}
            setOpenedFaq={setOpenedFaq}
          />
        ))}
      </div>
    </section>
  );
};

interface QuestionProps {
  id: string;
  question: string;
  ans: string;
  openedFaq: string;
  setOpenedFaq: React.Dispatch<React.SetStateAction<string>>;
}

export function Question({
  id,
  question,
  ans,
  openedFaq,
  setOpenedFaq,
}: QuestionProps) {
  const [height, setHeight] = useState<number>(0);
  const answerRef = useRef<HTMLParagraphElement>(null);

  // Calculate and update the height of the answer content when opened or when content changes
  useEffect(() => {
    if (answerRef.current) {
      const calculatedHeight = Math.ceil(
        answerRef.current.getBoundingClientRect().height + 40
      );
      setHeight(calculatedHeight);
    }
  }, [ans, openedFaq]);

  return (
    <article className="faq-item relative text-white">
      <div
        className="absolute w-full h-full z-[-10] bg-[#333333] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 box-content p-[1px] rounded-lg"
        style={{
          backgroundImage: `linear-gradient(130deg , #ffffff26 15% , #ffffffbe 25%, #ffffff26 37%)`,
        }}
      ></div>
      <div
        className="relative z-[1] 
    bg-gradient-to-br from-[#190D2E] to-[#000000] rounded-lg "
      >
        <header
          className="grid grid-cols-[1fr_45px] md:grid-cols-[1fr_65px] pl-3 sm:pl-6"
          id={`faq-question-${id}`}
        >
          {/* Use a heading element for the question */}
          <h2 className="p-4 pl-0 text-sm md:text-base text-white/70">
            {question}
          </h2>
          <button
            onClick={
              openedFaq !== id ? () => setOpenedFaq(id) : () => setOpenedFaq("")
            }
            className="flex justify-center items-center relative"
            aria-expanded={openedFaq ? true : false}
            aria-controls={`faq-answer-${id}`}
            aria-label={`Toggle answer for: ${question}`}
          >
            {/* Horizontal Bar */}
            <span
              aria-hidden="true"
              className="transition-all duration-500 w-[12px]  h-[1px] block bg-[#A3A5A6] group-hover:bg-[#d4d5d5]"
            ></span>
            {/* Vertical Bar */}
            <span
              aria-hidden="true"
              className={`absolute transition-all duration-500 w-[12px]  h-[1px] bg-[#A3A5A6] group-hover:bg-[#d4d5d5] ${
                openedFaq == id ? "bg-[#d4d5d5]" : "rotate-90"
              }`}
            ></span>
          </button>
        </header>

        <section
          id={`faq-answer-${id}`}
          role="region"
          aria-labelledby={`faq-question-${id}`}
          className="transition-all overflow-hidden"
          style={{
            height: openedFaq == id ? `${height}px` : "0px",
            transitionDuration: `${200 + height * 2}ms`,
          }}
        >
          <p
            ref={answerRef}
            className="pl-3 sm:pl-6 pr-6 md:w-[90%] font-thin text-sm md:text-base text-white/70"
          >
            {ans}
          </p>
        </section>
      </div>
    </article>
  );
}

export default FAQSection;
