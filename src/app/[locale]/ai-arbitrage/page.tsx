import { useTranslations } from "next-intl";
import ArbitrageKeyFeature from "../../../components/Artbitrage-animation";
import FAQSection from "../../../components/faq";
import FutureOfAi from "../../../components/future-of-ai";
import { SecondaryHero } from "../../../components/hero-section";
import Footer from "../../../components/shared/footer";
import Navbar from "../../../components/shared/navbar";

export default function AIArbitrage() {
  const t = useTranslations();
  return (
    <main className="bg-black">
      <Navbar />
      <SecondaryHero
        text={t("ai_arbitrage_instant_action")}
        btnText={t("ai_arbitrage_audit_button")}
        heading={t("arbitrage_heading")}
      />
      <ArbitrageKeyFeature />

      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
