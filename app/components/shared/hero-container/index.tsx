import React from "react";
import { ChevronDown, CircleHelp, Info } from "lucide-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const CryptoPurchaseUI = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-end ">
      <div
        style={{
          background: " radial-gradient(circle at 0%, #4c247d, #000 )",
        }}
        className="relative w-full md:w-[470px]  md:rounded-[30px] overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src="/border.png"
          alt="background"
          width={424}
          height={720}
          className="absolute  inset-0 w-full h-full "
        />

        {/* Content */}
        <div className="relative z-10 rounded-[30px] p-5  ">
          <div className="text-white/50 text-right mb-2 text-[14px]">
            Can&apos;t find tokens in your wallet?
          </div>

          <h1 className="text-white text-[28px] leading-[29px] font-[600] text-center mb-4">
            Buy CYNQAi Now
          </h1>

          <div className="text-[#BD94FF] text-[26px] leading-[28px] text-center mb-[20px]">
            15d : 13h : 20m
          </div>

          <div className="text-white/50 flex justify-between text-[18px] mb-2">
            <span> Current Price: $0.00375</span>
            <span>Next Price: $0.3</span>
          </div>

          <div className="w-full bg-white/10 h-[22px] rounded-full mb-[15px]">
            <div className="w-[40px] h-[22px] bg-white rounded-l-[12px]" />
          </div>
          <p className="text-white text-[12px] text-center leading-[14px] font-[400] ">
            Listing Price :{" "}
            <span className="text-[#A983E6]">$0.05 (+5000%)</span>
          </p>
          <div className="flex w-full gap-[10px] mt-[18px] mb-[15px] items-center">
            <Button className="relative flex bg-[#7B15F8]/25 border-[2px] border-[#7B15F8] rounded-full items-center justify-center w-[207px] h-[42px] gap-2  text-white font-medium">
              ETH
            </Button>

            <Button className="w-[207px] bg-transparent border h-[42px] border-white/15 text-white rounded-[64px] font-medium hover:bg-purple-800/20 transition-colors">
              BNB
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white text-[18px] leading-[19px] mb-[5px] block">
                Pay with ETH
              </label>
              <div className="bg-transparent rounded-[70px] h-[50px] px-4 flex items-center justify-between border border-white/15">
                <div className="flex items-center gap-2">
                  <Image src="/icons2.png" alt=" " width={31} height={31} />
                  <span className="text-white ">ETH</span>
                  <ChevronDown className="text-white/15 w-4 h-4" />{" "}
                  <span className="text-white/15 text-[30px]">|</span>
                </div>
                <span className="text-white">0.004</span>
              </div>
            </div>

            <div>
              <label className="text-white text-[18px] leading-[19px] mb-[5px] block">
                Receive $CYNQAI
              </label>
              <div className="bg-transparent rounded-[70px] h-[50px] px-4 flex items-center justify-between border border-white/15">
                <div className="flex items-center gap-2">
                  <Image src="/icons1.png" alt=" " width={28} height={28} />
                  <span className="text-white">$CYNQAI</span>
                  <ChevronDown className="text-gray-400 w-4 h-4" />{" "}
                  <span className="text-white/15 text-[30px]">|</span>
                </div>
                <span className="text-white">2300</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center h-[57px] mt-[18px] mb-[20px] ">
            {" "}
            <div className="flex max-w-[343px] justify-center items-center !gap-2 ">
              {[
                { discount: "5", amount: "250" },
                { discount: "7", amount: "500" },
                { discount: "10", amount: "1000" },
                { discount: "15", amount: "2500" },
              ].map((item) => (
                <Button
                  key={item.amount}
                  className="bg-[#8C45FF40] !gap-0 h-[57px] w-[74px] flex flex-col justify-center items-center rounded-xl !px-0 text-center border border-white/15 hover:bg-purple-700/50 transition-colors"
                >
                  <div className="text-white font-[600]">-{item.discount}%</div>
                  <hr className="border-t h-[1px] w-[48px] border-white/15" />
                  <div className="text-white font-[400]">${item.amount}</div>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex w-full gap-[10px] items-center">
            <Button className="relative flex bg-[#7B15F8] rounded-full items-center justify-center w-[207px] h-[54px] gap-2 px-4 py-4 text-white font-medium">
              <Image src={"/Vectors.png"} width={18} height={18} alt="img" />{" "}
              Connect Wallet
            </Button>

            <Button className="w-[207px] bg-transparent border h-[54px] border-gray-600 text-white rounded-[64px] py-4 font-medium hover:bg-purple-800/20 transition-colors">
              Refer a friend
            </Button>
          </div>

          <div className="mt-[20px] space-y-2">
            <Button className="w-full text-gray-400 text-sm flex items-center justify-center gap-2">
              <span>
                <Info height={20} width={20} />
              </span>{" "}
              How to Buy
            </Button>
            <Button className="w-full text-gray-400 text-sm flex items-center justify-center gap-2">
              <span>
                <CircleHelp height={20} width={20} />
              </span>{" "}
              Help, My Wallet Won&apos;t Connect!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPurchaseUI;
