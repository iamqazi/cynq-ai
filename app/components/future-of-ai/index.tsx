import Image from "next/image";
import FutureAnimation from "./FutureAnimation";

export default function FutureOfAi() {
  return (
    <div className="relative flex justify-center min-h-screen">
      <FutureAnimation />

      <section
        aria-label="AI-Driven Decentralized Finance Section"
        className="py-20 absolute bottom-[20px]  text-white"
      >
        <div className="container mx-auto px-4 max-w-6xl  ">
          <div
            className="border border-white/15 rounded-lg px-4 md:pt-28 sm:pt-20 pt-12 md:pb-12 pb-6 text-center flex flex-col items-center shadow-[0px_0px_130px_#9B4BFC] sm:gap-8 gap-6"
            style={{
              background: " radial-gradient(circle at -20%, #271141, #000 )",
            }}
          >
            {/* Semantic heading structure */}
            <header>
              <h1 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium  leading-tight sm:max-w-[70%] mx-auto ">
                CYNQAi
                <br />
                The Future of AI-Driven Decentralized Finance
              </h1>
            </header>

            {/* Email Form */}
            <form
              action="/submit-email"
              method="POST"
              className="w-full max-w-md"
            >
              <div className="flex flex-col sm:flex-row gap-2 border border-white/15 rounded-lg p-1 ">
                <div className="flex-1 relative">
                  <label htmlFor="email-input" className="sr-only">
                    Enter your email address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full px-3 py-2 backdrop-blur-md bg-transparent rounded-lg focus:outline-none "
                  />
                </div>
                <button
                  type="submit"
                  className="transition-all duration-500 bg-white hover:bg-transparent border rounded-lg py-1.5 px-8 text-black hover:text-white  "
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className=" flex space-x-10 items-center">
              {[
                { href: "#", src: "/mingcute.svg", alt: "Mingcute Icon" },
                { href: "#", src: "/twitter.svg", alt: "Twitter Icon" },
                { href: "#", src: "/telegram.svg", alt: "Telegram Icon" },
                { href: "#", src: "/magic.svg", alt: "Magic Icon" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    width={50}
                    height={50}
                    alt={social.alt}
                    className="max-w-[30px] sm:max-w-[50px] hover:scale-110 select-none"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
