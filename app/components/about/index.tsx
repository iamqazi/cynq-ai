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
      className="relative flex flex-col items-center min-h-screen text-white bg-black pb-16 sm:pt-8 px-4 md:px-8 lg:px-16"
    >
      <div className="about-content-item max-w-3xl text-center pb-[50px] md:pb-[80px] lg:pb-[100px] items-center flex flex-col">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          About Cnyq
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/70 text-center max-w-[80%] sm:max-w-[330px] md:max-w-[420px] mt-2">
          Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
          pellentesque purus hac.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row md:items-start items-center md:gap-[30px] text-center md:text-start">
        <div className="about-content-item bg-[#160428] z-[1] h-[150px] w-[150px] md:h-[217px] md:w-[217px] border border-white/15 p-4 md:px-[16px] md:py-[12px] rounded-[20px] relative shadow-[0px_0px_150px_#9b4bfc]">
          <Image
            src={"/star.svg"}
            alt="star"
            height={150}
            width={150}
            className="md:h-[200px] md:w-[200px]"
          />
        </div>
        <div className="about-content-item z-[2] mt-5 px-4 md:px-0 flex flex-col md:items-start items-center">
          <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-[280px] md:max-w-[330px]">
            Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
            pellentesque purus hac.
          </p>
          <p className="text-[12px] md:text-sm text-white/50 max-w-[260px] md:max-w-[310px] mt-1">
            Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
            pellentesque purus hac.
          </p>
        </div>
      </div>

      <section className="mt-[100px] about-content-item">
        <TradingCardGrid />
      </section>
    </section>
  );
}
