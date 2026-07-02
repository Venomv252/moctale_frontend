import React from "react";

const VerifiedBadge = ({ isVerified }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
        isVerified
          ? "bg-green-500/10 text-green-400 border border-green-500/20"
          : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
      }`}
    >
      <span className="text-sm">
        {isVerified ? "✓" : "⚠"}
      </span>
      {isVerified ? "Verified" : "Unverified"}
    </span>
  );
};

export default VerifiedBadge;
