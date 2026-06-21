import React from "react";

const ContentRow = ({ content, onDelete }) => {
  return (
    <tr className="border-b border-white/10">
      <td className="px-4 py-4">
        <img
          src={content.poster}
          alt={content.title}
          className="h-16 w-12 rounded object-cover"
        />
      </td>

      <td className="px-4 py-4 font-medium">
        {content.title}
      </td>

      <td className="px-4 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium
          ${
            content.type === "movie"
              ? "bg-blue-600/20 text-blue-400"
              : content.type === "series"
              ? "bg-green-600/20 text-green-400"
              : "bg-pink-600/20 text-pink-400"
          }`}
        >
          {content.type}
        </span>
      </td>

      <td className="px-4 py-4 capitalize">
        {content.status}
      </td>

      <td className="px-4 py-4">
        {content.primaryLanguage}
      </td>

      <td className="px-4 py-4">
        {new Date(
          content.releaseDate
        ).toLocaleDateString()}
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm transition hover:bg-blue-700"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(content._id)}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ContentRow;