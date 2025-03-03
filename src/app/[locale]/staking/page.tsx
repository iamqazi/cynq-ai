"use client";
import { useState } from "react";
import Footer from "../../../components/shared/footer";
import Navbar from "../../../components/shared/navbar";
import { CircleHelp, WalletMinimal } from "lucide-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import StakingHistory from "./table";
import { useTranslations } from "next-intl";

export default function Staking() {
  // const [addLcaiID, setAddLcaiID] = useState<string>("25");
  // const [addDuration, setAddDuration] = useState<string>("3M");
  const [addDuration, setAddDuration] = useState("3M");
  const [weeks, setWeeks] = useState(12); // Default to 12 weeks (3 months)
  const [stake, setStake] = useState(10000);
  const [selectedPercentage, setSelectedPercentage] = useState(25);
  const t = useTranslations("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, ""); // Remove commas
    if (!isNaN(Number(value)) && value !== "") {
      setStake(Number(value));
    }
  };

  const handlePercentageClick = (value: number | "Max") => {
    setSelectedPercentage(value === "Max" ? 100 : value);
  };

  const estimatedProfit = (stake * (selectedPercentage / 100)).toFixed(2);
  const totalAmount = (stake + Number(estimatedProfit)).toFixed(2);

  const handleDurationChange = (value: string) => {
    setAddDuration(value);

    // Calculate weeks based on selected duration
    const weeksMap: Record<string, number> = {
      "3M": 12,
      "6M": 24,
      "1Y": 52,
      "2Y": 104,
      "3Y": 156,
    };

    setWeeks(weeksMap[value] || 0); // Default to 0 if value is not found
  };

  return (
    <main className="bg-black">
      <Navbar />
      <section className="max-w-[1020px] rounded-xl border border-white/15 mx-auto flex flex-col my-[46px] min-h-screen ">
        <div className="bg-[#1e1e1e] w-full  rounded-t-xl flex items-center  justify-between px-2 xs:px-6 sm:px-[40px] sm:py-[31px] py-5 text-[#FFFFFF] font-semibold flex-wrap gap-y-3 ">
          <p className="lg:text-xl xl:text-[22px]  md:text-lg text-base ">
            {t("title_stake")}
          </p>
          <div className="flex items-center gap-2 ">
            <a
              href=""
              className=" hover:no-underline md:text-base text-[20px]  text-[#FFFFFF]/50 "
            >
              {t("balance")}: 23849
            </a>
          </div>
        </div>
        <div className="md:mx-[40px] xs:mx-[20px] mx-[10px] my-[30px]">
          <div className="grid md:grid-cols-2 grid-cols-1 mb-[40px] gap-[30px]">
            <div className="flex flex-col gap-[14px] ">
              <h5 className="xs:text-base text-sm  text-[#FFFFFF]/60 font-semibold uppercase">
                {t("addCYNQ")}
              </h5>
              <div
                className=" flex gap-[15px] items-center px-[15px] py-[12px] border border-white/15 rounded-lg font-medium"
                style={{
                  backgroundImage: "linear-gradient(24deg,#190D2E,#000000)",
                }}
              >
                <Image src={"/addLcai.svg"} alt="LCAI" width={60} height={60} />
                <div className="text-base flex gap-[60px] text-[#CCCEEF]">
                  <input
                    type="text"
                    value={stake.toLocaleString()}
                    onChange={handleInputChange}
                    className="font-semibold bg-transparent rounded px-2 focus:outline-none focus:ring-0"
                    autoFocus
                  />
                </div>
              </div>
              <div className="flex gap-[6px] text-white text-[15px]">
                {([25, 50, 75, "Max"] as const).map((value) => (
                  <button
                    onClick={() =>
                      handlePercentageClick(
                        value === "Max" ? 100 : (value as number)
                      )
                    }
                    key={value}
                    className={`py-[2px] xs:py-[4px] xs:px-[21px] px-[10px] ${
                      value == selectedPercentage
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
                {t("addDuration")}
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
                  <p>{t("apr")}</p>
                </div>
              </div>
              <div className="flex text-white gap-[6px] text-[15px]">
                {["3M", "6M", "1Y", "2Y", "3Y"].map((value) => (
                  <button
                    onClick={() => handleDurationChange(value)}
                    key={value}
                    className={`py-[2px] xs:py-[4px] xs:px-[21px] px-[10px] ${
                      value === addDuration
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
            {t("lockOverview")}
          </p>
          <div className="bg-[#1e1e1e] w-full  rounded-xl flex items-center  px-3 sm:px-[20px] sm:py-[15px] py-2 text-[#ccceef] font-bold mb-[29px]">
            <Image
              src={"/lockOverview.svg"}
              alt="LCAI"
              width={50}
              height={50}
            />
            <p className="lg:text-xl md:text-lg text-base ml-[15px] mr-auto">
              {t("myStake")}
            </p>
            <span className="text-[20px]">{stake.toLocaleString()}</span>
          </div>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-[30px] mb-[40px]">
            <article className="bg-[#61616129] border border-white/15 rounded-lg lg:px-[44px] px-[34px] lg:py-[30px] py-[20px]">
              <ul className="xs:text-base text-sm text-white/50 flex flex-col gap-[10px]">
                <li className="flex justify-between">
                  <span className="underline"> {t("stakeAmount")}</span>
                  <span className="no-underline text-[#CCCEEF]">
                    {stake.toLocaleString()} CYNQ
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">{t("estimatedProfit")}</span>
                  <span className="no-underline text-[#936DFF]">
                    {estimatedProfit} CYNQ
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">{t("total")}</span>
                  <span className="no-underline text-[#936DFF]">
                    {totalAmount} CYNQ
                  </span>
                </li>
              </ul>
            </article>
            <article className="bg-[#61616129] border border-white/15 rounded-lg lg:px-[44px] px-[34px] lg:py-[30px] py-[20px] ">
              <ul className="xs:text-base text-sm  text-white/50  flex flex-col gap-[10px]">
                <li className="flex justify-between text-[#CCCEEF]">
                  <span className="">{t("toBeLocked")}</span>
                  <span className=" no-underline">10,000.00</span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">{t("duration")}</span>

                  <span className="no-underline text-[#CCCEEF]">
                    {weeks} Weeks
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="underline">{t("unlockOn")}</span>

                  <span className=" no-underline text-[#CCCEEF]">
                    Aug 12 2025, 16:40
                  </span>
                </li>
              </ul>
            </article>
          </div>
          <div className="flex flex-col gap-[15px] items-center mb-[30px]">
            <Button className="uppercase rounded-lg text-white bg-[#7B15F8] xs:text-base text-sm xs:px-[28px] px-[18px] xs:py-[12px] py-[8px] shadow-[0px_0px_150px_#7B15F8]">
              <WalletMinimal size={20} /> {t("stake")}
            </Button>

            <span className="xs:text-base text-sm text-white/50 flex items-center gap-[5px] ">
              <CircleHelp size={20} />
              {t("new_to_staking")}
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
