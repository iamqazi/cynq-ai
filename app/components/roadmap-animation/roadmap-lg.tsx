"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

const dummyData = [
  {
    heading: "Q1 2025",
    points: [
      "Define project scope",
      "Identify key stakeholders",
      "Set clear objectives",
      "Develop a roadmap",
      "Allocate resources efficiently",
    ],
  },
  {
    heading: "Q2 2025",
    points: [
      "Create wireframes",
      "Develop UI/UX designs",
      "Gather client feedback",
      "Refine based on inputs",
      "Finalize the prototype",
    ],
  },
  {
    heading: "Q3 2025",
    points: [
      "Set up development environment",
      "Write clean and scalable code",
      "Implement core functionalities",
      "Integrate APIs and databases",
      "Conduct unit testing",
    ],
  },
  {
    heading: "Q4 2025",
    points: [
      "Perform functional testing",
      "Fix identified bugs",
      "Ensure compatibility across devices",
      "Conduct performance testing",
      "Receive final approval",
    ],
  },
  {
    heading: "Q5 2025",
    points: [
      "Deploy to production",
      "Monitor system performance",
      "Fix any post-launch issues",
      "Provide ongoing support",
      "Plan for future updates",
    ],
  },
];

const DevelopmentProcessLg = ({ data = dummyData }) => {
  gsap.registerPlugin(ScrollTrigger);

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
  }, [data.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div
        className="dep-trigger flex h-[100vh] items-center overflow-hidden bg-black text-white relative"
        style={{
          backgroundImage: "url('/boxes.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[56px] md:text-4xl font-[500] text-center w-full px-4">
          Roadmap
        </h1>
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-start gap-x-[5rem] md:flex-row">
          <div className="dep-left flex h-fit w-full relative flex-[0.5] flex-col pb-[5rem]">
            <Image
              src={"/image-8.svg"}
              alt="img"
              height={100}
              width={100}
              className="w-[200px] h-[200px] md:w-[377px] md:h-[377px] absolute top-[-120px] md:top-[-220px] right-[20px] md:right-[40px]"
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
                <div className="h-auto w-full rounded-[2rem] bg-black px-4 md:px-6 py-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h4 className="text-[24px] md:text-[36px] font-[700] font-metro-semi-bold text-white">
                      {item.heading}
                    </h4>
                    <span className="px-4 py-1 bg-yellow-500 text-black font-[700] rounded-full text-[14px] md:text-[16px] w-fit">
                      IN PROGRESS
                    </span>
                  </div>
                  <ul className="py-4 md:py-6 text-sm md:text-base text-white space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Image
                          src={idx < 3 ? "/filled.svg" : "/unfilled.svg"}
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
