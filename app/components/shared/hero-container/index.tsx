import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const CryptoPurchaseUI = () => {
  const [selected, setSelected] = useState<string>("ETH");
  const [selectedButton, setSelectedButton] = useState<string>("one");
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
          <h1 className="text-white text-[28px] leading-[29px] font-[600] text-center mb-1">
            Buy CYNQAi Now
          </h1>
          <div className="text-white/50 text-center mb-4 text-[16px]">
            Until price Increase
          </div>

          {/* <div className="text-[#BD94FF] text-[26px] leading-[28px] text-center mb-[20px]">
            15d : 13h : 20m
          </div> */}

          <div className="flex justify-between text-[12px] mb-2">
            <p className="text-white flex gap-[4px]">
              {" "}
              Current Price:
              <span className="text-[#A983E6]"> $0.00375</span>
            </p>
            <p className="text-white flex gap-[4px] !pr-[2px]">
              Next Price:
              <span className="text-[#A983E6]"> $0.3</span>
            </p>
          </div>

          <div className="w-full bg-white/10 h-[22px] rounded-full mb-[15px]">
            <div className="w-[40px] h-[22px] bg-white rounded-l-[12px]" />
          </div>
          <p className="text-white text-[12px] text-center leading-[14px] font-[400] ">
            Raised :<span className="text-[#A983E6]">200000/350000</span>
          </p>
          <div className="flex items-center mt-[1rem] justify-between bg-white/10 text-white px-6 py-[10px] ">
            <p className="text-[14px] font-[500] flex flex-col items-center text-white">
              Your purchased CYNQ{" "}
              <span className="text-[#936DFF]">857387659</span>
            </p>
            <Image
              src={"/Line.svg"}
              className="h-[30px]"
              height={10}
              width={10}
              alt="image"
            />
            <p className="text-[14px] font-[500] flex flex-col items-center text-white">
              Your Stackable CYNQ{" "}
              <span className="text-[#936DFF]"> 4409859</span>
            </p>
          </div>
          <div className="flex w-full gap-[10px] mt-[18px] mb-[15px] items-center">
            <Button
              className={`relative flex rounded-full items-center justify-center w-[207px] h-[42px] gap-2 font-medium transition-colors ${
                selected === "ETH"
                  ? "bg-[#7B15F8]/25 border-[2px] border-[#7B15F8] text-white"
                  : "bg-transparent border border-white/15 text-white hover:bg-purple-800/20"
              }`}
              onClick={() => setSelected("ETH")}
            >
              ETH
            </Button>

            <Button
              className={`w-[207px] h-[42px] rounded-[64px] font-medium transition-colors ${
                selected === "USDT"
                  ? "bg-[#7B15F8]/25 border-[2px] border-[#7B15F8] text-white"
                  : "bg-transparent border border-white/15 text-white hover:bg-purple-800/20"
              }`}
              onClick={() => setSelected("USDT")}
            >
              USDT
            </Button>
          </div>
          <div className="flex items-center py-[16px] gap-[15px] justify-center ">
            <Image
              src={"/line2.png"}
              height={1}
              width={100}
              alt="image"
              className="h-[1px]"
            />
            <p className="text-[12px] text-white ">01 CYNQ = 0.001$</p>
            <Image
              src={"/line1.png"}
              height={1}
              width={100}
              alt="image"
              className="h-[1px]"
            />
          </div>

          <div className="justify-center flex items-center gap-[10px]">
            <div className="w-full md:w-[207px]">
              <label className="text-white text-[18px] leading-[19px] mb-[5px] block">
                Pay with {selected}
              </label>
              <div className="bg-transparent rounded-[70px] h-[50px] px-4 flex items-center justify-between border border-white/15">
                <div className="flex items-center gap-2">
                  <Image
                    src={selected === "ETH" ? "/icons2.png" : "/usdt.png"}
                    alt={selected}
                    width={31}
                    height={31}
                  />
                  <span className="text-white/15 text-[30px]">|</span>
                </div>
                <input
                  type="number"
                  defaultValue="0.004"
                  className="bg-transparent text-white !text-right focus:ring-0 focus:outline-none outline-none w-full pr-4 no-spinner"
                />
              </div>
            </div>

            <div className="w-full md:w-[207px]">
              <label className="text-white text-[18px] leading-[19px] mb-[5px] block">
                Receive $CYNQ
              </label>
              <div className="bg-transparent rounded-[70px] h-[50px] px-4 flex items-center justify-between border border-white/15">
                <div className="flex items-center gap-2">
                  <Image src="/receive.png" alt=" " width={28} height={28} />
                  <span className="text-white/15 text-[30px]">|</span>
                </div>
                <span className="text-white">2300</span>
              </div>
            </div>
          </div>
          <p className="text-white text-[12px] py-4 text-center leading-[14px] font-[400] ">
            Listing Price :
            <span className="text-[#A983E6]">$0.05 (+5000%)</span>
          </p>

          <div className="flex justify-center h-[57px] mb-[20px] ">
            {" "}
            <div className="flex max-w-[420px] justify-center items-center !gap-2">
              {[
                { discount: "5", amount: "250" },
                { discount: "7", amount: "500" },
                { discount: "10", amount: "1000" },
                { discount: "15", amount: "2500" },
              ].map((item) => (
                <Button
                  key={item.amount}
                  onClick={() => setSelectedButton(item.amount)}
                  className={`h-[57px] w-[70px] md:w-[100px] !gap-0 flex flex-col justify-center items-center rounded-xl !px-[17px] text-center transition-colors border 
        ${
          selectedButton === item.amount
            ? "bg-purple-700 border-purple-500"
            : "bg-[#8C45FF40] border-white/15"
        }`}
                >
                  <div className="text-white font-[600]">+{item.discount}%</div>
                  <hr className="border-t h-[1px] w-[48px] border-white/15" />
                  <div className="text-white font-[400]">${item.amount}</div>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex w-full gap-[10px] items-center">
            <Button className="relative flex bg-[#7B15F8] rounded-full items-center justify-center w-[207px] h-[54px] gap-2 px-4 py-4 text-white font-medium">
              Connect Wallet
            </Button>

            <Button className="w-[207px] bg-transparent border h-[54px] border-gray-600 text-white rounded-[64px] py-4 font-medium hover:bg-purple-800/20 transition-colors">
              Refer a friend
            </Button>
          </div>

          <div className=" items-center justify-center mt-[16px] flex">
            <Button className=" text-gray-400 text-sm flex items-center justify-center gap-2">
              <span>
                <Image
                  src={"/info.png"}
                  height={20}
                  width={20}
                  alt="img"
                  className="opacity-50"
                />
              </span>{" "}
              How to Buy
            </Button>
            <Button className=" text-gray-400 text-sm flex items-center justify-center gap-2">
              <span>
                <Image
                  src={"/question.png"}
                  height={20}
                  width={20}
                  alt="img"
                  className="opacity-50"
                />
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
