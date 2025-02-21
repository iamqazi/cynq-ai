import { useTranslations } from "next-intl";
import Articles from "../../../components/article";
import FAQSection from "../../../components/faq";
import FutureOfAi from "../../../components/future-of-ai";
import { SecondaryHero } from "../../../components/hero-section";
import Footer from "../../../components/shared/footer";
import Navbar from "../../../components/shared/navbar";
type articleType = {
  title: string;
  text: string;
};
export default function AITaxTool() {
  const t = useTranslations("");
  const TaxArticles: articleType[] = [
    {
      title: t("automated_tracking_title"),
      text: t("automated_tracking_text"),
    },
    {
      title: t("tax_loss_harvesting_title"),
      text: t("tax_loss_harvesting_text"),
    },
    {
      title: t("compliance_guidance_title"),
      text: t("compliance_guidance_text"),
    },
    {
      title: t("real_time_alerts_title"),
      text: t("real_time_alerts_text"),
    },
  ];
  return (
    <main className="bg-black">
      <Navbar />
      <SecondaryHero
        text={t("aiTaxToolHeroText")}
        btnText={t("aiTaxToolBtnText")}
        heading={t("aiTaxToolHeading")}
      />
      <Articles
        articles={TaxArticles}
        heading={t("aiTaxToolArticlesHeading")}
      />
      <FAQSection />
      <FutureOfAi />
      <Footer />
    </main>
  );
}
