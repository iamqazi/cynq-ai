"use client";

import Image from "next/image";
import { TradingCardGrid } from "../ui/cards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    // Select child elements that should be animated
    const aboutItems = aboutRef.current.querySelectorAll(".about-content-item");

    if (aboutItems.length === 0) return; // Ensure elements exist before animation

    gsap.fromTo(
      Array.from(aboutItems), // Convert NodeList to array
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative flex flex-col items-center min-h-screen text-white bg-black pb-16 sm:pt-8 px-4 md:px-8 lg:px-0"
    >
      <div className="about-content-item max-w-3xl text-center pb-[50px] md:pb-[80px] lg:pb-[100px] items-center flex flex-col">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          About CNYQ
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row md:items-start items-center md:gap-[30px] text-center md:text-start">
        <div
          className="relative bg-[#160428] border border-white/15 p-4 md:px-[16px] md:py-[12px] flex-shrink-0  rounded-[20px] shadow-[0px_0px_150px_#9b4bfc]
          lg:h-[200px] lg:w-[200px]  md:h-[170px] md:w-[170px] h-[150px] w-[150px]"
        >
          <span className="xl:w-[900px] lg:w-[800px] md:w-[630px] w-[230px] h-[1px] bg-white/10 block absolute top-[-1px] left-2/4 lg:-translate-x-[17%] md:-translate-x-[20%] -translate-x-2/4 "></span>
          <span className="xl:w-[900px] lg:w-[800px] md:w-[630px] w-[230px] h-[1px] bg-white/10 block absolute bottom-[-1px] left-2/4 lg:-translate-x-[17%] md:-translate-x-[20%] -translate-x-2/4 "></span>
          <span className="w-[1px] lg:h-[270px] md:h-[230px]  h-[220px] bg-white/10 block absolute top-2/4 -translate-y-2/4 left-0 -translate-x-2/4 "></span>
          <span
            className="w-[1px] lg:h-[270px] md:h-[230px]  h-[220px] bg-white/10 block absolute top-2/4 -translate-y-2/4 right-[-1px] -translate-x-2/4 
        "
          ></span>
          <Image
            src={"/star.svg"}
            alt="star"
            height={150}
            width={150}
            className="relative z-0 w-full h-full"
          />
        </div>
        <div className="about-content-item z-[2] mt-5 px-4 md:px-0 flex flex-col md:items-start items-center">
          <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-[280px] md:max-w-[550px]">
            Empowering Crypto Finance with AI-Powered Predictions, Automated
            Trading, Arbitrage, and Tax Optimization – Fueled by Decentralized
            Intelligence.
          </p>
          <p className="text-[12px] md:text-sm text-white/50 max-w-[260px] md:max-w-[500px] mt-1">
            Decentralized AI solutions for predictive market insights, automated
            trading, seamless arbitrage, and optimized crypto tax management.
          </p>
        </div>
      </div>

      <section className="mt-[100px] max-w-[1340px] flex justify-center mx-auto about-content-item">
        <TradingCardGrid />
      </section>
    </section>
  );
}
