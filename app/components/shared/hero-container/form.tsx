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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
  });

  // Sample referral data
  const referralData = [
    {
      id: 1,
      name: "John Doe",
      date: "2024-02-19",
      amount: "$250",
      status: "Completed",
    },
    {
      id: 2,
      name: "Alice Smith",
      date: "2024-02-18",
      amount: "$500",
      status: "Pending",
    },
  ];

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-90 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-[600px] rounded-[30px] overflow-hidden max-h-[70vh] overflow-y-auto"
        style={{
          background: "radial-gradient(circle at 0%, #4c247d, #000)",
        }}
      >
        <div className="relative p-6">
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
          <div className="text-center">
            <h2 className="text-[28px] font-[600] text-white mb-4">
              Referrals
            </h2>

            {/* Referral Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Friend's Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/15 rounded-full px-4 py-2 text-white placeholder-white/50"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Friend's Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/15 rounded-full px-4 py-2 text-white placeholder-white/50"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  name="walletAddress"
                  placeholder="Friend's Wallet Address"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/15 rounded-full px-4 py-2 text-white placeholder-white/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#7B15F8] text-white rounded-full py-3 hover:bg-[#6810d3] transition-colors"
              >
                Send Invitation
              </Button>
            </form>

            {/* Referral Link */}
            <div className="mb-6">
              <h3 className="text-[#FFD700] text-xl mb-4">
                Your Referral Link
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-white"
                />
                <Button
                  onClick={copyToClipboard}
                  className="bg-[#7B15F8] text-white rounded-full px-6"
                >
                  Copy
                </Button>
              </div>
            </div>

            {/* Referrals Table */}
            <div className="overflow-x-auto">
              <h3 className="text-[#FFD700] text-xl mb-4 text-left">
                Recent Referrals
              </h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-3 text-white/70">Name</th>
                    <th className="p-3 text-white/70">Date</th>
                    <th className="p-3 text-white/70">Amount</th>
                    <th className="p-3 text-white/70">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {referralData.map((referral) => (
                    <tr key={referral.id} className="border-b border-white/10">
                      <td className="p-3 text-white">{referral.name}</td>
                      <td className="p-3 text-white">{referral.date}</td>
                      <td className="p-3 text-[#A983E6]">{referral.amount}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            referral.status === "Completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {referral.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
