// PrivacyPolicy.tsx
import React from "react";
import Navbar from "../../../components/shared/navbar";
import Footer from "../../../components/shared/footer";
import { useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const t = useTranslations("privacy");

  const privacySections = [
    { id: 1, title: t("children_title"), content: t("children_content") },
    {
      id: 2,
      title: t("personal_info_title"),
      content: t("personal_info_content"),
    },
    { id: 3, title: t("usage_info_title"), content: t("usage_info_content") },
    { id: 4, title: t("rights_title"), content: t("rights_content") },
    { id: 5, title: t("security_title"), content: t("security_content") },
    { id: 6, title: t("contact_title"), content: t("contact_content") },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {t("privacy_policy_title")}
            </h1>
            <p className="text-gray-400">{t("privacy_policy_description")}</p>
          </div>
          <div className="space-y-12">
            {privacySections.map((section) => (
              <div
                key={section.id}
                className="border-[1px] border-white/30 rounded-lg p-6"
                style={{
                  background: "radial-gradient(circle at -20%, #271141, #000 )",
                }}
              >
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <div className="space-y-4">
                    {section.content.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-[#fff] flex-shrink-0 w-1 h-auto rounded-full" />
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <div className="bg-[#fff] flex-shrink-0 w-1 h-auto rounded-full" />
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>{t("changes_note")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
