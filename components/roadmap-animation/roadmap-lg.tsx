"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const dummyData = [
  {
    heading: "Q1 2025",
    points: [
      "Predictive AI Development & Testing",
      "Blockchain & Predictive AI Smart Contracts Deployment",
      "Predictive AI Beta Testing & Staking Program",
      "Predictive AI Deployment",
      "Public Predictive AI Launch",
    ],
  },
  {
    heading: "Q2 2025",
    points: [
      "AI Model Development & Training",
      "Infrastructure & Smart Contracts",
      "Beta Testing & Security Audits",
      "Public Release of AI Trading Assistant",
      "AI Trading Beta Launch",
    ],
  },
  {
    heading: "Q3 2025",
    points: [
      "Arbitrage Algorithm & AI Model Training",
      "Multi-Chain Arbitrage Smart Contracts Deployment",
      "Public Beta Testing & Liquidity Optimization",
      "Public Arbitrage Bot Launch & Profit-Sharing Model",
      "AI-Optimized Cross-Chain Arbitrage Bot",
    ],
  },
  {
    heading: "Q4 2025",
    points: [
      "Investment DAO & Tax Optimization Tool",
      "Governance & Staking Launch",
      "AI Investment Strategy & Portfolio Automation",
      "AI Tax Optimization Tool Beta Release",
      "Full Public Launch of Investment DAO & Tax Tool",
      "AI Trading Beta Launch",
    ],
  },
];

const DevelopmentProcessLg = ({ data = dummyData }) => {
  gsap.registerPlugin(ScrollTrigger);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(".dep-left", {
      top: 0,
      scrollTrigger: {
        trigger: ".dep-trigger",
        pin: true,
        start: "top top",
        end: `+=${data.length * 600}px`,
        toggleActions: "play none none reverse",
      },
    });

    // Animate the image
    const imageElement = imageRef.current;
    if (imageElement) {
      // Create rotating animation
      gsap.to(imageElement, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

      // Create pulsing effect
      gsap.to(imageElement, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Add hover animations directly with GSAP instead of event listeners
      const enterAnimation = gsap.to(imageElement, {
        scale: 1.1,
        duration: 0.5,
        ease: "power1.out",
        paused: true,
      });

      const leaveAnimation = gsap.to(imageElement, {
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        paused: true,
      });

      imageElement.onmouseenter = () => enterAnimation.play();
      imageElement.onmouseleave = () => leaveAnimation.play();
    }

    const cards = document.querySelectorAll(".dep-card");

    cards.forEach((card, index) => {
      gsap.to(card, {
        top: 0,
        scrollTrigger: {
          trigger: card,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          onEnter: () => {
            cards.forEach((aboveCard, aboveIndex) => {
              const offset = -(index - aboveIndex) * 50;
              gsap.to(aboveCard, {
                y: offset,
              });
            });
          },
          onLeaveBack: () => {
            cards.forEach((aboveCard, aboveIndex) => {
              const offset = -(index - aboveIndex) * 50;
              gsap.to(aboveCard, {
                y: offset,
              });
            });
          },
        },
      });
    });

    return () => {
      gsap.killTweensOf(".dep-left");
      if (imageElement) {
        gsap.killTweensOf(imageElement);
        imageElement.onmouseenter = null;
        imageElement.onmouseleave = null;
      }
      cards.forEach((card) => gsap.killTweensOf(card));
    };
  }, [data.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div
        className="dep-trigger flex h-[100vh]  items-center overflow-hidden bg-black text-white relative"
        style={{
          backgroundImage: "url('/boxes.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="absolute top-10 left-1/2 pt-[20px] transform -translate-x-1/2 text-[56px] md:text-[56px]  font-[500] text-center w-full px-4">
          Roadmap
        </h1>
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-start gap-x-[5rem] md:flex-row">
          <div className="dep-left flex h-fit w-full relative flex-[0.5] flex-col pb-[5rem]">
            <Image
              ref={imageRef}
              src={"/cyanaiPie.gif"}
              alt="img"
              height={100}
              width={100}
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute top-[-120px] md:top-[-120px] right-[20px] md:right-[50px] cursor-pointer"
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <div className="relative flex-[0.5] w-full">
            {data.map((item, index) => (
              <div
                key={index}
                className={`dep-card absolute flex w-full flex-col rounded-3xl shadow-dev-card`}
                style={{
                  top: `${index * 40}rem`,
                }}
              >
                <div className="h-auto w-full rounded-[2rem] relative top-0px bg-black px-4 md:px-6 py-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h4 className="text-[24px] md:text-[36px] font-[700] font-metro-semi-bold text-white">
                      {item.heading}
                    </h4>

                    <span
                      className={`px-4 py-1 font-[700] rounded-full text-[14px] md:text-[16px] w-fit ${
                        index === 0
                          ? "bg-yellow-500 text-black"
                          : "bg-gray-400 text-black"
                      }`}
                    >
                      {index === 0 ? " IN PROGRESS" : "TO DO"}
                    </span>
                  </div>
                  <ul className="py-4 md:py-6 text-sm md:text-base text-white space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Image
                          src={idx < 3 ? "/unfilled.svg" : "/unfilled.svg"}
                          alt="Tick Icon"
                          height={20}
                          width={20}
                          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                        />
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcessLg;
