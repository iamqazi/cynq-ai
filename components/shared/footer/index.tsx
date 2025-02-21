"use client";
import { CircleArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const sitemapLinks = [
    { href: "/", label: "Home" },
    { href: "/predictive-ai", label: "Predictive Ai" },
    { href: "/ai-assistant", label: "Ai Assistant" },
    { href: "/ai-arbitrage", label: "Ai Arbitrage" },
    { href: "/ai-tax-tool", label: "Ai Tax Tool" },
  ];

  const socialLinks = [
    {
      href: "https://medium.com/cynqai",
      src: "/mingcute.svg",
      alt: "Mingcute Icon",
    },
    {
      href: "https://x.com/cynqai",
      src: "/twitter.svg",
      alt: "Twitter Icon",
    },
    {
      href: "https://t.me/cynqai",
      src: "/telegram.svg",
      alt: "Telegram Icon",
    },
    {
      href: "https://linktr.ee/cynqai",
      src: "/magic.svg",
      alt: "Magic Icon",
    },
  ];

  return (
    <footer role="contentinfo" className="w-full relative">
      <div className="bg-black border-y border-[#95959525] flex flex-col gap-5 p-10 pb-5 items-center text-center relative z-20 text-white/70 ">
        {/* Logo */}
        <Link href="/" title="Go to homepage">
          <Image
            src="/logo.svg"
            width={190}
            height={50}
            alt="Cynq Ai Logo"
            priority
          />
        </Link>

        {/* section: Navigation links */}
        <nav aria-label="Footer Links">
          <ul className=" flex flex-wrap justify-center gap-x-10 gap-y-5 font-normal text-sm text-nowrap">
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "text-[#7B15F8]"
                      : "hover:text-[#7B15F8]"
                  }
                  aria-current={pathname === link.href ? "page" : undefined}
                  title={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" flex space-x-10 items-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              title={social.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                width={30}
                height={30}
                alt={social.alt}
                className="hover:scale-110 select-none"
              />
            </a>
          ))}
        </div>
        <CircleArrowUp
          height={50}
          width={50}
          className="text-[#7B15F8] absolute bottom-10 right-10 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      {/* Footer bottom bar */}
      <aside className="py-3 px-5 flex justify-between bg-black flex-wrap gap-3 sm:text-base text-sm text-white/70">
        <small className="sm:mx-0 mx-auto">Cynqai © All rights reserved.</small>
        <small className="sm:mx-0 mx-auto">
          <Link
            href="/terms-and-conditions"
            title="Terms and Conditions"
            className="hover:text-[#7B15F8]"
          >
            Terms and Conditions
          </Link>{" "}
          /{" "}
          <Link
            href="/privacy-policy"
            title="Privacy Policy"
            className="hover:text-[#7B15F8]"
          >
            Privacy Policy
          </Link>
        </small>
      </aside>
    </footer>
  );
}
