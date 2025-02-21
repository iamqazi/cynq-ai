import { CircleDot } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

type QuarterData = Record<string, string[]>;

const Roadmap: React.FC = () => {
  const t = useTranslations("");
  const quarters = t.raw("quarters") as QuarterData;

  return (
    <div className="container mx-auto mt-4 px-4 py-8">
      <h1 className="text-[3.5rem] text-white font-[500] text-center mb-8">
        {t("roadmapTitle")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto">
        {Object.entries(quarters).map(
          ([heading, points]: [string, string[]], index: number) => (
            <div
              key={index}
              className="h-auto lg:h-[352px] xl:h-[450px] w-full xl:w-[300px] max-w-md mx-auto md:max-w-none rounded-3xl"
            >
              <div
                style={{
                  background: "radial-gradient(circle at -20%, #542887, #000 )",
                }}
                className="h-auto lg:h-[352px] xl:h-[450px] w-full xl:w-[300px] rounded-[2rem] border-[1px] border-[#11BBFF]/50 px-4 md:px-6 py-5 text-left"
              >
                <div className="gap-2 md:gap-4">
                  <h4 className="text-[1.5rem] md:text-[2.25rem] font-[700] text-white">
                    {heading}
                  </h4>
                </div>
                <ul className="py-4 md:py-6 text-sm md:text-base text-white space-y-2">
                  {points.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CircleDot
                        height={5}
                        width={5}
                        fill="white"
                        className="text-white mt-[9px]"
                      />
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Roadmap;
