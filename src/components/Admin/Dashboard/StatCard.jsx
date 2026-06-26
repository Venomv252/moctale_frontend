import React from "react";

const StatCard = ({ icon, label, value, color = "violet" }) => {
  const colorClasses = {
    violet: "bg-violet-600/20 text-violet-400",
    blue: "bg-blue-600/20 text-blue-400",
    green: "bg-green-600/20 text-green-400",
    pink: "bg-pink-600/20 text-pink-400",
    yellow: "bg-yellow-600/20 text-yellow-400",
    red: "bg-red-600/20 text-red-400",
    cyan: "bg-cyan-600/20 text-cyan-400",
    orange: "bg-orange-600/20 text-orange-400",
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-6 transition hover:border-white/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm text-gray-400">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        {icon && (
          <div
            className={`rounded-xl p-3 text-2xl ${
              colorClasses[color] || colorClasses.violet
            }`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
