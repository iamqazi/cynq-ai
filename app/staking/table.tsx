"use client";

import Image from "next/image";

export default function StakingHistory() {
  return (
    <div className="bg-[#1e1e1e] rounded-xl px-[2px] pb-[3px] shadow-md">
      <div className="flex py-[20px] px-[30px] items-center gap-2">
        <Image src={"/dollar.svg"} alt="img" height={30} width={30} />
        <h2 className="text-[16px] font-[500] text-[#CCCEEF]">
          Staking History
        </h2>
      </div>

      <div className="bg-black rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead className="bg-black border-b border-[#1e1e1e]">
              <tr>
                <th className="text-[#CCCEEF] text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  AMOUNT
                </th>
                <th className="text-[#CCCEEF] whitespace-nowrap text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  LOCK DURATION
                </th>
                <th className="text-[#CCCEEF] whitespace-nowrap text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  FIXED RETURNS
                </th>
                <th className="text-[#CCCEEF] text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  START TIME
                </th>
                <th className="text-[#CCCEEF] text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  END TIME
                </th>
                <th className="text-[#CCCEEF] text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  STATUS
                </th>
                <th className="text-[#CCCEEF] text-[12px] font-[600] text-left px-[30px] py-[20px]">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className="border-b border-[#1e1e1e]">
                    <td className="text-white text-[12px] px-[30px] py-[20px]">
                      {item.amount} CYNQ
                    </td>
                    <td className="text-white text-[12px] px-[30px] py-[20px]">
                      {item.lockDuration} Days
                    </td>
                    <td className="text-white text-[12px] px-[30px] py-[20px]">
                      {item.fixedReturns}%
                    </td>
                    <td className="text-white text-[12px] px-[30px] py-[20px]">
                      {item.startTime}
                    </td>
                    <td className="text-white text-[12px] px-[30px] py-[20px]">
                      {item.endTime}
                    </td>
                    <td className="text-white text-[12px] px-[30px] py-[20px]">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          item.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="text-white whitespace-nowrap text-[14px] px-[30px] py-[20px]">
                      <button
                        className={`px-2 py-2 text-[12px] rounded-lg transition-all text-white ${
                          item.status === "Active"
                            ? "bg-yellow-500 hover:bg-yellow-400"
                            : "bg-[#7B15F8] hover:bg-[#7b15f8b9]"
                        }`}
                      >
                        {item.status === "Active" ? "Withdraw" : "Restake"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center text-[14px] text-white/50 py-5"
                  >
                    No stakes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Dummy data
const data = [
  {
    amount: "1,000",
    lockDuration: "30",
    fixedReturns: "12",
    startTime: "2024-02-19 14:30",
    endTime: "2024-03-20 14:30",
    status: "Active",
  },
  {
    amount: "2,500",
    lockDuration: "90",
    fixedReturns: "18",
    startTime: "2024-01-15 09:45",
    endTime: "2024-04-15 09:45",
    status: "Withdrawn",
  },
];
