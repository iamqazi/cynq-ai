import React from "react";
import { ScrollText, Shield, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/shared/navbar";
import Footer from "../../../components/shared/footer";
import { useTranslations } from "next-intl";

const TermsAndConditions = () => {
  const t = useTranslations("");
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-gray-300 p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <ScrollText size={48} className="text-purple-500" />
            </div>
            <h1 className="text-4xl md:text-[56px] font-[500] text-white mb-4">
              {t("title")}
            </h1>
          </div>

          {/* Introduction Card */}
          <div
            style={{
              background: " radial-gradient(circle at -20%, #271141, #000 )",
            }}
            className=" rounded-lg p-6 mb-8 border border-white/30 "
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              {t("introduction_title")}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t("introduction_text")}
            </p>
          </div>

          {/* Security Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              style={{
                background: " radial-gradient(circle at -20%, #271141, #000 )",
              }}
              className="rounded-lg p-6 border border-white/30 "
            >
              <div className="flex items-center mb-4">
                <Shield className="text-purple-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold text-white">
                  {t("security_title")}
                </h2>
              </div>
              <p className="text-gray-300">{t("security_text")}</p>
            </div>

            <div
              style={{
                background: " radial-gradient(circle at -20%, #271141, #000 )",
              }}
              className=" rounded-lg p-6 border border-white/30 "
            >
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-yellow-500 mr-3" size={24} />
                <h2 className="text-xl font-semibold text-white">
                  {t("rules_title")}
                </h2>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>{t("rule_1")}</li>
                <li>{t("rule_2")}</li>
                <li>{t("rule_3")}</li>
                <li>{t("rule_4")}</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Service Interruption */}
            <section
              style={{
                background: " radial-gradient(circle at -20%, #271141, #000 )",
              }}
              className=" rounded-lg p-6 border border-white/30 "
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t("service_interruption_title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("service_interruption_text")}
              </p>
            </section>

            {/* Children Section */}
            <section
              style={{
                background: " radial-gradient(circle at -20%, #271141, #000 )",
              }}
              className=" rounded-lg p-6 border border-white/30 "
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t("age_restrictions_title")}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t("age_restrictions_text")}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
