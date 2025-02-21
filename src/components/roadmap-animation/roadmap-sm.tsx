"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

const DevelopmentProcessSm = () => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    sliderRef.current?.swiper?.slidePrev();
  };

  const handleNext = () => {
    sliderRef.current?.swiper?.slideNext();
  };

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

  return (
    <div
      className="container pt-16"
      style={{
        backgroundImage: "url('/boxes.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-[56px] font-bold text-center text-white mb-8">
        Roadmap
      </h2>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="!pb-8"
          ref={sliderRef}
          loop={true}
          navigation={false}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          {dummyData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-full flex-col px-4">
                <div className="w-full rounded-[2rem]  p-6 ">
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            className="flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-full border border-white hover:bg-gray-100 transition-colors"
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>
          <button
            className="flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-full border border-white bg-white hover:bg-gray-100 transition-colors"
            onClick={handleNext}
          >
            <ArrowRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcessSm;
