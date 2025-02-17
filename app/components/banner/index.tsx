import { motion } from "framer-motion";
import React from "react";

const MarqueeBanner: React.FC = () => {
  const isSmallScreen = window.innerWidth <= 640;

  return (
    <div className="w-full h-[48px] bg-purple-600 pt-4 overflow-hidden whitespace-nowrap">
      <motion.div
        className="text-white text-[18px] leading-[18px] font-medium flex items-center gap-2"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: isSmallScreen ? 20 : 30,
          ease: "linear",
        }}
      >
        🚀 CYNQ Ai Presale is NOW LIVE! Be part of the future—claim your
        discounted tokens and exclusive access to revolutionary AI-blockchain
        technology. 🌐 Don&apos;t wait, join the innovation wave today! 🔥
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
