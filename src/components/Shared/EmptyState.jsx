import React from "react";

const EmptyState = ({ 
  icon = "📭", 
  title = "No data found", 
  message = "There are no items to display at the moment.",
  actionLabel,
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <div className="text-6xl opacity-50">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
      <p className="text-center text-gray-500 max-w-md">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-4 rounded-lg bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
