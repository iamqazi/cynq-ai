import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const ReferralModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [referralLink] = useState("https://yoursite.com/ref/123xyz");
  const [referralStats] = useState({
    referrals: 0,
    bonus: "$0.00",
  });

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="fixed inset-0 z-90 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-[600px] rounded-[30px] overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{
          background: "linear-gradient(to bottom, #0a0b45, #000014)",
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      >
        <div
          style={{
            background: " radial-gradient(circle at 0%, #4c247d, #000 )",
          }}
          className="relative  p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/50 hover:text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            <h2 className="text-[32px] font-bold text-[#A983E6] mb-8">
              Refer More to Earn More
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-left">
                <p className="text-white/70 text-lg">My Referrals:</p>
                <p className="text-white text-2xl font-semibold">
                  {referralStats.referrals}
                </p>
              </div>
              <div className="text-left">
                <p className="text-white/70 text-lg">My Referral Bonus:</p>
                <p className="text-white text-2xl font-semibold">
                  {referralStats.bonus}
                </p>
              </div>
            </div>

            {/* How to Earn Section */}
            <div className="text-left space-y-4 mb-8">
              <h3 className="text-[#A983E6] text-2xl font-bold">
                How to Earn?
              </h3>
              <p className="text-white/90 leading-relaxed">
                Every time someone uses your referral link to buy $CYNQ tokens.
                You will instantly receive a generous{" "}
                <span className="text-[#A983E6]">10%</span> commission of all
                transactions, which is{" "}
                <span className="text-[#A983E6]">automatically</span> sent to
                your wallet.
              </p>
              <p className="text-white/90">
                The <span className="text-[#A983E6]">referral link</span> is
                automatically activated when you purchase $CYNQ for a minimum
                amount of <span className="text-[#A983E6]">$30 or more</span>.
              </p>
            </div>

            {/* Referral Link Section */}
            <div className="text-left space-y-4">
              <h3 className="text-[#A983E6] text-2xl font-bold">
                Your Referral Link
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                />
                <Button
                  onClick={copyToClipboard}
                  className="bg-[#7B15F8] text-white rounded-lg px-6 hover:bg-[#6810d3]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
