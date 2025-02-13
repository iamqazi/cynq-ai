import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  const sectionRef = useRef<HTMLElement>(null);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Initialize article refs array
    articleRefs.current = articleRefs.current.slice(0, utilitiesArray.length);

    articleRefs.current.forEach((article) => {
      if (!article) return;

      const textContent = article.querySelector(".text-content");
      const imageContainer = article.querySelector(".image-container");
      const connectionLine = article.querySelector(".connection-line");

      if (!textContent || !imageContainer) return;

      // Set initial state - completely invisible
      gsap.set([textContent, imageContainer, connectionLine].filter(Boolean), {
        opacity: 0,
        y: 0,
      });

      // Create scrub animation for progressive reveal
      ScrollTrigger.create({
        trigger: article,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        onUpdate: (self) => {
          // Calculate opacity based on scroll progress
          // 0 at start, 0.5 at middle, 1 at end
          const progress = self.progress;
          const opacity = Math.min(progress * 2, 1);

          gsap.to(textContent, {
            opacity: opacity,
            y: 0,
            duration: 0.1,
            overwrite: true,
          });

          gsap.to(imageContainer, {
            opacity: opacity,
            y: 0,
            duration: 0.1,
            overwrite: true,
          });

          if (connectionLine) {
            // Delay the connection line animation
            gsap.to(connectionLine, {
              opacity: Math.max(0, (progress - 0.3) * 1.5),
              scale: 0.95 + progress * 0.05,
              duration: 0.1,
              overwrite: true,
            });
          }
        },
      });

      // Create reverse animation for fade-out when scrolling back
      ScrollTrigger.create({
        trigger: article,
        start: "bottom 100%",
        end: "top 0%",
        onLeaveBack: () => {
          gsap.to(
            [textContent, imageContainer, connectionLine].filter(Boolean),
            {
              opacity: 0,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
            }
          );
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Setup refs callback
  const setArticleRef = (el: HTMLElement | null, i: number) => {
    articleRefs.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      aria-label="CYNQ Ai Utilities"
      className="lg:px-20 p-14  flex flex-col items-center text-white"
    >
      <header className="md:mb-20 sm:mb-16 mb-12 text-center">
        <h1 className="text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
          Utilities
        </h1>
      </header>

      <div role="list" className="w-full max-w-[1000px]">
        {utilitiesArray.map((util, i) => (
          <article
            key={i}
            role="listitem"
            className="mb-10 sm:mb-0"
            ref={(el: HTMLElement | null) => setArticleRef(el, i)}
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-x-28 sm:gap-10 gap-6 place-items-center">
              {/* Text Content */}
              <div
                className={`${
                  i % 2 ? "sm:order-2 order-1" : "order-1"
                } flex flex-col lg:gap-y-5 gap-y-3 sm:text-start text-center text-content`}
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
                className="order-1 w-full h-full sm:max-w-[500px] max-w-[300px] sm:max-h-[400px] max-h-[250px] relative rounded-xl overflow-clip image-container border-animation animate-glow"
                aria-hidden="true"
              >
                <Image
                  src={util.img}
                  alt={util.title}
                  quality={85}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover select-none"
                  loading={i < 2 ? "eager" : "lazy"}
                  itemProp="image"
                />
              </div>
            </div>

            {/* Connection Line */}
            {i !== utilitiesArray.length - 1 && (
              <div className="!transform connection-line !translate-x-0 !translate-y-0 sm:block xl:max-w-[600px] lg:max-w-[500px] md:max-w-[400px] max-w-[350px] max-h-[123px] mx-auto connection-line">
                <Image
                  src={i % 2 ? "/connectLine2.png" : "/connectLine.png"}
                  alt=""
                  role="presentation"
                  quality={85}
                  width={670}
                  height={123}
                  className="w-full connection-line h-full select-none"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
