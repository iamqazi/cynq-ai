import React from "react";
import Navbar from "../../../components/shared/navbar";
import Footer from "../../../components/shared/footer";
import { useTranslations } from "next-intl"; // Assuming you're using `next-intl` for translations

const PrivacyPolicy = () => {
  const t = useTranslations(); // Get translations for the current language

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {t("privacyPolicy.title")}
            </h1>
            <p className="text-gray-400">{t("privacyPolicy.intro")}</p>
          </div>

          <div className="space-y-12">
            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("privacyPolicy.children.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("privacyPolicy.children.text")}
              </p>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("privacyPolicy.personalInfo.title")}
              </h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>{t("privacyPolicy.personalInfo.item1")}</li>
                <li>{t("privacyPolicy.personalInfo.item2")}</li>
                <li>{t("privacyPolicy.personalInfo.item3")}</li>
                <li>{t("privacyPolicy.personalInfo.item4")}</li>
              </ul>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("privacyPolicy.usage.title")}
              </h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>{t("privacyPolicy.usage.item1")}</li>
                <li>{t("privacyPolicy.usage.item2")}</li>
                <li>{t("privacyPolicy.usage.item3")}</li>
                <li>{t("privacyPolicy.usage.item4")}</li>
                <li>{t("privacyPolicy.usage.item5")}</li>
              </ul>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("privacyPolicy.rights.title")}
              </h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>{t("privacyPolicy.rights.item1")}</li>
                <li>{t("privacyPolicy.rights.item2")}</li>
                <li>{t("privacyPolicy.rights.item3")}</li>
                <li>{t("privacyPolicy.rights.item4")}</li>
                <li>{t("privacyPolicy.rights.item5")}</li>
                <li>{t("privacyPolicy.rights.item6")}</li>
                <li>{t("privacyPolicy.rights.item7")}</li>
              </ul>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("privacyPolicy.security.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("privacyPolicy.security.text")}
              </p>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t("privacyPolicy.contact.title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("privacyPolicy.contact.text")}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p>{t("privacyPolicy.changes")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
