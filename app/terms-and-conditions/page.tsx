import React from "react";
import { ScrollText, Shield, AlertTriangle } from "lucide-react";
import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

const TermsAndConditions = () => {
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
              Terms and Conditions
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
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You should read these Terms because they contain our legal
              commitments to you and a number of DOs and DON&apos;Ts which you
              need to be aware of when you use our Services. By using our
              Services, you are automatically deemed to agree to accept and be
              legally bound by these Terms.
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
                <h2 className="text-xl font-semibold text-white">Security</h2>
              </div>
              <p className="text-gray-300">
                Security is important to CYNQ Ai. You agree not to share your
                wallet access with any other user or third party. We reserve the
                right to suspend or terminate accounts used inappropriately.
              </p>
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
                  Rules of Use
                </h2>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Do not engage in personal attacks</li>
                <li>• Do not harass or bully others</li>
                <li>• Do not post inappropriate content</li>
                <li>• Do not violate intellectual property rights</li>
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
                Service Interruption
              </h2>
              <p className="text-gray-300 leading-relaxed">
                CYNQ Ai does not guarantee that the Services will always be
                available, uninterrupted, timely, secure, or free from bugs or
                viruses. We may change, suspend, or discontinue certain Services
                without notice.
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
                Age Restrictions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not available for use by children under the age
                of 18 years old or 21 years old in some jurisdictions. Please
                refer to your country&apos;s laws for age-related guidance.
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
