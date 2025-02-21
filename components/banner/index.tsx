import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const MarqueeBanner: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[48px] bg-purple-600 pt-4 overflow-hidden whitespace-nowrap">
      <motion.div
        key={String(isSmallScreen)} // ✅ Convert boolean to string
        className="text-white text-[18px] leading-[18px] font-medium flex items-center gap-2"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: isSmallScreen ? 10 : 30, // 8s for small screens, 30s for large screens
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
