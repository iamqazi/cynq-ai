import FutureOfAi from "../components/future-of-ai";
import About from "../components/about";
import HeroSection from "../components/hero-section";
import Utilities from "../components/utilities";
import Footer from "../components/shared/footer";
import DevelopmentProcess from "../components/roadmap-animation";
import Navbar from "../components/shared/navbar";

export default function LandingPage() {
  return (
    <>
      <div>
        <section className="max-w-[1440px] mx-auto">
          <section id="home">
            <Navbar />
            <HeroSection />
            <About />
            <DevelopmentProcess />
            <Utilities />
            <FutureOfAi />
            <Footer />
          </section>
        </section>
      </div>
    </>
  );
}
