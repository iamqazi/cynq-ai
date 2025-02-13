"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";
//icons
import { Menu } from "lucide-react";
import { Button } from "@nextui-org/react";

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 backdrop-blur-xl w-full max-w-[1440px] z-50 py-4 sm:px-6 px-3 flex justify-between items-center border-b border-white/15 text-sm`}
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
        <div className="md:hidden fixed w-screen h-screen top-0 left-0 bg-black/80  z-[60]"></div>
      )}
      <Nav sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div className="  gap-4 flex items-center relative z-[1]">
        <Button className="xs:block hidden px-6 py-2 text-black rounded-lg transition-all duration-700 hover:rounded-sm bg-[#ffffff]">
          Whitepaper
        </Button>
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className=" md:hidden hover:text-blue-500 text-3xl"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;
