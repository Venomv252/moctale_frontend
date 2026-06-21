import React, { useEffect, useState } from "react";

import ContentCollection from "../components/content/ContentCollection.jsx";
import AddContentForm from "../components/content/AddContentForm.jsx";

import {
  getContents,
  addContent,
  deleteContent,
} from "../services/content.service.js";

const AdminContent = () => {
  const [activeTab, setActiveTab] = useState("collection");

  const [contents, setContents] = useState([]);

  const fetchContents = async () => {
    try {
      const data = await getContents();

      setContents(data.contents || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const handleAddContent = async (contentData) => {
    try {
      console.log(contentData);
      console.log(typeof contentData.duration);

      await addContent(contentData);

      fetchContents();

      setActiveTab("collection");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContent = async (id) => {
    try {
      await deleteContent(id);

      setContents((prev) =>
        prev.filter((content) => content._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] p-6 pt-[100px] text-white">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Content</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab("collection")}
            className={`rounded-xl px-5 py-3 font-medium transition-all
            ${
              activeTab === "collection"
                ? "bg-violet-600"
                : "bg-white/10"
            }`}
          >
            Collection
          </button>

          <button
            onClick={() => setActiveTab("add")}
            className={`rounded-xl px-5 py-3 font-medium transition-all
            ${
              activeTab === "add"
                ? "bg-violet-600"
                : "bg-white/10"
            }`}
          >
            Add Content
          </button>
        </div>
      </div>

      {activeTab === "collection" && (
        <ContentCollection
          contents={contents.slice(0, 10)}
          onDelete={handleDeleteContent}
        />
      )}

      {activeTab === "add" && (
        <AddContentForm onSubmit={handleAddContent} />
      )}
    </div>
  );
};

export default AdminContent;