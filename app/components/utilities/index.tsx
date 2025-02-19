import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Define the utilities array
const utilitiesArray = [
  {
    title: "Decentralized Predictive AI for Crypto Predictions",
    text: "The CYNQAi Decentralized Predictive AI is a groundbreaking AI-driven forecasting system that provides real-time crypto price predictions, market risk assessments, and investment insights.Unlike traditional data oracles that only relay historical and real-time data, CYNQAi’s AI-powered prediction engine analyzes on-chain transactions, social sentiment, liquidity movements, and technical indicators to forecast future price trends and market behaviors.📊 Know the market before it moves – with AI-driven accuracy and full decentralization!",
    img: "/utilities1.png",
  },
  {
    title: "AI-Powered Crypto Trading Assistant",
    text: "An AI-Powered Crypto Trading Assistant is a next-generation trading platform that leverages machine learning (ML), deep learning, and predictive analytics to optimize cryptocurrency investments. By analyzing real-time market data, historical trends, and on-chain metrics, the AI provides automated trading strategies, risk management, and portfolio optimization for traders of all levels. This AI-driven assistant operates 24/7, adapting to market conditions faster than human traders and eliminating emotional biases that often lead to poor trading decisions.",
    img: "/utilities2.png",
  },
  {
    title: "AI-Optimized Cross-Chain Arbitrage Bot",
    text: "The CYNQAi AI-Optimized Cross-Chain Arbitrage Bot is an automated trading system designed to identify and execute arbitrage opportunities across multiple blockchains and exchanges with precision, speed, and risk management. Unlike traditional arbitrage bots that rely on predefined rules, CYNQAi’s AI-powered system adapts to market conditions in real-time, ensuring that traders maximize profits from price inefficiencies across different ecosystems. 🔍 Eliminate manual monitoring and trade execution delays—let AI detect and act on cross-chain price gaps instantly!",
    img: "/utilities3.png",
  },
  {
    title: "AI-Based Crypto Tax Optimization Tool",
    text: "The CYNQAi AI-Based Crypto Tax Optimization Tool is an automated AI-driven system designed to track, analyze, and optimize crypto tax reporting across multiple exchanges, wallets, and blockchain networks. Crypto taxation is complex, with different rules for capital gains, staking rewards, DeFi earnings, and NFT transactions. CYNQAi’s AI ensures accurate tax calculations, optimized deductions, and automated compliance reporting, allowing users to minimize liabilities and maximize tax efficiency. 📊 Say goodbye to manual tax calculations – Let AI handle your crypto taxes seamlessly!",
    img: "/utilities4.png",
  },
];

// Define blockchain node type
interface BlockchainNode {
  x: number;
  y: number;
  size: number;
  connections: number[];
  speed: number;
  angle: number;
}

export default function Utilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes] = useState<BlockchainNode[]>([]);

  // Initialize blockchain animation
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !sectionRef.current ||
      !canvasRef.current
    )
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match section size
    const resizeCanvas = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate initial nodes
    const generateNodes = (): BlockchainNode[] => {
      const newNodes: BlockchainNode[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 35000); // Adjusted density for cleaner look

      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1.5 + Math.random() * 2.5, // Smaller nodes for cleaner appearance
          connections: [],
          speed: 0.5 + Math.random() * 0.5, // Slower movement for smoother animation
          angle: Math.random() * Math.PI * 2,
        });
      }

      // Create connections - fewer connections for cleaner look
      for (let i = 0; i < newNodes.length; i++) {
        const maxConnections = 2 + Math.floor(Math.random() * 2); // Fewer connections
        const possibleConnections = [...Array(newNodes.length).keys()]
          .filter(
            (j) =>
              j !== i &&
              Math.hypot(
                newNodes[j].x - newNodes[i].x,
                newNodes[j].y - newNodes[i].y
              ) < 150
          ) // Only connect nearby nodes
          .sort(() => 0.5 - Math.random())
          .slice(0, maxConnections);

        newNodes[i].connections = possibleConnections;
      }

      return newNodes;
    };

    const initialNodes = generateNodes();
    setNodes(initialNodes);

    // Animation function for blockchain background
    const animateBlockchain = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set more subtle styles
      ctx.fillStyle = "rgba(0, 0, 0, 0.992)";
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.lineWidth = 0.8; // Thinner lines for cleaner look

      initialNodes.forEach((node, i) => {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections with subtle gradient
        node.connections.forEach((targetIndex) => {
          if (targetIndex >= initialNodes.length) return;

          const target = initialNodes[targetIndex];
          const gradient = ctx.createLinearGradient(
            node.x,
            node.y,
            target.x,
            target.y
          );
          gradient.addColorStop(0, "rgb(0, 0, 0)");
          gradient.addColorStop(1, "rgb(0, 0, 0)");

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });

        // Smoother node movement
        initialNodes[i].angle += (Math.random() - 0.5) * 0.01;
        initialNodes[i].x +=
          Math.cos(initialNodes[i].angle) * initialNodes[i].speed;
        initialNodes[i].y +=
          Math.sin(initialNodes[i].angle) * initialNodes[i].speed;

        // Keep nodes within bounds with smoother wrapping
        if (initialNodes[i].x < -50) initialNodes[i].x = canvas.width + 50;
        if (initialNodes[i].x > canvas.width + 50) initialNodes[i].x = -50;
        if (initialNodes[i].y < -50) initialNodes[i].y = canvas.height + 50;
        if (initialNodes[i].y > canvas.height + 50) initialNodes[i].y = -50;
      });

      requestAnimationFrame(animateBlockchain);
    };

    animateBlockchain();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Setup existing GSAP animations
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
      className="lg:px-20 p-14 flex flex-col items-center text-white relative overflow-hidden"
    >
      {/* Refined Blockchain Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)",
        }}
        aria-hidden="true"
      />

      <header className="md:mb-20 sm:mb-16 mb-12 text-center relative z-10">
        <h1 className="text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
          Utilities
        </h1>
      </header>

      <div role="list" className="w-full max-w-[1000px] relative z-10">
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
                className="order-1 bg-[#10081c] w-full h-full sm:max-w-[500px] max-w-[300px] sm:max-h-[400px] max-h-[250px] relative rounded-xl overflow-clip image-container border-animation border-[2px] shadow-md shadow-white/80 "
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
              <div className="!transform sm:block hidden connection-line !translate-x-0 !translate-y-0 xl:max-w-[600px] lg:max-w-[500px] md:max-w-[400px] max-w-[350px] max-h-[123px] mx-auto connection-line">
                <Image
                  src={i % 2 ? "/connectLine2.png" : "/connectLine.png"}
                  alt=""
                  role="presentation"
                  quality={85}
                  width={670}
                  height={123}
                  className="w-full  connection-line h-full select-none"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
