"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function BuiltOn() {
  type builtOn = {
    src: string;
    name: string;
  };
  const builtOnArray: builtOn[] = [
    {
      src: "/chatgpt.svg",
      name: "chatgpt",
    },
    {
      src: "/gemini.svg",
      name: "gemini",
    },
    {
      src: "/polygon.svg",
      name: "polygon",
    },
    {
      src: "/binance.svg",
      name: "binance",
    },
    {
      src: "/v.svg",
      name: "v",
    },
    {
      src: "/optimism.svg",
      name: "optimism",
    },
    {
      src: "/ethereum.svg",
      name: "ethereum",
    },
    {
      src: "/gradientlogo.svg",
      name: "gradientlogo",
    },
    {
      src: "/helmet.svg",
      name: "helmet",
    },
    {
      src: "/swirl.svg",
      name: "swirl",
    },
    {
      src: "/honey.svg",
      name: "honey",
    },
    {
      src: "/python.svg",
      name: "python",
    },
    {
      src: "/z.svg",
      name: "z",
    },
    {
      src: "/html.svg",
      name: "html",
    },
    {
      src: "/css.svg",
      name: "css",
    },
    {
      src: "/bootstrap.svg",
      name: "bootstrap",
    },
    {
      src: "/js.svg",
      name: "js",
    },
    {
      src: "/react.svg",
      name: "react",
    },
    {
      src: "/fox.svg",
      name: "fox",
    },
    {
      src: "/mwjs.svg",
      name: "mwjs",
    },
    {
      src: "/invertZ.svg",
      name: "invertZ",
    },
    {
      src: "/Golang.svg",
      name: "Golang",
    },
  ];
  const builtRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!builtRef.current) return;

    // Select child elements that should be animated
    const builtItems = builtRef.current.querySelectorAll(".faq-item");

    if (builtItems.length === 0) return; // Ensure elements exist before animation

    gsap.fromTo(
      Array.from(builtItems), // Convert NodeList to array
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: builtRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);
  return (
    <section
      ref={builtRef}
      className="text-white  mt-10 lg:mb-0 mb-10 sm:px-10 px-5 max-w-[1440px] mx-auto"
    >
      <h1 className="faq-item lg:text-5xl md:text-4xl text-3xl font-medium text-center ">
        Built On
      </h1>
      <article className="flex faq-item flex-wrap items-center justify-center md:gap-8 sm:gap-5 gap-3 sm:mt-14 mt-6 lg:px-20 sm:px-10 px-5">
        {builtOnArray.map((item, ind) => (
          <div
            key={ind}
            className="relative z-[1] lg:max-w-[75px] md:max-w-[60px] sm:max-w-[50px]  xs:max-w-[40px] max-w-[30px] md:hover:scale-110 transition-all
            md:hover:-translate-y-3
            md:hover:after:opacity-100
            after:opacity-0
            after:absolute after:w-[80%] after:h-[80%] after:left-2/4 after:top-2/4 after:-translate-x-2/4 after:-translate-y-2/4
            after:bg-[#9B4BFC]
            after:shadow-[0px_0px_50px_#9B4BFC]
            after:rounded-[50%]
            after:z-[-1]
            "
          >
            <Image
              src={item.src}
              alt={item.name}
              width={75}
              height={75}
              className="select-none  bg-no-repeat bg-center bg-cover"
            />
          </div>
        ))}
      </article>
    </section>
  );
}
