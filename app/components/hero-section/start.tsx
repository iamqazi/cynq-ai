"use client";

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [circles, setCircles] = useState<
    {
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const numCircles = 100;
    const newCircles = Array.from({ length: numCircles }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 4, // Random size between 4px and 12px
      left: Math.random() * 100, // Positioning in viewport width
      duration: Math.random() * 9 + 5, // Animation duration between 5s and 14s
      delay: Math.random() * 4, // Random delay up to 4s
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="w-full inset-0 overflow-hidden bg-[#02102700]">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute bg-white rounded-full mix-blend-screen animate-float"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}vw`,
            bottom: `-10vh`,
            animationDuration: `${circle.duration}s`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          from {
            transform: translateY(100vh);
            opacity: 1;
          }
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
