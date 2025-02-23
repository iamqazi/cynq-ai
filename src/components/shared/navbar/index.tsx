"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";
//icons
import { Menu } from "lucide-react";
import { Button } from "@nextui-org/react";
import LanguageDropdown from "../../languagebutton";
import { useTranslations } from "next-intl";

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const t = useTranslations("");
  const handleClick = () => {
    window.open("/whitepaper.pdf", "_blank");
  };
  return (
    <header
      className={`sticky top-0 bg-black w-full  z-50 py-4 sm:px-6 px-3 flex justify-between items-center border-b border-white/15 text-sm `}
    >
      <Link href="/" className="relative z-[1]">
        <Image
          src={"/logo.svg"}
          alt="Cynq AI"
          width={150}
          height={50}
          className="bg-center bg-no-repeat bg-contain"
        />
      </Link>
      {sideBarOpen && (
        <div className="lg:hidden fixed w-screen h-screen top-0 left-0 bg-black/80  z-[60]"></div>
      )}
      <Nav sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div className=" ml-4 gap-4 flex items-center  relative z-[1]">
        <LanguageDropdown />
        <Button
          onClick={handleClick}
          className="lg:block hidden px-6 py-2 text-black rounded-lg transition-all duration-700 hover:rounded-sm bg-[#ffffff]"
        >
          {t("nav_whitepaper")}
        </Button>
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className=" lg:hidden text-[#7B15F8] hover:text-[#7B15F8]/50 text-3xl"
        >
          <Menu size={35} />
        </button>
      </div>
    </header>
  );
};

export default Header;
