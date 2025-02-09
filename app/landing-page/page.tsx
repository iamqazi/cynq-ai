import About from "../components/about";
import HeroSection from "../components/hero-section";
import DevelopmentProcess from "../components/roadmap-animation";
import Navbar from "../components/shared/navbar";

export default function LandingPage() {
  return (
    <div className="max-w-[1440px] mx-auto space-y-16">
      <section id="home">
        <Navbar />
      </section>
      <section>
        <HeroSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <DevelopmentProcess />
      </section>
    </div>
  );
}
