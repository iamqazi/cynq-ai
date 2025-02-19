import Image from "next/image";
import FutureAnimation from "./FutureAnimation";

export default function FutureOfAi() {
  return (
    <div className="relative flex justify-center lg:min-h-[770px] md:min-h-[600px] sm:min-h-[550px] min-h-[450px] w-full ">
      <FutureAnimation />

      <section
        aria-label="AI-Driven Decentralized Finance Section"
        className="flex absolute bottom-[80px] w-full text-white px-[10px] sm:px-[80px] xl:px-[170px] "
      >
        <div className="w-full mx-auto sm:px-4  ">
          <div
            className="border w-full lg:min-h-[520px]  border-white/15 rounded-lg px-4 text-center flex flex-col items-center shadow-[0px_0px_130px_#9B4BFC] sm:gap-[30px] gap-6"
            style={{
              background: " radial-gradient(circle at -20%, #271141, #000 )",
            }}
          >
            {/* Semantic heading structure */}
            <header>
              <h1 className="text-white xl:text-[56px] xl:leading-[58px] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-[500]  leading-tight sm:max-w-[70%] mx-auto sm:mt-[84px] mt-5">
                CYNQAi
                <br />
                The Future of AI-Driven Decentralized Finance
              </h1>
            </header>

            {/* Email Form */}
            <form
              action="/submit-email"
              method="POST"
              className="w-full max-w-[360px]"
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
            <div className=" flex space-x-10 items-center mt-[10px] sm:mb-[53px] mb-5">
              {[
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
                    width={75}
                    height={75}
                    alt={social.alt}
                    className="w-[50px] h-[50px] hover:scale-110 select-none"
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
