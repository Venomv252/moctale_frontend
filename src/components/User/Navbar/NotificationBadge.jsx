import React from "react";

const NotificationBadge = ({ count, children }) => {
  return (
    <div className="relative">
      {children}
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </div>
  );
};

export default NotificationBadge;
