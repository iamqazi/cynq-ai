import React from "react";
import Navbar from "../../../components/shared/navbar";
import Footer from "../../../components/shared/footer";

interface Section {
  id: number;
  title: string;
  content: string | string[];
}

const privacySections: Section[] = [
  {
    id: 1,
    title: "Children",
    content:
      "Our services are not available for use by children and are intended for persons over the age of 18 years old, and 21 years old in some jurisdictions. Please refer to your country laws for age-appropriate guidance. To comply with the current 'UK Data Protection Act' for Children, specifically the Age Appropriate Design Code (also known as the Children's Act), risks have been assessed. More information can be found at ICO Children's Code Hub.",
  },
  {
    id: 2,
    title: "Personal Information We Collect",
    content: [
      "Information you provide to us, such as your name, mailing address, phone number, email address, and payment information.",
      "Information you provide via customer support channels, such as when contacting us via email.",
      "Information collected when you use our app or website, including cookies and location-based data.",
      "Information from third parties, including social media and analytics services like Google Analytics.",
    ],
  },
  {
    id: 3,
    title: "How We Use Your Personal Information",
    content: [
      "To provide you with our service, including access to our app via a virtual wallet.",
      "To improve and monitor the use of our services.",
      "To provide customer support and respond to your queries or complaints.",
      "To prevent fraud, defend legal claims, and comply with legal obligations.",
      "To conduct analytics and provide targeted advertising (with your consent).",
    ],
  },
  {
    id: 4,
    title: "Your Rights",
    content: [
      "The right to request access to your personal data.",
      "The right to request correction of your personal data.",
      "The right to request erasure of your personal data.",
      "The right to object to processing of your personal data.",
      "The right to request restriction of processing of your personal data.",
      "The right to request transfer of your personal data.",
      "The right to withdraw consent at any time.",
    ],
  },
  {
    id: 5,
    title: "Security",
    content:
      "We have security measures in place to protect your information, but transmission over the internet is not completely secure. We recommend using appropriate security measures when using our services.",
  },
  {
    id: 6,
    title: "Contact & Complaints",
    content:
      "If you have any questions or complaints regarding this policy, please contact us at admin@cynq.ai. If you wish to make a complaint about how we process your information, we will aim to respond within 30 days.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">
              This privacy policy informs you of your choices and our practices
              in relation to your Information. For the purposes of this Policy,
              &quot;we&quot;, &quot;us&quot;, and &quot;our&quot; refer to
              &quot;CYNQ Ai&quot;
            </p>
          </div>

          <div className="space-y-12">
            {privacySections.map((section) => (
              <div
                key={section.id}
                className="border-[1px] border-white/30 rounded-lg p-6"
                style={{
                  background:
                    " radial-gradient(circle at -20%, #271141, #000 )",
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
            <p>
              Changes to this Policy: Any updates or changes to this policy will
              be published here.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
