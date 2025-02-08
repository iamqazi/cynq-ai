import FutureOfAi from "../components/future-of-ai";
import HeroSection from "../components/hero-section";
import Utilities from "../components/utilities";
import Footer from "../components/shared/footer";

export default function LandingPage() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        {" "}
        <section id="home">
          <HeroSection />
          <Utilities />
          <FutureOfAi />
          <Footer />
        </section>
      </section>
    </>
  );
}
