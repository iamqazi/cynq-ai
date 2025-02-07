"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import GradientButton from "../button";

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
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8 text-white">
              <li>
                <Link href="/">
                  <button className={isActive("/") ? "text-[#01F2A7]" : ""}>
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button
                    className={isActive("/about") ? "text-[#01F2A7]" : ""}
                  >
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/why-us">
                  <button
                    className={isActive("/why-us") ? "text-[#01F2A7]" : ""}
                  >
                    Why Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/roadmap">
                  <button
                    className={isActive("/roadmap") ? "text-[#01F2A7]" : ""}
                  >
                    Roadmap
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Signup button on the right for medium and large screens */}
          <div className="hidden md:block">
            <GradientButton text="white paper" />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="md:hidden block">
        <Menu right>
          <Link
            id="home"
            className={`menu-item ${isActive("/") ? "text-[#000]" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/about") ? "text-[#000]" : ""}`}
            href="/about"
          >
            About Us
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/why-us") ? "text-[#000]" : ""}`}
            href="/why-us"
          >
            Why Us
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/roadmap") ? "text-[#000]" : ""}`}
            href="/roadmap"
          >
            Roadmap
          </Link>
        </Menu>
      </div>
    </>
  );
}
