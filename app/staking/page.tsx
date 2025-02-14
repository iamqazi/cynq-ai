"use client";
import { useState } from "react";
import Footer from "../components/shared/footer";
import Navbar from "../components/shared/navbar";
import { CircleHelp, WalletMinimal } from "lucide-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import StakingHistory from "./table";

export default function Staking() {
  const [addLcaiID, setAddLcaiID] = useState<string>("25");
  const [addDuration, setAddDuration] = useState<string>("3M");
  return (
    <main className="bg-black">
      <Navbar />
      <section className="max-w-[1020px] rounded-xl border border-white/15 mx-auto flex flex-col my-[46px] min-h-screen ">
        <div className="bg-[#1e1e1e] w-full  rounded-t-xl flex items-center  justify-between px-2 xs:px-6 sm:px-[40px] sm:py-[31px] py-5 text-[#FFFFFF] font-semibold flex-wrap gap-y-3 ">
          <p className="lg:text-xl xl:text-[22px]  md:text-lg text-base ">
            Lock C to earn more LCAI
          </p>
          <div className="flex items-center gap-2 ">
            <a
              href=""
              className=" hover:no-underline md:text-base text-[20px]  text-[#FFFFFF]/50 "
            >
              Your Cynq Balance: 23849
            </a>
          </div>
        </div>
        <div className="md:mx-[40px] xs:mx-[20px] mx-[10px] my-[30px]">
          <div className="grid md:grid-cols-2 grid-cols-1 mb-[40px] gap-[30px]">
            <div className="flex flex-col gap-[14px] ">
              <h5 className="xs:text-base text-sm  text-[#FFFFFF]/60 font-semibold uppercase">
                + Add LCAI
              </h5>
              <div
                className=" flex gap-[15px] items-center px-[15px] py-[12px] border border-white/15 rounded-lg font-medium"
                style={{
                  backgroundImage: "linear-gradient(24deg,#190D2E,#000000)",
                }}
              >
                <Image src={"/addLcai.svg"} alt="LCAI" width={60} height={60} />
                <div className="text-base text-[#CCCEEF] ">
                  <p className="font-semibold">10000</p>
                  <span className="text-sm text-[#7376AA] ">~71.25 USD</span>
                </div>
                <div className="text-sm text-[#7376AA] ml-auto text-end">
                  <p>Balance:</p>
                  <p>0.00 LCAI</p>
                </div>
              </div>
              <div className="flex gap-[6px] text-white text-[15px]">
                {["25", "50", "75", "Max"].map((value) => (
                  <button
                    onClick={() => setAddLcaiID(value)}
                    key={value}
                    className={`py-[2px] xs:py-[4px] xs:px-[21px] px-[10px] ${
                      value == addLcaiID
                        ? "bg-[#7B15F8] border-transparent"
                        : "border-white/15"
                    } border rounded-[100px]`}
                  >
                    {value === "Max" ? value : value + "%"}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[14px] ">
              <h5 className="xs:text-base text-sm  text-[#FFFFFF]/60 font-semibold uppercase">
                + Add Duration
              </h5>
              <div
                className=" flex gap-[15px] items-center px-[15px] py-[12px] border border-white/15 rounded-lg font-medium"
                style={{
                  backgroundImage: "linear-gradient(24deg,#190D2E,#000000)",
                }}
              >
                <Image
                  src={"/stacking.svg"}
                  alt="LCAI"
                  width={60}
                  height={60}
                />
                <div className="text-base text-[#CCCEEF] ">
                  <p className="font-semibold">90%</p>
                </div>
                <div className="text-sm text-[#7376AA] ml-auto">
                  <p>Weeks</p>
                </div>
              </div>
              <div className="flex text-white gap-[6px] text-[15px]">
                {["3M", "6M", "1Y", "2Y", "3Y"].map((value) => (
                  <button
                    onClick={() => setAddDuration(value)}
                    key={value}
                    className={`py-[2px] xs:py-[4px] xs:px-[21px] px-[10px] ${
                      value == addDuration
                        ? "bg-[#7B15F8] border-transparent"
                        : "border-white/15"
                    } border rounded-[100px]`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#7376AA] mb-[14px] xs:text-base text-sm font-semibold uppercase ">
            Lock Overview
          </p>
          <div className="bg-[#1e1e1e] w-full  rounded-xl flex items-center  px-3 sm:px-[20px] sm:py-[15px] py-2 text-[#ccceef] font-bold mb-[29px]">
            <Image
              src={"/lockOverview.svg"}
              alt="LCAI"
              width={50}
              height={50}
            />
            <p className="lg:text-xl md:text-lg text-base ml-[15px] mr-auto">
              My LCAI Stake
            </p>
            <span className="text-[20px]">10,000.00</span>
          </div>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[30px] mb-[40px]">
            <article className="bg-[#61616129] border border-white/15 rounded-lg lg:px-[44px] px-[34px] lg:py-[30px] py-[20px] ">
              <ul className="xs:text-base text-sm  text-white/50  flex flex-col gap-[10px]">
                <li className="flex justify-between">
                  <span className="underline">Stake amount </span>
                  <span className=" no-underline  text-[#CCCEEF]">
                    10,000.00 LCAI
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">Estimated profit</span>

                  <span className=" no-underline text-[#936DFF]">
                    500.00 LCAI
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">Total</span>

                  <span className=" no-underline text-[#936DFF]">
                    10,500.00 LCAI
                  </span>
                </li>
              </ul>
            </article>
            <article className="bg-[#61616129] border border-white/15 rounded-lg lg:px-[44px] px-[34px] lg:py-[30px] py-[20px] ">
              <ul className="xs:text-base text-sm  text-white/50  flex flex-col gap-[10px]">
                <li className="flex justify-between text-[#CCCEEF]">
                  <span className="">LCAI to be locked</span>
                  <span className=" no-underline">10,000.00</span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">Duration</span>

                  <span className=" no-underline text-[#CCCEEF]">24 Weeks</span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">Unlock On</span>

                  <span className=" no-underline text-[#CCCEEF]">
                    Aug 12 2025, 16:40
                  </span>
                </li>
              </ul>
            </article>
          </div>
          <div className="flex flex-col gap-[15px] items-center mb-[30px]">
            <Button className="uppercase rounded-lg text-white bg-[#7B15F8] xs:text-base text-sm xs:px-[28px] px-[18px] xs:py-[12px] py-[8px] shadow-[0px_0px_150px_#7B15F8]">
              <WalletMinimal size={20} /> Stake
            </Button>

            <span className="xs:text-base text-sm text-white/50 flex items-center gap-[5px] ">
              <CircleHelp size={20} />
              New to LCAI Staking
            </span>
          </div>
        </div>
        {/* tale component will come here */}
        <StakingHistory />
      </section>
      <Footer />
    </main>
  );
}
