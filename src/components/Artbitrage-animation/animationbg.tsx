"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

const ArtbitrageKeyFeaturesBg = () => {
  const t = useTranslations("");
  gsap.registerPlugin(ScrollTrigger);
  const dummyData = [
    {
      heading: t("ai_arbitrage_heading"),
      text: t("ai_arbitrage_text"),
      points: [
        `Real-Time Price Scanning – AI constantly tracks price
   movements across multiple blockchains.`,
        `Liquidity & Slippage Analysis – AI ensures that trades
      execute with minimal price impact.`,
        `Multi-Chain Data Integration – Works across Ethereum,
  BSC, Solana, Avalanche, and Layer 2 networks.`,
      ],
    },
    {
      heading: t("execution_heading"),
      text: t("execution_text"),
      points: [
        `High-Frequency Trading Execution – AI executes trades at lightning-fast speeds to capture price gaps.`,
        `Smart Contract-Based Automation – Eliminates manual trade execution delays.`,
        `AI-Optimized Gas Fee Reduction – AI routes transactions through the cheapest and fastest blockchain pathways.`,
      ],
    },
    {
      heading: t("risk_heading"),
      text: t("risk_text"),
      points: [
        `Slippage & Market Impact Prevention – AI ensures optimal trade sizing to avoid losses.`,
        `Front-Running Protection – AI monitors network activity to prevent bots from copying trade transactions.`,
        `Flash Loan Arbitrage Support – Executes zero-capital arbitrage opportunities using DeFi flash loans.`,
      ],
    },
  ];
  useEffect(() => {
    gsap.to(".dep-left", {
      top: 0,
      scrollTrigger: {
        trigger: ".dep-trigger",
        pin: true,
        start: "top top",
        end: `+=${dummyData.length * 600}px`,
        toggleActions: "play none none reverse",
      },
    });

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
      cards.forEach((card) => gsap.killTweensOf(card));
    };
  }, [dummyData.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto mb-10">
      <div className="dep-trigger flex flex-col h-fit items-center  bg-black text-white relative z-[1]">
        <div className="flex  items-center  px-10 lg:mb-10">
          <h2 className="xl:text-5xl md:text-4xl text-3xl sm:font-medium font-semibold text-white pb-10 max-w-[850px] ">
            {t("KeyFeatures")}
          </h2>
          <Image
            src={"/arbitragekey.svg"}
            alt="logo"
            height={300}
            width={300}
            className=" xl:w-[300px] lg:w-[270px] md:w-[250px] w-[200px] sm:block hidden xl:translate-x-20 translate-x-10 "
          />
        </div>
        <div className="w-full mx-auto lg:px-0 px-4 md:px-6 flex flex-col gap-x-[4rem] md:flex-row justify-center ">
          <div className="flex flex-col items-center relative top-2/4">
            <span className=" w-5 h-5 bg-[#7B15F8] rounded-[50%] "></span>
            <span className="w-[2px] h-[300px] bg-gradient-to-b from-[#7B15F8] via-[#7B15F8] to-transparent"></span>
          </div>
          <div className="relative z-[1] w-[75%]">
            {dummyData.map((item, index) => (
              <div
                key={index}
                className={`dep-card absolute flex w-full flex-col shadow-dev-card `}
                style={{
                  top: `${index * 40}rem`,
                }}
              >
                <div className="overflow-hidden border z-[1] relative rounded-lg border-white/15">
                  <Image
                    src={"/bgforkeyfeature.png"}
                    fill
                    alt="background image"
                    className="absolute z-0 w-full h-full bg-center bg-cover"
                  />
                  <div className="absolute top-0 left-1.5 text-9xl text-white/15 font-bold">
                    0{index + 1}
                  </div>
                  <div className="relative z-[1] p-10 flex font-medium flex-col gap-5">
                    <h3 className="text-white font-semibold heading-md lg:text-4xl">
                      {item.heading}
                    </h3>
                    <p className="text-white/70">{item.text}</p>
                    <ul className="text-white/70 list-disc pl-4">
                      {item.points.map((point, ind) => (
                        <li key={ind}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtbitrageKeyFeaturesBg;
