import Image from "next/image";
import React from "react";

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

const Roadmap = ({ data = dummyData }) => {
  return (
    <div className="container mx-auto mt-4 px-4 py-8">
      <h1 className="text-[56px] text-white font-[500] text-center mb-8">
        RoadMap
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md mx-auto md:max-w-none rounded-3xl"
          >
            <div
              style={{
                background: " radial-gradient(circle at -20%, #542887, #000 )",
              }}
              className="h-auto lg:h-[352px] xl:h-[450px] w-full xl:w-[300px] rounded-[2rem] border-[1px] border-white/30  px-4 md:px-6 py-5 text-left"
            >
              <div className="gap-2 md:gap-4">
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
  );
};

export default Roadmap;
