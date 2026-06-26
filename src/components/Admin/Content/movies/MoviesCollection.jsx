import React from "react";
import MovieTable from "./MovieTable.jsx";

const MoviesCollection = ({ movies, onDelete }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Movie Collection</h2>

        <div className="rounded-xl bg-violet-600 px-4 py-2 text-sm">
          Total: {movies.length}
        </div>
      </div>

      <MovieTable movies={movies} onDelete={onDelete} />
    </div>
  );
};

export default MoviesCollection;
