import React, { useState } from "react";
import MovieFormInput from "./MovieFormInput.jsx";
import movieInitialState from "../../data/movieInitialState.js";
import CastInput from "./CastInput.jsx";

const AddMovieForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(movieInitialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  

  const stringToArray = (value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      genres: stringToArray(formData.genres),
      keywords: stringToArray(formData.keywords),
      screenshots: stringToArray(formData.screenshots),
      availableLanguages: stringToArray(formData.availableLanguages),
    };

    onSubmit(payload);

    // setFormData(movieInitialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 lg:grid-cols-2"
    >
      <MovieFormInput
        label="Movie Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Tagline"
        name="tagline"
        value={formData.tagline}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Poster URL"
        name="poster"
        value={formData.poster}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Banner URL"
        name="banner"
        value={formData.banner}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Trailer URL"
        name="trailerUrl"
        value={formData.trailerUrl}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Release Date"
        type="date"
        name="releaseDate"
        value={formData.releaseDate}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Duration (Minutes)"
        type="number"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Primary Language"
        name="primaryLanguage"
        value={formData.primaryLanguage}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none"
        >
          <option value="released">Released</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">Age Rating</label>
        <select
          name="ageRating"
          value={formData.ageRating}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none"
        >
          <option value="U">U</option>
          <option value="U/A 7+">U/A 7+</option>
          <option value="U/A 13+">U/A 13+</option>
          <option value="U/A 16+">U/A 16+</option>
          <option value="A">A</option>
        </select>
      </div>

      <MovieFormInput
        label="Genres (comma separated)"
        name="genres"
        value={formData.genres}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Keywords (comma separated)"
        name="keywords"
        value={formData.keywords}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Screenshots (comma separated URLs)"
        name="screenshots"
        value={formData.screenshots}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Available Languages (comma separated)"
        name="availableLanguages"
        value={formData.availableLanguages}
        onChange={handleChange}
      />

      <MovieFormInput
        label="Latest Update"
        name="latestUpdate"
        value={formData.latestUpdate}
        onChange={handleChange}
      />

      <MovieFormInput
        label="What's New"
        name="whatsNew"
        value={formData.whatsNew}
        onChange={handleChange}
      />

      <div className="lg:col-span-2 flex flex-col gap-2">
        <label className="text-sm text-gray-300">Description</label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none"
        />
      </div>

      <CastInput cast={formData.cast} setFormData={setFormData} />

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="isTrending"
          checked={formData.isTrending}
          onChange={handleChange}
        />
        <span>Trending</span>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
        />
        <span>Featured</span>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="isPremium"
          checked={formData.isPremium}
          onChange={handleChange}
        />
        <span>Premium</span>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
        />
        <span>Published</span>
      </div>

      <button
        type="submit"
        className="lg:col-span-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold hover:bg-violet-700 transition"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
