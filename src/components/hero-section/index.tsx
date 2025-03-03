"use client";
import React, { useEffect, useState } from "react";
import CryptoPurchaseUI from "../shared/hero-container";
import { Button } from "@nextui-org/react";
import Image from "next/image";
// import OrbitalBackground from "./OrbitalBackground";
import CircularPathAnimation from "./OrbitalBackground";
import AnimatedBackground from "./start";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    href: "https://medium.com/cynqai",
    src: "/mingcute.svg",
    alt: "Mingcute Icon",
  },
  {
    href: "https://x.com/cynqai",
    src: "/twitter.svg",
    alt: "Twitter Icon",
  },
  {
    href: "https://t.me/cynqai",
    src: "/telegram.svg",
    alt: "Telegram Icon",
  },
  {
    href: "https://linktr.ee/cynqai",
    src: "/magic.svg",
    alt: "Magic Icon",
  },
];
const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const t = useTranslations("");
  const rotatingTexts = [
    t("aiPredictions"),
    t("aiTrading"),
    t("aiArbitrage"),
    t("aiTaxTool"),
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <div className="min-h-screen relative">
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mx-[24px]  xl:mx-[150px]  w-full">
            {/* Left Side Content */}
            <div className="flex flex-col text-center lg:text-left justify-center space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight lg:leading-[78px] font-bold">
                CYNQ Ai
              </h1>
              <p className="text-2xl md:text-5xl lg:text-[55px] leading-tight lg:leading-[55px] font-semibold">
                {t("futureOfCrypto")}{" "}
                {index === 0 ? t("crypto_with") : t("crypto_with")}
                <span className="relative inline-flex mx-2">
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
              </p>

              <p className="text-md md:text-2xl lg:text-[30px] leading-normal lg:leading-[36px] text-gray-300">
                {t("tagline")}
              </p>

              <div className="flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center gap-4 lg:gap-[28px] items-center  mt-2">
                <div className="flex gap-4">
                  <Button className="relative flex bg-[#7B15F8] w-[100px] md:w-[188px] h-[44px] rounded-[8px] items-center justify-center gap-2 px-4 py-4 text-white font-medium">
                    <Image
                      src={"/Vector.png"}
                      height={20}
                      width={15}
                      alt="img"
                    />{" "}
                    {t("audit")}
                  </Button>
                  <Button className="relative flex bg-[#fff] w-[100px] h-[44px] rounded-[8px] items-center justify-center gap-2  py-4 text-black font-medium sm:flex md:hidden lg:hidden">
                    <Link href={"/staking"}> {t("staking")}</Link>
                  </Button>
                </div>

                <div className="md:flex hidden sm:block items-center gap-4 flex-wrap ">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      title={social.alt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={social.src}
                        width={100}
                        height={50}
                        alt={social.alt}
                        className="w-[24px] h-[24px]"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-[10px] justify-center lg:justify-start">
                <p className="text-[20px] md:text-[26px] text-white/70 leading-[27px] ">
                  {t("poweredBy")}{" "}
                </p>
                <Image
                  src={"/deppseek.png"}
                  alt="img"
                  height={50}
                  width={230}
                />
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
          <Image
            src={"/shield.svg"}
            alt={`shield`}
            className="w-[16px] h-[20px]"
            width={16}
            height={20}
          />
          {btnText}
        </Button>
      )}
    </section>
  );
}
