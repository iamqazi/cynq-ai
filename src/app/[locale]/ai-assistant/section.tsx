"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Make sure to register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// At the bottom of TradingFeatures.tsx
export default function TradingFeatures() {
  const t = useTranslations();
  return (
    <>
      {" "}
      <div className="flex justify-center">
        {" "}
        <div className="relative sm:flex md:hidden lg:hidden  w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-10">
          <Image
            src="/center.svg" // Update with your actual image path
            alt="3D Crystal Model"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <section className="bg-black text-white py-16 relative overflow-hidden">
        {/* Central 3D Model */}
        <div className="absolute hidden md:block top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-10">
          <Image
            src="/center.svg" // Update with your actual image path
            alt="3D Crystal Model"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-[25px] md:text-[30px] leading-[27px]  md:leading-[56px] text-center font-bold max-w-6xl mx-auto px-5 mb-24 relative z-20">
          {t("heading_trade_smarter")}
        </h2>

        {/* Grid Layout for Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16 max-w-7xl mx-auto px-5 relative z-20">
          {/* Feature 1 */}
          <div className="relative pl-20">
            <span className="absolute left-5 top-[-45px] leading-[112px]   text-[112px]  font-bold text-[#333] z-0">
              01
            </span>
            <h3 className="text-[24px] leading-[26px] font-bold mb-4 relative z-10">
              {t("feature1_title")}
            </h3>
            <p className="text-[#999] max-w-[312px] text-[16px] leading-[19px] relative z-10">
              {t("feature1_description")}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative md:text-right md:pl-0 md:pr-20 pl-20">
            <span className="absolute right-8  top-[-45px] leading-[112px]  text-[112px]  font-bold text-[#333] z-0 hidden md:block">
              03
            </span>
            <span className="absolute left-5 top-[-45px] leading-[112px]   text-[112px]  font-bold text-[#333] z-0 md:hidden">
              03
            </span>
            <h3 className="text-[24px] leading-[26px] font-bold mb-4 relative z-10">
              {t("feature2_title")}
            </h3>
            <p className="text-[#999] max-w-[312px] text-[16px] leading-[19px] ml-0 md:ml-auto relative z-10">
              {t("feature2_description")}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="relative pl-20">
            <span className="absolute left-5 top-[-45px]  leading-[112px] text-[112px]  font-bold text-[#333] z-0">
              02
            </span>
            <h3 className="text-[24px] leading-[26px] font-bold mb-4 relative z-10">
              {t("feature3_title")}
            </h3>
            <p className="text-[#999] max-w-[312px] text-[16px] leading-[19px] relative z-10">
              {t("feature3_description")}
            </p>
          </div>

          {/* Feature 4 */}
          <div className="relative md:text-right md:pl-0 md:pr-20 pl-20">
            <span className="absolute right-8 top-[-45px] leading-[112px] text-[112px]  font-bold text-[#333] z-0 hidden md:block">
              04
            </span>
            <span className="absolute left-5 top-[-45px]  leading-[112px]   text-[112px]  font-bold text-[#333] z-0 md:hidden">
              04
            </span>
            <h3 className="text-[24px] leading-[26px] font-bold mb-4 relative z-10">
              {t("feature4_title")}
            </h3>
            <p className="text-[#999] max-w-[312px] text-[16px] leading-[19px] ml-0 md:ml-auto relative z-10">
              {t("feature4_description")}
            </p>
          </div>
        </div>

        {/* Background grid pattern - add as needed */}
        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      </section>
    </>
  );
}
