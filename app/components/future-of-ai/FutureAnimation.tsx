"use client";
import React, { useEffect, useRef, useState } from "react";

const FutureAnimation: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef<number>(0);

  const centerX = 600;
  const centerY = 800;
  const radii = [300, 380, 460, 540, 620, 700]; // Added one more circular path

  useEffect(() => {
    const animate = () => {
      setAngle((prevAngle) => (prevAngle + 0.005) % (2 * Math.PI)); // Slowed down the increment
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="absolute inset-0  overflow-hidden pointer-events-none ">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 1600"
        preserveAspectRatio="xMidYMin slice"
        className="absolute sm:top-[-180px] top-[-80px] left-0 w-full h-full  opacity-30"
      >
        {/* Radial Gradient Background */}
        <defs>
          <radialGradient
            id="bg-gradient"
            cx="50%"
            cy="60%"
            r="70%"
            fx="50%"
            fy="60%"
          >
            <stop offset="0%" stopColor="rgba(123, 21, 248, 0)" />
            <stop offset="100%" stopColor="rgba(100, 149, 237, 0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bg-gradient)" />

        {/* Circles (Paths) */}
        {radii.map((radius, index) => (
          <circle
            key={index}
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="rgba(249, 249, 249, 0.442)"
            strokeWidth="1"
            strokeDasharray={index % 2 === 0 ? "none" : "5,8"} // Small dashed pattern
          />
        ))}

        {/* Dots Moving Along Paths */}
        {radii.map((radius, index) => {
          const x = centerX + radius * Math.cos(angle + index * (Math.PI / 3));
          const y = centerY + radius * Math.sin(angle + index * (Math.PI / 3));
          const isBorderedDot = index % 2 === 0; // Alternating dot styles

          return isBorderedDot ? (
            <g key={index}>
              {/* Outer Border Circle */}
              <circle
                cx={x}
                cy={y}
                r="6"
                fill="none"
                stroke="#c9cbcfdf"
                strokeWidth="1.5"
              />
              {/* Inner Dot */}
              <circle cx={x} cy={y} r="3" fill="#c9cbcfdf" />
            </g>
          ) : (
            <circle key={index} cx={x} cy={y} r="4" fill="#c9cbcfdf" />
          );
        })}
      </svg>
    </div>
  );
};

export default FutureAnimation;
