"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Predictive Ai",
    link: "/predictive-ai",
  },
  {
    text: "Ai Trading",
    link: "/ai-assistant",
  },
  {
    text: "Ai Arbitrage",
    link: "/ai-arbitrage",
  },
  {
    text: "Ai Tax Tool",
    link: "/ai-tax-tool",
  },

  {
    text: "Staking",
    link: "/staking",
  },
];
type propType = {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Nav({ sideBarOpen, setSideBarOpen }: propType) {
  const PATHNAME = usePathname();
  const [optionOpen, setOptionOpen] = useState<boolean>(false);
  const pathname = `/${PATHNAME.split("/")[1]}`;
  const [highlight, setHighlight] = useState<boolean>(false);

  // Animation effect for Staking menu item
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlight((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={`${
        sideBarOpen
          ? "transition-all duration-500"
          : "-translate-x-full lg:translate-x-0"
      } z-[100] lg:rounded-[100px] lg:w-fit md:w-[40%] sm:w-[50%] w-full lg:static fixed lg:h-fit h-screen top-0 left-0 backdrop-blur-3xl lg:bg-transparent bg-black/70 lg:p-0 sm:pl-6 py-4 px-3 lg:border-none border-r border-white/15`}
    >
      <div className="flex justify-between items-center">
        <Link className="lg:hidden" href="/">
          <Image
            src={"/logo.svg"}
            alt="Cynq AI"
            width={150}
            height={50}
            className="bg-center bg-no-repeat bg-contain"
          />
        </Link>
        <button
          className="lg:hidden border border-[#7B15F8] rounded-2xl h-fit px-3 py-1 text-[#7B15F8] hover:text-[#7B15F8]"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          {"<< close"}
        </button>
      </div>
      <hr className="mt-4 border border-white/15 md:hidden" />
      <div className="relative mt-6 mx-4 text-left block lg:hidden">
        <div>
          <button
            onClick={() => setOptionOpen(!optionOpen)}
            type="button"
            className="inline-flex w-fit border border-white/15 items-center justify-center gap-x-1.5 rounded-md p-2"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <Image src={"/usFlag.svg"} alt="usFlag" width={23} height={13} />
            <svg
              className="-mr-1 size-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            optionOpen ? "" : "hidden"
          } absolute z-10 mt-2.5 rounded-md border border-white/15 bg-black text-nowrap px-4`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              <Image src={"/usFlag.svg"} alt="usFlag" width={23} height={13} />{" "}
              us
            </a>
          </div>
        </div>
      </div>
      <ul className="flex w-full lg:m-0 my-6 lg:flex-row flex-col lg:border lg:bg-black/60 border-white/15 lg:rounded-[100px] md:gap-x-4 xl:gap-x-8 gap-y-4 text-white/70 py-2 px-4 text-nowrap lg:text-sm text-base">
        {links.map((link, ind) => (
          <li
            key={ind}
            className={`${link.text === "Staking" ? "relative group" : ""}`}
          >
            <Link
              href={link.link}
              className={`${
                pathname == link.link
                  ? "text-[#7B15F8]"
                  : link.text === "Staking"
                  ? highlight
                    ? "text-[#7B15F8] transition-all duration-300"
                    : "hover:text-[#7B15F8]/70 transition-all duration-300"
                  : "hover:text-[#7B15F8]/70"
              }`}
            >
              {link.text}
            </Link>
            {link.text === "Staking" && (
              <>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#7B15F8] to-purple-400 transform origin-left transition-all duration-300 ${
                    highlight
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
                <span
                  className={`absolute -top-1 right-0 lg:block hidden h-2 w-2 rounded-full ${
                    highlight ? "bg-[#fff] animate-pulse" : "bg-transparent"
                  }`}
                ></span>
              </>
            )}
          </li>
        ))}
      </ul>
      <Button className="lg:hidden block px-6 py-2 text-black rounded-lg transition-all duration-700 hover:rounded-sm w-full bg-[#ffffff]">
        Whitepaper
      </Button>
    </nav>
  );
}
