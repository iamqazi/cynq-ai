"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerAnimation = ({ theme }: { theme?: "light" | "dark" }) => {
  const backgroundClass = theme === "dark" ? "bg-black" : "bg-muted-foreground";
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".sec-5-move-anim", {
      opacity: 1,
      top: 0,
      duration: 0.7,
      ease: "power1",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".sec-5-trigger",
        start: "top 70%",
      },
    });
  }, []);

  const technologies = [
    { title: "React", image: "/icons/analytics-insight.png" },
    { title: "Tailwind CSS", image: "/icons/coinpedia-fintech-news.png" },
    { title: "GraphQL", image: "/icons/cryptodaily.png" },
    { title: "GraphQL", image: "/icons/crypto-com.png" },
    // { title: "GraphQL", image: "/icons/finbold.png" },
    // { title: "GraphQL", image: "/icons/investing.png" },
    { title: "GraphQL", image: "/icons/news-btc.png" },
    // { title: "GraphQL", image: "/icons/the-news-crypto.png" },
  ];

  return (
    <div
      className={`mt-[100px] sec-5-trigger ${backgroundClass} max-w-[1440px] mx-auto`}
    >
      <div className="flex flex-col gap-8 md:gap-16 ">
        <div className="sec-5-move-anim relative top-[200px] flex flex-col gap-11 opacity-0 md:gap-16">
          <div className="h-[7.125rem]">
            <Marquee loop={0} autoFill>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="mx-9 flex flex-col items-center gap-1 md:mx-16"
                >
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    className="w-[150px] h-[50px] "
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAnimation;
