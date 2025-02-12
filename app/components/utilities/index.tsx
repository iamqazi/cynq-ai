import Image from "next/image";

const utilitiesArray = [
  {
    title: "Decentralized Predictive AI for Crypto Predictions",
    text: "The CYNQAi Decentralized Predictive AI is a groundbreaking AI-driven forecasting system that provides real-time crypto price predictions, market risk assessments, and investment insights.",
    img: "/utilities1.png",
  },
  {
    title: "AI-Powered Crypto Trading Assistant",
    text: "This AI-driven assistant operates 24/7, adapting to market conditions faster than human traders and eliminating emotional biases that often lead to poor trading decisions.",
    img: "/utilities2.png",
  },
  {
    title: "AI-Optimized Cross-Chain Arbitrage Bot",
    text: "The CYNQAi AI-Optimized Cross-Chain Arbitrage Bot is an automated trading system designed to identify and execute arbitrage opportunities across multiple blockchains and exchanges with precision, speed, and risk management.",
    img: "/utilities3.png",
  },
  {
    title: "AI-Based Crypto Tax Optimization Tool",
    text: "The CYNQAi AI-Based Crypto Tax Optimization Tool is an automated AI-driven system designed to track, analyze, and optimize crypto tax reporting across multiple exchanges, wallets, and blockchain networks.",
    img: "/utilities4.png",
  },
];

export default function Utilities() {
  return (
    <section
      aria-label="CYNQ Ai Utilities"
      className="lg:p-20 sm:p-14 p-8 flex flex-col items-center"
    >
      <header className="md:mb-20 sm:mb-16 mb-12 text-center">
        <h1 className="text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
          Utilities
        </h1>
      </header>

      <div role="list" className="w-full max-w-[1000px]">
        {utilitiesArray.map((util, index) => (
          <article key={index} role="listitem" className="mb-10 sm:mb-0">
            <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-x-28 sm:gap-10 gap-6 place-items-center">
              {/* Text Content */}
              <div
                className={`${
                  index % 2 ? "sm:order-2 order-1" : "order-1"
                } flex flex-col lg:gap-y-5 gap-y-3 sm:text-start text-center`}
                itemProp="description"
              >
                <h2 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium">
                  <span itemProp="name">{util.title}</span>
                </h2>
                <p className="text-white/70 lg:text-xl md:text-lg sm:text-base text-[14px] leading-[18px]">
                  {util.text}
                </p>
              </div>

              {/* Image Container */}
              <div
                className={`order-1 w-full h-full sm:max-w-[500px] max-w-[300px] sm:max-h-[400px] max-h-[250px] relative border border-white/15 rounded-xl overflow-clip bg-[#8C45FF1C]`}
                aria-hidden="true"
              >
                <Image
                  src={util.img}
                  alt={util.title} // More descriptive alt text
                  quality={85} // Reduced for performance
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  loading={index < 2 ? "eager" : "lazy"} // Lazy load below fold
                  itemProp="image"
                />
              </div>
            </div>

            {/* Connection Line */}
            {index !== utilitiesArray.length - 1 && (
              <div className="hidden sm:block xl:max-w-[600px] lg:max-w-[500px] md:max-w-[400px] max-w-[350px] max-h-[123px] mx-auto">
                <Image
                  src={index % 2 ? "/connectLine2.png" : "/connectLine.png"}
                  alt=""
                  role="presentation"
                  quality={85}
                  width={670}
                  height={123}
                  className="w-full h-full"
                  loading="lazy" // Always lazy load decorative images
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
