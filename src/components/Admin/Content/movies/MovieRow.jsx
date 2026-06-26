import React from "react";

const MovieRow = ({ movie, onDelete }) => {
  return (
    <tr className="border-b border-white/10">
      <td className="px-4 py-4">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-16 w-12 rounded object-cover"
        />
      </td>

      <td className="px-4 py-4">{movie.title}</td>

      <td className="px-4 py-4 capitalize">{movie.status}</td>

      <td className="px-4 py-4">{movie.primaryLanguage}</td>

      <td className="px-4 py-4">
        {new Date(movie.releaseDate).toLocaleDateString()}
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(movie._id)}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MovieRow;
