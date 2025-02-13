import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import GradientButton from "../button";

const CryptoPurchaseUI = () => {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-purple-800/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
        <div className="text-white/50 text-right mb-2 text-[14px] ">
          Can&apos;t find tokens in your wallet?
        </div>

        <h1 className="text-white text-[28px] font-[600] text-center mb-4">
          Buy Cynq Now
        </h1>

        <div className="text-[#BD94FF] text-[26px] text-center mb-6">
          15d : 13h : 20m
        </div>

        <div className="text-white/50 text-[18px] text-center mb-6">
          Current Price: $0.00375
        </div>

        <div className="w-full bg-white/10 h-[22px] rounded-full mb-8">
          <div className="w-[40px] h-[22px] bg-gradient-to-r from-[#9B4BFC] to-[#11BBFF] rounded-l-[12px]  " />
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-white mb-2 block">Pay with ETH</label>
            <div className="bg-transparent rounded-[70px] h-[50px] px-4 flex items-center justify-between border border-white/15">
              <div className="flex items-center gap-2">
                <Image src={"/icons2.png"} alt=" " width={31} height={31} />
                <span className="text-white">ETH</span>
                <ChevronDown className="text-gray-400 w-4 h-4" /> |
              </div>
              <span className="text-white">0.004</span>
            </div>
          </div>

          <div>
            <label className="text-white mb-2 block">Receive $Cynq</label>
            <div className="bg-transparent rounded-[70px] h-[50px] px-4 flex items-center justify-between border border-white/15">
              <div className="flex items-center gap-2">
                <Image src={"/icons1.png"} alt=" " width={28} height={28} />
                <span className="text-white">Cynq</span>
                <ChevronDown className="text-gray-400 w-4 h-4" /> |
              </div>
              <span className="text-white">2300</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {[
            { discount: "5", amount: "250" },
            { discount: "7", amount: "500" },
            { discount: "10", amount: "1000" },
            { discount: "15", amount: "2500" },
          ].map((item) => (
            <button
              key={item.amount}
              className="bg-[#8C45FF40] flex flex-col justify-center items-center rounded-xl p-2 text-center border border-white/15 hover:bg-purple-700/50 transition-colors"
            >
              <div className="text-white">-{item.discount}%</div>
              <hr className="border-t w-[48px] border-white/15" />

              <div className="text-gray-400">${item.amount}</div>
            </button>
          ))}
        </div>

        <div className="flex w-full gap-[10px] items-center">
          <GradientButton text="Connect Wallet" borderRadius="64px" />

          <button className="w-full bg-transparent border border-gray-600 text-white rounded-[64px] py-4 font-medium hover:bg-purple-800/20 transition-colors">
            Refer a friend
          </button>
        </div>

        <div className="mt-6 space-y-2">
          <button className="w-full text-gray-400 text-sm flex items-center justify-center gap-2">
            <span>ⓘ</span> How to Buy
          </button>
          <button className="w-full text-gray-400 text-sm flex items-center justify-center gap-2">
            <span>?</span> Help, My Wallet Won&apos;t Connect!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPurchaseUI;
