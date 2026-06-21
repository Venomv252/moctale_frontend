import React, { useState } from "react";

import ContentFormInput from "./ContentFormInput.jsx";
import CastInput from "./CastInput.jsx";

import contentInitialState from "../../data/contentInitialState.js";

const AddContentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(contentInitialState);

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

  const addSeason = () => {
    setFormData((prev) => ({
      ...prev,
      seasons: [
        ...prev.seasons,
        {
          seasonNumber: prev.seasons.length + 1,
          episodeCount: 0,
        },
      ],
    }));
  };

  const removeSeason = (index) => {
    setFormData((prev) => ({
      ...prev,
      seasons: prev.seasons.filter((_, i) => i !== index),
    }));
  };

  const updateSeason = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      seasons: prev.seasons.map((season, i) =>
        i === index
          ? {
              ...season,
              [field]: Number(value),
            }
          : season
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,

      genres: stringToArray(formData.genres),

      keywords: stringToArray(formData.keywords),

      screenshots: stringToArray(formData.screenshots),

      availableLanguages: stringToArray(
        formData.availableLanguages
      ),
    };

    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 lg:grid-cols-2"
    >
      {/* TYPE */}

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">
          Content Type
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none"
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="anime">Anime</option>
        </select>
      </div>

      <ContentFormInput
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Tagline"
        name="tagline"
        value={formData.tagline}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Poster URL"
        name="poster"
        value={formData.poster}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Banner URL"
        name="banner"
        value={formData.banner}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Trailer URL"
        name="trailerUrl"
        value={formData.trailerUrl}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Release Date"
        type="date"
        name="releaseDate"
        value={formData.releaseDate}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Duration (Minutes)"
        type="number"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Primary Language"
        name="primaryLanguage"
        value={formData.primaryLanguage}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />

      {/* STATUS */}

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none"
        >
          <option value="released">Released</option>
          <option value="upcoming">Upcoming</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* AGE RATING */}

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-300">
          Age Rating
        </label>

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

      <ContentFormInput
        label="Genres (comma separated)"
        name="genres"
        value={formData.genres}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Keywords (comma separated)"
        name="keywords"
        value={formData.keywords}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Screenshots (comma separated URLs)"
        name="screenshots"
        value={formData.screenshots}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Available Languages"
        name="availableLanguages"
        value={formData.availableLanguages}
        onChange={handleChange}
      />

      <ContentFormInput
        label="Latest Update"
        name="latestUpdate"
        value={formData.latestUpdate}
        onChange={handleChange}
      />

      <ContentFormInput
        label="What's New"
        name="whatsNew"
        value={formData.whatsNew}
        onChange={handleChange}
      />

      <div className="lg:col-span-2 flex flex-col gap-2">
        <label className="text-sm text-gray-300">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none"
        />
      </div>

      <CastInput
        cast={formData.cast}
        setFormData={setFormData}
      />

      {/* SEASONS */}

      {formData.type !== "movie" && (
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Seasons
            </h3>

            <button
              type="button"
              onClick={addSeason}
              className="rounded-lg bg-violet-600 px-4 py-2"
            >
              Add Season
            </button>
          </div>

          <div className="space-y-4">
            {formData.seasons.map((season, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 rounded-xl border border-white/10 p-4"
              >
                <input
                  type="number"
                  placeholder="Season Number"
                  value={season.seasonNumber}
                  onChange={(e) =>
                    updateSeason(
                      index,
                      "seasonNumber",
                      e.target.value
                    )
                  }
                  className="rounded-lg bg-[#111] p-3"
                />

                <input
                  type="number"
                  placeholder="Episode Count"
                  value={season.episodeCount}
                  onChange={(e) =>
                    updateSeason(
                      index,
                      "episodeCount",
                      e.target.value
                    )
                  }
                  className="rounded-lg bg-[#111] p-3"
                />

                <button
                  type="button"
                  onClick={() => removeSeason(index)}
                  className="rounded-lg bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FLAGS */}

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
        className="lg:col-span-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold transition hover:bg-violet-700"
      >
        Add Content
      </button>
    </form>
  );
};
export default AddContentForm;