import React, { useEffect, useState } from "react";
import ContentTable from "./ContentTable.jsx";
import Loader from "../../Shared/Loader";
import EmptyState from "../../Shared/EmptyState";
import { getContents, deleteContent } from "../../../services/content.service";

const ContentCollection = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getContents();
      setContents(data.contents || data || []);
    } catch (err) {
      console.error("Failed to fetch contents:", err);
      setError(err.message || "Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this content?")) {
      return;
    }

    try {
      await deleteContent(id);
      setContents((prev) => prev.filter((content) => content._id !== id));
    } catch (err) {
      console.error("Failed to delete content:", err);
      alert("Failed to delete content. Please try again.");
    }
  };

  if (loading) {
    return <Loader text="Loading content..." />;
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-600/20 bg-red-600/10 p-6 text-center">
        <p className="text-red-400">Error: {error}</p>
        <button
          onClick={fetchContents}
          className="mt-4 rounded-lg bg-violet-600 px-6 py-2 transition hover:bg-violet-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!contents || contents.length === 0) {
    return (
      <EmptyState
        icon="🎬"
        title="No Content Found"
        message="You haven't added any content yet. Start by adding movies, series, or anime."
        actionLabel="Add Content"
        onAction={() => window.location.hash = "#add"}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Content Collection</h2>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-violet-600 px-4 py-2 text-sm">
            Total: {contents.length}
          </div>
          <button
            onClick={fetchContents}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm transition hover:bg-zinc-700"
          >
            Refresh
          </button>
        </div>
      </div>

      <ContentTable contents={contents} onDelete={handleDelete} />
    </div>
  );
};

export default ContentCollection;