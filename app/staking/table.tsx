"use client";

import Image from "next/image";

export default function StakingHistory() {
  return (
    <div className="bg-[#1e1e1e] rounded-xl px-[2px] pb-[3px] shadow-md">
      <div className="flex py-[20px] px-[30px] items-center gap-2 ">
        <Image src={"/dollar.svg"} alt="img" height={30} width={30} />
        <h2 className="text-[16px] font-[500] text-[#CCCEEF] ">
          Staking History
        </h2>
      </div>

      <div className="bg-black rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-black border-b border-[#1e1e1e]">
            <tr>
              <th className="text-[#CCCEEF] text-[14px] font-[600]  text-left px-[30px] py-[20px]">
                AMOUNT
              </th>
              <th className="text-[#CCCEEF] text-[14px] font-[600]  text-left px-[30px] py-[20px]">
                LOCK DURATION
              </th>
              <th className="text-[#CCCEEF] text-[14px] font-[600]  text-left px-[30px] py-[20px]">
                FIXED RETURNS
              </th>
              <th className="text-[#CCCEEF] text-[14px] font-[600]  text-left px-[30px] py-[20px]">
                START TIME
              </th>
              <th className="text-[#CCCEEF] text-[14px] font-[600]  text-left px-[30px] py-[20px]">
                END TIME
              </th>
              <th className="text-[#CCCEEF] text-[14px] font-[600]  text-left px-[30px] py-[20px]">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={6}
                className="text-center text-[14px] text-white/50 py-5"
              >
                No stakes found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
