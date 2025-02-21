import React from "react";
import Navbar from "../../../components/shared/navbar";
import Footer from "../../../components/shared/footer";

const PrivacyPolicy = () => {
  return (
    <>
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
            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">Children</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not available for use by children and are
                intended for persons over the age of 18 years old, and 21 years
                old in some jurisdictions. Please refer to your country laws for
                age-appropriate guidance. To comply with the current 'UK Data
                Protection Act' for Children, specifically the Age Appropriate
                Design Code (also known as the Children's Act), risks have been
                assessed. More information can be found at ICO Children's Code
                Hub.
              </p>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Personal Information We Collect
              </h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>
                  Information you provide to us, such as your name, mailing
                  address, phone number, email address, and payment information.
                </li>
                <li>
                  Information you provide via customer support channels, such as
                  when contacting us via email.
                </li>
                <li>
                  Information collected when you use our app or website,
                  including cookies and location-based data.
                </li>
                <li>
                  Information from third parties, including social media and
                  analytics services like Google Analytics.
                </li>
              </ul>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Personal Information
              </h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>
                  To provide you with our service, including access to our app
                  via a virtual wallet.
                </li>
                <li>To improve and monitor the use of our services.</li>
                <li>
                  To provide customer support and respond to your queries or
                  complaints.
                </li>
                <li>
                  To prevent fraud, defend legal claims, and comply with legal
                  obligations.
                </li>
                <li>
                  To conduct analytics and provide targeted advertising (with
                  your consent).
                </li>
              </ul>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc pl-6">
                <li>The right to request access to your personal data.</li>
                <li>The right to request correction of your personal data.</li>
                <li>The right to request erasure of your personal data.</li>
                <li>
                  The right to object to processing of your personal data.
                </li>
                <li>
                  The right to request restriction of processing of your
                  personal data.
                </li>
                <li>The right to request transfer of your personal data.</li>
                <li>The right to withdraw consent at any time.</li>
              </ul>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We have security measures in place to protect your information,
                but transmission over the internet is not completely secure. We
                recommend using appropriate security measures when using our
                services.
              </p>
            </div>

            <div
              className="border-[1px] border-white/30 rounded-lg p-6"
              style={{
                background: "radial-gradient(circle at -20%, #271141, #000 )",
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Contact & Complaints
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions or complaints regarding this policy,
                please contact us at admin@cynq.ai. If you wish to make a
                complaint about how we process your information, we will aim to
                respond within 30 days.
              </p>
            </div>
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
