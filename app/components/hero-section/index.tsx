"use client";
import React from "react";
import Navbar from "../shared/navbar";
import CryptoPurchaseUI from "../shared/hero-container";
import GradientButton from "../shared/button";
const HeroSection: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center text-white ">
        <div className="grid lg:grid-cols-2 grid-col-1 gap-8 max-w-[1440] mx-auto xl:mx-[117px]  w-full">
          {/* Left Side Content */}
          <div>
            <h1 className="text-4xl md:text-[72px] leading-[78px] font-bold">
              Cynq Ai
            </h1>
            <p className="text-2xl md:text-[72px] leading-[78px] font-semibold">
              The Future of AI-Powered Crypto Automation
            </p>
            <p className="text-[22px] md:text-[30px] leading-[36px] text-gray-300 mt-4">
              Trade Smarter. Invest Better. Automate Everything.
            </p>
            <div className="flex mt-4 items-center gap-[10px]">
              <GradientButton text=" Buy Now" />

              <div className="flex gap-4 ">
                {/* Icons Placeholder */}
                <span>🔊</span>
                <span>🐦</span>
                <span>📢</span>
                <span>✨</span>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <CryptoPurchaseUI />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
