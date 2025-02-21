"use client";

import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { PieChart, Pie, Cell } from "recharts";

interface DataItem {
  name: string;
  color: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Presale", value: 40, color: "#11BBFF" },
  { name: "Stacking & Rewards", value: 20, color: "#7B15F8" },
  { name: "Team & Advisors", value: 5, color: "url(#gradient1)" },
  { name: "Liquidity & Exchange listings", value: 20, color: "#9215F8" },
  { name: "Stratagic Reserves", value: 10, color: "#7800AB" },
  { name: "Marketing & KOLs", value: 5, color: "#A372FB" },
];

const RADIAN = Math.PI / 180;

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  index: number;
}

// Helper function to split text into multiple lines based on a max character limit per line
const wrapText = (text: string, maxChars: number): string[] => {
  const words = text.split(" ");
  let line = "";
  const lines: string[] = [];
  words.forEach((word) => {
    // Check if adding the next word would exceed the limit
    if ((line + word).length > maxChars) {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line += word + " ";
    }
  });
  if (line) {
    lines.push(line.trim());
  }
  return lines;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}: CustomLabelProps) => {
  // Offset the label 40 pixels outside of the pie slice.
  const radius = outerRadius + 40;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  // Wrap the label text (using a max of 15 characters per line, adjust as needed)
  const labelLines = wrapText(data[index].name, 20);
  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor={x > cx ? "start" : "end"}
      className="lg:text-[20px] w-[100px] text-[16px] text-white"
    >
      {labelLines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? ".5rem" : "1.2em"}>
          {line}
        </tspan>
      ))}
      <tspan fill="#9B4AFF" dx={"5px"}>
        {(percent * 100).toFixed(0)}%
      </tspan>
    </text>
  );
};

const PieChartWithLabels: React.FC = () => {
  const pieChartSection = useRef<HTMLDivElement>(null);
  const isInView = useInView(pieChartSection, { amount: 0.3 });
  const t = useTranslations("");
  const data: DataItem[] = [
    { name: t("presale"), value: 40, color: "#11BBFF" },
    { name: t("stakingRewards"), value: 20, color: "#7B15F8" },
    { name: t("teamAdvisors"), value: 5, color: "url(#gradient1)" },
    { name: t("liquidityExchange"), value: 20, color: "#9215F8" },
    { name: t("strategicReserves"), value: 10, color: "#7800AB" },
    { name: t("marketingKOLs"), value: 5, color: "#A372FB" },
  ];
  const innerRadius = 140;
  const outerRadius = 187.5;

  // Define image dimensions
  const imageWidth = 200;
  const imageHeight = 200;

  return (
    <section
      className=" sm:py-14 py-8 px-2 sm:px-5  text-white overflow-hidden relative z-[1] max-w-[1440px] mx-auto  "
      aria-label="Tokenomics"
    >
      {/* Section Title */}
      <h1 className="faq-item lg:text-5xl md:text-4xl text-3xl font-medium text-center text-white ">
        {t("sectionTitle")}
      </h1>
      <section
        ref={pieChartSection}
        className="my-10 lg:py-10 pt-10 lg:px-20 sm:px-5 px-3 border rounded-lg border-white/15 flex flex-wrap items-center gap-x-10 transition-all"
        style={{ backgroundImage: "linear-gradient(130deg,#190D2E,#000000)" }}
      >
        <div
          className={` ${
            isInView ? "opacity-100" : "opacity-0 translate-y-10"
          } transition-all items-center flex flex-col justify-center mb-[100px] duration-[1500ms] sm:text-xl md:text-2xl flex-1`}
        >
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-semibold mb-5">
            {t("tokenDetails")}
          </h3>
          <div className="flex flex-col gap-3 p-5 border w-[400px] font-thin border-white/15 rounded-xl text-white/70">
            <span className="text-[1.125rem] md:text-[1.625rem]">
              {t("tokenName")}:{" "}
              <span className="font-semibold text-white">CYNQAI</span>
            </span>
            <hr className="border-b border-white/15" />
            <span className="text-[1.125rem] md:text-[1.625rem]">
              {t("tokenTicker")}:{" "}
              <span className="font-semibold text-white">$CYNQ</span>
            </span>
            <hr className="border-b border-white/15" />
            <span className="text-[1.125rem] md:text-[1.625rem]">
              {t("chain")}:{" "}
              <span className="font-semibold text-white">Ethereum</span>
            </span>
            <hr className="border-b border-white/15" />
            <span className="text-[1.125rem] md:text-[1.625rem]">
              {t("contract")}:{" "}
              <span className="font-semibold text-white">
                {t("toBeAnnounced")}
              </span>
            </span>
            <hr className="border-b border-white/15" />
            <span className="text-[1.125rem] md:text-[1.625rem]">
              {t("supply")}:{" "}
              <span className="font-semibold text-white">10,000,000,000</span>
            </span>
            <hr className="border-b border-white/15" />
            <span className="text-[1.125rem] md:text-[1.625rem]">
              {t("decimals")}:{" "}
              <span className="font-semibold text-white">9</span>
            </span>
          </div>
        </div>
        {isInView ? (
          <PieChart
            width={600}
            height={500}
            className="mx-auto top-[-20px] md:!w-[90%] lg:!w-[80%] xl:!w-[60%] pie-responsive relative"
          >
            {/* Define the linear gradient in an SVG <defs> block */}
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#11BBFF" />
                <stop offset="100%" stopColor="#7D15FB" />
              </linearGradient>
            </defs>
            <Pie
              className="w-[130%]"
              data={data}
              cx={300} // Adjusted to half of new width
              cy={235} // Adjusted to half of new height
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
              stroke="none"
              startAngle={90}
              endAngle={-270}
              isAnimationActive={true}
              animationDuration={700}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="none" // Removes any default stroke on individual slices
                />
              ))}
            </Pie>

            {/* SVG image element placed in the center of the chart */}
            <image
              x={300 - imageWidth / 2} // Centered based on new width
              y={250 - imageHeight / 2} // Centered based on new height
              width={imageWidth}
              height={imageHeight}
              href="/cyanaiPie.gif"
            />

            {/* SVG Gradient element placed in the center of the chart */}
            <image
              x={300 - 400 / 2 - 5} // Centered based on new width
              y={250 - 400 / 2} // Centered based on new height
              width={400}
              height={400}
              href="/pieGradient.svg"
            />
          </PieChart>
        ) : (
          <div
            style={{ width: 600, height: 500 }}
            className="mx-auto pie-responsive relative"
          ></div>
        )}
      </section>
    </section>
  );
};

export default PieChartWithLabels;
