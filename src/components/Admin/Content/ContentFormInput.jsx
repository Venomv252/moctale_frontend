import React from "react";

const ContentFormInput  = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-300">{label}</label>

      <input
        {...props}
        className="rounded-xl border border-white/10 bg-[#111]
        px-4 py-3 text-white outline-none focus:border-violet-500"
      />
    </div>
  );
};

export default ContentFormInput;
