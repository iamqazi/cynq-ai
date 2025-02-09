"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmapItems = [
  { question: "Predictive AI Development & Testing", completed: true },
  {
    question: "Blockchain & Predictive AI Smart Contracts Deployment",
    completed: true,
  },
  { question: "Predictive AI Beta Testing & Staking Program", completed: true },
  { question: "Predictive AI Deployment", completed: false },
  { question: "Public Predictive AI Launchura", completed: false },
];

const StaticRoadmap = () => {
  const roadmapRef = useRef([]);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.utils.toArray(roadmapRef.current).forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black p-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
      {/* Left side - 3D Shape */}
      <div>
        <Image
          src={"/image-8.svg"}
          alt="img"
          height={100}
          width={100}
          className="w-[377px] h-[377px] absolute top-[350px] left-[150px]"
        />
      </div>

      {/* Right side - Content */}
      <div className="space-y-8">
        {/* Quarter and Status */}
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-bold text-white">Q1 2025</h2>
          <span className="px-4 py-1 bg-yellow-500 text-black font-semibold rounded-full text-sm">
            IN PROGRESS
          </span>
        </div>

        {/* Roadmap Items */}
        <div className="space-y-4">
          {roadmapItems.map((item, index) => (
            <div key={index} ref={divRef} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  item.completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                {item.completed && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-white text-lg">{item.question}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticRoadmap;
