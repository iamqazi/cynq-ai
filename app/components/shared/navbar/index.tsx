"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Button } from "@nextui-org/react";

export default function Navbar() {
  const pathname = usePathname();
  //   const documentUrl =
  //   ("https://docs.google.com/document/d/1yRy_y1yqMba74uwvqMhZRiZHk-76bCgp/edit");
  // const handleButtonClick = () => {
  //   window.open("/whitepaper.pdf", "_blank");
  // };
  //   const handleClick = () => {
  //     window.open(documentUrl, "_blank", "noopener,noreferrer");
  //   };

  const handleButtonClickHome = () => {
    window.location.href = "/";
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="w-full bg-black border-b py-[18px] border-gray-900 sticky top-0 z-10">
        <div className="max-w-[1440px] mx-[40px] h-[48px]  flex justify-between items-center p-4">
          {/* Logo on the left */}
          <Link href="/" className="text-white text-xl font-bold">
            <Image
              onClick={handleButtonClickHome}
              src={"/logo.png"}
              width={190}
              height={50}
              alt="logo"
            />
          </Link>

          {/* Navbar menu for medium and large screens */}
          <div className="hidden  md:flex flex-grow justify-center">
            <ul className="flex border px-[26px] py-[14px] rounded-full border-white/15 space-x-8 text-white/70 ">
              <li>
                <Link href="/">
                  <Button className={isActive("/") ? "text-[#7B15F8]" : ""}>
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/ai-arbitrage">
                  <Button
                    className={isActive("/about") ? "text-[#7B15F8]" : ""}
                  >
                    Ai Arbitrage
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/ai-tax-tool">
                  <Button
                    className={isActive("/why-us") ? "text-[#7B15F8]" : ""}
                  >
                    AI Tax Tool
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <Button
                    className={isActive("/roadmap") ? "text-[#7B15F8]" : ""}
                  >
                    Blog
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <Button
                    className={isActive("/roadmap") ? "text-[#7B15F8]" : ""}
                  >
                    Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Signup Button on the right for medium and large screens */}
          <div className="hidden md:block">
            <Button className="bg-[#fff] z-10 text-[16px] text-black font-medium px-[48px] py-[10px] rounded-[8px]">
              White Paper
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="md:hidden block">
        <Menu right>
          <Link
            id="home"
            className={`menu-item ${isActive("/") ? "text-white" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/about") ? "text-white" : ""}`}
            href="/about"
          >
            About Us
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/why-us") ? "text-white" : ""}`}
            href="/why-us"
          >
            Why Us
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/roadmap") ? "text-white" : ""}`}
            href="/roadmap"
          >
            Roadmap
          </Link>
        </Menu>
      </div>
    </>
  );
}
