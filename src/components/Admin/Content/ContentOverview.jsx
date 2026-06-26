import React, { useEffect, useState } from "react";
import StatCard from "../Dashboard/StatCard";
import Loader from "../../Shared/Loader";
import { getContentOverview } from "../../../services/content.service";

const ContentOverview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOverview();
  }, []);

  const fetchOverview = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getContentOverview();
      setStats(data);
    } catch (err) {
      console.error("Failed to fetch content overview:", err);
      setError(err.message || "Failed to load overview data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader text="Loading content overview..." />;
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-600/20 bg-red-600/10 p-6 text-center">
        <p className="text-red-400">Error: {error}</p>
        <button
          onClick={fetchOverview}
          className="mt-4 rounded-lg bg-violet-600 px-6 py-2 transition hover:bg-violet-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-6 text-center text-gray-400">
        No overview data available
      </div>
    );
  }

  const statsConfig = [
    {
      label: "Total Content",
      value: stats.totalContent || 0,
      icon: "🎬",
      color: "violet",
    },
    {
      label: "Movies",
      value: stats.movies || 0,
      icon: "🎥",
      color: "blue",
    },
    {
      label: "Series",
      value: stats.series || 0,
      icon: "📺",
      color: "green",
    },
    {
      label: "Anime",
      value: stats.anime || 0,
      icon: "🎴",
      color: "pink",
    },
    {
      label: "Released",
      value: stats.released || 0,
      icon: "✅",
      color: "green",
    },
    {
      label: "Upcoming",
      value: stats.upcoming || 0,
      icon: "⏳",
      color: "yellow",
    },
    {
      label: "Trending",
      value: stats.trending || 0,
      icon: "🔥",
      color: "orange",
    },
    {
      label: "Featured",
      value: stats.featured || 0,
      icon: "⭐",
      color: "cyan",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Content Overview</h2>
        <button
          onClick={fetchOverview}
          className="rounded-lg bg-zinc-800 px-4 py-2 text-sm transition hover:bg-zinc-700"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsConfig.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentOverview;
