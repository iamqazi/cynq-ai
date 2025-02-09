"use client";

import Image from "next/image";
import { TradingCardGrid } from "../ui/cards";

export default function About() {
  return (
    <section className="relative flex flex-col items-center min-h-screen text-white bg-black py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl text-center pb-[50px] md:pb-[80px] lg:pb-[100px]">
        <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold">
          About Cnyq
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/70 max-w-[90%] md:max-w-[420px]">
          Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
          pellentesque purus hac.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-[30px] text-center md:text-left">
        <div className="bg-[#160428] z-10 h-[150px] w-[150px] md:h-[217px] md:w-[217px] border border-white/15 p-4 md:px-[16px] md:py-[12px] rounded-[20px] shadow-[0px_0px_50px_20px_#0000004D]">
          <Image
            src={"/star.svg"}
            alt="star"
            height={150}
            width={150}
            className="md:h-[200px] md:w-[200px]"
          />
        </div>
        <Image
          src={"/Gradient.svg"}
          alt="gradient"
          height={200}
          width={200}
          className="absolute w-[400px] md:w-[600px] lg:w-[880px] left-[-100px] md:left-[-150px] lg:left-[-190px] top-[-100px] md:top-[-180px] lg:top-[-220px] h-[400px] md:h-[550px] lg:h-[650px]"
        />
        <div className="z-20 px-4 md:px-0">
          <p className="text-[18px] md:text-[21px] lg:text-[23px] font-medium max-w-[280px] md:max-w-[330px]">
            Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
            pellentesque purus hac.
          </p>
          <p className="text-[12px] md:text-[14px] text-white/50 max-w-[260px] md:max-w-[310px]">
            Lorem ipsum dolor sit amet consectetur. At leo fermentum at lectus
            pellentesque purus hac.
          </p>
        </div>
      </div>
      <TradingCardGrid />
    </section>
  );
}
