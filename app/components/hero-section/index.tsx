"use client";
import React from "react";
import CryptoPurchaseUI from "../shared/hero-container";
import { Button } from "@nextui-org/react";
import Image from "next/image";
// import OrbitalBackground from "./OrbitalBackground";
import CircularPathAnimation from "./OrbitalBackground";
import AnimatedBackground from "./start";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Image
        src={"Background.svg"}
        alt="img"
        width={100}
        height={100}
        className="absolute inset-0 z-0 top-10 pointer-events-none w-full h-full"
      />
      <div className="min-h-screen w-full z-90 relative overflow-hidden">
        <CircularPathAnimation />
        <AnimatedBackground />

        {/* Rest of your existing component code remains the same */}
        <div className="flex items-center justify-center text-white px-4 py-8 mt-[100px] lg:py-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-[1440px] mx-auto xl:mx-[117px] w-full">
            {/* Left Side Content */}
            <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[78px] font-bold">
                Cynq Ai
              </h1>
              <p className="text-2xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[78px] font-semibold">
                The Future of AI-Powered Crypto Automation
              </p>
              <p className="text-lg md:text-2xl lg:text-[30px] leading-normal lg:leading-[36px] text-gray-300">
                Trade Smarter. Invest Better. Automate Everything.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[10px] mt-2">
                <Button className="relative flex bg-[#7B15F8] w-[188px] h-[44px] rounded-[8px] items-center justify-center gap-2 px-4 py-4 text-white font-medium">
                  Buy Now
                </Button>

                <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                  {["/one.png", "/second.png", "/three.png", "/last.png"].map(
                    (src, index) => (
                      <Image
                        key={index}
                        src={src}
                        alt={`icon-${index + 1}`}
                        className="w-[24px] h-[24px]"
                        width={100}
                        height={50}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Side Card */}
            <div className="w-full">
              <CryptoPurchaseUI />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
