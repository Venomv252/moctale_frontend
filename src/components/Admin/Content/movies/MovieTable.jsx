import React from "react";
import MovieRow from "./MovieRow.jsx";

const MovieTable = ({ movies, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[900px] border-collapse">
        <thead className="bg-[#111]">
          <tr>
            <th className="px-4 py-4 text-left">Poster</th>
            <th className="px-4 py-4 text-left">Title</th>
            <th className="px-4 py-4 text-left">Status</th>
            <th className="px-4 py-4 text-left">Language</th>
            <th className="px-4 py-4 text-left">Release</th>
            <th className="px-4 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <MovieRow
              key={movie._id}
              movie={movie}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
