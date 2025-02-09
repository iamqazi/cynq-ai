import FAQSection from "../components/faq";
import HeroSection from "../components/hero-section";

export default function LandingPage() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        {" "}
        <section id="home">
          <HeroSection />
          <FAQSection />
        </section>
      </section>
    </>
  );
}
