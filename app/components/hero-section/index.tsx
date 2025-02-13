"use client";
import React, { useEffect, useState } from "react";
import CryptoPurchaseUI from "../shared/hero-container";
import { Button } from "@nextui-org/react";
import Image from "next/image";
// import OrbitalBackground from "./OrbitalBackground";
import CircularPathAnimation from "./OrbitalBackground";
import AnimatedBackground from "./start";
import { ShieldHalf } from "lucide-react";
import { motion } from "framer-motion";

const rotatingTexts = [
  "AI Predictions",
  "AI Trading",
  "AI Arbitrage",
  "AI Tax Tool",
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[90vh] relative">
      <Image
        src={"Background.svg"}
        alt="img"
        width={100}
        height={100}
        className="absolute inset-0 z-0 top-10 pointer-events-none w-full h-full"
      />
      <div className="w-full z-90 relative overflow-hidden">
        <CircularPathAnimation />
        <AnimatedBackground />

        {/* Main Content */}
        <div className="flex items-center justify-center text-white  py-8 mt-[34px] lg:py-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8  mx-[24px]  w-full">
            {/* Left Side Content */}
            <div className="flex flex-col text-center lg:text-left justify-center space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[78px] font-bold">
                Cynq Ai
              </h1>
              <p className="text-2xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[78px] font-semibold">
                The Future of{" "}
                <span className="relative inline-flex mr-1">
                  <motion.span
                    key={index}
                    className="text-[#7B15F8] inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {rotatingTexts[index]}
                  </motion.span>
                </span>
                <br></br>
                Crypto Automation
              </p>
              <p className="text-lg md:text-2xl lg:text-[30px] leading-normal lg:leading-[36px] text-gray-300">
                Trade Smarter. Invest Better. Automate Everything.
              </p>

              <div className="flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center gap-4 lg:gap-[28px] items-center  mt-2">
                <div className="flex gap-4">
                  <Button className="relative flex bg-[#7B15F8] w-[188px] h-[44px] rounded-[8px] items-center justify-center gap-2 px-4 py-4 text-white font-medium">
                    <Image
                      src={"/Vector.png"}
                      height={20}
                      width={15}
                      alt="img"
                    />{" "}
                    Audit
                  </Button>
                  <Button className="relative flex bg-[#fff] w-full md:w-[188px] h-[44px] rounded-[8px] items-center justify-center gap-2 px-4 py-4 text-black font-medium sm:flex md:hidden lg:hidden">
                    Stacking
                  </Button>
                </div>

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

// dynamic hero section for other pages
type secondaryHeroType = {
  text: string;
  heading: string;
  btnText: string;
};
export function SecondaryHero({ text, heading, btnText }: secondaryHeroType) {
  const headingArray = heading.split("/~*");
  const purpleTextIndex: number[] = [];
  for (let i = 0; i < headingArray.length; i++) {
    if (headingArray[i].startsWith("{~}") && headingArray[i].endsWith("{~}")) {
      purpleTextIndex.push(i);
    }
  }
  return (
    <section
      className={`bg-[url('/boxes.png')] min-h-screen bg-cover bg-no-repeat bg-bottom w-full flex flex-col text-center items-center justify-center gap-3 md:gap-6 py-12 md:py-16 lg:pt-32 lg:pb-20 `}
    >
      <h2 className={` heading-xl sm:max-w-[900px] max-w-[400px] text-white `}>
        {headingArray.map((str, ind) => {
          let br = false;
          let string = str;
          if (str.includes("<br/>")) {
            br = true;
            string = str.replaceAll("<br/>", "");
          }
          // if text should be purple
          if (purpleTextIndex.includes(ind)) {
            return (
              <span key={ind}>
                <span className="text-[#936DFF]">
                  {string.replaceAll("{~}", "")}
                </span>
                {br && <br />}
              </span>
            );
          }
          return (
            <span key={ind}>
              {string}
              {br && <br />}
            </span>
          );
        })}
        <br />
      </h2>
      <p className="text-[#C5C6C5] font-thin sm:text-lg sm:max-w-[700px] max-w-[400px] mx-10">
        {text}
      </p>
      {btnText && (
        <Button className="relative flex bg-[#7B15F8] rounded-[8px] items-center justify-center gap-2 sm:py-2 py-1 sm:px-10 px-5 shadow-[0px_0px_80px_#9B4BFC] text-white font-medium capitalize">
          <ShieldHalf />
          {btnText}
        </Button>
      )}
    </section>
  );
}
